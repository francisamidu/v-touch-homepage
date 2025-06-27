import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">
            <span className="text-gray-800">MEET</span> <span className="text-gray-400">ANYA</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The visionary designer behind every exquisite creation, bringing dreams to life through fabric and thread.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                <span className="text-gray-800">OUR</span> <span className="text-gray-400">STORY</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2018, Anya's Atelier emerged from a passionate belief that fashion should be deeply
                  personal, beautifully crafted, and timelessly elegant. What began as a small studio in the heart of
                  New York's Fashion District has blossomed into a renowned atelier serving discerning clients
                  worldwide.
                </p>
                <p>
                  Anya's journey began at the prestigious Parsons School of Design, where she honed her technical skills
                  while developing her distinctive aesthetic. After working with several high-end fashion houses, she
                  realized her true calling lay in creating one-of-a-kind pieces that celebrate each client's unique
                  story.
                </p>
                <p>
                  Today, our atelier stands as a testament to the power of bespoke craftsmanship, where traditional
                  techniques meet contemporary design sensibilities. Every piece that leaves our studio carries with it
                  the promise of exceptional quality and unparalleled attention to detail.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=480"
                  alt="Anya in her design studio"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-gray-800 text-lg mb-1">Anya Volkov</h3>
                <p className="text-sm text-gray-600 mb-2">Founder & Lead Designer</p>
                <p className="text-xs text-gray-500">Est. 2018</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-800">MEET THE</span> <span className="text-gray-400">TEAM</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our talented team of designers, pattern makers, and seamstresses work together to bring your vision to
              life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Anya Volkov",
                role: "Founder & Lead Designer",
                bio: "Parsons graduate with 15+ years in haute couture. Specializes in bridal and evening wear.",
                image: "/placeholder.svg?height=400&width=300",
              },
              {
                name: "Sofia Martinez",
                role: "Senior Pattern Maker",
                bio: "Master pattern maker with expertise in complex draping and construction techniques.",
                image: "/placeholder.svg?height=400&width=300",
              },
              {
                name: "Elena Chen",
                role: "Head Seamstress",
                bio: "Couture specialist with unparalleled attention to detail and finishing techniques.",
                image: "/placeholder.svg?height=400&width=300",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-full aspect-[3/4] bg-white rounded-2xl overflow-hidden mb-6 shadow-sm">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-800 text-xl mb-2">{member.name}</h3>
                <p className="text-teal-700 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                <span className="text-gray-800">OUR</span> <span className="text-gray-400">MISSION</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  To create exceptional, personalized garments that empower individuals to express their unique identity
                  and style. We believe that true luxury lies not in labels, but in the perfect marriage of
                  craftsmanship, creativity, and client collaboration.
                </p>
                <p>
                  Every piece we create is a testament to our commitment to sustainable practices, ethical sourcing, and
                  the preservation of traditional couture techniques for future generations.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-8">
                <span className="text-gray-800">OUR</span> <span className="text-gray-400">VISION</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  To redefine luxury fashion by making bespoke design accessible to those who value quality,
                  craftsmanship, and individuality. We envision a world where every wardrobe contains pieces that are as
                  unique as their owners.
                </p>
                <p>
                  Our goal is to expand our atelier's reach while maintaining the intimate, personalized service that
                  defines our brand, ensuring every client feels truly seen and celebrated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">
            <span className="text-gray-800">AWARDS &</span> <span className="text-gray-400">RECOGNITION</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { year: "2024", award: "Best Emerging Designer", org: "Fashion Week NY" },
              { year: "2023", award: "Sustainable Fashion Award", org: "Green Fashion Council" },
              { year: "2022", award: "Bridal Designer of the Year", org: "Bridal Fashion Awards" },
              { year: "2021", award: "Rising Star Award", org: "Fashion Institute" },
            ].map((award, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-teal-700 mb-2">{award.year}</div>
                <h3 className="font-bold text-gray-800 mb-2">{award.award}</h3>
                <p className="text-sm text-gray-600">{award.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-gray-800">READY TO CREATE</span> <span className="text-gray-400">TOGETHER?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and bring your dream garment to life.
          </p>
          <Link href="/contact">
            <Button className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-full font-medium mr-4">
              SCHEDULE CONSULTATION
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
  )
}
