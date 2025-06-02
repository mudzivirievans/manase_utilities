"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Our Vision", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <nav className="mx-4 sm:mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl bg-white/30 px-4 sm:px-6 py-3 shadow-xl backdrop-blur-xl border border-white/30">
        {/* Brand Name Only */}
        <Link href="/" className="flex items-center gap-2 group select-none">
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="text-2xl font-extrabold text-agri-green drop-shadow-lg tracking-tight group-hover:scale-105 group-hover:text-agri-sky transition"
          >
            Manase <span className="font-light">Utilities</span>
          </motion.span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-3 py-2 font-medium text-white/90 transition group"
            >
              <span className="relative z-10">
                {link.name}
              </span>
              <motion.span
                layoutId="underline"
                className="absolute left-0 bottom-1 h-0.5 w-full bg-gradient-to-r from-agri-green to-agri-sky rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
              />
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 rounded-full bg-gradient-to-r from-agri-green to-agri-sky px-6 py-2 text-sm font-semibold text-white shadow-lg ring-2 ring-white/30 hover:scale-105 hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-agri-sky/40"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center rounded-full p-2 bg-white/40 backdrop-blur border border-white/30 shadow"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6 text-agri-green" /> : <Menu className="h-6 w-6 text-agri-green" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-start pt-24"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white/80 rounded-2xl shadow-2xl border border-white/30 px-8 py-8 flex flex-col gap-6 w-[90vw] max-w-md"
              onClick={e => e.stopPropagation()}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-semibold text-agri-green text-center py-2 rounded-lg hover:bg-agri-green/10 transition"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 rounded-full bg-gradient-to-r from-agri-green to-agri-sky px-6 py-3 text-base font-bold text-white shadow-lg ring-2 ring-white/30 hover:scale-105 hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-agri-sky/40 text-center"
                onClick={() => setOpen(false)}
              >
                Let's Talk
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
} 