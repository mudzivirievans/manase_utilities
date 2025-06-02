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
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/0 to-white/0" />
      </div>

      {/* Glassmorphism Content Overlay, moved lower */}
      <div className="relative z-10 flex h-full items-end justify-center px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32">
        <div className="max-w-4xl w-full mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="inline-block w-full max-w-3xl rounded-2xl px-8 py-10 mx-auto bg-white/30 backdrop-blur-xl border border-white/30 shadow-2xl"
            style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)" }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-manrope text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Sustainable Irrigation for African Agriculture
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg font-light text-white/90 sm:text-xl"
            >
              Empowering farmers with innovative technology for efficient water management
              and renewable energy solutions across Zimbabwe.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex justify-center gap-4"
            >
              <Link
                href="/quote"
                className="rounded-full bg-white/80 px-8 py-3 text-sm font-semibold text-primary shadow-lg transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 backdrop-blur"
              >
                Book a Free Site Assessment
              </Link>
              <Link
                href="/services"
                className="rounded-full bg-white/20 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
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