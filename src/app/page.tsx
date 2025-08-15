import type { Metadata } from 'next';
import Link from 'next/link';
import { businessConfig } from '@/lib/config';

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Fiber Optic Network Design & FTTX Deployment Specialists
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              25+ years designing and deploying next-generation fiber networks for telecom providers, ISPs, and enterprises across North America. Complete solutions from core to edge infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-305-555-3423"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Now: (305) 555-FIBER
              </a>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">
              Complete Fiber Infrastructure Solutions
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">FTTX Network Design & Engineering</h3>
                <p className="text-gray-600 mb-6">
                  Custom fiber optic network architecture for FTTH, FTTB, and FTTC deployments. Smart planning that maximizes coverage while minimizing deployment costs.
                </p>
                <ul className="text-gray-700 mb-6 space-y-2">
                  <li>• Comprehensive network topology design</li>
                  <li>• Capacity planning and future-proofing</li>
                  <li>• Cost optimization strategies</li>
                  <li>• Regulatory compliance planning</li>
                </ul>
                <Link
                  href="/services/fiber-optic-network-design"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Learn More →
                </Link>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Fiber Cable Manufacturing</h3>
                <p className="text-gray-600 mb-6">
                  Complete manufacturing capability for fiber cables and accessories. Quality-controlled production ensuring optimal performance for your specific deployment needs.
                </p>
                <ul className="text-gray-700 mb-6 space-y-2">
                  <li>• Custom cable specifications</li>
                  <li>• Quality assurance testing</li>
                  <li>• Rapid production timelines</li>
                  <li>• Cost-effective supply chain</li>
                </ul>
                <Link
                  href="/services/fiber-cable-manufacturing"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Learn More →
                </Link>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">FTTH Project Financing</h3>
                <p className="text-gray-600 mb-6">
                  Flexible financing options that make fiber-to-the-home deployment accessible. Proven ROI models and payment structures that work for your business.
                </p>
                <ul className="text-gray-700 mb-6 space-y-2">
                  <li>• Flexible financing terms</li>
                  <li>• ROI optimization strategies</li>
                  <li>• Government funding assistance</li>
                  <li>• Cash flow management</li>
                </ul>
                <Link
                  href="/services/project-financing"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">
              Trusted by Leading Organizations Across North America
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  What Sets Grupo Grande Apart?
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    25+ years of proven fiber optic expertise
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    Complete manufacturing capability for rapid deployment
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    Financing options that make FTTH accessible
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    End-to-end solutions from core to edge infrastructure
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    Miami-based operations serving the Americas
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">Industries We Serve</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Telecommunications Service Providers</li>
                  <li>• Internet Service Providers (ISPs)</li>
                  <li>• Cable MSOs (Multiple System Operators)</li>
                  <li>• Enterprise Private Networks</li>
                  <li>• Municipal Broadband Initiatives</li>
                  <li>• Smart City Infrastructure Projects</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Network Infrastructure?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your fiber optic network requirements. Our team of experts is ready to design the perfect FTTX solution for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-305-555-3423"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call (305) 555-FIBER
              </a>
              <a
                href="mailto:info@grupogrande.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Request Consultation
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Grupo Grande Inc.</h3>
              <p className="text-gray-400">
                Leading fiber optic network design and FTTX deployment specialists. 
                Serving telecommunications providers across North America since 1998.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                1200 Biscayne Boulevard<br />
                Miami, Florida 33132<br />
                Phone: (305) 555-FIBER<br />
                Email: info@grupogrande.com
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="text-gray-400 space-y-2">
                <li><Link href="/services/fiber-optic-network-design" className="hover:text-white">Network Design</Link></li>
                <li><Link href="/services/fttx-deployment" className="hover:text-white">FTTX Deployment</Link></li>
                <li><Link href="/services/fiber-cable-manufacturing" className="hover:text-white">Cable Manufacturing</Link></li>
                <li><Link href="/services/project-financing" className="hover:text-white">Project Financing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Industries</h4>
              <ul className="text-gray-400 space-y-2">
                <li><Link href="/industries/telecommunications-providers" className="hover:text-white">Telecom Providers</Link></li>
                <li><Link href="/industries/cable-mso" className="hover:text-white">Cable MSOs</Link></li>
                <li><Link href="/industries/enterprise-networks" className="hover:text-white">Enterprise Networks</Link></li>
                <li><Link href="/industries/municipal-broadband" className="hover:text-white">Municipal Broadband</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Grupo Grande Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
