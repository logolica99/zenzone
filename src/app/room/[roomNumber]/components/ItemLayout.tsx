"use client";

import React, { useContext, useRef, useState } from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { ResizableBox } from "react-resizable";
import { AppContext, IApps } from "../../../Contexts/AppContext";
import { capitalizeFirstLetter } from "../helper";
import "react-resizable/css/styles.css";

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
  const [dimensions, setDimensions] = useState({ width: 400, height: 400 });

  const {
    appIndex: [apps, setApps],
    appState: [appActiveState, setAppActiveState],
  } = useContext(AppContext);

  const onDrag = (_: DraggableEvent, data: DraggableData) => {
    setCurrentPosition({ xRate: data.x, yRate: data.y });
  };

  const onResize = (
    _: any,
    { size }: { size: { width: number; height: number } }
  ) => {
    setDimensions({ width: size.width, height: size.height });
  };

  const updateZIndex = () =>
    setApps({ ...apps, [title]: Math.max(...Object.values(apps)) + 1 });

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
          updateZIndex();
        }}
        onStop={() => {
          setIsDragging(false);
        }}
        handle="#handlebar"
      >
        <div
          className={`absolute rounded-md border border-zinc-700 bg-zinc-800 shadow ${
            !appActiveState[title as keyof IApps] && "hidden"
          }`}
          style={{ zIndex: apps[title as keyof IApps] }}
          onClick={updateZIndex}
        >
          <div
            className={`flex ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            } items-center justify-between rounded-t-md border-b border-zinc-700 bg-zinc-900 px-3`}
            id="handlebar"
          >
            <p className="text-base text-primary">
              {capitalizeFirstLetter(title)}
            </p>
            <div
              className="cursor-pointer duration-150 ease-in hover:rounded-full hover:bg-zinc-700"
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
            <div style={{ width: dimensions.width, height: dimensions.height }}>
              <ResizableBox
                width={dimensions.width}
                height={dimensions.height}
                onResize={onResize}
                minConstraints={[400, 300]}
                maxConstraints={[1000, 800]}
                axis="both"
                resizeHandles={["se"]}
              >
                <div className="h-full px-3 py-2">{children}</div>
              </ResizableBox>
            </div>
          ) : (
            <div className="px-3">{children}</div>
          )}
        </div>
      </Draggable>
    </ThemeProvider>
  );
}
