export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  projectImage: string;
  rating: number;
  project: string;
  quote: string;
  fullStory: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Bride",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
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
    image: "https://randomuser.me/api/portraits/men/1.jpg",
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
    image: "https://randomuser.me/api/portraits/women/2.jpg",
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
    image: "https://randomuser.me/api/portraits/women/3.jpg",
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
    image: "https://randomuser.me/api/portraits/men/2.jpg",
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
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    projectImage: "/placeholder.svg?height=300&width=400",
    rating: 5,
    project: "Capsule Wardrobe",
    quote:
      "Anya's fashion consultation completely transformed my style. She helped me understand what works for my body type and lifestyle, and now I love everything in my closet.",
    fullStory:
      "I was stuck in a style rut and didn't know how to update my wardrobe. Anya's consultation gave me the confidence to try new styles and invest in quality pieces that truly reflect who I am.",
    location: "Manhattan, NY",
  },
];
