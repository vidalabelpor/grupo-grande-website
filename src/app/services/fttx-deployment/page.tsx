import { NextSeo } from 'next-seo';
import Link from 'next/link';

export default function FTTXDeploymentPage() {
  return (
    <>
      <NextSeo
        title="FTTX Deployment Services - Fiber to the Home Installation - Grupo Grande Inc."
        description="Professional FTTX deployment and fiber-to-the-home installation services. Complete turnkey solutions from design to activation. Serving telecom providers with proven 3-5x ROI results."
        canonical="https://grupogrande.com/services/fttx-deployment"
        openGraph={{
          title: "FTTX Deployment Services - Professional Fiber Installation",
          description: "Professional FTTX deployment and fiber-to-the-home installation services. Complete turnkey solutions from design to activation.",
          url: 'https://grupogrande.com/services/fttx-deployment',
          siteName: 'Grupo Grande Inc.',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'FTTX deployment, fiber to the home installation, FTTH deployment services, fiber optic installation, broadband deployment, fiber network construction, telecom infrastructure deployment, PON installation',
          },
        ]}
      />
      
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              FTTX Deployment & Fiber Installation Services
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Transform communities with high-speed fiber internet through our complete FTTX deployment services. 
              From design and engineering to installation and activation, we deliver turnkey fiber-to-the-home solutions 
              that generate proven 3-5x ROI for telecom providers and ISPs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-305-555-3423"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Call (305) 555-FIBER
              </a>
              <a
                href="mailto:info@grupogrande.com"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Request Deployment Quote
              </a>
            </div>
          </div>

          {/* Deployment Challenges Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              FTTX Deployment Challenges We Eliminate
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold mb-4 text-red-600">Project Delays & Cost Overruns</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Industry Problem:</strong> 67% of fiber deployments exceed budget by 40-60% due to poor planning and coordination issues.
                </p>
                <p className="text-blue-600 font-semibold">
                  ✓ Our Solution: Integrated approach reduces deployment time by 45% and keeps projects within 5% of budget.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold mb-4 text-red-600">Permitting & Right-of-Way Delays</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Industry Problem:</strong> Multi-jurisdictional approvals create 6-18 month delays and regulatory compliance headaches.
                </p>
                <p className="text-blue-600 font-semibold">
                  ✓ Our Solution: Pre-established relationships and streamlined processes accelerate approvals by 60%.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold mb-4 text-red-600">Quality Control Issues</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Industry Problem:</strong> Poor installation quality leads to 25% higher maintenance costs and customer churn.
                </p>
                <p className="text-blue-600 font-semibold">
                  ✓ Our Solution: Certified installation teams achieve 99.9% first-time activation success rate.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold mb-4 text-red-600">Supply Chain Disruptions</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Industry Problem:</strong> Material shortages and vendor delays can halt deployment for months.
                </p>
                <p className="text-blue-600 font-semibold">
                  ✓ Our Solution: Integrated manufacturing ensures reliable supply and eliminates vendor dependency.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold mb-4 text-red-600">Skilled Labor Shortage</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Industry Problem:</strong> 83% of contractors report difficulty finding qualified fiber technicians.
                </p>
                <p className="text-blue-600 font-semibold">
                  ✓ Our Solution: Dedicated team of 200+ certified technicians with 25+ years average experience.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold mb-4 text-red-600">Weather & Environmental Delays</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Industry Problem:</strong> Hurricane seasons and extreme weather create 3-6 month deployment gaps.
                </p>
                <p className="text-blue-600 font-semibold">
                  ✓ Our Solution: Climate-adaptive scheduling and storm-resistant installations minimize weather impact.
                </p>
              </div>
            </div>
          </section>

          {/* Complete Deployment Process */}
          <section className="mb-16 bg-gray-50 p-12 rounded-lg">
            <h2 className="text-4xl font-bold text-center mb-12">
              Complete FTTX Deployment Process
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Pre-Deployment Phase (Weeks 1-4)</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 font-bold text-xl">1</span>
                    <div>
                      <strong>Market Analysis & Feasibility Study:</strong> Demographic analysis, competition assessment, and subscriber penetration projections
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 font-bold text-xl">2</span>
                    <div>
                      <strong>Engineering Design:</strong> Network topology optimization, equipment specification, and capacity planning
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 font-bold text-xl">3</span>
                    <div>
                      <strong>Permitting & Approvals:</strong> Multi-jurisdictional permit acquisition and utility coordination
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 font-bold text-xl">4</span>
                    <div>
                      <strong>Material Procurement:</strong> Fiber cable manufacturing, equipment sourcing, and inventory staging
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Deployment Phase (Weeks 5-16)</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 font-bold text-xl">5</span>
                    <div>
                      <strong>Underground Infrastructure:</strong> Trenching, conduit installation, and underground fiber placement
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 font-bold text-xl">6</span>
                    <div>
                      <strong>Aerial Construction:</strong> Pole attachment, strand placement, and overhead fiber installation
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 font-bold text-xl">7</span>
                    <div>
                      <strong>Splicing & Testing:</strong> Fusion splicing, OTDR testing, and network certification
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 font-bold text-xl">8</span>
                    <div>
                      <strong>Equipment Installation:</strong> OLT placement, splitter installation, and ONT deployment
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Activation Phase (Weeks 17-20)</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 font-bold text-xl">9</span>
                    <div>
                      <strong>Network Commissioning:</strong> End-to-end testing, performance verification, and service validation
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 font-bold text-xl">10</span>
                    <div>
                      <strong>Customer Premises Installation:</strong> Drop installation, ONT configuration, and service activation
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 font-bold text-xl">11</span>
                    <div>
                      <strong>Quality Assurance:</strong> Performance benchmarking, customer satisfaction verification
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Post-Deployment (Ongoing)</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 font-bold text-xl">12</span>
                    <div>
                      <strong>Network Optimization:</strong> Performance monitoring, capacity upgrades, and efficiency improvements
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 font-bold text-xl">13</span>
                    <div>
                      <strong>Maintenance Support:</strong> Preventive maintenance, emergency repairs, and technical support
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 font-bold text-xl">14</span>
                    <div>
                      <strong>Expansion Planning:</strong> Growth analysis and network extension strategies
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Capabilities */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              Technical Deployment Capabilities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl mb-4">🏗️</div>
                <h4 className="text-lg font-semibold mb-3">Construction Methods</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Underground trenching</li>
                  <li>• Directional boring</li>
                  <li>• Aerial installation</li>
                  <li>• Microtrenching</li>
                  <li>• Building riser systems</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl mb-4">🔧</div>
                <h4 className="text-lg font-semibold mb-3">Specialized Equipment</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Fusion splicers</li>
                  <li>• OTDR testing equipment</li>
                  <li>• Directional drill rigs</li>
                  <li>• Cable pulling systems</li>
                  <li>• Aerial bucket trucks</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl mb-4">📡</div>
                <h4 className="text-lg font-semibold mb-3">Network Technologies</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• GPON & XGS-PON</li>
                  <li>• Point-to-point Ethernet</li>
                  <li>• DWDM systems</li>
                  <li>• RF over glass</li>
                  <li>• Hybrid solutions</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl mb-4">🏆</div>
                <h4 className="text-lg font-semibold mb-3">Quality Standards</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• IES certification</li>
                  <li>• TIA/EIA standards</li>
                  <li>• NECA installation codes</li>
                  <li>• ISO 9001 processes</li>
                  <li>• Safety compliance</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ROI Case Study */}
          <section className="mb-16 bg-blue-50 p-12 rounded-lg">
            <h2 className="text-4xl font-bold text-center mb-12">
              Proven ROI: Real-World Deployment Success
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Southeast Regional ISP Case Study</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="font-semibold">Market:</span>
                    <span>Rural Florida - 12,000 homes passed</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="font-semibold">Investment:</span>
                    <span>$18.5M total deployment cost</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="font-semibold">Timeline:</span>
                    <span>16 months (vs. 28 month industry avg)</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="font-semibold">Penetration Rate:</span>
                    <span>67% (vs. 45% industry average)</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-100 rounded-lg">
                    <span className="font-semibold">3-Year ROI:</span>
                    <span className="text-green-600 text-xl font-bold">327%</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Key Success Factors</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <div>
                      <strong>Optimized Network Design:</strong> Reduced material costs by 32% through intelligent fiber routing and splitter placement
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <div>
                      <strong>Accelerated Permitting:</strong> Pre-established relationships reduced approval timeline from 8 months to 3 months
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <div>
                      <strong>Quality Installation:</strong> 99.8% first-time activation rate eliminated costly service calls
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <div>
                      <strong>Integrated Manufacturing:</strong> Direct cable supply reduced costs by $2.1M and eliminated vendor delays
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <div>
                      <strong>Community Engagement:</strong> Proactive customer education achieved 22% higher penetration than market average
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Service Areas & Capabilities */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              Geographic Expertise & Specializations
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Climate Specialization</h3>
                <p className="text-gray-600 mb-4">
                  25+ years serving hurricane-prone regions with storm-resistant installations and rapid recovery protocols.
                </p>
                <ul className="text-sm space-y-2">
                  <li>• Underground burial in flood zones</li>
                  <li>• Hardened aerial installations</li>
                  <li>• Rapid storm recovery teams</li>
                  <li>• Redundant routing strategies</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Terrain Expertise</h3>
                <p className="text-gray-600 mb-4">
                  Specialized solutions for challenging environments from coastal areas to mountainous regions.
                </p>
                <ul className="text-sm space-y-2">
                  <li>• Coastal salt-air resistance</li>
                  <li>• Rocky terrain boring</li>
                  <li>• Wetland environmental protection</li>
                  <li>• Urban congested areas</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Regulatory Navigation</h3>
                <p className="text-gray-600 mb-4">
                  Expert knowledge of federal, state, and local regulations across multiple jurisdictions.
                </p>
                <ul className="text-sm space-y-2">
                  <li>• BEAD funding compliance</li>
                  <li>• Environmental assessments</li>
                  <li>• Historic district approvals</li>
                  <li>• Utility coordination</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              FTTX Deployment Questions & Answers
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-3">What's the typical FTTX deployment timeline?</h4>
                <p className="text-gray-600">
                  Standard FTTH deployments: 16-20 weeks for communities up to 10,000 homes. Enterprise FTTB projects: 8-12 weeks. Municipal networks: 6-18 months depending on scope. Our integrated approach reduces industry-average timelines by 40-45%.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-3">How do you minimize service disruptions during deployment?</h4>
                <p className="text-gray-600">
                  We use advanced planning software to coordinate with existing utilities, schedule work during optimal windows, and maintain constant communication with affected parties. Our track record shows 98% of deployments completed without unplanned service interruptions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-3">What quality guarantees do you provide?</h4>
                <p className="text-gray-600">
                  99.9% first-time activation guarantee, 25-year warranty on underground installations, 15-year warranty on aerial construction. All work certified to exceed TIA/EIA standards with comprehensive OTDR testing and documentation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-3">How do you handle hurricane-prone regions?</h4>
                <p className="text-gray-600">
                  Our Florida-based expertise includes storm-resistant designs, rapid deployment windows between weather events, and 48-hour emergency response teams. We maintain 99.95% network uptime even during major hurricane seasons.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibent mb-3">Can you work with our existing network infrastructure?</h4>
                <p className="text-gray-600">
                  Absolutely. We specialize in hybrid deployments that leverage existing copper, coax, and fiber investments. Our integration expertise ensures seamless cutover with minimal service interruption to existing customers.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-3">What financing options are available for deployment?</h4>
                <p className="text-gray-600">
                  We offer flexible financing including equipment leasing, turnkey financing, and BEAD funding assistance. Our financial partnerships enable projects with as little as 10% down payment and terms up to 10 years.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-12 rounded-lg text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Deploy Fiber in Your Community?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join the hundreds of successful FTTX deployments we've completed across North America. 
              Our proven process, experienced teams, and integrated approach deliver projects on time, 
              on budget, and with guaranteed performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:+1-305-555-3423"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call (305) 555-FIBER for Deployment Consultation
              </a>
              <a
                href="mailto:info@grupogrande.com?subject=FTTX Deployment Quote Request"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Request Detailed Deployment Quote
              </a>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <h4 className="text-2xl font-bold mb-2">500+</h4>
                <p>Successful FTTX deployments</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">99.9%</h4>
                <p>First-time activation success rate</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">45%</h4>
                <p>Faster than industry average</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">3.5x</h4>
                <p>Average ROI for our clients</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}