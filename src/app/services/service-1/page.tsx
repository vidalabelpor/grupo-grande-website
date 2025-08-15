import type { Metadata } from 'next';
import Link from 'next/link';


export default function Service1Page() {
  return (
    <>
      
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li>/</li>
              <li><Link href="/services" className="hover:text-blue-600">Services</Link></li>
              <li>/</li>
              <li className="text-gray-900">Service 1</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Professional Service 1 in [Your City]
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert Service 1 solutions for [Your City] residents and businesses. 
              Professional, reliable, and affordable service you can trust.
            </p>
          </div>

          {/* Service Details */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">
                Why Choose Our Service 1 in [Your City]?
              </h2>
              <p className="text-gray-700 mb-6">
                When you need reliable Service 1 in [Your City], you need a local expert 
                who understands the unique challenges and requirements of our community. 
                Our team has been serving [Your City] for years, building trust and 
                delivering exceptional results.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4">
                Our Service 1 Process
              </h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-8">
                <li><strong>Initial Consultation:</strong> We assess your needs and provide a detailed quote</li>
                <li><strong>Professional Service:</strong> Our experienced team handles the job with care</li>
                <li><strong>Quality Check:</strong> We ensure everything meets our high standards</li>
                <li><strong>Follow-up:</strong> We check in to ensure your satisfaction</li>
              </ol>

              <h3 className="text-2xl font-semibold mb-4">
                Service 1 in [Your City] - What We Offer
              </h3>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Professional Service 1 solutions
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Emergency Service 1 available 24/7
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Licensed and insured professionals
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Competitive pricing for [Your City] residents
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Local expertise and community knowledge
                </li>
              </ul>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-blue-50 p-6 rounded-lg sticky top-8">
                <h3 className="text-xl font-semibold mb-4">Get a Free Quote</h3>
                <p className="text-gray-700 mb-6">
                  Contact us today for professional Service 1 in [Your City]. 
                  Fast response times and competitive pricing.
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:+1-555-123-4567"
                    className="block w-full bg-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Call (555) 123-4567
                  </a>
                  <a
                    href="mailto:info@yourdomain.com"
                    className="block w-full border-2 border-blue-600 text-blue-600 text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Local Areas Served */}
          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Service 1 Areas in [Your City]
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Downtown [Your City]</h3>
                <p className="text-gray-600">Central business district</p>
                <p className="text-sm text-gray-500">Fast response times</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">North [Your City]</h3>
                <p className="text-gray-600">Residential areas</p>
                <p className="text-sm text-gray-500">Local expertise</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">South [Your City]</h3>
                <p className="text-gray-600">Industrial zones</p>
                <p className="text-sm text-gray-500">24/7 emergency service</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">East [Your City]</h3>
                <p className="text-gray-600">Suburban communities</p>
                <p className="text-sm text-gray-500">Competitive pricing</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Frequently Asked Questions About Service 1 in [Your City]
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">
                  How quickly can you respond to Service 1 emergencies in [Your City]?
                </h3>
                <p className="text-gray-700">
                  We provide 24/7 emergency Service 1 in [Your City] with response times 
                  typically under 2 hours for urgent situations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">
                  Do you offer Service 1 for both residential and commercial clients in [Your City]?
                </h3>
                <p className="text-gray-700">
                  Yes, we provide comprehensive Service 1 solutions for both residential 
                  and commercial clients throughout [Your City] and surrounding areas.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">
                  What makes your Service 1 team the best choice in [Your City]?
                </h3>
                <p className="text-gray-700">
                  Our team combines local expertise, years of experience, and a commitment 
                  to customer satisfaction that has made us the trusted choice for Service 1 
                  in [Your City].
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-blue-600 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">
              Ready for Professional Service 1 in [Your City]?
            </h2>
            <p className="text-xl mb-8">
              Contact us today for expert Service 1 solutions. 
              Fast, reliable, and affordable service you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-555-123-4567"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call (555) 123-4567
              </a>
              <a
                href="mailto:info@yourdomain.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
