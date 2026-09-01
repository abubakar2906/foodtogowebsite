import Link from "next/link";
import PhoneMockup from "@/components/PhoneMockup";

/* ---------- icons ---------- */
function BoltIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13l0-8Z" fill="#f58220" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2c-3.9 0-7 3-7 6.9 0 5 7 12.1 7 12.1s7-7.1 7-12.1C19 5 15.9 2 12 2Z" fill="#0a7c43" />
      <circle cx="12" cy="9" r="2.5" fill="#fff" />
    </svg>
  );
}
function BagIcon({ color = "#f58220" }: { color?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 7h12l-1 13H7L6 7Z" fill={color} />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}
function ScooterIcon({ color = "#f58220" }: { color?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="6" cy="18" r="2.4" fill={color} />
      <circle cx="18" cy="18" r="2.4" fill={color} />
      <path d="M4 8h5l4 7h3.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M13 8h4l1.6 5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
function HomeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 11 12 4l8 7" stroke="#f58220" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 10v9h12v-9" fill="#f58220" />
    </svg>
  );
}
function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12h13m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------- stat + step helpers ---------- */
function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="shrink-0">{icon}</span>
      <span className="leading-tight">
        <span className="block text-sm font-bold text-ink">{value}</span>
        <span className="block text-xs text-muted">{label}</span>
      </span>
    </div>
  );
}

const STEPS = [
  {
    icon: <BagIcon color="#0a7c43" />,
    ring: "bg-brand/10",
    title: "1. Choose Your Meal",
    desc: "Browse restaurants and order in seconds.",
  },
  {
    icon: <ScooterIcon color="#f58220" />,
    ring: "bg-orange/15",
    title: "2. Track Your Rider Live",
    desc: "See your rider's exact location in real time.",
  },
  {
    icon: <HomeIcon />,
    ring: "bg-brand/10",
    title: "3. Fast Doorstep Delivery",
    desc: "Fresh meals delivered quickly and safely.",
  },
];

/* ---------- stylized map ---------- */
function MapPanel() {
  return (
    <div className="absolute inset-0">
      <svg viewBox="0 0 800 520" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
        <rect width="800" height="520" fill="#eae4d8" />
        {/* park patches */}
        <path d="M40 60h150v90H40z" fill="#cfe3c4" opacity="0.7" rx="8" />
        <circle cx="640" cy="120" r="70" fill="#cfe3c4" opacity="0.6" />
        <rect x="520" y="360" width="180" height="120" rx="14" fill="#cfe3c4" opacity="0.6" />
        {/* river */}
        <path d="M250 -20 C 300 120, 180 220, 260 340 S 200 500, 280 560" stroke="#a9d4ef" strokeWidth="34" fill="none" opacity="0.8" strokeLinecap="round" />
        {/* roads */}
        <g stroke="#ffffff" strokeWidth="8" opacity="0.9">
          <line x1="0" y1="180" x2="800" y2="150" />
          <line x1="0" y1="330" x2="800" y2="360" />
          <line x1="120" y1="0" x2="150" y2="520" />
          <line x1="430" y1="0" x2="470" y2="520" />
          <line x1="640" y1="0" x2="660" y2="520" />
        </g>
        <g stroke="#ffffff" strokeWidth="4" opacity="0.7">
          <line x1="0" y1="90" x2="800" y2="70" />
          <line x1="0" y1="440" x2="800" y2="470" />
          <line x1="300" y1="0" x2="330" y2="520" />
        </g>
        {/* delivery route: green then orange */}
        <path d="M210 150 C 360 150, 400 150, 470 210" stroke="#0a7c43" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M470 210 C 540 270, 560 320, 620 360" stroke="#f58220" strokeWidth="6" fill="none" strokeLinecap="round" />
      </svg>

      {/* markers + callouts */}
      {/* rider */}
      <div className="absolute left-[24%] top-[26%] -translate-x-1/2 -translate-y-1/2">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-white shadow-md">
          <ScooterIcon color="#f58220" />
        </div>
      </div>
      <div className="absolute left-[30%] top-[6%] rounded-xl bg-white px-3 py-2 text-xs shadow-md">
        <span className="block text-[11px] text-muted">Rider currently at</span>
        <span className="block font-bold text-ink">Tejuosho</span>
        <span className="block text-[11px] text-brand">2 mins away</span>
      </div>

      {/* restaurant pin */}
      <div className="absolute left-[77%] top-[70%] -translate-x-1/2 -translate-y-1/2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full rounded-bl-none bg-orange shadow-md rotate-45">
          <span className="-rotate-45 text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M6 3v8m0 0a2 2 0 0 0 2-2V3m10 0c-2 0-3 2-3 5s1 3 1 3v10m-8-6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
        </div>
      </div>
      <div className="absolute left-[66%] top-[38%] rounded-xl bg-white px-3 py-2 text-xs shadow-md">
        <span className="block text-[11px] text-muted">Order from</span>
        <span className="block font-bold text-ink">Surulere</span>
      </div>

      {/* user location */}
      <div className="absolute left-[46%] top-[72%] -translate-x-1/2 -translate-y-1/2">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 ring-4 ring-blue-500/25" />
      </div>
      <div className="absolute left-[38%] top-[52%] rounded-xl bg-white px-3 py-2 text-xs shadow-md">
        <span className="block text-[11px] text-muted">You are in</span>
        <span className="block font-bold text-ink">Yaba</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 pt-6 sm:px-6">
      <div className="overflow-hidden rounded-2xl bg-[#faf6ef]">
        {/* top: text + visual */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,44%)_minmax(0,56%)]">
          {/* left */}
          <div className="px-6 py-10 sm:px-10 sm:py-12">
            <h1 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl xl:text-6xl">
              Hot meals.
              <br />
              <span className="text-brand">Live tracking.</span>
              <br />
              Delivered fast.
            </h1>
            <p className="mt-5 max-w-md text-sm text-muted sm:text-base">
              Order from your favorite restaurants and track your rider in real
              time from pickup to your doorstep.
            </p>
            <Link
              href="/download"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-dark"
            >
              Order Now
              <ArrowRight />
            </Link>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              <Stat icon={<BoltIcon />} value="25 mins" label="Average delivery" />
              <Stat icon={<PinIcon />} value="Live tracking" label="Real-time updates" />
              <Stat icon={<BagIcon />} value="500+" label="Restaurants" />
            </div>
          </div>

          {/* right visual */}
          <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[420px]">
            <MapPanel />
            {/* phone mockup — swap PhoneMockup contents for the real asset when provided */}
            <div className="pointer-events-none absolute -bottom-2 right-3 w-[42%] max-w-[230px] sm:right-6 lg:right-8">
              <PhoneMockup />
            </div>
          </div>
        </div>

        {/* how it works */}
        <div className="border-t border-black/5 px-6 py-8 sm:px-10">
          <h2 className="text-center font-heading text-base font-semibold text-ink">
            How it works
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {STEPS.map((step, i) => (
              <div key={step.title} className="relative flex items-start gap-3">
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${step.ring}`}>
                  {step.icon}
                </span>
                <div>
                  <p className="font-heading text-sm font-semibold text-ink">{step.title}</p>
                  <p className="mt-1 text-xs text-muted">{step.desc}</p>
                </div>
                {i < STEPS.length - 1 && (
                  <span className="absolute -right-3 top-6 hidden text-black/20 sm:block">
                    <svg width="24" height="10" viewBox="0 0 24 10" fill="none" aria-hidden>
                      <path d="M0 5h20m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" strokeLinecap="round" />
                    </svg>
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
