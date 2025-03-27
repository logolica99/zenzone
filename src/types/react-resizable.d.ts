import { ComponentType, ReactNode } from "react";

declare module "react-resizable" {
  export interface ResizableBoxProps {
    width: number;
    height: number;
    minConstraints?: [number, number];
    maxConstraints?: [number, number];
    onResize?: (
      e: any,
      { size }: { size: { width: number; height: number } }
    ) => void;
    axis?: "both" | "x" | "y" | "none";
    resizeHandles?: Array<"w" | "e" | "n" | "s" | "nw" | "ne" | "sw" | "se">;
    children?: ReactNode;
    ref?: any;
  }

  export const ResizableBox: ComponentType<ResizableBoxProps> & {
    new (props: ResizableBoxProps): any;
  };
}
