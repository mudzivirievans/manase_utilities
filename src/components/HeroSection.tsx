"use client";

import { motion } from "@/lib/motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with object-position to crop top clouds */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Hero background"
          fill
          className="object-cover object-[center_30%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/0 to-black/50" />
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
              className="font-manrope text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl drop-shadow-lg"
            >
              Sustainable Irrigation for African Agriculture
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-lg font-light text-white/90 sm:text-xl max-w-2xl mx-auto drop-shadow-md"
            >
              Empowering farmers with innovative technology for efficient water management and renewable energy solutions across Zimbabwe.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex justify-center gap-4"
            >
              <Link
                href="/quote"
                className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-agri-green shadow-lg transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-agri-green focus:ring-offset-2"
              >
                Book a Free Site Assessment
              </Link>
              <Link
                href="/services"
                className="rounded-full bg-agri-green px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-agri-green/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
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
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="h-8 w-5 rounded-full border-2 border-white/30 p-1">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="h-2 w-1 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
} 