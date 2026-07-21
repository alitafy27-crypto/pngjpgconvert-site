import Badge from "../ui/Badge";
import Section from "../ui/Section";
import UploadBox from "../upload/UploadBox";

export default function Hero() {
  return (
    <Section>

      <div className="mx-auto max-w-5xl text-center">

        <Badge>
          🚀 Fast • Secure • Browser Based
        </Badge>

        <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-gray-900 md:text-7xl">
          Convert Images
          <span className="block text-blue-600">
            In Seconds
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-600">
          Convert PNG, JPG, WebP and AVIF images directly in your browser.
          No uploads. No registration. 100% private.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <div className="rounded-full bg-gray-100 px-5 py-3 font-semibold">PNG</div>
          <div className="rounded-full bg-gray-100 px-5 py-3 font-semibold">JPG</div>
          <div className="rounded-full bg-gray-100 px-5 py-3 font-semibold">WEBP</div>
          <div className="rounded-full bg-gray-100 px-5 py-3 font-semibold">AVIF</div>
          <div className="rounded-full bg-gray-100 px-5 py-3 font-semibold">GIF</div>
        </div>

        <div className="mt-16">
          <UploadBox />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-4xl font-bold text-blue-600">100%</h3>
            <p className="mt-2 text-gray-600">Private Conversion</p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-4xl font-bold text-blue-600">20+</h3>
            <p className="mt-2 text-gray-600">Supported Tools</p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-4xl font-bold text-blue-600">⚡</h3>
            <p className="mt-2 text-gray-600">Instant Processing</p>
          </div>

        </div>

      </div>

    </Section>
  );
}