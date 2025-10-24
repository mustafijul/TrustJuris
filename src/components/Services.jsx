import React, { useState } from 'react';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(null);

  const serviceCategories = [
    {
      id: 1,
      title: "Corporate & Business Law",
      icon: "🏢",
      description: "Comprehensive legal solutions for businesses of all sizes",
      featured: true,
      services: [
        "Business Formation & Incorporation",
        "Contract Drafting & Review",
        "Mergers & Acquisitions",
        "Intellectual Property Protection",
        "Regulatory Compliance",
        "Commercial Litigation"
      ]
    },
    {
      id: 2,
      title: "Family Law",
      icon: "👨‍👩‍👧‍👦",
      description: "Compassionate legal support for family matters",
      featured: false,
      services: [
        "Divorce & Separation",
        "Child Custody & Support",
        "Adoption Proceedings",
        "Prenuptial Agreements",
        "Domestic Violence Protection",
        "Parental Rights"
      ]
    },
    {
      id: 3,
      title: "Criminal Defense",
      icon: "⚖️",
      description: "Aggressive defense for criminal charges",
      featured: true,
      services: [
        "DUI/DWI Defense",
        "Drug Offenses",
        "White Collar Crimes",
        "Assault & Violent Crimes",
        "Theft & Property Crimes",
        "Appeals & Post-Conviction"
      ]
    },
    {
      id: 4,
      title: "Real Estate Law",
      icon: "🏠",
      description: "Expert guidance for property transactions",
      featured: false,
      services: [
        "Property Purchase & Sale",
        "Lease Agreements",
        "Title Issues & Disputes",
        "Zoning & Land Use",
        "Foreclosure Defense",
        "Real Estate Litigation"
      ]
    },
    {
      id: 5,
      title: "Employment Law",
      icon: "💼",
      description: "Protecting workers' and employers' rights",
      featured: false,
      services: [
        "Wrongful Termination",
        "Discrimination Claims",
        "Wage & Hour Disputes",
        "Employment Contracts",
        "Workplace Safety",
        "HR Compliance"
      ]
    },
    {
      id: 6,
      title: "Estate Planning",
      icon: "📑",
      description: "Secure your legacy and protect your family",
      featured: true,
      services: [
        "Will Drafting",
        "Trust Creation",
        "Probate Administration",
        "Power of Attorney",
        "Healthcare Directives",
        "Estate Tax Planning"
      ]
    }
  ];

  const stats = [
    { number: "500+", label: "Cases Won" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Expert Lawyers" },
    { number: "15+", label: "Years Experience" }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Case Evaluation",
      description: "Free initial consultation to understand your legal needs",
      icon: "📋"
    },
    {
      step: 2,
      title: "Strategy Development",
      description: "Custom legal strategy tailored to your specific situation",
      icon: "🎯"
    },
    {
      step: 3,
      title: "Legal Action",
      description: "Aggressive representation and diligent case management",
      icon: "⚡"
    },
    {
      step: 4,
      title: "Resolution",
      description: "Achieving the best possible outcome for your case",
      icon: "✅"
    }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="hero min-h-[60vh] bg-gradient-to-r from-primary to-secondary text-white">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Legal Services
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Comprehensive legal solutions tailored to your unique needs. 
              Experience excellence in legal representation with our team of expert attorneys.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-accent btn-lg">Free Consultation</button>
              <button className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">
                View Our Cases
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="stat">
                  <div className="stat-value text-primary">{stat.number}</div>
                  <div className="stat-desc text-base-content">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Legal Practice Areas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of legal services delivered by experienced attorneys 
            dedicated to achieving the best outcomes for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category) => (
            <div 
              key={category.id}
              className={`card shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                category.featured ? 'ring-2 ring-primary' : ''
              }`}
              onMouseEnter={() => setActiveService(category.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{category.icon}</span>
                  <h3 className="card-title text-2xl">{category.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{category.description}</p>
                
                <div className="space-y-2 mb-6">
                  {category.services.slice(0, activeService === category.id ? category.services.length : 3).map((service, index) => (
                    <div key={index} className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="card-actions justify-between items-center">
                  <button className="btn btn-primary btn-sm">Learn More</button>
                  {category.featured && (
                    <span className="badge badge-accent">Featured</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Legal Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to ensure every client receives comprehensive 
              legal support from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-2xl mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for a free consultation. Let's discuss how we can help you 
            achieve your legal objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-accent btn-lg">Schedule Consultation</button>
            <button className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">
              Call Now: (555) 123-4567
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our legal services and process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {[
              {
                question: "How much do your legal services cost?",
                answer: "We offer various fee structures including hourly rates, flat fees, and contingency fees depending on the case type. During your free consultation, we'll discuss the best payment option for your situation."
              },
              {
                question: "How long does a typical case take?",
                answer: "Case duration varies based on complexity, jurisdiction, and specific circumstances. Simple matters may resolve in weeks, while complex litigation can take months or years. We'll provide a realistic timeline during our initial assessment."
              },
              {
                question: "Do you offer payment plans?",
                answer: "Yes, we understand that legal services can be a significant investment. We offer flexible payment plans for many of our services to make quality legal representation accessible."
              },
              {
                question: "What should I bring to my first consultation?",
                answer: "Bring any relevant documents, correspondence, contracts, or evidence related to your case. Also prepare a timeline of events and list of questions. We'll guide you through what's most important for your specific situation."
              }
            ].map((faq, index) => (
              <div key={index} className="collapse collapse-plus bg-base-200">
                <input type="radio" name="services-faq" />
                <div className="collapse-title text-xl font-medium">
                  {faq.question}
                </div>
                <div className="collapse-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;