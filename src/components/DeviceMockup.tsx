export function DeviceMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div
        aria-hidden
        className="animate-streak pointer-events-none absolute -inset-8 -z-10"
      >
        <div className="absolute left-[8%] top-[12%] h-[70%] w-[38%] rounded-full bg-[radial-gradient(circle,rgba(243,241,236,0.45),transparent_70%)] blur-2xl" />
        <div className="absolute right-[0%] top-[28%] h-[55%] w-[45%] rotate-12 rounded-full bg-[radial-gradient(circle,rgba(243,241,236,0.28),transparent_68%)] blur-3xl" />
        <svg
          className="absolute inset-0 h-full w-full opacity-70"
          viewBox="0 0 560 420"
          fill="none"
        >
          <path
            d="M40 280C120 120 220 80 320 140C420 200 480 90 540 40"
            stroke="url(#streak)"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.55"
          />
          <path
            d="M20 340C140 220 250 250 340 200C430 150 470 220 530 180"
            stroke="url(#streak)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.35"
          />
          <defs>
            <linearGradient id="streak" x1="40" y1="280" x2="540" y2="40">
              <stop stopColor="#e8e2d6" stopOpacity="0" />
              <stop offset="0.45" stopColor="#e8e2d6" />
              <stop offset="1" stopColor="#e8e2d6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="animate-float relative">
        {/* Laptop */}
        <div className="relative mx-auto w-[92%]">
          <div className="rounded-t-xl border border-white/10 bg-[#152226] p-2 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="overflow-hidden rounded-lg bg-ink">
              <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                <span className="ml-2 h-1.5 flex-1 rounded-full bg-white/5" />
              </div>
              <div className="grid aspect-[16/10] grid-cols-[0.9fr_1.1fr] gap-3 p-4">
                <div className="flex flex-col justify-center gap-2">
                  <div className="h-2 w-16 rounded bg-teal/80" />
                  <div className="h-3 w-28 rounded bg-mist/90" />
                  <div className="h-2 w-24 rounded bg-mist/30" />
                  <div className="mt-2 h-6 w-20 rounded-full bg-teal" />
                </div>
                <div className="relative overflow-hidden rounded-md bg-gradient-to-br from-slate to-[#1a2a30]">
                  <div className="absolute inset-3 rounded bg-[linear-gradient(135deg,rgba(243,241,236,0.2),transparent_50%),radial-gradient(circle_at_70%_30%,rgba(242,244,245,0.12),transparent_45%)]" />
                  <div className="absolute bottom-3 left-3 right-3 h-8 rounded bg-ink/50 backdrop-blur" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto h-3 w-[104%] rounded-b-md bg-[#1a262b]">
            <div className="absolute left-1/2 top-1 h-1 w-16 -translate-x-1/2 rounded-full bg-white/10" />
          </div>
          <div className="mx-auto h-1.5 w-[70%] rounded-b-lg bg-[#121c20]" />
        </div>

        {/* Phone */}
        <div className="absolute -bottom-2 right-[2%] w-[28%] min-w-[96px] rotate-[-6deg]">
          <div className="rounded-[1.1rem] border border-white/15 bg-[#10181b] p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="overflow-hidden rounded-[0.85rem] bg-ink">
              <div className="mx-auto mt-1.5 h-1 w-8 rounded-full bg-white/15" />
              <div className="space-y-2 p-2.5 pt-3">
                <div className="h-1.5 w-10 rounded bg-teal/80" />
                <div className="h-2 w-14 rounded bg-mist/80" />
                <div className="aspect-[4/5] rounded-md bg-gradient-to-b from-slate to-[#162328]" />
                <div className="h-5 rounded-full bg-teal" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
