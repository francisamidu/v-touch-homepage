import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-lg font-bold">ANYA'S</span>
              <div className="bg-orange-400 px-2 py-1 text-xs font-bold">ATELIER</div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Bespoke fashion design studio creating unique, personalized garments that reflect your individual style
              and vision.
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-xs font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center">
                <span className="text-xs font-bold">t</span>
              </div>
              <div className="w-8 h-8 bg-pink-500 rounded flex items-center justify-center">
                <span className="text-xs font-bold">i</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-white">QUICK LINKS</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white cursor-pointer">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white cursor-pointer">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white cursor-pointer">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white cursor-pointer">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-white">SERVICES</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Bespoke Bridal</li>
              <li className="hover:text-white cursor-pointer">Custom Attire</li>
              <li className="hover:text-white cursor-pointer">Corporate Uniforms</li>
              <li className="hover:text-white cursor-pointer">Fashion Consultation</li>
              <li className="hover:text-white cursor-pointer">Alterations</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-white">CONTACT</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>hello@anyasatelier.com</li>
              <li>+1 (555) 123-4567</li>
              <li>
                123 Fashion District
                <br />
                New York, NY 10001
              </li>
              <li>
                Mon-Fri: 9AM-6PM
                <br />
                Sat: 10AM-4PM
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">© Copyright 2024 Anya's Atelier | All Rights Reserved</p>
          <div className="flex space-x-3">
            <div className="w-6 h-6 bg-red-600 rounded"></div>
            <div className="w-6 h-6 bg-blue-600 rounded"></div>
            <div className="w-6 h-6 bg-blue-800 rounded"></div>
            <div className="w-6 h-6 bg-red-500 rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}
