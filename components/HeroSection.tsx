"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import leftModel from "@/assets/images/model-black-remove-no-bg.png";
import rightModel from "@/assets/images/model-blue-no-bg.png";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";

const userAvatars = [
  "https://randomuser.me/api/portraits/women/1.jpg",
  "https://randomuser.me/api/portraits/women/2.jpg",
  "https://randomuser.me/api/portraits/women/3.jpg",
  "https://randomuser.me/api/portraits/women/4.jpg",
  "https://randomuser.me/api/portraits/women/5.jpg",
];

export default function HeroSection() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Framer Motion variants for waterfall effect
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const barVariants = {
    initial: { opacity: 0.2, y: -30, scaleY: 0.5 },
    animate: {
      opacity: [0.2, 1, 0.2],
      y: [-30, 0, 30],
      scaleY: [0.5, 1.2, 0.5],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative px-6 py-8 overflow-hidden h-full flex items-center justify-center">
      <AnimatePresence>
        {loading && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-white z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex space-x-2"
              variants={containerVariants}
              initial="initial"
              animate="animate"
            >
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-10 bg-orange-400 rounded-full"
                  variants={barVariants as Variants}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={`w-full max-w-7xl mx-auto mt-8 relative transition-opacity duration-500 ${
          loading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Left Model with Orange Circle */}
        <div className="absolute left-0 top-0 ml-8">
          <div className="relative">
            <div className="w-80 h-80 bg-orange-200 rounded-full absolute -top-10 -left-10"></div>
            <div className="relative z-10 pt-8">
              <Image
                src={leftModel}
                alt="Fashion model with hat"
                width={300}
                height={450}
                className="object-cover"
              />
              <div className="absolute bottom-8 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                Bespoke
              </div>
            </div>
          </div>
          {/* Customer Avatars */}
          <div className="ml-8 mt-2 flex -space-x-2 z-20">
            {userAvatars.map((avatar, index) => (
              <div
                key={index}
                className="w-10 h-10 bg-gray-300 rounded-full border-2 border-white overflow-hidden"
              >
                <Image
                  src={avatar}
                  alt={`Customer ${index}`}
                  width={40}
                  height={40}
                  className="object-cover !h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Center Content */}
        <div className="text-center py-28">
          <h1 className="text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            FASHION MEETS
            <br />
            EXCELLENCE
          </h1>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Rooted in tradition, shaped by your vision. Custom African wear,
            meticulously crafted for your unique identity.
          </p>
          <Link href="/services">
            <Button className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-full font-semibold text-xs">
              START YOUR JOURNEY
            </Button>
          </Link>
        </div>

        {/* Right Model with Orange Circle */}
        <div className="absolute right-0 top-0 mr-8">
          <div className="relative">
            <div className="w-80 h-80 bg-orange-200 rounded-full absolute -top-10 -right-10"></div>
            <div className="relative z-10 pt-8">
              <Image
                src={rightModel}
                alt="Fashion model in elegant attire"
                width={300}
                height={450}
                className="object-cover"
              />
              <div className="absolute top-8 right-4 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom indicators */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-8">
          <div className="w-2 h-8 bg-gray-800 rounded-full"></div>
          <div className="w-2 h-4 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
