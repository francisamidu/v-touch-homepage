"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, Instagram, Menu, X } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  IconMenu,
  IconPhone,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTiktok,
} from "@tabler/icons-react";
import Image from "next/image";
import logo from "@/assets/images/v-touch-logo.png";

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between px-6 py-2">
            <div className="flex items-center space-x-4">
              <IconPhone size={24} stroke={3} color="#fff" />
              <span className="text-white">+251 911 111 111</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-white">Follow us:</span>
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.instagram.com/anyasatelier/"
                  target="_blank"
                >
                  <IconBrandInstagram size={24} stroke={3} color="#fff" />
                </a>
                <a
                  href="https://www.facebook.com/anyasatelier/"
                  target="_blank"
                >
                  <IconBrandFacebook size={24} stroke={3} color="#fff" />
                </a>
                <a href="https://www.tiktok.com/@anyasatelier" target="_blank">
                  <IconBrandTiktok size={24} stroke={3} color="#fff" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex items-center justify-between px-6 py-4">
        {/* Desktop Navigation */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <IconMenu size={24} stroke={3} color="#000" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="ml-10">
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {navItems.map((item) => (
              <DropdownMenuItem key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-teal-700 ${
                    pathname === item.href ? "text-teal-700" : "text-gray-600"
                  }`}
                >
                  {item.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 -mb-2">
          <Image
            className="bg-orange-100"
            src={logo}
            alt="Logo"
            width={50}
            height={50}
          />
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
    </header>
  );
}
