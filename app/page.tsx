"use client"; // Required for animations in Next.js App Router

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="p-6">
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl font-bold text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Arihant 2025
      </motion.h1>

      {/* Animated Subtitle */}
      <motion.p
        className="mt-2 text-lg text-center text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Annual College Fest 🎉
      </motion.p>

      {/* Animated Gallery */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.25 }
          }
        }}
      >
        {[
          { src: "/images/stage.jpeg", alt: "Stage" },
          { src: "/images/crowd.jpeg", alt: "Crowd" },
          { src: "/images/fun.jpeg", alt: "Fun" }
        ].map((img, idx) => (
          <motion.div
            key={idx}
            className="overflow-hidden rounded-xl shadow-lg"
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={300}
              className="rounded-xl object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
