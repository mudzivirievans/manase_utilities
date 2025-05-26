"use client";

import { motion } from "@/lib/motion";
import Link from "next/link";
import Image from "next/image";

const heroStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with bottom shadow gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Hero background"
          fill
          className="object-cover object-[center_30%]"
          priority
        />
        {/* Subtle dark gradient at bottom for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-agri-green/10 via-transparent to-agri-brown/60" />
      </div>

      {/* Centered Content with strong text shadow and staggered animation */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="show"
          className="max-w-4xl w-full mx-auto text-center"
        >
          <motion.h1
            variants={fadeUp}
            className="font-manrope text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-[0_4px_32px_rgba(0,0,0,0.7)]"
          >
            Sustainable Irrigation Solutions for African Agriculture
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg font-light text-white/90 sm:text-xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
          >
            Empowering farmers with innovative technology for efficient water management
            and renewable energy solutions across Zimbabwe.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex justify-center gap-4"
          >
            <Link
              href="/quote"
              className="rounded-full bg-white/90 px-8 py-3 text-sm font-semibold text-agri-green shadow-xl transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-agri-green focus:ring-offset-2 backdrop-blur"
            >
              Book a Free Site Assessment
            </Link>
            <Link
              href="/services"
              className="rounded-full bg-agri-green/90 px-8 py-3 text-sm font-semibold text-white shadow-xl transition hover:bg-agri-green focus:outline-none focus:ring-2 focus:ring-agri-green focus:ring-offset-2 backdrop-blur flex items-center gap-2"
            >
              Explore Our Services
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1 animate-pulse">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Cue */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, type: "spring", stiffness: 120 }}
        className="absolute left-1/2 bottom-6 z-20 -translate-x-1/2 flex flex-col items-center"
      >
        <div className="h-10 w-6 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur p-1 flex items-start justify-center shadow-lg">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="h-3 w-1 rounded-full bg-agri-gold"
          />
        </div>
        <span className="mt-2 text-xs text-white/80 font-medium tracking-wide animate-pulse">Scroll</span>
      </motion.div>
    </section>
  );
} 