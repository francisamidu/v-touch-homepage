import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

import item1 from "@/assets/images/model-grey.webp";
import item2 from "@/assets/images/models-black.webp";
import item3 from "@/assets/images/models-socializing.webp";
// import item4 from "@/assets/images/model-yellow.webp";

const portfolioItems = [
  {
    image: item1,
    title: "Grey Model",
    description: "Description for Model 1",
  },
  {
    image: item2,
    title: "Black Models",
    description: "Description for Model 2",
  },
  {
    image: item3,
    title: "Socializing Models",
    description: "Description for Model 3",
  },
  // {
  //   image: item4,
  //   title: "Yellow Model",
  //   description: "Description for Model 4",
  // },
];

export default function PortfolioPreview() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold">
            <span className="text-gray-800">RECENT </span>
            <span className="outline-text !text-4xl">DESIGNS</span>
          </h2>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1 text-gray-600 hover:text-teal-700 font-medium transition-colors"
          >
            Portfolio
            <IconArrowUpRight size={16} stroke={2} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="bg-white rounded-2xl overflow-hidden aspect-[3/4] shadow-sm group-hover:shadow-lg transition-shadow">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="font-bold text-gray-800 text-lg">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
