"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Bell } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Services', href: '/services' },
    { name: 'Announcements', href: '/announcements' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'FAQs', href: '/faqs' },
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 px-6 md:px-10 py-4 flex justify-between items-center transition-all duration-300 font-sans ${isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-black/5 text-black' : 'bg-transparent text-contrast'}`}>
        <Link href="/" className="text-xl font-semibold tracking-tight z-10 flex items-center">
          Ayushman Events
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 z-10 text-[14px] font-semibold tracking-wide">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <Link href="/about" className="hover:text-accent transition-colors">About</Link>
          <Link href="/events" className="hover:text-accent transition-colors">Events</Link>
          
          {/* Services Dropdown */}
          <div className="relative group">
            <Link href="/services" className="hover:text-accent transition-colors flex items-center gap-1 py-4">
              Services
              <svg className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </Link>
            <div className="absolute top-full left-0 mt-0 w-64 bg-white/95 backdrop-blur-xl shadow-xl rounded-2xl border border-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 p-3 flex flex-col gap-1 text-black">
              <Link href="/services#decoration" className="px-4 py-2 hover:bg-surface rounded-xl transition-colors">Decoration</Link>
              <Link href="/services#branding" className="px-4 py-2 hover:bg-surface rounded-xl transition-colors">Branding & Promotion</Link>
              <Link href="/services#hospitality" className="px-4 py-2 hover:bg-surface rounded-xl transition-colors">Hospitality</Link>
              <Link href="/services#wedding" className="px-4 py-2 hover:bg-surface rounded-xl transition-colors">Wedding Management</Link>
              <Link href="/services#production" className="px-4 py-2 hover:bg-surface rounded-xl transition-colors">Event Production</Link>
              <Link href="/services#manpower" className="px-4 py-2 hover:bg-surface rounded-xl transition-colors">Manpower Services</Link>
            </div>
          </div>

          <Link href="/announcements" className="hover:text-accent transition-colors">Announcements</Link>
          <Link href="/gallery" className="hover:text-accent transition-colors">Gallery</Link>
          <Link href="/faqs" className="hover:text-accent transition-colors">FAQs</Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex z-10 items-center space-x-6">
          <div className="text-[15px] font-medium">+91 99960 83019</div>
          <Link href="/contact" className="bg-contrast text-white px-5 py-2.5 rounded-full text-[14px] font-medium hover:bg-accent transition-colors shadow-sm">
            Inquire Now
          </Link>
        </div>

        {/* Mobile Actions & Hamburger */}
        <div className="flex lg:hidden items-center space-x-4 z-50">
          <Link href="/announcements" className="p-2 relative hover:bg-black/5 rounded-full transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full border border-white"></span>
          </Link>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            />
            
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl z-40 lg:hidden flex flex-col pt-24 px-6 pb-6 overflow-y-auto"
            >
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-bold tracking-tight text-contrast hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="w-full h-px bg-black/10 my-4" />
                <div className="text-lg font-medium text-contrast/70 mb-4">
                  +91 99960 83019
                </div>
                <Link 
                  href="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-contrast text-white text-center py-4 rounded-xl text-lg font-bold hover:bg-accent transition-colors w-full"
                >
                  Inquire Now
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
