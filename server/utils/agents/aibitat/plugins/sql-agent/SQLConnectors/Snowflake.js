const snowflake = require("snowflake-sdk");
const url = require("url");

class SnowflakeConnector {
  #connected = false;
  constructor(
    config = {
      connectionString: null,
    }
  ) {
    this.connectionString = config.connectionString;
    this._client = null;
    const parsedUrl = new url.URL(config.connectionString);
    this.connectionConfig = {
      account: parsedUrl.hostname,
      username: parsedUrl.username,
      password: parsedUrl.password,
      warehouse: parsedUrl.pathname.replace('/', ''),
      database: parsedUrl.searchParams.get('database'),
    };
  }

  async connect() {
    return new Promise((resolve, reject) => {
      const connection = snowflake.createConnection(this.connectionConfig);
      connection.connect((err, conn) => {
        if (err) {
          reject(err);
        } else {
          this._client = conn;
          this.#connected = true;
          resolve(conn);
        }
      });
    });
  }

  /**
   * @param {string} queryString the SQL query to be run
   * @returns {import(".").QueryResult}
   */
  async runQuery(queryString = "") {
    const result = { rows: [], count: 0, error: null };
    try {
      if (!this.#connected) await this.connect();
      const queryResult = await new Promise((resolve, reject) => {
        this._client.execute({
          sqlText: queryString,
          complete: (err, stmt, rows) => {
            if (err) {
              reject(err);
            } else {
              resolve({ rows, rowCount: rows.length });
            }
          },
        });
      });

      result.rows = queryResult.rows;
      result.count = queryResult.rowCount;
    } catch (err) {
      console.error(this.constructor.name, err);
      result.error = err.message;
    } finally {
      this._client.destroy((err) => {
        if (err) {
          console.error('Failed to close connection:', err);
        }
        this.#connected = false;
      });
    }
    return result;
  }

  getTablesSql() {
    return `SHOW TABLES`;
  }

  getTableSchemaSql(tableName) {
    return `DESCRIBE TABLE ${tableName}`;
  }
}

module.exports.SnowflakeConnector = SnowflakeConnector;
