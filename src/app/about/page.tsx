import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Grupo Grande Inc. - 25+ Years of Fiber Optic Excellence",
  description: "Leading fiber optic infrastructure company since 1998. Miami-based with 25+ years of proven expertise in network design, manufacturing, and deployment across North America. Meet our leadership team.",
  keywords: "Grupo Grande history, fiber optic company leadership, telecommunications infrastructure expertise, Miami fiber company, network design experience, fiber manufacturing capabilities",
  openGraph: {
    title: "About Grupo Grande Inc. - Fiber Optic Infrastructure Leaders",
    description: "Leading fiber optic infrastructure company since 1998. Miami-based with 25+ years of proven expertise serving telecommunications providers across North America.",
    url: 'https://grupogrande.com/about',
    siteName: 'Grupo Grande Inc.',
  },
};

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              About Grupo Grande Inc.
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over 25 years, Grupo Grande has been at the forefront of fiber optic infrastructure, 
              transforming how communities and businesses connect across North America.
            </p>
          </div>

          {/* Company Story */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">Our Story</h2>
                <div className="space-y-6 text-gray-600">
                  <p>
                    Founded in 1998 in Miami&apos;s vibrant business ecosystem, Grupo Grande began with a simple but powerful vision: 
                    to bridge the digital divide through superior fiber optic infrastructure that empowers communities and drives economic growth.
                  </p>
                  <p>
                    What started as a small telecommunications consulting firm has evolved into a comprehensive fiber infrastructure 
                    company with unique integrated capabilities spanning network design, cable manufacturing, deployment services, 
                    and project financing. Our growth reflects our unwavering commitment to innovation, quality, and customer success.
                  </p>
                  <p>
                    From our Miami headquarters, we&apos;ve expanded our reach across North America, with particular expertise in 
                    hurricane-resistant designs that serve coastal and Caribbean markets. Every project teaches us something new, 
                    and we bring those lessons to benefit all our clients.
                  </p>
                  <p>
                    Today, Grupo Grande stands as a trusted partner to telecommunications providers, cable MSOs, enterprises, 
                    and municipalities, having successfully deployed over 500 fiber network projects representing more than 
                    $2.5 billion in infrastructure value.
                  </p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h3>
                  <p className="text-gray-700">
                    To accelerate digital transformation and economic opportunity through innovative fiber optic 
                    infrastructure solutions that connect communities, enable businesses, and bridge the digital divide.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-green-600 mb-4">Our Vision</h3>
                  <p className="text-gray-700">
                    A world where every community has access to world-class fiber infrastructure that powers 
                    innovation, education, healthcare, and economic prosperity for all.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Company Values */}
          <section className="mb-16 bg-gray-50 p-12 rounded-lg">
            <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  🔧
                </div>
                <h3 className="text-xl font-semibold mb-3">Technical Excellence</h3>
                <p className="text-gray-600">
                  We never compromise on engineering quality or technical standards. Our solutions are built 
                  to perform reliably for decades, not just pass initial specifications.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  🤝
                </div>
                <h3 className="text-xl font-semibold mb-3">Partnership Approach</h3>
                <p className="text-gray-600">
                  We view every client relationship as a long-term partnership. Your success is our success, 
                  and we're committed to supporting your growth and evolution.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  💡
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation Focus</h3>
                <p className="text-gray-600">
                  The telecommunications industry evolves rapidly. We stay ahead of emerging technologies 
                  and regulatory changes to ensure our clients remain competitive.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  🎯
                </div>
                <h3 className="text-xl font-semibold mb-3">Results Driven</h3>
                <p className="text-gray-600">
                  Every project must deliver measurable business value. We're accountable for ROI, 
                  performance metrics, and the long-term success of every deployment.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  🌍
                </div>
                <h3 className="text-xl font-semibold mb-3">Community Impact</h3>
                <p className="text-gray-600">
                  We understand that fiber infrastructure transforms lives. Every network we build 
                  enables education, healthcare, economic development, and community resilience.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  ✊
                </div>
                <h3 className="text-xl font-semibold mb-3">Integrity First</h3>
                <p className="text-gray-600">
                  Transparent communication, ethical business practices, and honoring our commitments 
                  are fundamental to who we are and how we operate.
                </p>
              </div>
            </div>
          </section>

          {/* Leadership Team */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">Leadership Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                  RG
                </div>
                <h3 className="text-xl font-semibold mb-2">Roberto Garcia</h3>
                <p className="text-blue-600 font-medium mb-4">Chief Executive Officer & Founder</p>
                <p className="text-gray-600 text-sm">
                  Visionary leader with 30+ years in telecommunications infrastructure. Roberto founded Grupo Grande 
                  with a mission to democratize access to high-speed fiber networks across underserved markets.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-32 h-32 bg-green-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                  MR
                </div>
                <h3 className="text-xl font-semibold mb-2">Maria Rodriguez</h3>
                <p className="text-green-600 font-medium mb-4">Chief Technology Officer</p>
                <p className="text-gray-600 text-sm">
                  Leading fiber optic engineer with expertise in network architecture and emerging technologies. 
                  Maria oversees all technical operations and ensures our solutions exceed industry standards.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-32 h-32 bg-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                  JS
                </div>
                <h3 className="text-xl font-semibold mb-2">James Sullivan</h3>
                <p className="text-purple-600 font-medium mb-4">Chief Financial Officer</p>
                <p className="text-gray-600 text-sm">
                  Strategic finance executive specializing in infrastructure project financing and public-private partnerships. 
                  James leads our innovative financing solutions that make fiber deployment accessible.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-32 h-32 bg-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                  CW
                </div>
                <h3 className="text-xl font-semibold mb-2">Carmen Williams</h3>
                <p className="text-orange-600 font-medium mb-4">VP of Operations</p>
                <p className="text-gray-600 text-sm">
                  Operations leader with deep expertise in large-scale fiber deployments and supply chain management. 
                  Carmen ensures flawless project execution from planning through activation.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-32 h-32 bg-red-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                  DM
                </div>
                <h3 className="text-xl font-semibold mb-2">David Martinez</h3>
                <p className="text-red-600 font-medium mb-4">VP of Business Development</p>
                <p className="text-gray-600 text-sm">
                  Market development specialist with extensive experience in telecommunications and municipal partnerships. 
                  David leads client relationships and strategic growth initiatives.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-32 h-32 bg-yellow-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                  AT
                </div>
                <h3 className="text-xl font-semibold mb-2">Angela Thompson</h3>
                <p className="text-yellow-600 font-medium mb-4">VP of Manufacturing</p>
                <p className="text-gray-600 text-sm">
                  Manufacturing expert overseeing our fiber cable production facilities. Angela ensures quality control 
                  and supply chain reliability that sets us apart from competitors.
                </p>
              </div>
            </div>
          </section>

          {/* Company Capabilities */}
          <section className="mb-16 bg-blue-50 p-12 rounded-lg">
            <h2 className="text-4xl font-bold text-center mb-12">Our Capabilities</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Technical Expertise</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 text-xl">✓</span>
                    <span><strong>Network Design & Engineering:</strong> Custom FTTX architecture for any deployment scenario</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 text-xl">✓</span>
                    <span><strong>Manufacturing:</strong> Complete fiber cable production with quality-controlled processes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 text-xl">✓</span>
                    <span><strong>Deployment Services:</strong> End-to-end construction and activation management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 text-xl">✓</span>
                    <span><strong>Project Financing:</strong> Flexible funding solutions for projects of all sizes</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Industry Experience</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <span><strong>Telecommunications Providers:</strong> ISPs and regional carriers nationwide</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <span><strong>Cable MSOs:</strong> HFC modernization and competitive response strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <span><strong>Enterprise Networks:</strong> Mission-critical private fiber infrastructures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <span><strong>Municipal Broadband:</strong> Community networks and smart city initiatives</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Certifications & Awards */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">Certifications & Recognition</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-lg font-semibold mb-2">ISO 9001:2015</h3>
                <p className="text-gray-600 text-sm">Quality Management Systems</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-lg font-semibold mb-2">IES Certification</h3>
                <p className="text-gray-600 text-sm">Installation Excellence Standards</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-lg font-semibold mb-2">TIA/EIA Standards</h3>
                <p className="text-gray-600 text-sm">Telecommunications Infrastructure</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-lg font-semibold mb-2">NECA Member</h3>
                <p className="text-gray-600 text-sm">National Electrical Contractors</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-lg font-semibold mb-2">WISPA Partner</h3>
                <p className="text-gray-600 text-sm">Wireless Internet Service Providers</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-lg font-semibold mb-2">FTTH Council</h3>
                <p className="text-gray-600 text-sm">Fiber to the Home Council</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-lg font-semibold mb-2">SBA 8(a) Certified</h3>
                <p className="text-gray-600 text-sm">Small Business Administration</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-lg font-semibold mb-2">MBE Certified</h3>
                <p className="text-gray-600 text-sm">Minority Business Enterprise</p>
              </div>
            </div>
          </section>

          {/* By the Numbers */}
          <section className="mb-16 bg-gradient-to-r from-blue-600 to-green-600 text-white p-12 rounded-lg">
            <h2 className="text-4xl font-bold text-center mb-12">Grupo Grande by the Numbers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">25+</div>
                <p className="text-lg">Years of Excellence</p>
              </div>
              
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <p className="text-lg">Successful Projects</p>
              </div>
              
              <div>
                <div className="text-4xl font-bold mb-2">$2.5B</div>
                <p className="text-lg">Infrastructure Value Deployed</p>
              </div>
              
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <p className="text-lg">Certified Technicians</p>
              </div>
              
              <div>
                <div className="text-4xl font-bold mb-2">15</div>
                <p className="text-lg">States Served</p>
              </div>
              
              <div>
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <p className="text-lg">Project Success Rate</p>
              </div>
              
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <p className="text-lg">Emergency Support</p>
              </div>
              
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <p className="text-lg">Client Satisfaction</p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gray-100 p-12 rounded-lg text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Network Infrastructure?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join the hundreds of successful organizations that have trusted Grupo Grande with their 
              fiber infrastructure investments. Let's discuss how we can help you achieve your connectivity goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-305-555-3423"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Call (305) 555-FIBER
              </a>
              <Link
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Contact Our Team
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}