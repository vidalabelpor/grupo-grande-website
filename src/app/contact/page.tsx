

export default function ContactPage() {
  return (
    <>
      
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Contact Our Fiber Infrastructure Experts
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your network infrastructure? Our team of experts is standing by to discuss 
              your fiber optic needs and develop custom solutions that deliver exceptional ROI.
            </p>
          </div>

          {/* Contact Methods */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Emergency/Immediate Contact */}
              <div className="bg-red-50 p-8 rounded-lg border-l-4 border-red-500">
                <h2 className="text-2xl font-bold text-red-700 mb-4">🚨 Emergency Support</h2>
                <p className="text-gray-700 mb-4">
                  Critical infrastructure issues require immediate attention. Our emergency response team is available 24/7.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="font-semibold text-red-600 mr-3">Emergency Line:</span>
                    <a href="tel:+1-305-555-9999" className="text-red-600 font-bold hover:underline">
                      (305) 555-9999
                    </a>
                  </div>
                  <p className="text-sm text-gray-600">
                    Average response time: 2 hours for critical issues
                  </p>
                </div>
              </div>

              {/* Sales/New Projects */}
              <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-500">
                <h2 className="text-2xl font-bold text-blue-700 mb-4">💼 New Projects</h2>
                <p className="text-gray-700 mb-4">
                  Planning a new fiber deployment or network upgrade? Let's discuss your requirements and objectives.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="font-semibold text-blue-600 mr-3">Sales Line:</span>
                    <a href="tel:+1-305-555-3423" className="text-blue-600 font-bold hover:underline">
                      (305) 555-FIBER
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold text-blue-600 mr-3">Email:</span>
                    <a href="mailto:sales@grupogrande.com" className="text-blue-600 hover:underline">
                      sales@grupogrande.com
                    </a>
                  </div>
                </div>
              </div>

              {/* General/Support */}
              <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-500">
                <h2 className="text-2xl font-bold text-green-700 mb-4">📞 General Inquiries</h2>
                <p className="text-gray-700 mb-4">
                  Questions about our services, existing projects, or general information? We're here to help.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="font-semibold text-green-600 mr-3">Main Line:</span>
                    <a href="tel:+1-305-555-4000" className="text-green-600 font-bold hover:underline">
                      (305) 555-4000
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold text-green-600 mr-3">Email:</span>
                    <a href="mailto:info@grupogrande.com" className="text-green-600 hover:underline">
                      info@grupogrande.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form and Office Info */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6">Request Consultation</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="(305) 555-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select project type</option>
                      <option value="network-design">Fiber Network Design</option>
                      <option value="fttx-deployment">FTTX Deployment</option>
                      <option value="cable-manufacturing">Fiber Cable Manufacturing</option>
                      <option value="project-financing">Project Financing</option>
                      <option value="mso-upgrade">Cable MSO Upgrade</option>
                      <option value="enterprise-network">Enterprise Private Network</option>
                      <option value="municipal-broadband">Municipal Broadband</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (0-3 months)</option>
                      <option value="short-term">Short-term (3-6 months)</option>
                      <option value="medium-term">Medium-term (6-12 months)</option>
                      <option value="long-term">Long-term (12+ months)</option>
                      <option value="planning">Planning phase</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Estimated Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-1m">Under $1M</option>
                      <option value="1m-5m">$1M - $5M</option>
                      <option value="5m-10m">$5M - $10M</option>
                      <option value="10m-25m">$10M - $25M</option>
                      <option value="25m-50m">$25M - $50M</option>
                      <option value="over-50m">Over $50M</option>
                      <option value="tbd">To be determined</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details & Requirements *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Please describe your project requirements, specific challenges, or questions..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Send Consultation Request
                  </button>
                </form>
              </div>

              {/* Office Information */}
              <div className="space-y-8">
                {/* Headquarters */}
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h2 className="text-2xl font-bold mb-6">🏢 Headquarters</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Miami Corporate Office</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>1200 Biscayne Boulevard, Suite 400</p>
                        <p>Miami, Florida 33132</p>
                        <p>United States</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="font-semibold mb-2">Business Hours</h4>
                      <div className="text-gray-700 space-y-1">
                        <p><strong>Monday - Friday:</strong> 7:00 AM - 7:00 PM EST</p>
                        <p><strong>Saturday:</strong> 8:00 AM - 4:00 PM EST</p>
                        <p><strong>Sunday:</strong> Emergency support only</p>
                        <p><strong>24/7 Emergency:</strong> Critical infrastructure support</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Territory */}
                <div className="bg-blue-50 p-8 rounded-lg">
                  <h2 className="text-2xl font-bold text-blue-700 mb-6">🗺️ Service Territory</h2>
                  <p className="text-gray-700 mb-4">
                    Based in Miami, we serve clients throughout North America with specialized expertise in:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Primary Markets</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Florida & Southeast</li>
                        <li>• Texas & Southwest</li>
                        <li>• Caribbean & Latin America</li>
                        <li>• Hurricane-prone coastal regions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Extended Coverage</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• All 50 United States</li>
                        <li>• Canada partnerships</li>
                        <li>• Mexico border regions</li>
                        <li>• Remote/challenging environments</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Direct Contacts */}
                <div className="bg-green-50 p-8 rounded-lg">
                  <h2 className="text-2xl font-bold text-green-700 mb-6">👥 Direct Contacts</h2>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Sales & New Projects</h4>
                      <p className="text-gray-700">David Martinez, VP Business Development</p>
                      <p className="text-green-600">
                        <a href="mailto:david.martinez@grupogrande.com" className="hover:underline">
                          david.martinez@grupogrande.com
                        </a>
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold">Technical Consulting</h4>
                      <p className="text-gray-700">Maria Rodriguez, Chief Technology Officer</p>
                      <p className="text-green-600">
                        <a href="mailto:maria.rodriguez@grupogrande.com" className="hover:underline">
                          maria.rodriguez@grupogrande.com
                        </a>
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold">Project Financing</h4>
                      <p className="text-gray-700">James Sullivan, Chief Financial Officer</p>
                      <p className="text-green-600">
                        <a href="mailto:james.sullivan@grupogrande.com" className="hover:underline">
                          james.sullivan@grupogrande.com
                        </a>
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold">Operations & Support</h4>
                      <p className="text-gray-700">Carmen Williams, VP Operations</p>
                      <p className="text-green-600">
                        <a href="mailto:carmen.williams@grupogrande.com" className="hover:underline">
                          carmen.williams@grupogrande.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Response Promise */}
          <section className="mb-16 bg-yellow-50 p-8 rounded-lg border-l-4 border-yellow-500">
            <h2 className="text-2xl font-bold text-yellow-700 mb-4">⚡ Our Response Commitment</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">&lt; 2 Hours</div>
                <p className="text-gray-700 font-semibold">Emergency Response</p>
                <p className="text-sm text-gray-600">Critical infrastructure issues</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">&lt; 4 Hours</div>
                <p className="text-gray-700 font-semibold">Sales Inquiries</p>
                <p className="text-sm text-gray-600">New project discussions</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">&lt; 24 Hours</div>
                <p className="text-gray-700 font-semibold">General Inquiries</p>
                <p className="text-sm text-gray-600">All other communications</p>
              </div>
            </div>
          </section>

          {/* Alternative Contact Methods */}
          <section className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">📱 Social Media</h3>
              <div className="space-y-2">
                <p>
                  <a href="https://linkedin.com/company/grupo-grande-inc" className="text-blue-600 hover:underline">
                    LinkedIn Company Page
                  </a>
                </p>
                <p>
                  <a href="https://twitter.com/grupogrande" className="text-blue-600 hover:underline">
                    Twitter Updates
                  </a>
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">💼 Partner Portal</h3>
              <div className="space-y-2">
                <p className="text-gray-600">Existing Client Login</p>
                <p>
                  <a href="mailto:support@grupogrande.com" className="text-blue-600 hover:underline">
                    support@grupogrande.com
                  </a>
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">📧 Press Inquiries</h3>
              <div className="space-y-2">
                <p className="text-gray-600">Media & Communications</p>
                <p>
                  <a href="mailto:press@grupogrande.com" className="text-blue-600 hover:underline">
                    press@grupogrande.com
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}