import Container from "../layout/Container";
import UploadBox from "../upload/UploadBox";
export default function Hero() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            100% Browser Processing
          </span>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-gray-900">
            Fast Image Conversion
            <br />
            Without Uploading Your Files
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Convert PNG, JPG and WebP images directly in your browser.
            Your files stay on your device for maximum privacy.
          </p>

  <div className="mx-auto mt-14 max-w-3xl">
  <UploadBox />
</div>
        </div>
      </Container>
    </section>
  );
}