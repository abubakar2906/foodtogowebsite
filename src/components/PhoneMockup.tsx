/**
 * Programmatic "Track Order" phone screen used in the hero.
 * When the real phone-mockup image arrives, replace the inner screen markup
 * with an <Image src="/phone-mockup.png" ... /> inside the same frame.
 */
export default function PhoneMockup() {
  return (
    <div className="mx-auto w-full rounded-[2rem] border-[6px] border-neutral-900 bg-white shadow-2xl">
      <div className="relative overflow-hidden rounded-[1.6rem] bg-white">
        {/* notch */}
        <div className="absolute left-1/2 top-1.5 h-4 w-16 -translate-x-1/2 rounded-full bg-neutral-900" />

        {/* status bar */}
        <div className="flex items-center justify-between px-4 pt-2 text-[8px] font-semibold text-neutral-800">
          <span>9:41</span>
          <span className="tracking-tight">••• 📶 🔋</span>
        </div>

        {/* header */}
        <div className="flex items-center justify-between px-4 pt-2">
          <span className="text-neutral-700">←</span>
          <span className="text-[11px] font-bold text-neutral-900">Track Order</span>
          <span className="text-neutral-400">?</span>
        </div>

        {/* order status */}
        <div className="px-4 pt-3">
          <p className="text-[7px] text-neutral-400">Order ID: #F2G123456</p>
          <p className="text-[10px] font-bold text-brand">Picked up your order</p>
          <p className="text-[7px] text-neutral-400">Rider is on the way</p>
        </div>

        {/* mini map */}
        <div className="relative mx-3 mt-2 h-24 overflow-hidden rounded-xl bg-[#eae4d8]">
          <svg viewBox="0 0 240 120" className="h-full w-full">
            <path d="M-10 40 C 40 60, 30 90, 80 100" stroke="#a9d4ef" strokeWidth="12" fill="none" opacity="0.7" />
            <path d="M40 90 C 110 70, 150 60, 210 45" stroke="#0a7c43" strokeWidth="4" fill="none" strokeLinecap="round" />
          </svg>
          <span className="absolute left-[16%] top-[70%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 ring-4 ring-blue-500/25" />
          <span className="absolute right-[10%] top-[34%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-orange text-[9px]">
            🛵
          </span>
        </div>

        {/* rider card */}
        <div className="px-4 pt-3">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-full bg-gradient-to-br from-amber-700 to-amber-500" />
            <span className="leading-tight">
              <span className="flex items-center gap-1 text-[9px] font-bold text-neutral-900">
                John David <span className="text-amber-500">★</span>
                <span className="text-[8px] font-normal text-neutral-500">4.9</span>
              </span>
              <span className="text-[7px] text-neutral-400">Your rider</span>
            </span>
          </div>

          <div className="mt-2 flex items-center justify-between">
            <span className="leading-tight">
              <span className="block text-[7px] text-neutral-400">Rider currently at</span>
              <span className="block text-[9px] font-bold text-neutral-900">Oju Elegba</span>
              <span className="block text-[7px] text-neutral-400">3 mins away</span>
            </span>
            <span className="flex gap-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand/10 text-[8px]">📞</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand/10 text-[8px]">💬</span>
            </span>
          </div>
        </div>

        {/* delivery time */}
        <div className="mt-3 flex items-center justify-between border-t border-neutral-100 px-4 py-2.5">
          <span className="text-[7px] text-neutral-400">Estimated delivery</span>
          <span className="text-[13px] font-extrabold text-brand">12:27 PM</span>
        </div>
      </div>
    </div>
  );
}
