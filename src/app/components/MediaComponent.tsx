"use client";
import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import BaseReactPlayer, { BaseReactPlayerProps } from "react-player/base";
import YouTubePlayer from "react-player/youtube";

export default function MediaComponent() {
  const [url, setUrl] = useState("");
  const [playableUrl, setPlayableUrl] = useState("");
  const [canPlay, setCanPlay] = useState(false);

//   const playerRef = useRef<ReactPlayer>(null);

//   const handleSeekClick = () => {
//     if (playerRef.current && playerRef.current.getInternalPlayer()) {
//       const internalPlayer = playerRef.current.getInternalPlayer();

//       // Seek to 100 milliseconds (0.1 seconds)
//       if (typeof internalPlayer.seekTo === "function") {
//         internalPlayer.seekTo(240);
//       }

//       // Play the video
//       if (typeof internalPlayer.play === "function") {
//         internalPlayer.play();
//       }
//     }
//   };

  return (
    <div className="flex h-full  flex-col justify-between gap-3">
      {playableUrl.length > 0 ? (
        canPlay ? (
          <ReactPlayer
            // ref={playerRef}
            url={playableUrl}
            controls
            width={"100%"}
            height={"100%"}
            onProgress={(e) => {
              //   console.log(e);
            }}
            onSeek={() => {
              return 25;
            }}
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
          setCanPlay(ReactPlayer.canPlay(url));
          setPlayableUrl(url);
        }}
      >
        <div className="flex items-center justify-between gap-3">
          <input
            className="flex-1 rounded-md border border-zinc-700 bg-transparent px-2 py-1 text-zinc-400 focus:outline-none"
            placeholder="Enter Youtube URL  here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            className="group flex cursor-pointer items-center justify-center rounded-full py-1 pl-6 pr-5 ring-1 ring-primary"
            type="submit"
          >
            <svg
              className="transition-all duration-300 group-hover:scale-110"
              width="14"
              height="18"
              viewBox="0 0 11 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.00170898 1.81976V12.1798C0.00170898 12.9698 0.871709 13.4498 1.54171 13.0198L9.68171 7.83976C10.3017 7.44976 10.3017 6.54976 9.68171 6.14976L1.54171 0.979764C0.871709 0.549764 0.00170898 1.02976 0.00170898 1.81976Z"
                fill="#F7A928"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
