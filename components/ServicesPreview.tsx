"use client";
import Image from "next/image";
import Link from "next/link";
import bridalWear from "@/assets/images/bridal-wear.webp";
import customAttire from "@/assets/images/custom-dress.webp";
import corporateUniforms from "@/assets/images/corporate-uniforms.webp";
import weddingDresses from "@/assets/images/wedding-gown.webp";
import { IconArrowUpRight } from "@tabler/icons-react";
import { motion } from "motion/react";
import { useScreenWidth } from "@/hooks/use-screen-width";
import { useEffect } from "react";

const services = [
  {
    name: "Bespoke Bridal",
    image: bridalWear,
  },
  {
    name: "Custom Attire",
    image: customAttire,
  },
  {
    name: "Corporate Uniforms",
    image: corporateUniforms,
  },
  {
    name: "Wedding Dresses",
    image: weddingDresses,
  },
];

export default function ServicesPreview() {
  const { screenWidth } = useScreenWidth();
  useEffect(() => {
    console.log(screenWidth);
  }, [screenWidth]);
  return (
    <section>
      <div className="max-w-7xl mx-auto p-3 md:p-0">
        <motion.div
          className="flex items-center justify-between mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold">
            <span className="text-gray-800">OUR </span>
            <span className="outline-text !text-4xl">SERVICES</span>
          </h2>
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-gray-600 hover:text-teal-700 font-medium transition-colors"
          >
            Services
            <IconArrowUpRight size={16} stroke={2} />
          </Link>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="text-center group cursor-pointer border border-gray-200 rounded-2xl p-4"
              initial={{ opacity: 0, y: 20 }}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }} // Reduced from 0.2 to 0.1 for better mobile triggering
            >
              <div className="bg-gray-100 rounded-2xl overflow-hidden mb-4 aspect-[3/4] group-hover:shadow-lg transition-shadow">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  width={150}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-medium text-gray-800 group-hover:text-teal-700 transition-colors">
                {service.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
