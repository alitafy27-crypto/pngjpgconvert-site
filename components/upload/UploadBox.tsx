"use client";

import ConvertTool from "../tool/ConvertTool";
import CompressTool from "../tool/CompressTool";
import ResizeTool from "../tool/ResizeTool";
import RotateTool from "../tool/RotateTool";
import FlipTool from "../tool/FlipTool";
import WatermarkTool from "../tool/WatermarkTool";

type Props = {
  from?: string;
  to?: string;

  mode?:
    | "convert"
    | "compress"
    | "resize"
    | "crop"
    | "rotate"
    | "flip"
    | "watermark"
    | "merge-images"
    | "image-to-pdf"
    | "pdf-to-image"
    | "pdf-merge";

  outputMime?: string;
  outputExtension?: string;

  supportsQuality?: boolean;
};

export default function UploadBox({
  from = "PNG",
  to = "JPG",
  mode = "convert",
  outputMime = "image/jpeg",
  outputExtension = "jpg",
  supportsQuality = true,
}: Props) {
  switch (mode) {
    case "compress":
      return (
        <CompressTool
          outputMime={outputMime}
          outputExtension={outputExtension}
        />
      );

    case "resize":
      return (
        <ResizeTool
          outputMime={outputMime}
          outputExtension={outputExtension}
        />
      );

    case "rotate":
      return (
        <RotateTool
          outputMime={outputMime}
          outputExtension={outputExtension}
        />
      );

    case "flip":
      return (
        <FlipTool
          outputMime={outputMime}
          outputExtension={outputExtension}
        />
      );

    case "watermark":
      return (
        <WatermarkTool
          outputMime={outputMime}
          outputExtension={outputExtension}
        />
      );

    case "convert":
    default:
      return (
        <ConvertTool
          from={from}
          to={to}
          outputMime={outputMime}
          outputExtension={outputExtension}
          supportsQuality={supportsQuality}
        />
      );
  }
}