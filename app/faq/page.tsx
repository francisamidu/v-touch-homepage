"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const faqData = [
  {
    category: "General Inquiries",
    questions: [
      {
        question: "Where is Anya's Atelier located?",
        answer:
          "Our studio is located in the heart of New York's Fashion District at 123 Fashion Avenue, New York, NY 10001. We also offer virtual consultations for clients who cannot visit in person.",
      },
      {
        question: "What are your business hours?",
        answer:
          "We're open Monday through Friday, 9 AM to 6 PM, and Saturday from 10 AM to 4 PM. We're closed on Sundays. Appointments are required for all visits.",
      },
      {
        question: "Do you offer virtual consultations?",
        answer:
          "Yes! We offer comprehensive virtual consultations via video call. This includes style discussions, measurements guidance, and fabric selection assistance.",
      },
    ],
  },
  {
    category: "Design Process",
    questions: [
      {
        question: "How long does the design process take?",
        answer:
          "Timelines vary by service: Bridal gowns typically take 4-6 months, custom attire 6-8 weeks, corporate uniforms 8-12 weeks, and fashion consultations 2-4 hours.",
      },
      {
        question: "How many fittings are included?",
        answer:
          "Most services include 2-4 fittings depending on complexity. Bridal gowns include 3-4 fittings, custom attire includes 2-3 fittings, and corporate uniforms are fitted per team member.",
      },
      {
        question: "Can I make changes during the design process?",
        answer:
          "Yes, we encourage collaboration! Minor changes can be made throughout the process. Major design changes may affect timeline and pricing, which we'll discuss beforehand.",
      },
      {
        question: "What if I need my garment sooner than the standard timeline?",
        answer:
          "We offer rush services for an additional fee when our schedule permits. Please contact us as early as possible to discuss expedited options.",
      },
    ],
  },
  {
    category: "Pricing & Payments",
    questions: [
      {
        question: "How do you determine pricing?",
        answer:
          "Pricing is based on design complexity, materials chosen, construction techniques required, and timeline. We provide detailed quotes after our initial consultation.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept cash, check, and all major credit cards. We also offer payment plans for larger projects, with 50% due at start and 50% upon completion.",
      },
      {
        question: "Do you require a deposit?",
        answer:
          "Yes, we require a 50% deposit to begin work on your project. This covers initial design work and material costs. The remaining balance is due upon completion.",
      },
      {
        question: "Are there any additional costs I should know about?",
        answer:
          "Our quotes are comprehensive and include design, construction, and standard fittings. Additional costs may apply for rush orders, extensive revisions, or premium materials.",
      },
    ],
  },
  {
    category: "Materials",
    questions: [
      {
        question: "What types of fabrics do you work with?",
        answer:
          "We work with a wide range of high-quality fabrics including silk, wool, cotton, linen, and specialty materials. We source from premium suppliers and can accommodate specific fabric requests.",
      },
      {
        question: "Can I provide my own fabric?",
        answer:
          "We're happy to work with client-provided fabrics. We'll need to inspect the material first to ensure it's suitable for your design and in sufficient quantity.",
      },
      {
        question: "Do you offer sustainable fabric options?",
        answer:
          "Yes, we're committed to sustainability and offer eco-friendly fabric options including organic cotton, peace silk, and recycled materials. We can discuss sustainable options during consultation.",
      },
      {
        question: "What if I want to incorporate family heirloom pieces?",
        answer:
          "We love incorporating meaningful elements! We can work with heirloom lace, buttons, or fabric pieces. We'll assess the condition and discuss the best way to integrate them into your design.",
      },
    ],
  },
  {
    category: "Aftercare",
    questions: [
      {
        question: "Do you provide garment care instructions?",
        answer:
          "Yes, every completed garment comes with detailed care instructions tailored to the specific fabrics and construction techniques used in your piece.",
      },
      {
        question: "Do you offer alterations after completion?",
        answer:
          "We offer complimentary minor adjustments within 30 days of delivery. For major alterations or changes after this period, we charge standard alteration fees.",
      },
      {
        question: "What if my garment needs repairs?",
        answer:
          "We stand behind our work and offer repair services for any construction issues. For damage due to wear or accidents, we provide repair services at reasonable rates.",
      },
      {
        question: "How should I store my custom garment?",
        answer:
          "We provide specific storage recommendations with each garment. Generally, we recommend breathable garment bags, cedar blocks for wool items, and proper hanging or folding techniques.",
      },
    ],
  },
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">
            <span className="text-gray-800">FREQUENTLY ASKED</span> <span className="text-gray-400">QUESTIONS</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our bespoke design process, pricing, and services.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-3xl font-bold mb-8">
                <span className="text-gray-800">{category.category.split(" ")[0]}</span>{" "}
                <span className="text-gray-400">{category.category.split(" ").slice(1).join(" ")}</span>
              </h2>

              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const id = `${categoryIndex}-${questionIndex}`
                  const isOpen = openItems.includes(id)

                  return (
                    <div key={questionIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleItem(id)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-gray-800 pr-4">{item.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-gray-800">STILL HAVE</span> <span className="text-gray-400">QUESTIONS?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're here to help! Contact us directly for personalized answers to your specific questions.
          </p>
          <Link href="/contact">
            <Button className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-full font-medium mr-4">
              CONTACT US
            </Button>
          </Link>
          <Link href="/services">
            <Button
              variant="outline"
              className="border-teal-700 text-teal-700 hover:bg-teal-50 px-8 py-3 rounded-full font-medium bg-transparent"
            >
              VIEW SERVICES
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
