"use client";
import React from "react";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { IconButton, Slider } from "@mui/material";
import { VolumeOff, VolumeUp } from "@mui/icons-material";

export default function PomodoroComponent() {
  const [settingsOn, setSettingsOn] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [volume, setVolume] = useState<number>(50);
  const [mute, setMute] = useState<boolean>(false);

  const [timer, setTimer] = useState({
    pomodoro: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60,
  });
  const [tempTimer, setTempTimer] = useState(timer);

  const [tabState, setTabState] = useState({
    pomodoro: true,
    shortBreak: false,
    longBreak: false,
  });

  const [activeTimer, setActiveTimer] = useState(timer.pomodoro);

  useEffect(() => {
    let interval: any = null;

    if (isActive && activeTimer >= 0) {
      interval = setInterval(() => {
        setActiveTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    if (activeTimer === 0) {
      setIsActive(false);
      if (tabState.pomodoro) {
        setActiveTimer(timer.pomodoro);
      } else if (tabState.shortBreak) {
        setActiveTimer(timer.shortBreak);
      } else if (tabState.longBreak) {
        setActiveTimer(timer.longBreak);
      }
    }

    return () => clearInterval(interval);
  }, [isActive, activeTimer]);

  useEffect(() => {
    setIsActive(false);
    if (tabState.pomodoro) {
      setActiveTimer(timer.pomodoro);
    } else if (tabState.shortBreak) {
      setActiveTimer(timer.shortBreak);
    } else if (tabState.longBreak) {
      setActiveTimer(timer.longBreak);
    }
  }, [tabState, timer]);

  const startTimer = () => {
    setIsActive(true);
  };
  const pauseTimer = () => {
    setIsActive(false);
  };
  const stopTimer = () => {
    setIsActive(false);
    if (tabState.pomodoro) {
      setActiveTimer(timer.pomodoro);
    } else if (tabState.shortBreak) {
      setActiveTimer(timer.shortBreak);
    } else if (tabState.longBreak) {
      setActiveTimer(timer.longBreak);
    }
  };

  useEffect(() => {
    if (activeTimer === 0) {
      const audio = audioRef.current;
      if (audio) {
        audio.currentTime = 0;
        audio.volume = volume / 100;
      }
      audioRef.current?.play();
    }
  }, [activeTimer]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${remainingSeconds}`;
  };

  const handleMute = () => {
    setMute((prev) => !prev);
  };

  const handleVolumeChange = (event: Event) => {
    const { value } = event.target as HTMLInputElement;
    setVolume(parseInt(value));
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      audio.volume = volume / 100;
      audio.play();
    }
  }, [volume]);

  useEffect(() => {
    setTempTimer(timer);
  }, [settingsOn]);

  return (
    <div className="w-[20rem] py-5 md:w-[26rem]">
      <div className="flex items-center justify-between">
        <audio
          id="finishAudio"
          ref={audioRef}
          src="/assets/notification_2.mp3"
        ></audio>
        <p className="text-4xl font-bold text-zinc-400 md:text-5xl ">
          {/* {tabState.pomodoro
            ? formatTime(timer.pomodoro)
            : tabState.shortBreak
            ? formatTime(timer.shortBreak)
            : formatTime(timer.longBreak)} */}
          {formatTime(activeTimer)}
        </p>
        <div className="flex items-center gap-1 md:gap-3">
          {isActive ? (
            <button
              className="
            rounded border
              border-primary
              px-3

           py-1
       
            text-sm text-primary 
             duration-150
             ease-in
             hover:bg-zinc-700
          md:px-5
          md:text-lg

            "
              onClick={pauseTimer}
            >
              Pause
            </button>
          ) : (
            <button
              className="
            rounded border
              border-primary
              px-3

           py-1
       
            text-sm text-primary 
             duration-150
             ease-in
             hover:bg-zinc-700
          md:px-5
          md:text-lg

            "
              onClick={startTimer}
            >
              Start
            </button>
          )}
          <button
            className="rounded 
            px-3
            py-1
            text-sm
            text-primary
            duration-150  ease-in hover:bg-zinc-700 md:px-5 
            md:text-lg"
            onClick={stopTimer}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <p
            className={`cursor-pointer ${
              tabState.pomodoro && "border-b border-primary"
            } pb-1 text-sm text-zinc-400 md:text-lg`}
            onClick={() => {
              setTabState({
                pomodoro: true,
                shortBreak: false,
                longBreak: false,
              });
            }}
          >
            Pomodoro
          </p>
          <p
            className={`cursor-pointer  ${
              tabState.shortBreak && "border-b border-primary"
            } pb-1 text-sm text-zinc-400  md:text-lg`}
            onClick={() => {
              setTabState({
                pomodoro: false,
                shortBreak: true,
                longBreak: false,
              });
            }}
          >
            Short Break
          </p>
          <p
            className={`cursor-pointer  ${
              tabState.longBreak && "border-b border-primary"
            } pb-1 text-sm text-zinc-400 md:text-lg`}
            onClick={() => {
              setTabState({
                pomodoro: false,
                shortBreak: false,
                longBreak: true,
              });
            }}
          >
            Long Break
          </p>
        </div>
        <div
          onClick={() => {
            setSettingsOn((prev) => !prev);
          }}
          className="cursor-pointer p-2 duration-150 ease-in hover:rounded-full hover:bg-zinc-700 "
        >
          {!settingsOn && (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.8064 7.62386L20.184 6.54377C19.6574 5.62985 18.4905 5.31456 17.5753 5.83896C17.1397 6.09559 16.6198 6.1684 16.1305 6.04133C15.6411 5.91426 15.2224 5.59776 14.9666 5.16162C14.8021 4.88439 14.7137 4.56864 14.7103 4.24628C14.7251 3.72947 14.5302 3.22865 14.1698 2.85791C13.8094 2.48718 13.3143 2.27811 12.7973 2.27832H11.5433C11.0367 2.27832 10.5511 2.48016 10.1938 2.83919C9.83644 3.19822 9.63693 3.68484 9.63937 4.19136C9.62435 5.23717 8.77224 6.07706 7.72632 6.07695C7.40397 6.0736 7.08821 5.98519 6.81099 5.82065C5.89582 5.29626 4.72887 5.61154 4.20229 6.52546L3.5341 7.62386C3.00817 8.53664 3.31916 9.70285 4.22975 10.2326C4.82166 10.5743 5.18629 11.2058 5.18629 11.8893C5.18629 12.5728 4.82166 13.2043 4.22975 13.5461C3.32031 14.0722 3.00898 15.2356 3.5341 16.1456L4.16568 17.2348C4.4124 17.68 4.82636 18.0085 5.31595 18.1477C5.80554 18.2868 6.3304 18.2251 6.77438 17.9763C7.21084 17.7216 7.73094 17.6518 8.2191 17.7824C8.70725 17.9131 9.12299 18.2333 9.37392 18.6719C9.53845 18.9491 9.62686 19.2649 9.63021 19.5872C9.63021 20.6438 10.4867 21.5003 11.5433 21.5003H12.7973C13.8502 21.5003 14.7053 20.6494 14.7103 19.5964C14.7079 19.0883 14.9086 18.6003 15.2679 18.241C15.6272 17.8817 16.1152 17.6809 16.6233 17.6834C16.9449 17.692 17.2594 17.78 17.5387 17.9396C18.4515 18.4656 19.6177 18.1546 20.1474 17.244L20.8064 16.1456C21.0615 15.7077 21.1315 15.1863 21.001 14.6966C20.8704 14.207 20.55 13.7896 20.1108 13.5369C19.6715 13.2842 19.3511 12.8668 19.2206 12.3772C19.09 11.8875 19.16 11.3661 19.4151 10.9282C19.581 10.6386 19.8211 10.3984 20.1108 10.2326C21.0159 9.70314 21.3262 8.54374 20.8064 7.63301V7.62386Z"
                stroke="#F7A928"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.1746 14.5249C13.6304 14.5249 14.8106 13.3448 14.8106 11.8889C14.8106 10.4331 13.6304 9.25293 12.1746 9.25293C10.7188 9.25293 9.53857 10.4331 9.53857 11.8889C9.53857 13.3448 10.7188 14.5249 12.1746 14.5249Z"
                stroke="#F7A928"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}

          {settingsOn && (
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.8093 7.62386L20.1869 6.54377C19.6603 5.62985 18.4934 5.31456 17.5782 5.83896C17.1426 6.09559 16.6228 6.1684 16.1334 6.04133C15.644 5.91426 15.2253 5.59776 14.9695 5.16162C14.805 4.88439 14.7166 4.56864 14.7132 4.24628C14.7281 3.72947 14.5331 3.22865 14.1727 2.85791C13.8123 2.48718 13.3172 2.27811 12.8002 2.27832H11.5462C11.0397 2.27832 10.554 2.48016 10.1967 2.83919C9.83937 3.19822 9.63986 3.68484 9.6423 4.19136C9.62728 5.23717 8.77517 6.07706 7.72925 6.07695C7.4069 6.0736 7.09114 5.98519 6.81392 5.82065C5.89875 5.29626 4.7318 5.61154 4.20522 6.52546L3.53703 7.62386C3.0111 8.53664 3.32209 9.70285 4.23268 10.2326C4.82459 10.5743 5.18922 11.2058 5.18922 11.8893C5.18922 12.5728 4.82459 13.2043 4.23268 13.5461C3.32324 14.0722 3.01191 15.2356 3.53703 16.1456L4.16861 17.2348C4.41533 17.68 4.82929 18.0085 5.31888 18.1477C5.80847 18.2868 6.33333 18.2251 6.77731 17.9763C7.21377 17.7216 7.73387 17.6518 8.22203 17.7824C8.71018 17.9131 9.12592 18.2333 9.37685 18.6719C9.54138 18.9491 9.62979 19.2649 9.63314 19.5872C9.63314 20.6438 10.4896 21.5003 11.5462 21.5003H12.8002C13.8532 21.5003 14.7082 20.6494 14.7132 19.5964C14.7108 19.0883 14.9115 18.6003 15.2708 18.241C15.6301 17.8817 16.1182 17.6809 16.6263 17.6834C16.9479 17.692 17.2623 17.78 17.5416 17.9396C18.4544 18.4656 19.6206 18.1546 20.1503 17.244L20.8093 16.1456C21.0644 15.7077 21.1345 15.1863 21.0039 14.6966C20.8733 14.207 20.5529 13.7896 20.1137 13.5369C19.6744 13.2842 19.3541 12.8668 19.2235 12.3772C19.0929 11.8875 19.1629 11.3661 19.418 10.9282C19.5839 10.6386 19.8241 10.3984 20.1137 10.2326C21.0188 9.70314 21.3291 8.54374 20.8093 7.63301V7.62386Z"
                fill="#F7A928"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.1775 14.5249C13.6333 14.5249 14.8135 13.3448 14.8135 11.8889C14.8135 10.4331 13.6333 9.25293 12.1775 9.25293C10.7217 9.25293 9.5415 10.4331 9.5415 11.8889C9.5415 13.3448 10.7217 14.5249 12.1775 14.5249Z"
                fill="#27272A"
              />
            </svg>
          )}
        </div>
      </div>
      {settingsOn && (
        <div className="mt-5 flex flex-col gap-3 ">
          <div className="flex items-center justify-between gap-4">
            <IconButton onClick={handleMute}>
              {mute ? (
                <VolumeOff color="primary" fontSize="large" />
              ) : (
                <VolumeUp color="primary" fontSize="large" />
              )}
            </IconButton>
            <Slider
              value={typeof volume === "number" ? volume : 0}
              onChange={handleVolumeChange}
              aria-labelledby="input-slider"
            />
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col  items-center gap-1">
              <p className="  text-sm text-zinc-400   md:text-base">Pomodoro</p>
              <input
                className=" w-[6rem] rounded border border-zinc-700 bg-transparent text-center text-zinc-400  outline-none md:w-[7rem]"
                type="number"
                min={0}
                max={100}
                value={tempTimer.pomodoro / 60}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  let value: number = parseInt(e.target.value);

                  if (value > 360) {
                    value = 360;
                  } else if (value < 1) {
                    value = 1;
                  } else if (Number.isNaN(value)) {
                    value = 25;
                  }

                  setTempTimer({ ...tempTimer, pomodoro: value * 60 });
                }}
              />
            </div>
            <div className="flex flex-col  items-center gap-1">
              <p className="text-sm   text-zinc-400   md:text-base">
                Short Break
              </p>
              <input
                className="w-[6rem] rounded border border-zinc-700 bg-transparent text-center text-zinc-400 outline-none md:w-[7rem]"
                type="number"
                min={0}
                max={100}
                value={tempTimer.shortBreak / 60}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  let value: number = parseInt(e.target.value);

                  if (value > 360) {
                    value = 360;
                  } else if (value < 1) {
                    value = 1;
                  } else if (Number.isNaN(value)) {
                    value = 25;
                  }

                  setTempTimer({ ...tempTimer, shortBreak: value * 60 });
                }}
              />
            </div>
            <div className="flex flex-col  items-center gap-1">
              <p className="text-sm   text-zinc-400  md:text-base">
                Long Break
              </p>
              <input
                className="w-[6rem] rounded border border-zinc-700 bg-transparent text-center text-zinc-400 outline-none md:w-[7rem]"
                type="number"
                min={0}
                max={100}
                value={tempTimer.longBreak / 60}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  let value: number = parseInt(e.target.value);

                  if (value > 360) {
                    value = 360;
                  } else if (value < 1) {
                    value = 1;
                  } else if (Number.isNaN(value)) {
                    value = 25;
                  }

                  setTempTimer({ ...tempTimer, longBreak: value * 60 });
                }}
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              className=" w-full rounded-md border border-primary py-2   text-primary duration-150 ease-in hover:bg-zinc-700"
              onClick={() => {
                setTimer(tempTimer);
              }}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
