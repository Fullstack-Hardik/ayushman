export default function Marquee() {
  return (
    <div className="relative flex overflow-x-hidden border-y border-contrast/10 bg-surface py-6">
      <div className="animate-marquee whitespace-nowrap flex items-center space-x-8">
        {[...Array(8)].map((_, i) => (
          <span key={i} className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-contrast/20 mx-8 flex items-center">
            LUXURY REDEFINED <span className="text-accent ml-8 text-2xl">✦</span>
          </span>
        ))}
      </div>
      <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center space-x-8 py-6">
        {[...Array(8)].map((_, i) => (
          <span key={i} className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-contrast/20 mx-8 flex items-center">
            LUXURY REDEFINED <span className="text-accent ml-8 text-2xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
