"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, User, Instagram, Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
          {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-teal-700 ${
                pathname === item.href ? "text-teal-700" : "text-gray-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-lg font-bold text-gray-800">ANYA'S</span>
          <div className="bg-orange-400 px-2 py-1 text-xs font-bold text-white">ATELIER</div>
        </Link>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-teal-700" />
          <User className="w-5 h-5 text-gray-600 cursor-pointer hover:text-teal-700" />
          <div className="hidden md:flex items-center space-x-1 text-sm text-gray-600 cursor-pointer hover:text-teal-700">
            <span>INSTAGRAM</span>
            <Instagram className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col space-y-4 p-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium transition-colors hover:text-teal-700 ${
                  pathname === item.href ? "text-teal-700" : "text-gray-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
