"use client";

import { useState } from "react";
import Head from "next/head";

import FileList from "@/components/tool/FileList";
import ConvertButton from "@/components/tool/ConvertButton";
import DownloadButton from "@/components/tool/DownloadButton";

import { mergeImages } from "@/lib/converter";

export default function MergeImagesTool() {
  const [files, setFiles] = useState<File[]>([]);
  const [merged, setMerged] = useState<Blob | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleMerge() {
    if (files.length < 2) return;

    try {
      setLoading(true);
      const blob = await mergeImages(files);
      setMerged(blob);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* 1. SEO Head with optimized meta tags */}
      <Head>
        {/* 2. Primary title with keywords */}
        <title>Merge Images Online Free - Combine JPG, PNG & WEBP Images into One</title>
        
        {/* 3. Optimized meta description with keywords and benefits */}
        <meta name="description" content="Merge multiple images into one online free. Combine JPG, PNG and WEBP images into a single file. Fast, secure, and 100% private browser-based tool. No uploads, no registration. Best free image merger online." />
        
        {/* 4. Keywords meta tag */}
        <meta name="keywords" content="merge images, combine images, merge jpg, merge png, merge webp, combine photos, image merger, merge images online, free image merger, combine multiple images, merge photos online, merge pictures, image combiner, photo merger, merge images tool, combine images online, merge jpg online, merge png online, merge webp online, image merger tool, free image merger online" />
        
        {/* 5. Robots meta for indexing */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* 6. Canonical URL */}
        <link rel="canonical" href="https://pngjpgconvert.com/merge-images" />
        
        {/* 7. Open Graph for social sharing */}
        <meta property="og:title" content="Merge Images Online Free - Combine JPG, PNG & WEBP Images" />
        <meta property="og:description" content="Combine multiple images into one file instantly. Free, secure, and private image merger tool. Merge JPG, PNG, WEBP and more." />
        <meta property="og:url" content="https://pngjpgconvert.com/merge-images" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://pngjpgconvert.com/og-image-merge.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Merge Images Online Free Tool" />
        <meta property="og:site_name" content="PNG JPG Convert" />
        
        {/* 8. Twitter Card for better social sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pngjpgconvert" />
        <meta name="twitter:creator" content="@pngjpgconvert" />
        <meta name="twitter:title" content="Merge Images Online Free - Combine JPG, PNG & WEBP Images" />
        <meta name="twitter:description" content="Combine multiple images into one file instantly. Free, secure, and private image merger tool." />
        <meta name="twitter:image" content="https://pngjpgconvert.com/og-image-merge.jpg" />
      </Head>

      {/* 9. Article Schema via script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Merge Images Online Free - Combine JPG, PNG & WEBP Images",
            "description": "Merge multiple images into one online free. Combine JPG, PNG and WEBP images into a single file with our fast and secure browser-based tool.",
            "image": "https://pngjpgconvert.com/og-image-merge.jpg",
            "author": {
              "@type": "Organization",
              "name": "PNG JPG Convert"
            },
            "publisher": {
              "@type": "Organization",
              "name": "PNG JPG Convert",
              "logo": {
                "@type": "ImageObject",
                "url": "https://pngjpgconvert.com/logo.png"
              }
            },
            "datePublished": "2024-01-01T00:00:00Z",
            "dateModified": new Date().toISOString(),
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://pngjpgconvert.com/merge-images"
            }
          }),
        }}
      />

      {/* 10. Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://pngjpgconvert.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Image Tools",
                "item": "https://pngjpgconvert.com/tools"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Merge Images Online",
                "item": "https://pngjpgconvert.com/merge-images"
              }
            ]
          }),
        }}
      />

      {/* 11. FAQ Schema for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is this image merger free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, it's completely free with no limits or registration required."
                }
              },
              {
                "@type": "Question",
                "name": "What image formats can I merge?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can merge JPG, PNG, WEBP, AVIF and most common image formats."
                }
              },
              {
                "@type": "Question",
                "name": "Are my images uploaded to your server?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Everything happens locally in your browser. Your images never leave your device."
                }
              },
              {
                "@type": "Question",
                "name": "How many images can I merge?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can merge unlimited images with no restrictions."
                }
              }
            ]
          }),
        }}
      />

      {/* 12. Main content with semantic HTML */}
      <article className="space-y-6">
        {/* 13. Hero section with H1 */}
        <header className="text-center">
          <div className="text-6xl mb-4" role="img" aria-label="Merge Images Icon">🖼️</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Merge Images Online Free
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Combine multiple images into one single file instantly. 
            Merge JPG, PNG, WEBP and more with our free online image merger tool.
          </p>
        </header>

        {/* 14. Upload area with accessibility */}
        <label 
          htmlFor="image-upload" 
          className="cursor-pointer block"
          aria-label="Upload images to merge"
        >
          <div className="rounded-xl border-2 border-dashed border-gray-300 hover:border-blue-500 p-10 text-center transition-colors">
            <div className="text-6xl" aria-hidden="true">🖼️</div>
            <h2 className="mt-4 text-3xl font-bold text-gray-800">
              Upload Images to Merge
            </h2>
            <p className="mt-2 text-gray-500">
              Select multiple images to combine into one file
            </p>
            <p className="mt-1 text-sm text-gray-400">
              Supports JPG, PNG, WEBP, AVIF and more
            </p>
          </div>

          <input
            id="image-upload"
            hidden
            multiple
            type="file"
            accept="image/*"
            aria-label="Upload images to merge"
            onChange={(e) => {
              const selected = Array.from(e.target.files || []);
              setFiles(selected);
              setMerged(null);
            }}
          />
        </label>

        {/* 15. Status message */}
        {files.length === 0 && (
          <p className="text-center text-gray-500 text-sm">
            Click or drag and drop images to get started
          </p>
        )}

        {/* 16. File list with count */}
        {files.length > 0 && (
          <>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">{files.length}</span> images selected
              </p>
              {files.length < 2 && (
                <p className="text-sm text-yellow-600">
                  ⚠️ Please select at least 2 images to merge
                </p>
              )}
            </div>

            <FileList files={files} />

            <ConvertButton
              loading={loading}
              disabled={loading || files.length < 2}
              text="Merge Images Now"
              onClick={handleMerge}
            />
          </>
        )}

        {/* 17. Success message */}
        {merged && (
          <>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <p className="text-green-700 font-semibold">
                ✅ Images merged successfully!
              </p>
              <p className="text-sm text-green-600 mt-1">
                Your combined image is ready to download
              </p>
            </div>

            <DownloadButton
              blob={merged}
              filename="merged-image.png"
              text="Download Merged Image"
            />
          </>
        )}

        {/* 18. Features section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <h3 className="text-lg font-semibold mb-2">🚀 Fast & Secure</h3>
            <p className="text-gray-600 text-sm">
              Merge images instantly in your browser. No uploads, no waiting.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <h3 className="text-lg font-semibold mb-2">🔒 100% Private</h3>
            <p className="text-gray-600 text-sm">
              Your images never leave your device. Complete privacy guaranteed.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <h3 className="text-lg font-semibold mb-2">🔄 Multiple Formats</h3>
            <p className="text-gray-600 text-sm">
              Merge JPG, PNG, WEBP, AVIF and most image formats.
            </p>
          </div>
        </section>

        {/* 19. How to use section */}
        <section className="bg-gray-50 rounded-xl p-6 mt-8">
          <h2 className="text-2xl font-bold mb-4">How to Merge Images Online</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Upload multiple images by clicking or dragging</li>
            <li>Arrange images in your preferred order</li>
            <li>Click the &quot;Merge Images Now&quot; button</li>
            <li>Download your combined image instantly</li>
          </ol>
        </section>

        {/* 20. FAQ section */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg">Is this image merger free?</h3>
              <p className="text-gray-600 mt-1">Yes, it's completely free with no limits or registration required.</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg">What image formats can I merge?</h3>
              <p className="text-gray-600 mt-1">You can merge JPG, PNG, WEBP, AVIF and most common image formats.</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg">Are my images uploaded to your server?</h3>
              <p className="text-gray-600 mt-1">No. Everything happens locally in your browser. Your images never leave your device.</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg">How many images can I merge?</h3>
              <p className="text-gray-600 mt-1">You can merge unlimited images with no restrictions.</p>
            </div>
          </div>
        </section>

        {/* Footer with related links */}
        <footer className="mt-8 pt-6 border-t">
          <h3 className="text-sm font-semibold text-gray-500 mb-2">Related Tools</h3>
          <ul className="flex flex-wrap gap-4 text-sm">
            <li><a href="/merge-pdf" className="text-blue-600 hover:underline">Merge PDF</a></li>
            <li><a href="/image-compressor" className="text-blue-600 hover:underline">Image Compressor</a></li>
            <li><a href="/image-resizer" className="text-blue-600 hover:underline">Image Resizer</a></li>
            <li><a href="/jpg-to-png" className="text-blue-600 hover:underline">JPG to PNG</a></li>
            <li><a href="/png-to-jpg" className="text-blue-600 hover:underline">PNG to JPG</a></li>
          </ul>
        </footer>
      </article>
    </>
  );
}