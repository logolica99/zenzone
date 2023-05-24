import React from "react";

export default function PdfViewer({ url }: { url: string }) {
  const replaceWord = (
    originalString: string,
    wordToReplace: string,
    replacement: string
  ) => {
    if (!originalString.includes("preview")) {
      const regex = new RegExp(wordToReplace, "gi");
      return originalString.replace(regex, replacement);
    }
    return originalString;
  };

  return (
    <iframe
      src={replaceWord(url, "view", "preview")}
      width="100%"
      height="100%"
    ></iframe>
  );
}
