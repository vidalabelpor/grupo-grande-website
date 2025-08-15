

export default function ServicesPage() {
  return (
    <>
      
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Complete Fiber Optic Infrastructure Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From initial network design to final activation, we deliver integrated fiber infrastructure 
              solutions that transform connectivity for telecommunications providers, enterprises, and communities 
              across North America.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">Fiber Optic Network Design & Engineering</h2>
              <p className="text-gray-600 mb-6">
                Custom network architecture that maximizes coverage while minimizing deployment costs. 
                Our designs deliver proven 3-5x ROI with 25+ years of engineering expertise.
              </p>
              <ul className="text-gray-700 mb-6 space-y-2">
                <li>• Custom FTTX network topology design</li>
                <li>• Capacity planning and future-proofing</li>
                <li>• Cost optimization and ROI modeling</li>
                <li>• Regulatory compliance and permitting</li>
              </ul>
              <Link
                href="/services/fiber-optic-network-design"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Explore Network Design →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h2 className="text-2xl font-semibold mb-4 text-green-600">FTTX Deployment & Installation</h2>
              <p className="text-gray-600 mb-6">
                Complete turnkey deployment from design through activation. Our proven processes 
                deliver projects 45% faster than industry average with 99.9% first-time success rates.
              </p>
              <ul className="text-gray-700 mb-6 space-y-2">
                <li>• End-to-end project management</li>
                <li>• Underground and aerial construction</li>
                <li>• Professional splicing and testing</li>
                <li>• Customer premises installation</li>
              </ul>
              <Link
                href="/services/fttx-deployment"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Explore FTTX Deployment →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h2 className="text-2xl font-semibold mb-4 text-purple-600">Fiber Cable Manufacturing</h2>
              <p className="text-gray-600 mb-6">
                Eliminate supply chain risks with our complete manufacturing capability. 
                Custom specifications, quality control, and 35% cost reduction vs. third-party suppliers.
              </p>
              <ul className="text-gray-700 mb-6 space-y-2">
                <li>• Custom cable specifications</li>
                <li>• Quality-controlled manufacturing</li>
                <li>• Rapid production timelines</li>
                <li>• 25-year performance warranty</li>
              </ul>
              <Link
                href="/services/fiber-cable-manufacturing"
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Explore Manufacturing →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h2 className="text-2xl font-semibold mb-4 text-orange-600">FTTH Project Financing</h2>
              <p className="text-gray-600 mb-6">
                Flexible financing solutions that make fiber deployment accessible. 
                BEAD funding expertise and revenue-based financing with proven 350% average ROI.
              </p>
              <ul className="text-gray-700 mb-6 space-y-2">
                <li>• Flexible financing terms</li>
                <li>• BEAD funding application support</li>
                <li>• Revenue-based payment structures</li>
                <li>• Municipal bond coordination</li>
              </ul>
              <Link
                href="/services/project-financing"
                className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Explore Financing →
              </Link>
            </div>
          </div>

          {/* Industries We Serve */}
          <div className="bg-gray-50 p-12 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Industries We Serve
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Telecommunications Providers</h3>
                <p className="text-gray-600">ISPs and regional carriers</p>
                <Link href="/industries/telecommunications-providers" className="text-blue-600 hover:underline text-sm">Learn More →</Link>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Cable MSOs</h3>
                <p className="text-gray-600">HFC modernization solutions</p>
                <Link href="/industries/cable-mso" className="text-blue-600 hover:underline text-sm">Learn More →</Link>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Enterprise Networks</h3>
                <p className="text-gray-600">Mission-critical infrastructure</p>
                <Link href="/industries/enterprise-networks" className="text-blue-600 hover:underline text-sm">Learn More →</Link>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Municipal Broadband</h3>
                <p className="text-gray-600">Community networks & smart cities</p>
                <Link href="/industries/municipal-broadband" className="text-blue-600 hover:underline text-sm">Learn More →</Link>
              </div>
            </div>
          </div>

          {/* Service Differentiators */}
          <div className="bg-blue-50 p-12 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Why Choose Grupo Grande for Your Fiber Infrastructure
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  🏭
                </div>
                <h3 className="text-xl font-semibold mb-3">Integrated Manufacturing</h3>
                <p className="text-gray-600">
                  Complete cable manufacturing eliminates supply chain risks and reduces costs by 35% 
                  compared to third-party suppliers.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  💰
                </div>
                <h3 className="text-xl font-semibold mb-3">Flexible Financing</h3>
                <p className="text-gray-600">
                  Unique financing capabilities including BEAD funding expertise and revenue-based 
                  payment structures that competitors don't offer.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  ⚡
                </div>
                <h3 className="text-xl font-semibold mb-3">Rapid Deployment</h3>
                <p className="text-gray-600">
                  45% faster deployment than industry average with 99.9% first-time activation 
                  success rate and comprehensive project management.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg">
            <h2 className="text-4xl font-bold mb-6">
              Transform Your Network Infrastructure Today
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Ready to deploy world-class fiber infrastructure? Our experts are standing by to discuss 
              your requirements and develop custom solutions that deliver exceptional ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:+1-305-555-3423"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call (305) 555-FIBER for Immediate Consultation
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Request Custom Solution Assessment
              </Link>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <h4 className="text-2xl font-bold mb-2">500+</h4>
                <p>Successful projects completed</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">350%</h4>
                <p>Average ROI for our clients</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">99.9%</h4>
                <p>First-time activation success rate</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">24/7</h4>
                <p>Emergency support availability</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
