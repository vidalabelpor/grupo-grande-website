import { NextSeo } from 'next-seo';
import Link from 'next/link';

export default function ProjectFinancingPage() {
  return (
    <>
      <NextSeo
        title="FTTH Project Financing - Fiber Infrastructure Funding - Grupo Grande Inc."
        description="Flexible financing solutions for fiber-to-the-home deployments. Make FTTX accessible with proven ROI models, BEAD funding assistance, and payment structures that work for your business."
        canonical="https://grupogrande.com/services/project-financing"
        openGraph={{
          title: "FTTH Project Financing - Infrastructure Funding Solutions",
          description: "Flexible financing solutions for fiber-to-the-home deployments. Make FTTX accessible with proven ROI models and funding assistance.",
          url: 'https://grupogrande.com/services/project-financing',
          siteName: 'Grupo Grande Inc.',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'FTTH project financing, fiber infrastructure funding, broadband deployment loans, telecom infrastructure financing, BEAD funding assistance, fiber network investment, municipal broadband financing',
          },
        ]}
      />
      
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              FTTH Project Financing & Infrastructure Funding Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Transform your community with high-speed fiber internet without massive upfront capital requirements. 
              Our flexible financing solutions and proven ROI models make fiber-to-the-home deployment accessible 
              for ISPs, municipalities, and enterprises of all sizes.
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
                Request Financing Analysis
              </a>
            </div>
          </div>

          {/* Financing Challenges Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              Fiber Infrastructure Funding Challenges We Solve
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold mb-4 text-red-600">Capital Intensity Barrier</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Industry Challenge:</strong> FTTH deployments require $1,500-$3,000 per home passed, creating $15-30M funding needs for mid-size communities.
                </p>
                <p className="text-blue-600 font-semibold">
                  ✓ Our Solution: Flexible payment structures starting with as little as 10% down payment.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold mb-4 text-red-600">Cash Flow Constraints</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Industry Challenge:</strong> Subscriber ramp-up takes 3-5 years while infrastructure costs are immediate, creating cash flow gaps.
                </p>
                <p className="text-blue-600 font-semibold">
                  ✓ Our Solution: Revenue-based financing aligned with subscriber growth projections.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold mb-4 text-red-600">Traditional Lending Limitations</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Industry Challenge:</strong> Banks lack telecom expertise, require excessive collateral, and offer restrictive terms that limit growth.
                </p>
                <p className="text-blue-600 font-semibold">
                  ✓ Our Solution: Industry-specific financing with equipment and subscriber base as collateral.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold mb-4 text-red-600">Government Funding Complexity</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Industry Challenge:</strong> BEAD, RDOF, and state grants have complex requirements and uncertain approval timelines.
                </p>
                <p className="text-blue-600 font-semibold">
                  ✓ Our Solution: Expert grant application assistance and bridge financing during approval process.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold mb-4 text-red-600">ROI Uncertainty</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Industry Challenge:</strong> Investors demand proof of returns but lack benchmarking data for fiber deployment success rates.
                </p>
                <p className="text-blue-600 font-semibold">
                  ✓ Our Solution: Detailed ROI modeling based on 500+ successful deployments with verified outcomes.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold mb-4 text-red-600">Municipal Budget Constraints</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Industry Challenge:</strong> Public entities face debt limits, voter approval requirements, and political resistance to infrastructure spending.
                </p>
                <p className="text-blue-600 font-semibold">
                  ✓ Our Solution: Public-private partnerships and revenue-neutral financing structures.
                </p>
              </div>
            </div>
          </section>

          {/* Financing Options */}
          <section className="mb-16 bg-gray-50 p-12 rounded-lg">
            <h2 className="text-4xl font-bold text-center mb-12">
              Comprehensive Financing Solutions Portfolio
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Private Sector Solutions</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="text-lg font-semibold mb-2 text-blue-600">Turnkey Project Financing</h4>
                    <p className="text-gray-600 mb-3">Complete network deployment with integrated financing from design through activation</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 10-15% down payment required</li>
                      <li>• 5-10 year payment terms</li>
                      <li>• Fixed interest rates available</li>
                      <li>• Equipment and subscriber base collateral</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="text-lg font-semibold mb-2 text-blue-600">Revenue-Based Financing</h4>
                    <p className="text-gray-600 mb-3">Payments scaled to subscriber growth and revenue generation</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Payments tied to subscriber penetration</li>
                      <li>• Lower payments during ramp-up period</li>
                      <li>• Shared risk/reward structure</li>
                      <li>• Performance incentives for aggressive growth</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="text-lg font-semibold mb-2 text-blue-600">Equipment Leasing Programs</h4>
                    <p className="text-gray-600 mb-3">Lease-to-own arrangements for network equipment and infrastructure</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• $1 purchase option at term end</li>
                      <li>• Technology refresh provisions</li>
                      <li>• Maintenance and support included</li>
                      <li>• Tax advantages for lessees</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Public Sector & Grant Solutions</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="text-lg font-semibold mb-2 text-green-600">BEAD Funding Assistance</h4>
                    <p className="text-gray-600 mb-3">Expert support for $42.5B federal broadband infrastructure program</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Application preparation and submission</li>
                      <li>• Compliance monitoring and reporting</li>
                      <li>• Bridge financing during approval process</li>
                      <li>• Match funding arrangement options</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="text-lg font-semibold mb-2 text-green-600">Municipal Bond Financing</h4>
                    <p className="text-gray-600 mb-3">Public-private partnerships for community broadband initiatives</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Revenue bond structures available</li>
                      <li>• Credit enhancement options</li>
                      <li>• Voter approval assistance</li>
                      <li>• Operations and maintenance guarantees</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="text-lg font-semibold mb-2 text-green-600">State & Federal Grants</h4>
                    <p className="text-gray-600 mb-3">Comprehensive grant identification and application support</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• USDA ReConnect program expertise</li>
                      <li>• State broadband office coordination</li>
                      <li>• Economic development incentives</li>
                      <li>• Disaster recovery funding assistance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-center">Specialized Financing Programs</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Rural Co-ops</h4>
                  <p className="text-sm text-gray-600">Cooperative-specific funding solutions and member financing</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Tribal Nations</h4>
                  <p className="text-sm text-gray-600">Sovereign nation financing and federal tribal grant assistance</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Enterprise Private Networks</h4>
                  <p className="text-sm text-gray-600">Corporate financing for campus and multi-site fiber deployments</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Smart City Infrastructure</h4>
                  <p className="text-sm text-gray-600">Multi-use fiber networks supporting municipal services</p>
                </div>
              </div>
            </div>
          </section>

          {/* ROI Analysis Tool */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              Proven ROI Models & Financial Performance
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-center">Conservative Scenario</h3>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">250% ROI</div>
                  <p className="text-sm text-gray-600">7-year payback period</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• 45% subscriber penetration rate</li>
                  <li>• $75/month average revenue per user</li>
                  <li>• 15% annual churn rate</li>
                  <li>• Standard operating cost assumptions</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-500">
                <h3 className="text-xl font-semibold mb-4 text-center">Typical Scenario</h3>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">350% ROI</div>
                  <p className="text-sm text-gray-600">5-year payback period</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• 60% subscriber penetration rate</li>
                  <li>• $85/month average revenue per user</li>
                  <li>• 8% annual churn rate</li>
                  <li>• Operational efficiency improvements</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-center">Aggressive Scenario</h3>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">500% ROI</div>
                  <p className="text-sm text-gray-600">3.5-year payback period</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• 75% subscriber penetration rate</li>
                  <li>• $95/month average revenue per user</li>
                  <li>• 5% annual churn rate</li>
                  <li>• Premium service tiers and business customers</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-center mb-6">Key Financial Performance Drivers</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Revenue Optimization Factors</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>Service Mix:</strong> Balanced residential and business customer base increases ARPU by 40%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>Premium Tiers:</strong> Gigabit+ services command 60% higher monthly rates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>Value-Added Services:</strong> Voice, TV, and managed services add $25-40/month per customer</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>Contract Terms:</strong> Multi-year contracts reduce churn by 50% and improve cash flow</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4">Cost Control Strategies</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span><strong>Network Design:</strong> Optimized architecture reduces materials and labor by 30%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span><strong>Automation:</strong> Self-service portals and automated provisioning cut OPEX by 25%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span><strong>Preventive Maintenance:</strong> Proactive monitoring reduces service calls by 40%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span><strong>Economies of Scale:</strong> Regional deployments achieve 15-20% cost efficiencies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Success Story Case Study */}
          <section className="mb-16 bg-blue-50 p-12 rounded-lg">
            <h2 className="text-4xl font-bold text-center mb-12">
              Financing Success Story: Regional ISP Transformation
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Project Overview</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg flex justify-between items-center">
                    <span className="font-semibold">Client:</span>
                    <span>Rural Electric Cooperative (Southeast)</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg flex justify-between items-center">
                    <span className="font-semibold">Market:</span>
                    <span>8,500 homes passed across 3 counties</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg flex justify-between items-center">
                    <span className="font-semibold">Total Investment:</span>
                    <span>$24.5M (including network and operations)</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg flex justify-between items-center">
                    <span className="font-semibold">Financing Structure:</span>
                    <span>15% down, 8-year revenue-based payments</span>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg flex justify-between items-center">
                    <span className="font-semibold">5-Year ROI:</span>
                    <span className="text-green-600 text-xl font-bold">415%</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Financial Performance Highlights</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Subscriber Growth</h4>
                    <div className="text-2xl font-bold text-blue-600">72% Penetration Rate</div>
                    <p className="text-sm text-gray-600">Achieved in 18 months vs. 36-month projection</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Revenue Performance</h4>
                    <div className="text-2xl font-bold text-green-600">$92/Month ARPU</div>
                    <p className="text-sm text-gray-600">$17 above projections due to business customers</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Operational Efficiency</h4>
                    <div className="text-2xl font-bold text-purple-600">$18 Monthly OPEX</div>
                    <p className="text-sm text-gray-600">Per customer, 25% below industry average</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-white p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4 text-center">Key Success Factors</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h5 className="font-semibold mb-2">Community Engagement</h5>
                  <p className="text-sm text-gray-600">Pre-deployment marketing achieved 45% pre-registration rate</p>
                </div>
                <div className="text-center">
                  <h5 className="font-semibold mb-2">Service Mix Strategy</h5>
                  <p className="text-sm text-gray-600">35% business customers drove higher ARPU and cash flow</p>
                </div>
                <div className="text-center">
                  <h5 className="font-semibold mb-2">Operational Excellence</h5>
                  <p className="text-sm text-gray-600">99.8% uptime and 4.8/5.0 customer satisfaction scores</p>
                </div>
              </div>
            </div>
          </section>

          {/* Government Funding Programs */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              Federal & State Funding Program Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">BEAD Program ($42.5B)</h3>
                <p className="text-gray-600 mb-4">
                  Broadband Equity, Access, and Deployment program represents the largest federal broadband investment in U.S. history.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Comprehensive application preparation and submission support</li>
                  <li>• Compliance monitoring and quarterly reporting assistance</li>
                  <li>• Bridge financing available during approval process (6-18 months)</li>
                  <li>• Match funding arrangement and partnership structuring</li>
                  <li>• Environmental assessment and permitting coordination</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-600">USDA ReConnect ($1.15B)</h3>
                <p className="text-gray-600 mb-4">
                  Rural broadband funding through grants, loans, and loan/grant combinations for underserved areas.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Grant applications up to $25M for qualifying rural areas</li>
                  <li>• Loan programs with 2-3% interest rates available</li>
                  <li>• Combination funding (50% grant, 50% loan) structures</li>
                  <li>• Expedited application processing for experienced partners</li>
                  <li>• Technical assistance throughout application and deployment</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">State Broadband Offices</h3>
                <p className="text-gray-600 mb-4">
                  State-level funding programs and public-private partnership opportunities across all 50 states.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• State-specific grant and loan program navigation</li>
                  <li>• Economic development incentive identification</li>
                  <li>• Public-private partnership structure development</li>
                  <li>• Coordination with state broadband mapping initiatives</li>
                  <li>• Local government relationship building</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-orange-600">Disaster Recovery Funding</h3>
                <p className="text-gray-600 mb-4">
                  FEMA, EDA, and state disaster recovery programs for resilient broadband infrastructure rebuilding.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Rapid damage assessment and documentation</li>
                  <li>• FEMA Public Assistance Category G (emergency communications)</li>
                  <li>• Economic Development Administration disaster recovery grants</li>
                  <li>• Build-back-better upgrade funding strategies</li>
                  <li>• Insurance claim coordination and maximization</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              Financing Questions & Requirements
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-3">What are the minimum requirements for project financing?</h4>
                <p className="text-gray-600">
                  Minimum $5M project size, demonstrated management experience, market feasibility study, and 10-15% down payment. We evaluate each project based on market potential, management team, and strategic fit rather than just credit scores.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-3">How long does the financing approval process take?</h4>
                <p className="text-gray-600">
                  Private financing: 30-60 days from complete application. Government grants: 6-18 months depending on program. We provide bridge financing to start projects while grant approvals are pending.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-3">What collateral is required for equipment financing?</h4>
                <p className="text-gray-600">
                  Network equipment, fiber infrastructure, and subscriber contracts serve as collateral. Personal guarantees may be required for smaller entities. Municipal projects can use revenue streams as security.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-3">Can you finance projects in multiple phases?</h4>
                <p className="text-gray-600">
                  Yes, phased deployment financing is available and often preferred. This allows cash flow from initial phases to support expansion while reducing overall project risk and capital requirements.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-3">What happens if subscriber projections aren't met?</h4>
                <p className="text-gray-600">
                  Revenue-based financing automatically adjusts payments to actual performance. We also provide marketing and operational consulting to help achieve subscriber targets and optimize network performance.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-3">Do you assist with grant application writing?</h4>
                <p className="text-gray-600">
                  Yes, our grant specialists have successfully written and submitted over $150M in successful broadband grant applications. We handle the entire process from eligibility assessment through award administration.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
            <h2 className="text-4xl font-bold mb-6">
              Make Your Fiber Vision Financially Possible
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Don't let capital constraints delay your community's access to high-speed internet. Our financing experts 
              are ready to structure a solution that works for your budget, timeline, and growth objectives. 
              Join the hundreds of successful projects we've made financially viable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:+1-305-555-3423"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call (305) 555-FIBER for Financing Consultation
              </a>
              <a
                href="mailto:info@grupogrande.com?subject=Project Financing Analysis Request"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Request Custom Financing Analysis
              </a>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <h4 className="text-2xl font-bold mb-2">$150M+</h4>
                <p>Successfully funded projects</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">10%</h4>
                <p>Minimum down payment available</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">350%</h4>
                <p>Average ROI for funded projects</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">30-60 Days</h4>
                <p>Private financing approval timeline</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}