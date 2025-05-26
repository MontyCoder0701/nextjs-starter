"use client";

import Link from "next/link";
import { useState } from "react";

import { ChevronsUpDown, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white border-gray-200 shadow-sm">
        <div className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
          <Link href="/" className="flex items-center gap-2">
            Logo
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Nav Trigger 1</NavigationMenuTrigger>

                <NavigationMenuContent>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    asChild
                  >
                    <Link href="/" passHref>
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  asChild
                >
                  <Link href="/page2" passHref>
                    Page 2
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  asChild
                >
                  <Link href="/page3" passHref>
                    Page 3
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  asChild
                >
                  <Link href="/page4" passHref>
                    Page 4
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <nav className="md:hidden px-4 pb-4">
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex justify-between w-full hover:cursor-pointer"
                >
                  <span>Nav Trigger 1</span>
                  <ChevronsUpDown className="h-4 w-4" />
                </Button>
              </CollapsibleTrigger>

              <CollapsibleContent className="space-y-2 px-6">
                <Button
                  asChild
                  variant="ghost"
                  className="flex justify-start w-full hover:cursor-pointer"
                >
                  <Link href="/">Page 1</Link>
                </Button>
              </CollapsibleContent>
            </Collapsible>

            <Button
              asChild
              variant="ghost"
              className="flex justify-start w-full hover:cursor-pointer"
            >
              <Link href="/page2">Page 2</Link>
            </Button>

            <Button
              asChild
              variant="ghost"
              className="flex justify-start w-full hover:cursor-pointer"
            >
              <Link href="/page3">Page 3</Link>
            </Button>

            <Button
              asChild
              variant="ghost"
              className="flex justify-start w-full hover:cursor-pointer"
            >
              <Link href="/page4">Page 4</Link>
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
