import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, Quote } from "lucide-react"
import Link from "next/link"

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Bride",
    image: "/placeholder.svg?height=100&width=100",
    projectImage: "/placeholder.svg?height=300&width=400",
    rating: 5,
    project: "Custom Bridal Gown",
    quote:
      "Anya transformed my wedding dress dreams into reality. The attention to detail was extraordinary, and the entire process felt like a beautiful journey. I felt absolutely radiant on my special day.",
    fullStory:
      "Working with Anya was an incredible experience from start to finish. She listened to my vision, incorporated family heirloom lace, and created a gown that was uniquely mine. The craftsmanship was impeccable, and I received countless compliments.",
    location: "New York, NY",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Restaurant Owner",
    image: "/placeholder.svg?height=100&width=100",
    projectImage: "/placeholder.svg?height=300&width=400",
    rating: 5,
    project: "Staff Uniform Collection",
    quote:
      "The uniform designs elevated our restaurant's aesthetic completely. Our staff looks professional and feels confident, which translates to better service for our guests.",
    fullStory:
      "Anya understood our brand identity perfectly and created uniforms that reflect our upscale dining concept. The fabrics are practical yet elegant, and the fit is flattering for all our team members.",
    location: "Manhattan, NY",
  },
  {
    id: 3,
    name: "Isabella Rodriguez",
    role: "Corporate Executive",
    image: "/placeholder.svg?height=100&width=100",
    projectImage: "/placeholder.svg?height=300&width=400",
    rating: 5,
    project: "Executive Wardrobe",
    quote:
      "My custom suits from Anya have become my power armor. The fit is impeccable, and I feel confident in every boardroom. These pieces are investment pieces that will last for years.",
    fullStory:
      "As a CEO, my appearance matters greatly. Anya created a capsule wardrobe of suits that are both professional and uniquely me. The quality of construction and attention to fit is unmatched.",
    location: "Brooklyn, NY",
  },
  {
    id: 4,
    name: "Emily Watson",
    role: "Mother of the Bride",
    image: "/placeholder.svg?height=100&width=100",
    projectImage: "/placeholder.svg?height=300&width=400",
    rating: 5,
    project: "Special Occasion Dress",
    quote:
      "Anya created the perfect dress for my daughter's wedding. I felt elegant and age-appropriate while still being fashionable. The color complemented the wedding palette beautifully.",
    fullStory:
      "Finding the right dress for such an important occasion was stressful until I met Anya. She understood exactly what I needed and created a custom piece that made me feel beautiful and confident.",
    location: "Westchester, NY",
  },
  {
    id: 5,
    name: "Marcus Thompson",
    role: "Groom",
    image: "/placeholder.svg?height=100&width=100",
    projectImage: "/placeholder.svg?height=300&width=400",
    rating: 5,
    project: "Custom Wedding Suit",
    quote:
      "The wedding suit Anya designed was everything I wanted and more. The fit was perfect, and the details like the custom lining made it truly special. I felt amazing on our wedding day.",
    fullStory:
      "I wanted something unique for my wedding that would complement my fiancée's dress. Anya created a suit that was both classic and personal, with subtle details that made it one-of-a-kind.",
    location: "Queens, NY",
  },
  {
    id: 6,
    name: "Rachel Green",
    role: "Fashion Enthusiast",
    image: "/placeholder.svg?height=100&width=100",
    projectImage: "/placeholder.svg?height=300&width=400",
    rating: 5,
    project: "Capsule Wardrobe",
    quote:
      "Anya's fashion consultation completely transformed my style. She helped me understand what works for my body type and lifestyle, and now I love everything in my closet.",
    fullStory:
      "I was stuck in a style rut and didn't know how to update my wardrobe. Anya's consultation gave me the confidence to try new styles and invest in quality pieces that truly reflect who I am.",
    location: "Manhattan, NY",
  },
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">
            <span className="text-gray-800">CLIENT</span> <span className="text-gray-400">TESTIMONIALS</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our valued clients about their bespoke fashion journey and the transformative power of custom
            design.
          </p>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-teal-50 rounded-3xl p-12 text-center">
            <Quote className="w-12 h-12 text-teal-700 mx-auto mb-6" />
            <blockquote className="text-2xl text-gray-800 font-medium mb-8 leading-relaxed max-w-4xl mx-auto">
              "Working with Anya was more than just creating a dress—it was about bringing a vision to life. Every
              stitch, every detail was crafted with love and precision. I've never felt more beautiful or confident."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Sarah Mitchell"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-gray-800">Sarah Mitchell</h3>
                <p className="text-teal-700 text-sm">Bridal Client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {testimonial.role} • {testimonial.location}
                    </p>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="bg-gray-100 rounded-xl overflow-hidden aspect-[4/3] mb-4">
                    <Image
                      src={testimonial.projectImage || "/placeholder.svg"}
                      alt={testimonial.project}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-medium text-teal-700 text-sm">{testimonial.project}</h4>
                </div>

                <blockquote className="text-gray-600 italic mb-4 leading-relaxed">"{testimonial.quote}"</blockquote>

                <div className="text-gray-500 text-sm leading-relaxed">{testimonial.fullStory}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">
            <span className="text-gray-800">VIDEO</span> <span className="text-gray-400">TESTIMONIALS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((video) => (
              <div key={video} className="relative">
                <div className="bg-gray-200 rounded-2xl aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent ml-1"></div>
                    </div>
                    <p className="text-gray-600">Video Testimonial Coming Soon</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-gray-800">SUCCESS</span> <span className="text-gray-400">STORIES</span>
          </h2>

          <div className="space-y-12">
            {[
              {
                title: "The Perfect Wedding Day",
                client: "Sarah & Michael",
                challenge: "Creating a timeless bridal gown that incorporated family heirloom lace",
                solution:
                  "Designed a classic silhouette that beautifully showcased the vintage lace while adding modern touches",
                outcome: "A stunning wedding that was featured in local bridal magazines",
              },
              {
                title: "Restaurant Rebranding Success",
                client: "Le Jardin Restaurant",
                challenge: "Updating staff uniforms to match the restaurant's upscale renovation",
                solution:
                  "Created elegant uniforms that balanced professionalism with the restaurant's French-inspired aesthetic",
                outcome: "20% increase in positive customer reviews mentioning staff presentation",
              },
            ].map((story, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{story.title}</h3>
                <p className="text-teal-700 font-medium mb-6">Client: {story.client}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Challenge</h4>
                    <p className="text-gray-600 text-sm">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Solution</h4>
                    <p className="text-gray-600 text-sm">{story.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Outcome</h4>
                    <p className="text-gray-600 text-sm">{story.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-gray-800">READY TO CREATE</span>{" "}
            <span className="text-gray-400">YOUR SUCCESS STORY?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of satisfied clients who have experienced the transformative power of bespoke design.
          </p>
          <Link href="/contact">
            <Button className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-full font-medium mr-4">
              START YOUR PROJECT
            </Button>
          </Link>
          <Link href="/services">
            <Button
              variant="outline"
              className="border-teal-700 text-teal-700 hover:bg-teal-50 px-8 py-3 rounded-full font-medium bg-transparent"
            >
              EXPLORE SERVICES
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
