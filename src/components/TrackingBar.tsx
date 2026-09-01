/* "Know Exactly Where Your Food Is" — live tracking progress banner */

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12.5 10 17 19 7" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Scooter() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="6" cy="18" r="2.2" stroke="#fff" strokeWidth="1.6" />
      <circle cx="18" cy="18" r="2.2" stroke="#fff" strokeWidth="1.6" />
      <path d="M4 8h5l4 8h3M13 8h4l1.5 5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

const STEPS = [
  { label: "Order placed", time: "11:50 AM", done: true },
  { label: "Order confirmed", time: "11:52 AM", done: true },
  { label: "Picked up", time: "12:05 PM", sub: "Surulere", done: true },
  { label: "Rider is at Oju Elegba", time: "12:18 PM", active: true },
];

export default function TrackingBar() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 pt-8 sm:px-6">
      <div className="rounded-2xl bg-[#151515] px-6 py-6 text-white sm:px-8 sm:py-7">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-8">
          {/* intro */}
          <div className="lg:w-64 lg:shrink-0">
            <h2 className="font-heading text-lg font-bold">Know Exactly Where Your Food Is</h2>
            <p className="mt-2 text-xs leading-relaxed text-white/55">
              Track your rider from the restaurant to your doorstep with live
              location update Lagos.
            </p>
          </div>

          {/* progress */}
          <div className="flex flex-1 items-start">
            {STEPS.map((step, i) => (
              <div key={step.label} className="flex flex-1 items-start">
                <div className="flex flex-col items-center text-center">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full ${
                      step.active
                        ? "border-2 border-brand bg-[#151515]"
                        : "bg-brand"
                    }`}
                  >
                    {step.active ? <Scooter /> : <Check />}
                  </span>
                  <span className="mt-2 max-w-[92px] text-[11px] font-semibold leading-tight">
                    {step.label}
                  </span>
                  {step.sub && (
                    <span className="text-[10px] text-white/45">{step.sub}</span>
                  )}
                  <span className="text-[10px] text-white/45">{step.time}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <span className="mt-4 h-0.5 flex-1 bg-brand/70" />
                )}
              </div>
            ))}
          </div>

          {/* arriving */}
          <div className="border-white/15 lg:border-l lg:pl-8">
            <p className="text-sm font-semibold">Arriving in</p>
            <p className="font-heading text-3xl font-extrabold text-brand">3 mins</p>
            <p className="mt-1 text-xs text-white/55">
              Stay tuned, your meal is almost here! 🎉
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
