"use client";
import React from "react";
export default function ZoneCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
      <div className="aspect-video w-full animate-pulse bg-zinc-800" />
      <div className="space-y-2 p-4">
        <div className="h-5 w-2/3 animate-pulse rounded bg-zinc-800" />
        <div className="h-4 w-4/5 animate-pulse rounded bg-zinc-800" />
      </div>
    </div>
  );
}
