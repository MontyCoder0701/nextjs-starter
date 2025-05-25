"use client";

import Link from "next/link";
import { useState } from "react";

export default function DefaultTemplate({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white border-gray-200 shadow-sm">
        <div className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
          <Link href="/" className="flex items-center gap-2">Logo</Link>

          <nav className="hidden md:flex gap-6 text-sm font-medium">
            {[1, 2, 3, 4, 5].map(n => (
              <Link key={n} href="/" className="hover:underline">Item {n}</Link>
            ))}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="text-gray-800">{isMobileMenuOpen ? "Close" : "Open"}</div>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden px-6 pb-4 space-y-2 text-sm font-medium">
            {[1, 2, 3, 4, 5].map(n => (
              <Link key={n} href="/" className="block hover:underline">Item {n}</Link>
            ))}
          </div>
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
            <a className="font-semibold hover:underline" href="/" target="_blank" rel="noopener noreferrer">
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
