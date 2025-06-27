import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-6 py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          {/* Left Model with Orange Circle */}
          <div className="absolute left-0 top-0">
            <div className="relative">
              <div className="w-80 h-80 bg-orange-200 rounded-full absolute -top-10 -left-10"></div>
              <div className="relative z-10 pt-8">
                <Image
                  src="/placeholder.svg?height=450&width=300"
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
            <div className="absolute bottom-0 left-8 flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 bg-gray-300 rounded-full border-2 border-white overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt={`Customer ${i}`}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Center Content */}
          <div className="text-center py-16">
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              COUTURE THAT
              <br />
              DEFINES YOU
            </h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Discover bespoke fashion crafted exclusively for you. Each piece tells your unique story through
              meticulous design, premium materials, and unparalleled artistry.
            </p>
            <Link href="/services">
              <Button className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-full font-medium">
                START YOUR JOURNEY
              </Button>
            </Link>
          </div>

          {/* Right Model with Orange Circle */}
          <div className="absolute right-0 top-0">
            <div className="relative">
              <div className="w-80 h-80 bg-orange-200 rounded-full absolute -top-10 -right-10"></div>
              <div className="relative z-10 pt-8">
                <Image
                  src="/placeholder.svg?height=450&width=300"
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
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <div className="w-2 h-8 bg-gray-800 rounded-full"></div>
            <div className="w-2 h-4 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">
              <span className="text-gray-800">OUR </span>
              <span className="text-gray-400">SERVICES</span>
            </h2>
            <Link href="/services">
              <Button className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-2 rounded-full font-medium">
                VIEW ALL
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: "Bespoke Bridal", image: "/placeholder.svg?height=200&width=150" },
              { name: "Custom Attire", image: "/placeholder.svg?height=200&width=150" },
              { name: "Corporate Uniforms", image: "/placeholder.svg?height=200&width=150" },
              { name: "Fashion Consultation", image: "/placeholder.svg?height=200&width=150" },
            ].map((service, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="bg-gray-100 rounded-2xl overflow-hidden mb-4 aspect-[3/4] group-hover:shadow-lg transition-shadow">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    width={150}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium text-gray-800 group-hover:text-teal-700 transition-colors">
                  {service.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">
              <span className="text-gray-800">RECENT </span>
              <span className="text-gray-400">CREATIONS</span>
            </h2>
            <Link href="/portfolio">
              <Button className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-2 rounded-full font-medium">
                VIEW PORTFOLIO
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="bg-white rounded-2xl overflow-hidden aspect-[3/4] shadow-sm group-hover:shadow-lg transition-shadow">
                  <Image
                    src={`/placeholder.svg?height=400&width=300`}
                    alt={`Portfolio piece ${item}`}
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="font-bold text-gray-800 text-lg">Elegant Evening Gown</h3>
                  <p className="text-sm text-gray-600">Custom Design 2024</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">
            <span className="text-gray-800">STAY UPDATED WITH</span>
            <br />
            <span className="text-gray-400">ANYA'S ATELIER</span>
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Be the first to know about new collections, exclusive designs, and styling tips from our atelier.
          </p>
          <div className="flex max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="rounded-l-full border-r-0 px-6 py-3 text-gray-600"
            />
            <Button className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-r-full font-medium">
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
