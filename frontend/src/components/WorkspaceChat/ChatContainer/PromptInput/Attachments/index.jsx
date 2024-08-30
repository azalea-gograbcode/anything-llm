import {
  CircleNotch,
  FileCode,
  FileCsv,
  FileDoc,
  FileHtml,
  FileText,
  FileImage,
  FilePdf,
  WarningOctagon,
  X,
} from "@phosphor-icons/react";
import { humanFileSize } from "@/utils/numbers";
import { REMOVE_ATTACHMENT_EVENT } from "../../DnDWrapper";
import { Tooltip } from "react-tooltip";

/**
 * @param {{attachments: import("../../DnDWrapper").Attachment[]}}
 * @returns
 */
export default function AttachmentManager({ attachments }) {
  if (attachments.length === 0) return null;
  return (
<<<<<<< HEAD
    <div className="flex flex-wrap mt-4 mb-2 gap-y-2 gap-x-[0.5px]">
=======
    <div className="flex flex-wrap mt-4 mb-2">
>>>>>>> 48ef74aa (sync-fork-2)
      {attachments.map((attachment) => (
        <AttachmentItem key={attachment.uid} attachment={attachment} />
      ))}
    </div>
  );
}

/**
 * @param {{attachment: import("../../DnDWrapper").Attachment}}
 */
