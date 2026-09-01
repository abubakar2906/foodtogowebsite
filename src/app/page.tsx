import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TrackingBar from "@/components/TrackingBar";
import DealsSection from "@/components/DealsSection";
import PartnerCarousel from "@/components/PartnerCarousel";

const RESTAURANTS = [
  { logo: "/logo-baek.png", name: "BAEK Coffee Shop" },
  { logo: "/logo-pizzahouse.png", name: "Pizza House, Lagos" },
  { logo: "/logo-gooddays.png", name: "Good Days Pizza Co" },
  { logo: "/logo-rabbito.png", name: "Rabbito Melty, Lagos" },
  { logo: "/logo-baketales.png", name: "Bake Tales, Lagos" },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <Hero />

        {/* Tracking bar */}
        <TrackingBar />

        {/* Deals */}
        <DealsSection />

        {/* Popular Restaurants */}
        <section className="mx-auto max-w-[1200px] px-4 pb-6 sm:px-6">
          <h2 className="max-w-[8rem] font-heading text-2xl font-bold leading-tight text-ink sm:text-[28px]">
            Popular Restaurants
          </h2>

          <div className="no-scrollbar mt-6 flex snap-x gap-4 overflow-x-auto pb-2">
            {RESTAURANTS.map((r) => (
              <article
                key={r.name}
                className="w-[45%] shrink-0 snap-start overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 sm:w-[calc((100%-4rem)/5)]"
              >
                <div className="relative aspect-square">
                  <Image
                    src={r.logo}
                    alt={r.name}
                    fill
                    sizes="(max-width: 640px) 45vw, 20vw"
                    className="object-cover"
                  />
                </div>
                <div className="bg-orange px-3 py-2.5">
                  <p className="font-heading text-xs font-semibold leading-tight text-white">
                    {r.name}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* The Future of Food Delivery */}
        <section className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Visual */}
            <div className="relative mx-auto w-full max-w-md lg:mx-0">
              {/* orange splash */}
              <Image
                src="/splash.png"
                alt=""
                width={500}
                height={500}
                className="pointer-events-none absolute -left-4 -top-6 z-10 h-24 w-24 sm:h-28 sm:w-28"
              />
              {/* green accent square */}
              <div className="absolute bottom-4 right-4 h-[80%] w-[70%] translate-x-4 translate-y-4 rounded-lg bg-brand" />
              {/* photo */}
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/future-woman.png"
                  alt="Enjoying a freshly delivered meal"
                  width={1254}
                  height={1254}
                  className="h-auto w-full"
                />
              </div>
              {/* donut sticker */}
              <Image
                src="/sticker-donut.png"
                alt=""
                width={415}
                height={491}
                className="pointer-events-none absolute -bottom-4 right-2 z-20 h-24 w-auto sm:h-28"
              />
            </div>

            {/* Text */}
            <div>
              <h2 className="font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl">
                The Future of Food Delivery Starts Here
              </h2>
              <p className="mt-5 text-[15px] font-medium leading-relaxed text-ink/80">
                We&apos;re building more than just a food delivery platform,
                we&apos;re creating a faster, smarter, and more connected way for
                people to experience food every day. From your favorite local
                spots to the restaurants you&apos;ve yet to discover, our mission
                is to bring great meals closer to everyone with seamless ordering,
                reliable delivery, and technology designed around convenience.
              </p>
            </div>
          </div>
        </section>

        {/* Savor banner */}
        <section className="mx-auto max-w-[1200px] px-4 py-4 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/savor-banner.png"
              alt="Savor tasty meals at home — from the best local kitchens to your door in minutes."
              width={3168}
              height={1344}
              className="h-auto w-full"
            />
            {/* app store badges */}
            <div className="absolute bottom-[9%] left-[7%] flex items-center gap-3">
              <a href="#" aria-label="Get it on Google Play" className="flex items-center gap-2 rounded-lg bg-black px-3 py-1.5 text-white sm:px-4 sm:py-2">
                <svg width="18" height="18" viewBox="0 0 512 512" fill="none" className="shrink-0">
                  <path d="M48 59v394c0 6 3 11 8 14l224-211L56 45c-5 3-8 8-8 14z" fill="#00D3FF" />
                  <path d="M368 256l-88-83L64 42c-3-2-6-3-9-3l225 217z" fill="#00F076" />
                  <path d="M368 256l-88 83 225 217c3-1 6-2 8-4l-145-296z" fill="#FFCE00" />
                  <path d="M368 256l145-77c9-5 9-18 0-23L368 256l145 77c9-5 9-18 0-23l-145-54z" fill="#FF3A44" />
                </svg>
                <span className="leading-none">
                  <span className="block text-[8px] sm:text-[9px]">AVAILABLE ON</span>
                  <span className="block text-xs font-semibold sm:text-sm">Google Play</span>
                </span>
              </a>
              <a href="#" aria-label="Download on the App Store" className="flex items-center gap-2 rounded-lg bg-black px-3 py-1.5 text-white sm:px-4 sm:py-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                  <path d="M16.5 1.6c0 1.1-.4 2.1-1.2 3-.9 1-2.1 1.6-3.3 1.5-.1-1.1.4-2.2 1.1-3 .9-1 2.2-1.6 3.4-1.5zM20.3 17c-.5 1.2-.8 1.7-1.4 2.7-.9 1.4-2.2 3.2-3.8 3.2-1.4 0-1.8-.9-3.7-.9s-2.4.9-3.7.9c-1.6 0-2.8-1.6-3.7-3C1.4 16 1.1 11.5 2.7 9.1c1-1.6 2.7-2.6 4.3-2.6 1.6 0 2.6.9 3.9.9 1.3 0 2.1-.9 3.9-.9 1.4 0 2.9.8 4 2.1-3.5 1.9-2.9 6.9.5 8.3z" />
                </svg>
                <span className="leading-none">
                  <span className="block text-[8px] sm:text-[9px]">GET IT ON</span>
                  <span className="block text-xs font-semibold sm:text-sm">App Store</span>
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Partner / Rider carousel */}
        <PartnerCarousel />
      </main>

      <Footer />
    </>
  );
}
