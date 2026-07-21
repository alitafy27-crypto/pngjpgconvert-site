export async function mergeImages(
  files: File[],
  direction: "vertical" | "horizontal" = "vertical"
): Promise<Blob> {

  const bitmaps = await Promise.all(
    files.map((f) => createImageBitmap(f))
  );

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Canvas is not supported.");
  }

  if (direction === "vertical") {

    canvas.width = Math.max(
      ...bitmaps.map((b) => b.width)
    );

    canvas.height = bitmaps.reduce(
      (s, b) => s + b.height,
      0
    );

    let y = 0;

    for (const bitmap of bitmaps) {
      ctx.drawImage(bitmap, 0, y);
      y += bitmap.height;
    }

  } else {

    canvas.width = bitmaps.reduce(
      (s, b) => s + b.width,
      0
    );

    canvas.height = Math.max(
      ...bitmaps.map((b) => b.height)
    );

    let x = 0;

    for (const bitmap of bitmaps) {
      ctx.drawImage(bitmap, x, 0);
      x += bitmap.width;
    }

  }

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {

      if (!blob) {
        reject(new Error("Merge failed."));
        return;
      }

      resolve(blob);

    }, "image/png", 1);
  });

}