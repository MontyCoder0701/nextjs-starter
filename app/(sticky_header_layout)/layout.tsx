"use client";

import Link from "next/link";
import { useState } from "react";

import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white border-gray-200 shadow-sm">
        <div className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
          <Link href="/" className="flex items-center gap-2">
            Logo
          </Link>

          <nav className="hidden md:flex gap-6">
            <Button variant="ghost" className="hover:cursor-pointer">
              <Link key={1} href="/">
                Home
              </Link>
            </Button>

            <Button variant="ghost" className="hover:cursor-pointer">
              <Link key={2} href="/page2">
                Page 2
              </Link>
            </Button>

            <Button variant="ghost" className="hover:cursor-pointer">
              <Link key={3} href="/page3">
                Page 3
              </Link>
            </Button>

            <Button variant="ghost" className="hover:cursor-pointer">
              <Link key={4} href="/page4">
                Page 4
              </Link>
            </Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden px-2 pb-4 space-y-2">
            <Button
              variant="ghost"
              className="flex justify-start w-full hover:cursor-pointer"
            >
              <Link key={1} href="/">
                Home
              </Link>
            </Button>

            <Button
              variant="ghost"
              className="flex justify-start w-full hover:cursor-pointer"
            >
              <Link key={2} href="/page2">
                Page 2
              </Link>
            </Button>

            <Button
              variant="ghost"
              className="flex justify-start w-full hover:cursor-pointer"
            >
              <Link key={3} href="/page3">
                Page 3
              </Link>
            </Button>

            <Button
              variant="ghost"
              className="flex justify-start w-full hover:cursor-pointer"
            >
              <Link key={4} href="/page4">
                Page 4
              </Link>
            </Button>
          </nav>
        )}
      </header>

      {/* Main */}
      <main className="flex-1 max-w-6xl mx-auto px-6 py-4 w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-100 border-t border-gray-300 px-6 sm:px-10 py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <div className="text-center sm:text-left">
            <a
              className="font-semibold hover:underline"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Footer
            </a>
            <div>Address</div>
          </div>

          <div className="flex gap-4">
            <div>TEL</div>
            <div>FAX</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
