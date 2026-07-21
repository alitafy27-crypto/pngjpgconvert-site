export async function imageToPdf(
  file: File
): Promise<Blob> {

  const { jsPDF } = await import("jspdf");

  const bitmap = await createImageBitmap(file);

  const canvas = document.createElement("canvas");

  canvas.width = bitmap.width;
  canvas.height = bitmap.height;

  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Canvas is not supported.");
  }

  ctx.drawImage(bitmap, 0, 0);

  const image = canvas.toDataURL(
    "image/jpeg",
    1
  );

  const pdf = new jsPDF({
    orientation:
      bitmap.width > bitmap.height
        ? "landscape"
        : "portrait",

    unit: "px",

    format: [
      bitmap.width,
      bitmap.height,
    ],
  });

  pdf.addImage(
    image,
    "JPEG",
    0,
    0,
    bitmap.width,
    bitmap.height
  );

  return pdf.output("blob");
}

export async function pdfToImage(
  file: File
): Promise<Blob> {

  const pdfjsLib = await import("pdfjs-dist");

  pdfjsLib.GlobalWorkerOptions.workerSrc =
    new URL(
      "pdfjs-dist/build/pdf.worker.min.mjs",
      import.meta.url
    ).toString();

  const bytes = await file.arrayBuffer();

  const pdf = await pdfjsLib.getDocument({
    data: bytes,
  }).promise;

  const page = await pdf.getPage(1);

  const viewport = page.getViewport({
    scale: 2,
  });

  const canvas = document.createElement("canvas");

  canvas.width = viewport.width;
  canvas.height = viewport.height;

  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Canvas is not supported.");
  }

  await page.render({
    canvas,
    canvasContext: ctx,
    viewport,
  }).promise;

  return new Promise((resolve, reject) => {

    canvas.toBlob((blob) => {

      if (!blob) {
        reject(new Error("Conversion failed."));
        return;
      }

      resolve(blob);

    }, "image/png", 1);

  });

}

export async function mergePdf(
  files: File[]
): Promise<Blob> {

  const { PDFDocument } =
    await import("pdf-lib");

  const merged =
    await PDFDocument.create();

  for (const file of files) {

    const bytes =
      await file.arrayBuffer();

    const pdf =
      await PDFDocument.load(bytes);

    const copied =
      await merged.copyPages(
        pdf,
        pdf.getPageIndices()
      );

    copied.forEach((page) =>
      merged.addPage(page)
    );

  }

  const output =
    await merged.save();

  return new Blob(
    [new Uint8Array(output)],
    {
      type: "application/pdf",
    }
  );

}