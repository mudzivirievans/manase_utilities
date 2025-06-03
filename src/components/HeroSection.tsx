"use client";

import { motion } from "@/lib/motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden pt-12">
      {/* Background Image with object-position to crop top clouds */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
      </div>

      {/* Glassmorphism Content Overlay, moved lower */}
      <div className="relative z-10 flex h-full items-end justify-center px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32">
        <div className="max-w-4xl w-full mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="inline-block w-full max-w-3xl px-8 py-10 mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-sora text-5xl font-bold tracking-wide text-white sm:text-6xl md:text-7xl drop-shadow-md mt-4"
            >
              Smart Irrigation. Greener Africa.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-lg font-medium text-white/90 sm:text-xl max-w-2xl mx-auto drop-shadow-md leading-relaxed"
            >
              Grow smarter. Save water. Empower your land with AI-optimized irrigation and eco-powered solutions built for African farmers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                href="/quote"
                className="rounded-full bg-agri-green px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-agri-green/90 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Book a Free Site Assessment
              </Link>
              <Link
                href="/services"
                className="rounded-full border-2 border-white px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Explore Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="h-8 w-5 rounded-full border-2 border-white/30 p-1 mx-auto">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="h-2 w-1 rounded-full bg-white mx-auto"
          />
        </div>
        <span className="text-white text-xs mt-2 block">Scroll Down</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-auto mt-1 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
} 