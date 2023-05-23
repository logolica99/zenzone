"use client";
import React, { useState, createContext } from "react";

export type IApps = {
  timer: number;
  media: number;
  files: number;
  todo: number;
  notes: number;
  calender: number;
};
export type IAppsActiveState = {
  timer: boolean;
  media: boolean;
  files: boolean;
  todo: boolean;
  notes: boolean;
  calender: boolean;
};

type IAppContext = {
  appIndex: [IApps, React.Dispatch<React.SetStateAction<IApps>>];
  appState: [
    IAppsActiveState,
    React.Dispatch<React.SetStateAction<IAppsActiveState>>
  ];
};

export const AppContext = createContext<IAppContext>({
  appIndex: [
    { timer: 6, media: 7, files: 8, todo: 9, notes: 10, calender: 11 },
    () => null,
  ],
  appState: [
    {
      timer: false,
      media: false,
      files: false,
      todo: false,
      notes: false,
      calender: false,
    },
    () => null,
  ],
});

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [apps, setApps] = useState({
    timer: 6,
    media: 7,
    files: 8,
    todo: 9,
    notes: 10,
    calender: 11,
  });

  const [appActiveState, setAppActiveState] = useState({
    timer: false,
    media: false,
    files: false,
    todo: false,
    notes: false,
    calender: false,
  });

  return (
    <AppContext.Provider
      value={{
        appIndex: [apps, setApps],
        appState: [appActiveState, setAppActiveState],
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
