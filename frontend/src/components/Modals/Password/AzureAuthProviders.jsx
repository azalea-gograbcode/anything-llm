import { useEffect } from 'react';
import { useMsal } from '@azure/msal-react';
import System from "@/models/system";
import logo from "@/media/logo/microsoft-login.png";

export default function AzureAuthProviders({
  setUser,
  setToken,
}) {
  const { instance, accounts } = useMsal();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (accounts.length > 0) {
          const account = accounts[0];
  
          const response = await instance.acquireTokenSilent({
            scopes: ["user.read"],
            account: account
          });
  
          const accessToken = response.accessToken;
          const { valid, user, token } = await System.azureAuth({'accessToken': accessToken});
          
          if (valid && token && user) {
            setUser(user);
            setToken(token);
  
            window.localStorage.setItem(AUTH_USER, JSON.stringify(user));
            window.localStorage.setItem(AUTH_TOKEN, token);
            window.location = paths.home();
          }
        }
      } catch (error) {
        console.error('Error fetching data or acquiring token:', error);
      }
    };
  
    fetchData();
  }, [accounts, instance]);

  const handleLogin = async () => {
    instance.loginRedirect({
      scopes: ["user.read"],
    });
  };

  return (
    <>
      <div>
        <button type="button" onClick={handleLogin}><img src={logo} alt="Sign in with microsoft" width="300px" /></button>
      </div>
      <p className="text-sm text-white/90 text-center my-2">or</p>
    </>
  );
}