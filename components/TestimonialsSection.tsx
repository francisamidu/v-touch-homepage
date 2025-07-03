"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { avatars, testimonials } from "@/data/testimonials";
import ImageComponent from "./ImageComponent";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const goPrev = () =>
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const goNext = () =>
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  const testimonial = testimonials[current];

  return (
    <section className="relative py-16 px-4 bg-gray-50 overflow-hidden">
      {/* Decorative Quotes */}
      <Quote
        className="absolute left-4 top-12 w-28 h-28 text-gray-200 opacity-60 -z-10 hidden md:block"
        strokeWidth={1}
      />
      <Quote
        className="absolute right-4 top-12 w-28 h-28 text-gray-200 opacity-60 -z-10 hidden md:block rotate-180"
        strokeWidth={1}
      />

      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Customers Review's
        </h2>
        <div className="flex items-center justify-center w-full mb-6">
          <button
            aria-label="Previous testimonial"
            onClick={goPrev}
            className="rounded-full p-2 hover:bg-gray-200 transition mr-4"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <div className="flex-1 text-center">
            <p className="text-gray-700 text-lg md:text-xl mb-6">
              {testimonial.quote}
            </p>
            <div className="font-bold text-lg md:text-xl text-gray-900 mb-1">
              {testimonial.name}
            </div>
            <div className="text-gray-500 text-sm mb-2">{testimonial.role}</div>
          </div>

          <button
            aria-label="Next testimonial"
            onClick={goNext}
            className="rounded-full p-2 hover:bg-gray-200 transition ml-4"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        {/* Avatars Row */}
        <div className="flex items-center justify-center gap-4 mt-6 mb-2">
          {testimonials.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setCurrent(idx)}
              className={`rounded-full border-2 transition-all duration-200 focus:outline-none
                ${
                  idx === current
                    ? "border-teal-700 ring-2 ring-teal-200"
                    : "border-transparent opacity-70 hover:opacity-100"
                }
              `}
              aria-label={`Show testimonial from ${t.name}`}
            >
              <ImageComponent
                src={t.image}
                alt={t.name}
                fallbackSrc={`${avatars[idx]?.src}`}
                loading="lazy"
                width={current === idx ? 64 : 48}
                height={current === idx ? 64 : 48}
                className={`rounded-full object-cover ${
                  idx === current ? "scale-110" : "scale-100"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
