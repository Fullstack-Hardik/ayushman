import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative pt-24 px-8 md:px-16 bg-surface text-contrast border-t border-contrast/10 z-10 overflow-hidden">
      <div className="grid grid-cols-12 gap-8 max-w-[1600px] mx-auto z-10 relative">
        <div className="col-span-12 md:col-span-5">
          <h2 className="text-4xl md:text-6xl display-heading mb-8">COMMAND<br/>THE ROOM.</h2>
          <p className="text-lg text-contrast/60 max-w-md mb-12 font-medium">
            Elevating corporate and luxury events through architectural precision, bespoke decoration, and elite hospitality.
          </p>
          <Link href="/contact" className="bg-contrast text-surface px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-accent hover:text-contrast elite-transition shadow-xl">
            Initiate Contact
          </Link>
        </div>

        <div className="col-span-12 md:col-span-2 md:col-start-8 space-y-4 pt-4">
          <p className="elite-label text-contrast/50">Navigation</p>
          <ul className="space-y-3 font-medium text-lg">
            <li><Link href="/about" className="hover:text-accent elite-transition">About Us</Link></li>
            <li><Link href="/services" className="hover:text-accent elite-transition">Services</Link></li>
            <li><Link href="/gallery" className="hover:text-accent elite-transition">Portfolio</Link></li>
            <li><Link href="/blogs" className="hover:text-accent elite-transition">The Journal</Link></li>
          </ul>
        </div>

        <div className="col-span-12 md:col-span-3 space-y-4 pt-4">
          <p className="elite-label text-contrast/50">Contact & Legal</p>
          <ul className="space-y-3 font-medium text-lg text-contrast/80">
            <li>+91 99960 83019</li>
            <li>inquiry@ayushmanevents.com</li>
            <li className="pt-4"><Link href="/privacy" className="text-sm hover:text-accent elite-transition">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-sm hover:text-accent elite-transition">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      
      {/* Large shadowed company name at bottom */}
      <div className="mt-24 pt-8 flex justify-center items-center w-full relative z-0">
        <h1 className="text-[15vw] leading-none display-heading text-contrast/5 select-none text-center w-full">
          AYUSHMAN
        </h1>
        <div className="absolute bottom-4 left-0 w-full flex justify-between px-8 md:px-16 text-xs font-bold tracking-widest text-contrast/40 uppercase">
          <p>&copy; {new Date().getFullYear()} Ayushman Events</p>
          <p>Engineered with Precision</p>
        </div>
      </div>
    </footer>
  );
}
