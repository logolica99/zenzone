"use client";
import React, { useState } from "react";
import PdfViewer from "./PdfViewer";

export default function FilesComponent() {
  const [driveUrl, setDriveUrl] = useState("");
  const [validUrl, setValidUrl] = useState(true);
  const [driveLoadableUrl, setLoadableUrl] = useState("");

  const isDriveValid = (url: string) => {
    if (url) {
      return true;
    }
    return true;
  };

  return (
    <div className="flex h-full  flex-col justify-between gap-3">
      {driveLoadableUrl.length > 0 ? (
        validUrl ? (
          <PdfViewer
            // ref={playerRef}
            url={driveUrl}
          />
        ) : (
          <div className="flex h-full items-center justify-center rounded-md border border-zinc-700 text-zinc-400">
            Please enter a valid Youtube link!
          </div>
        )
      ) : (
        <div className="flex h-full items-center justify-center rounded-md border border-zinc-700 text-zinc-400">
          {" "}
          Your playable Video will appear here!
        </div>
      )}

      {/* <button onClick={handleSeekClick}>seek</button> */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setLoadableUrl(driveUrl);
          setValidUrl(isDriveValid(driveUrl));
        }}
      >
        <div className="flex items-center justify-between gap-3">
          <input
            className="flex-1 rounded-md border border-zinc-700 bg-transparent px-2 py-1 text-zinc-400 focus:outline-none"
            placeholder="Enter Drive PDF URL  here"
            value={driveUrl}
            onChange={(e) => setDriveUrl(e.target.value)}
          />
          <button
            className="group flex cursor-pointer items-center justify-center rounded-full py-1 px-6 ring-1 ring-primary"
            type="submit"
          >
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 7H13.5C13.2239 7 13 7.22388 13 7.5C13 7.77612 13.2239 8 13.5 8H15C16.104 8.0014 16.9986 8.896 17 10V17C16.9986 18.104 16.104 18.9986 15 19H3C1.896 18.9986 1.0014 18.104 1 17V10C1.0014 8.896 1.896 8.0014 3 8H5.5C5.77612 8 6 7.77612 6 7.5C6 7.22388 5.77612 7 5.5 7H3C1.34387 7.00183 0.0018311 8.34387 0 10V17C0.0018311 18.6561 1.34387 19.9982 3 20H15C16.6561 19.9982 17.9982 18.6561 18 17V10C17.9982 8.34387 16.6561 7.00183 15 7ZM5.8623 4.34473L8.5 1.70697V15.5005C8.50018 15.7766 8.724 16.0002 9 16C9.27594 15.9998 9.50018 15.776 9.5 15.5V1.70697L12.1377 4.34473C12.2313 4.43866 12.3586 4.49139 12.4912 4.49121C12.6238 4.49121 12.7509 4.43854 12.8447 4.34479C13.0399 4.1496 13.04 3.83301 12.8447 3.6377L9.35382 0.14679C9.30762 0.100525 9.25226 0.0639648 9.19092 0.0385742C9.13287 0.0146484 9.07147 0.00317382 9.0097 0.00195312C9.00629 0.00189213 9.00342 0 9 0C8.99762 0 8.99561 0.00128167 8.99323 0.00134277C8.93048 0.00219727 8.86786 0.0141602 8.80896 0.0385742C8.74768 0.0639038 8.6925 0.100464 8.64636 0.146606L5.15527 3.63776C5.15289 3.64008 5.15051 3.64246 5.14813 3.6449C4.9549 3.8421 4.95807 4.15863 5.15527 4.35187C5.35248 4.5451 5.66907 4.54193 5.8623 4.34473Z"
                fill="#F7A928"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