function AttachmentItem({ attachment }) {
<<<<<<< HEAD
  const { uid, file, status, error, document, type, contentString } =
    attachment;
=======
  const { uid, file, status, error, document, type } = attachment;
>>>>>>> 48ef74aa (sync-fork-2)
  const { iconBgColor, Icon } = displayFromFile(file);

  function removeFileFromQueue() {
    window.dispatchEvent(
      new CustomEvent(REMOVE_ATTACHMENT_EVENT, { detail: { uid, document } })
    );
  }

  if (status === "in_progress") {
    return (
      <div
<<<<<<< HEAD
        className={`h-14 px-2 py-2 flex items-center gap-x-4 rounded-lg bg-zinc-800 light:bg-theme-bg-sidebar border border-white/20 w-[200px]`}
=======
        className={`h-14 px-2 py-2 flex items-center gap-x-4 rounded-lg bg-zinc-800 border border-white/20 w-[200px]`}
>>>>>>> 48ef74aa (sync-fork-2)
      >
        <div
          className={`${iconBgColor} rounded-lg flex items-center justify-center flex-shrink-0 p-1`}
        >
<<<<<<< HEAD
          <CircleNotch
            size={30}
            className="text-white light:text-white animate-spin"
          />
=======
          <CircleNotch size={30} className="text-white animate-spin" />
>>>>>>> 48ef74aa (sync-fork-2)
        </div>
        <div className="flex flex-col w-[130px]">
          <p className="text-white text-xs font-medium truncate">{file.name}</p>
          <p className="text-white/60 text-xs font-medium">
            {humanFileSize(file.size)}
          </p>
        </div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <>
        <div
          data-tooltip-id={`attachment-uid-${uid}-error`}
          data-tooltip-content={error}
<<<<<<< HEAD
          className={`relative h-14 px-2 py-2 flex items-center gap-x-4 rounded-lg bg-error/40 light:bg-error/30 border border-transparent w-[200px] group`}
=======
          className={`relative h-14 px-2 py-2 flex items-center gap-x-4 rounded-lg bg-[#4E140B] border border-transparent w-[200px] group`}
>>>>>>> 48ef74aa (sync-fork-2)
        >
          <div className="invisible group-hover:visible absolute -top-[5px] -right-[5px] w-fit h-fit z-[10]">
            <button
              onClick={removeFileFromQueue}
              type="button"
<<<<<<< HEAD
              className="light:bg-white bg-zinc-700 hover:light:text-white hover:light:bg-red-400 hover:bg-red-400 rounded-full p-1 flex items-center justify-center hover:border-transparent border border-white/40"
            >
              <X size={10} className="flex-shrink-0" />
=======
              className="bg-zinc-700 hover:bg-red-400 rounded-full p-1 flex items-center justify-center hover:border-transparent border border-white/40"
            >
              <X
                size={10}
                className="flex-shrink-0 text-zinc-200 group-hover:text-white"
              />
>>>>>>> 48ef74aa (sync-fork-2)
            </button>
          </div>
          <div
            className={`bg-error rounded-lg flex items-center justify-center flex-shrink-0 p-1`}
          >
<<<<<<< HEAD
            <WarningOctagon size={30} className="text-white light:text-white" />
          </div>
          <div className="flex flex-col w-[130px]">
            <p className="text-white light:text-red-600 text-xs font-medium truncate">
              {file.name}
            </p>
            <p className="text-red-100 light:text-red-600 text-xs truncate">
=======
            <WarningOctagon size={30} className="text-white" />
          </div>
          <div className="flex flex-col w-[130px]">
            <p className="text-white text-xs font-medium truncate">
              {file.name}
            </p>
            <p className="text-red-100 text-xs truncate">
>>>>>>> 48ef74aa (sync-fork-2)
              {error ?? "this file failed to upload"}. It will not be available
              in the workspace.
            </p>
          </div>
        </div>
        <Tooltip
          id={`attachment-uid-${uid}-error`}
          place="top"
          delayShow={300}
          className="allm-tooltip !allm-text-xs"
        />
      </>
    );
  }

  if (type === "attachment") {
    return (
      <>
        <div
          data-tooltip-id={`attachment-uid-${uid}-success`}
          data-tooltip-content={`${file.name} will be attached to this prompt. It will not be embedded into the workspace permanently.`}
<<<<<<< HEAD
          className={`relative h-14 px-2 py-2 flex items-center gap-x-4 rounded-lg bg-zinc-800 light:bg-theme-bg-sidebar border border-white/20 w-[200px] group`}
=======
          className={`relative h-14 px-2 py-2 flex items-center gap-x-4 rounded-lg bg-zinc-800 border border-white/20 w-[200px] group`}
>>>>>>> 48ef74aa (sync-fork-2)
        >
          <div className="invisible group-hover:visible absolute -top-[5px] -right-[5px] w-fit h-fit z-[10]">
            <button
              onClick={removeFileFromQueue}
              type="button"
<<<<<<< HEAD
              className="bg-zinc-700 light:bg-white hover:light:text-white hover:light:bg-red-400 hover:bg-red-400 rounded-full p-1 flex items-center justify-center hover:border-transparent border border-white/40"
            >
              <X size={10} className="flex-shrink-0" />
            </button>
          </div>
          {contentString ? (
            <img
              src={contentString}
              className={`${iconBgColor} w-[30px] h-[30px] rounded-lg flex items-center justify-center`}
            />
          ) : (
            <div
              className={`${iconBgColor} rounded-lg flex items-center justify-center flex-shrink-0 p-1`}
            >
              <Icon size={30} className="text-white light:text-white" />
            </div>
          )}
=======
              className="bg-zinc-700 hover:bg-red-400 rounded-full p-1 flex items-center justify-center hover:border-transparent border border-white/40"
            >
              <X
                size={10}
                className="flex-shrink-0 text-zinc-200 group-hover:text-white"
              />
            </button>
          </div>
          <div
            className={`${iconBgColor} rounded-lg flex items-center justify-center flex-shrink-0 p-1`}
          >
            <Icon size={30} className="text-white" />
          </div>
>>>>>>> 48ef74aa (sync-fork-2)
          <div className="flex flex-col w-[130px]">
            <p className="text-white text-xs font-medium truncate">
              {file.name}
            </p>
<<<<<<< HEAD
            <p className="text-white/80 light:text-black/80 text-xs font-medium">
              Image attached!
            </p>
=======
            <p className="text-white/80 text-xs font-medium">Image attached!</p>
>>>>>>> 48ef74aa (sync-fork-2)
          </div>
        </div>
        <Tooltip
          id={`attachment-uid-${uid}-success`}
          place="top"
          delayShow={300}
          className="allm-tooltip !allm-text-xs"
        />
      </>
    );
  }

  return (
    <>
      <div
        data-tooltip-id={`attachment-uid-${uid}-success`}
        data-tooltip-content={`${file.name} was uploaded and embedded into this workspace. It will be available for RAG chat now.`}
<<<<<<< HEAD
        className={`relative h-14 px-2 py-2 flex items-center gap-x-4 rounded-lg bg-zinc-800 light:bg-theme-bg-sidebar border border-white/20 w-[200px] group`}
=======
        className={`relative h-14 px-2 py-2 flex items-center gap-x-4 rounded-lg bg-zinc-800 border border-white/20 w-[200px] group`}
>>>>>>> 48ef74aa (sync-fork-2)
      >
        <div className="invisible group-hover:visible absolute -top-[5px] -right-[5px] w-fit h-fit z-[10]">
          <button
            onClick={removeFileFromQueue}
            type="button"
<<<<<<< HEAD
            className="bg-zinc-700 light:bg-white hover:light:text-white hover:light:bg-red-400 hover:bg-red-400 rounded-full p-1 flex items-center justify-center hover:border-transparent border border-white/40"
          >
            <X size={10} className="flex-shrink-0" />
=======
            className="bg-zinc-700 hover:bg-red-400 rounded-full p-1 flex items-center justify-center hover:border-transparent border border-white/40"
          >
            <X
              size={10}
              className="flex-shrink-0 text-zinc-200 group-hover:text-white"
            />
>>>>>>> 48ef74aa (sync-fork-2)
          </button>
        </div>
        <div
          className={`${iconBgColor} rounded-lg flex items-center justify-center flex-shrink-0 p-1`}
        >
<<<<<<< HEAD
          <Icon size={30} className="text-white light:text-white" />
        </div>
        <div className="flex flex-col w-[130px]">
          <p className="text-white text-xs font-medium truncate">{file.name}</p>
          <p className="text-white/80 light:text-black/80 text-xs font-medium">
            File embedded!
          </p>
=======
          <Icon size={30} className="text-white" />
        </div>
        <div className="flex flex-col w-[130px]">
          <p className="text-white text-xs font-medium truncate">{file.name}</p>
          <p className="text-white/80 text-xs font-medium">File embedded!</p>
>>>>>>> 48ef74aa (sync-fork-2)
        </div>
      </div>
      <Tooltip
        id={`attachment-uid-${uid}-success`}
        place="top"
        delayShow={300}
        className="allm-tooltip !allm-text-xs"
      />
    </>
  );
}

/**
 * @param {File} file
 * @returns {{iconBgColor:string, Icon: React.Component}}
 */
function displayFromFile(file) {
  const extension = file?.name?.split(".")?.pop()?.toLowerCase() ?? "txt";
  switch (extension) {
    case "pdf":
      return { iconBgColor: "bg-magenta", Icon: FilePdf };
    case "doc":
    case "docx":
      return { iconBgColor: "bg-royalblue", Icon: FileDoc };
    case "html":
      return { iconBgColor: "bg-purple", Icon: FileHtml };
    case "csv":
    case "xlsx":
      return { iconBgColor: "bg-success", Icon: FileCsv };
    case "json":
    case "sql":
    case "js":
    case "jsx":
    case "cpp":
    case "c":
      return { iconBgColor: "bg-warn", Icon: FileCode };
    case "png":
    case "jpg":
    case "jpeg":
      return { iconBgColor: "bg-royalblue", Icon: FileImage };
    default:
      return { iconBgColor: "bg-royalblue", Icon: FileText };
  }
}
