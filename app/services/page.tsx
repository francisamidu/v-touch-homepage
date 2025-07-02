import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, Clock, Users, Sparkles } from "lucide-react";
import Link from "next/link";
import bridalWear from "@/assets/images/bridal-wear.webp";
import customAttire from "@/assets/images/custom-dress.webp";
import corporateUniforms from "@/assets/images/corporate-uniforms.webp";

const services = [
  {
    title: "Bespoke Bridal",
    description:
      "Create the wedding dress of your dreams with our comprehensive bridal design service.",
    image: bridalWear,
    timeline: "4-6 months",
    startingPrice: "$3,500",
    includes: [
      "Initial consultation and design concept",
      "Custom pattern creation",
      "3-4 fitting sessions",
      "Premium fabric selection",
      "Hand-finished details",
      "Garment care instructions",
    ],
  },
  {
    title: "Custom Attire",
    description:
      "Personalized clothing for special occasions, everyday wear, and unique style preferences.",
    image: customAttire,
    timeline: "6-8 weeks",
    startingPrice: "$800",
    includes: [
      "Style consultation",
      "Custom measurements",
      "2-3 fitting sessions",
      "Fabric and trim selection",
      "Quality construction",
      "Styling advice",
    ],
  },
  {
    title: "Corporate Uniforms",
    description:
      "Professional uniform design for businesses seeking to enhance their brand identity.",
    image: corporateUniforms,
    timeline: "8-12 weeks",
    startingPrice: "$200 per piece",
    includes: [
      "Brand consultation",
      "Uniform design concepts",
      "Size range development",
      "Quality fabric options",
      "Bulk production",
      "Staff fitting coordination",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">
            <span className="text-gray-800">OUR</span>{" "}
            <span className="text-gray-400 outline-text text-6xl">
              SERVICES
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From bespoke bridal gowns to corporate uniforms, we offer
            comprehensive fashion design services tailored to your unique needs.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-800">WHY CHOOSE</span>{" "}
              <span className="text-gray-400 outline-text text-4xl">
                V-Touch
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
              {[
                {
                  icon: Sparkles,
                  title: "Bespoke Design",
                  description: "Every piece is uniquely crafted for you",
                },
                {
                  icon: Users,
                  title: "Personal Service",
                  description: "One-on-one attention throughout the process",
                },
                {
                  icon: Check,
                  title: "Quality Guarantee",
                  description: "Premium materials and expert craftsmanship",
                },
                {
                  icon: Clock,
                  title: "Timely Delivery",
                  description: "Reliable timelines for your special occasions",
                },
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-teal-700" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={300}
                    height={400}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>

              <div
                className={
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }
              >
                <h2 className="text-4xl font-bold mb-6">
                  <span className="text-gray-800">
                    {service.title.split(" ")[0]}
                  </span>{" "}
                  <span className="text-gray-400">
                    {service.title.split(" ").slice(1).join(" ")}
                  </span>
                </h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2 flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-teal-700" />
                      Timeline
                    </h3>
                    <p className="text-gray-600">{service.timeline}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      Starting From
                    </h3>
                    <p className="text-2xl font-bold text-teal-700">
                      {service.startingPrice}
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-bold text-gray-800 mb-4">
                    What's Included
                  </h3>
                  <ul className="space-y-2">
                    {service.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-teal-700 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/contact">
                  <Button className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-full font-medium">
                    GET STARTED
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-gray-800">READY TO BEGIN</span>{" "}
            <span className="text-gray-400">YOUR JOURNEY?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss your vision and learn how we can
            bring it to life.
          </p>
          <Link href="/contact">
            <Button className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-full font-medium mr-4">
              BOOK CONSULTATION
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button
              variant="outline"
              className="border-teal-700 text-teal-700 hover:bg-teal-50 px-8 py-3 rounded-full font-medium bg-transparent"
            >
              VIEW OUR WORK
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
