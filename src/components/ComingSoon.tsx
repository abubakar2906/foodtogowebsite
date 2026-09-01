import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ComingSoon({ title }: { title: string }) {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 items-center justify-center px-4 py-24">
        <div className="text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-brand">
            Foodtogo
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold text-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-muted">
            This page is coming soon. The design for this screen hasn&apos;t been
            provided yet.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
