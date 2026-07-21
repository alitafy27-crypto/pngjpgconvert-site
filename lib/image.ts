/* =========================================
   IMAGE UTILITIES
========================================= */

export async function convertImage(
  file: File,
  outputMime: string,
  quality = 0.92
): Promise<Blob> {
  const bitmap = await createImageBitmap(file);

  const canvas = document.createElement("canvas");
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;

  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Canvas is not supported.");
  }

  if (outputMime === "image/jpeg") {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  ctx.drawImage(bitmap, 0, 0);

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error("Conversion failed."));
          return;
        }

        resolve(blob);
      },
      outputMime,
      quality
    );
  });
}

export async function compressImage(
  file: File,
  quality = 0.7
): Promise<Blob> {
  const blob = await convertImage(file, file.type, quality);

  if (blob.size >= file.size) {
    return file;
  }

  return blob;
}

export async function resizeImage(
  file: File,
  targetWidth: number,
  targetHeight: number,
  outputMime: string = file.type,
  quality = 0.92,
  keepAspect = true
): Promise<Blob> {
  const bitmap = await createImageBitmap(file);

  let width = targetWidth;
  let height = targetHeight;

  if (keepAspect) {
    const ratio = bitmap.width / bitmap.height;

    if (targetWidth / targetHeight > ratio) {
      width = Math.round(targetHeight * ratio);
      height = targetHeight;
    } else {
      width = targetWidth;
      height = Math.round(targetWidth / ratio);
    }
  }

  width = Math.min(width, bitmap.width);
  height = Math.min(height, bitmap.height);

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Canvas is not supported.");
  }

  if (outputMime === "image/jpeg") {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);
  }

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";

  ctx.drawImage(bitmap, 0, 0, width, height);

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error("Resize failed."));
          return;
        }

        resolve(blob);
      },
      outputMime,
      quality
    );
  });
}

export async function rotateImage(
  file: File,
  angle: 90 | 180 | 270,
  outputMime: string = file.type,
  quality = 0.92
): Promise<Blob> {
  const bitmap = await createImageBitmap(file);

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Canvas is not supported.");
  }

  if (angle === 90 || angle === 270) {
    canvas.width = bitmap.height;
    canvas.height = bitmap.width;
  } else {
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;
  }

  if (outputMime === "image/jpeg") {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  switch (angle) {
    case 90:
      ctx.translate(canvas.width, 0);
      ctx.rotate(Math.PI / 2);
      break;

    case 180:
      ctx.translate(canvas.width, canvas.height);
      ctx.rotate(Math.PI);
      break;

    case 270:
      ctx.translate(0, canvas.height);
      ctx.rotate(-Math.PI / 2);
      break;
  }

  ctx.drawImage(bitmap, 0, 0);

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error("Rotation failed."));
          return;
        }

        resolve(blob);
      },
      outputMime,
      quality
    );
  });
}

export async function flipImage(
  file: File,
  direction: "horizontal" | "vertical",
  outputMime: string = file.type,
  quality = 0.92
): Promise<Blob> {
  const bitmap = await createImageBitmap(file);

  const canvas = document.createElement("canvas");
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;

  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Canvas is not supported.");
  }

  if (outputMime === "image/jpeg") {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  if (direction === "horizontal") {
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
  } else {
    ctx.translate(0, canvas.height);
    ctx.scale(1, -1);
  }

  ctx.drawImage(bitmap, 0, 0);

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error("Flip failed."));
          return;
        }

        resolve(blob);
      },
      outputMime,
      quality
    );
  });
}

export async function cropImage(
  file: File,
  x: number,
  y: number,
  width: number,
  height: number,
  outputMime: string = file.type,
  quality = 0.92
): Promise<Blob> {
  const bitmap = await createImageBitmap(file);

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Canvas is not supported.");
  }

  if (outputMime === "image/jpeg") {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);
  }

  ctx.drawImage(bitmap, x, y, width, height, 0, 0, width, height);

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error("Crop failed."));
          return;
        }

        resolve(blob);
      },
      outputMime,
      quality
    );
  });
}

export async function watermarkImage(
  file: File,
  text: string,
  fontSize = 36,
  opacity = 0.4,
  color = "#ffffff"
): Promise<Blob> {
  const bitmap = await createImageBitmap(file);

  const canvas = document.createElement("canvas");
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;

  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Canvas is not supported.");
  }

  ctx.drawImage(bitmap, 0, 0);

  ctx.save();

  ctx.globalAlpha = opacity;
  ctx.fillStyle = color;
  ctx.font = `bold ${fontSize}px Arial`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  ctx.restore();

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error("Watermark failed."));
          return;
        }

        resolve(blob);
      },
      file.type,
      0.92
    );
  });
}