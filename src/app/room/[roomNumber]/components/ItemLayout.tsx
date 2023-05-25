"use client";

import React, { useContext, useState } from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { ResizableBox } from "react-resizable";
import { AppContext, IApps } from "../../../Contexts/AppContext";
import { capitalizeFirstLetter } from "../helper";

interface IpropType {
  title: string;
  children: React.ReactNode;
  resizable: boolean;
}
type Position = {
  xRate: number;
  yRate: number;
};

const mdTheme = createTheme({
  palette: {
    primary: {
      main: "#F7A928",
    },
  },
});

export default function ItemLayout({
  title,
  children,
  resizable = false,
}: IpropType) {
  const [currentPosition, setCurrentPosition] = useState<Position>({
    xRate: 0,
    yRate: 0,
  });

  const [isDragging, setIsDragging] = useState(false);

  const { appIndex, appState } = useContext(AppContext);
  const [appActiveState, setAppActiveState] = appState;
  const [apps, setApps] = appIndex;

  const onDrag = (_: DraggableEvent, data: DraggableData) => {
    setCurrentPosition({ xRate: data.x, yRate: data.y });
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Draggable
        bounds="parent"
        position={{
          x: currentPosition.xRate,
          y: currentPosition.yRate,
        }}
        onDrag={onDrag}
        onStart={() => {
          setIsDragging(true);

          setApps({
            ...apps,
            [title]: Math.max(...Object.values(apps)) + 1,
          });
        }}
        onStop={() => {
          setIsDragging(false);
        }}
        handle="#handlebar"
      >
        <div
          className={`absolute  rounded-md border border-zinc-700 bg-zinc-800 shadow ${
            !appActiveState[title as keyof IApps] && "hidden"
          }`}
          style={{ zIndex: apps[title as keyof IApps] }}
          onClick={() => {
            setApps({
              ...apps,
              [String(title)]: Math.max(...Object.values(apps)) + 1,
            });
          }}
        >
          <div
            className={`flex ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }  items-center justify-between border-b border-zinc-700 px-3 py-2`}
            id="handlebar"
          >
            <p className=" text-base  text-primary ">
              {capitalizeFirstLetter(title)}
            </p>
            <div
              className="cursor-pointer p-2 duration-150 ease-in hover:rounded-full hover:bg-zinc-700 "
              onClick={() => {
                setAppActiveState({
                  ...appActiveState,
                  [title as keyof IApps]: !appActiveState[title as keyof IApps],
                });
              }}
            >
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 14.5H7"
                  stroke="#F7A928"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          {resizable ? (
            <ResizableBox
              width={400}
              height={400}
              minConstraints={[400, 300]}
              maxConstraints={[1000, 800]}
            >
              <div className="h-full px-3 py-3">{children}</div>
            </ResizableBox>
          ) : (
            <div className="px-3">{children}</div>
          )}
        </div>
      </Draggable>
    </ThemeProvider>
  );
}
