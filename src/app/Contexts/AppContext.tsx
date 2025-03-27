"use client";
import React, { useState, createContext } from "react";

export type IApps = {
  timer: number;
  media: number;
  files: number;
  todo: number;
  notes: number;
  calendar: number;
};
export type IAppsActiveState = {
  timer: boolean;
  media: boolean;
  files: boolean; 
  todo: boolean;
  notes: boolean;
  calendar: boolean;
};

type IAppContext = {
  appIndex: [IApps, React.Dispatch<React.SetStateAction<IApps>>];
  appState: [
    IAppsActiveState,
    React.Dispatch<React.SetStateAction<IAppsActiveState>>
  ];
  collapsedState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
};

export const AppContext = createContext<IAppContext>({
  appIndex: [
    { timer: 6, media: 7, files: 8, todo: 9, notes: 10, calendar: 11 },
    () => null,
  ],
  appState: [
    {
      timer: false,
      media: false,
      files: false,
      todo: false,
      notes: false,
      calendar: false,
    },
    () => null,
  ],
  collapsedState: [false, () => null],
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
    calendar: 11,
  });
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [appActiveState, setAppActiveState] = useState({
    timer: false,
    media: false,
    files: false,
    todo: false,
    notes: false,
    calendar: false,
  });

  return (
    <AppContext.Provider
      value={{
        appIndex: [apps, setApps],
        appState: [appActiveState, setAppActiveState],
        collapsedState: [isCollapsed, setIsCollapsed],
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
