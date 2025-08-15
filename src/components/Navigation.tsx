'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Grupo Grande Inc.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="text-gray-700 hover:text-blue-600 transition-colors flex items-center"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border z-50">
                  <div className="py-2">
                    <Link
                      href="/services"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium"
                      onClick={() => setServicesOpen(false)}
                    >
                      All Services Overview
                    </Link>
                    <div className="border-t border-gray-100 my-2"></div>
                    <Link
                      href="/services/fiber-optic-network-design"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      onClick={() => setServicesOpen(false)}
                    >
                      Fiber Network Design & Engineering
                    </Link>
                    <Link
                      href="/services/fttx-deployment"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      onClick={() => setServicesOpen(false)}
                    >
                      FTTX Deployment & Installation
                    </Link>
                    <Link
                      href="/services/fiber-cable-manufacturing"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      onClick={() => setServicesOpen(false)}
                    >
                      Fiber Cable Manufacturing
                    </Link>
                    <Link
                      href="/services/project-financing"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      onClick={() => setServicesOpen(false)}
                    >
                      FTTH Project Financing
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div className="relative">
              <button
                className="text-gray-700 hover:text-blue-600 transition-colors flex items-center"
                onClick={() => setIndustriesOpen(!industriesOpen)}
              >
                Industries
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {industriesOpen && (
                <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border z-50">
                  <div className="py-2">
                    <Link
                      href="/industries/telecommunications-providers"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      onClick={() => setIndustriesOpen(false)}
                    >
                      Telecommunications Providers
                    </Link>
                    <Link
                      href="/industries/cable-mso"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      onClick={() => setIndustriesOpen(false)}
                    >
                      Cable MSOs
                    </Link>
                    <Link
                      href="/industries/enterprise-networks"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      onClick={() => setIndustriesOpen(false)}
                    >
                      Enterprise Networks
                    </Link>
                    <Link
                      href="/industries/municipal-broadband"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      onClick={() => setIndustriesOpen(false)}
                    >
                      Municipal Broadband
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>

            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>

            {/* CTA Button */}
            <a
              href="tel:+1-305-555-3423"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Call (305) 555-FIBER
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200">
            <div className="space-y-2 pt-4">
              <Link
                href="/"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services */}
              <div>
                <button
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex justify-between items-center"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="ml-4 space-y-1">
                    <Link
                      href="/services"
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                      onClick={() => { setIsMenuOpen(false); setServicesOpen(false); }}
                    >
                      All Services
                    </Link>
                    <Link
                      href="/services/fiber-optic-network-design"
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                      onClick={() => { setIsMenuOpen(false); setServicesOpen(false); }}
                    >
                      Network Design
                    </Link>
                    <Link
                      href="/services/fttx-deployment"
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                      onClick={() => { setIsMenuOpen(false); setServicesOpen(false); }}
                    >
                      FTTX Deployment
                    </Link>
                    <Link
                      href="/services/fiber-cable-manufacturing"
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                      onClick={() => { setIsMenuOpen(false); setServicesOpen(false); }}
                    >
                      Cable Manufacturing
                    </Link>
                    <Link
                      href="/services/project-financing"
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                      onClick={() => { setIsMenuOpen(false); setServicesOpen(false); }}
                    >
                      Project Financing
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Industries */}
              <div>
                <button
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex justify-between items-center"
                  onClick={() => setIndustriesOpen(!industriesOpen)}
                >
                  Industries
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {industriesOpen && (
                  <div className="ml-4 space-y-1">
                    <Link
                      href="/industries/telecommunications-providers"
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                      onClick={() => { setIsMenuOpen(false); setIndustriesOpen(false); }}
                    >
                      Telecommunications
                    </Link>
                    <Link
                      href="/industries/cable-mso"
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                      onClick={() => { setIsMenuOpen(false); setIndustriesOpen(false); }}
                    >
                      Cable MSOs
                    </Link>
                    <Link
                      href="/industries/enterprise-networks"
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                      onClick={() => { setIsMenuOpen(false); setIndustriesOpen(false); }}
                    >
                      Enterprise
                    </Link>
                    <Link
                      href="/industries/municipal-broadband"
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                      onClick={() => { setIsMenuOpen(false); setIndustriesOpen(false); }}
                    >
                      Municipal
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>

              <Link
                href="/contact"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="px-4 py-2">
                <a
                  href="tel:+1-305-555-3423"
                  className="block w-full text-center bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Call (305) 555-FIBER
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}