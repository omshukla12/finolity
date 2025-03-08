"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navItems = [
  {
    title: "Home",
    href: "/",
    isActive: true,
  },
  {
    title: "Services",
    href: "#",
    hasDropdown: true,
    items: ["IT Services", "Cloud Solutions", "Cybersecurity"],
  },
  {
    title: "Industries",
    href: "#",
  },
  {
    title: "Market Research",
    href: "#",
    hasDropdown: true,
    items: ["Reports", "Analysis", "Insights"],
  },
  {
    title: "Company",
    href: "#",
    hasDropdown: true,
    items: ["About", "Team", "Careers"],
  },
  {
    title: "Brands",
    href: "#",
    hasDropdown: true,
    items: ["Portfolio", "Case Studies"],
  },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            intelion
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.title}>
                  {item.hasDropdown ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-300 hover:text-white">
                        <span>{item.title}</span>
                        <ChevronDown className="h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {item.items?.map((subItem) => (
                          <DropdownMenuItem key={subItem}>
                            <Link href="#" className="w-full">
                              {subItem}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-gray-300 hover:text-white ${item.isActive ? "text-red-600" : ""}`}
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="hidden items-center space-x-6 md:flex">
            <div className="text-right">
              <div className="text-sm text-gray-400">Client Support →</div>
              <div className="font-semibold text-white">0612-2500971</div>
            </div>
            <Button variant="default" className="bg-black text-white hover:bg-gray-900">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="p-2 text-white md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-white/10 py-4 md:hidden">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className={`block text-gray-300 hover:text-white ${item.isActive ? "text-red-600" : ""}`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t border-white/10 pt-4">
              <div className="mb-2 text-sm text-gray-400">Client Support</div>
              <div className="mb-4 font-semibold text-white">0612-2500971</div>
              <Button className="w-full bg-black text-white hover:bg-gray-900">Contact Us</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

