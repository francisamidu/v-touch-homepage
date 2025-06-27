"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const portfolioItems = [
  {
    id: 1,
    title: "Ethereal Bridal Gown",
    category: "bridal",
    image: "/placeholder.svg?height=500&width=400",
    description: "Custom silk chiffon gown with hand-embroidered lace details",
    client: "Sarah & Michael's Wedding",
    materials: "Silk chiffon, French lace, pearl beading",
    process: "6 months design and construction process",
  },
  {
    id: 2,
    title: "Corporate Executive Suit",
    category: "corporate",
    image: "/placeholder.svg?height=500&width=400",
    description: "Tailored power suit with modern feminine silhouette",
    client: "Tech CEO Power Wardrobe",
    materials: "Italian wool, mother-of-pearl buttons",
    process: "Precision tailoring with 4 fittings",
  },
  {
    id: 3,
    title: "Midnight Gala Dress",
    category: "evening",
    image: "/placeholder.svg?height=500&width=400",
    description: "Dramatic evening gown with architectural draping",
    client: "Metropolitan Museum Gala",
    materials: "Silk taffeta, crystal embellishments",
    process: "Couture construction techniques",
  },
  {
    id: 4,
    title: "Bohemian Wedding Ensemble",
    category: "bridal",
    image: "/placeholder.svg?height=500&width=400",
    description: "Free-spirited bridal design with organic elements",
    client: "Garden Wedding Celebration",
    materials: "Organic cotton, vintage lace",
    process: "Sustainable design approach",
  },
  {
    id: 5,
    title: "Restaurant Uniform Collection",
    category: "corporate",
    image: "/placeholder.svg?height=500&width=400",
    description: "Elegant staff uniforms for fine dining establishment",
    client: "Michelin Star Restaurant",
    materials: "Performance fabrics, custom buttons",
    process: "Team collaboration and fitting",
  },
  {
    id: 6,
    title: "Avant-Garde Cocktail Dress",
    category: "evening",
    image: "/placeholder.svg?height=500&width=400",
    description: "Bold geometric design with innovative construction",
    client: "Fashion Forward Event",
    materials: "Structured mesh, metallic threads",
    process: "Experimental draping techniques",
  },
]

const categories = [
  { id: "all", label: "All Projects" },
  { id: "bridal", label: "Bridal" },
  { id: "evening", label: "Evening Wear" },
  { id: "corporate", label: "Corporate Uniforms" },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedItem, setSelectedItem] = useState<(typeof portfolioItems)[0] | null>(null)

  const filteredItems =
    activeCategory === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">
            <span className="text-gray-800">OUR</span> <span className="text-gray-400">PORTFOLIO</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse collection of bespoke creations, each telling a unique story through exceptional
            craftsmanship and design.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center space-x-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`px-6 py-2 rounded-full font-medium ${
                  activeCategory === category.id
                    ? "bg-teal-700 hover:bg-teal-800 text-white"
                    : "border-teal-700 text-teal-700 hover:bg-teal-50"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="group cursor-pointer" onClick={() => setSelectedItem(item)}>
                <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-[4/5] mb-4 group-hover:shadow-lg transition-shadow">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-teal-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for detailed view */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              <div>
                <Image
                  src={selectedItem.image || "/placeholder.svg"}
                  alt={selectedItem.title}
                  width={400}
                  height={500}
                  className="w-full rounded-xl object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-3xl font-bold text-gray-800">{selectedItem.title}</h2>
                  <Button
                    onClick={() => setSelectedItem(null)}
                    variant="ghost"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </Button>
                </div>

                <p className="text-gray-600 leading-relaxed">{selectedItem.description}</p>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Client Project</h3>
                    <p className="text-gray-600">{selectedItem.client}</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Materials</h3>
                    <p className="text-gray-600">{selectedItem.materials}</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Process</h3>
                    <p className="text-gray-600">{selectedItem.process}</p>
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-2 rounded-full font-medium">
                    Start Your Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
