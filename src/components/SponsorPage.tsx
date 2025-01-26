import React, { useState } from 'react';
import { 
  Rocket,
  Users,
  Globe,
  Trophy,
  Heart,
  Mail,
  ArrowRight,
  CheckCircle2,
  Building2,
  Send
} from 'lucide-react';

interface SponsorTier {
  name: string;
  price: string;
  benefits: string[];
  recommended?: boolean;
}

const sponsorTiers: SponsorTier[] = [
  {
    name: 'Gold Sponsor',
    price: '$5,000/month',
    benefits: [
      'Large logo placement on the homepage',
      'Featured blog post dedicated to your brand',
      'Social media shoutouts on all channels',
      'Customized promotional campaigns',
      'Complimentary sponsorship of events'
    ],
    recommended: true
  },
  {
    name: 'Silver Sponsor',
    price: '$2,500/month',
    benefits: [
      'Medium logo placement on the sponsor page',
      'Social media mentions on select platforms',
      'Mention in newsletters to 10,000+ subscribers',
      'Brand visibility in community events'
    ]
  },
  {
    name: 'Bronze Sponsor',
    price: '$1,000/month',
    benefits: [
      'Small logo placement on the sponsor page',
      'Mention in a "Thank You" post on social media',
      'Recognition in monthly newsletters',
      'Basic brand visibility package'
    ]
  }
];

function SponsorPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    tier: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your interest! We will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Fuel Innovation. Empower Communities.
            <br />
            <span className="text-orange-400">Sponsor Us Today!</span>
          </h1>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Partner with HelpOps Quest and be a catalyst for growth, learning, and innovation in the tech ecosystem. Together, we can create a meaningful impact.
          </p>
          <a
            href="#sponsorship-tiers"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors duration-300"
          >
            Become a Sponsor
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At HelpOps Quest, our mission is to empower professionals, learners, and enthusiasts in the DevOps field by providing resources, tools, and a collaborative community to solve real-world challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Global Community</h3>
              <p className="text-gray-600">
                Serving over 10,000 members globally with a thriving community of DevOps enthusiasts.
              </p>
            </div>
            <div className="text-center p-6">
              <Globe className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Worldwide Impact</h3>
              <p className="text-gray-600">
                1M+ monthly visits from tech professionals across 150+ countries.
              </p>
            </div>
            <div className="text-center p-6">
              <Trophy className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Industry Recognition</h3>
              <p className="text-gray-600">
                Trusted by leading tech companies and recognized for excellence in DevOps education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sponsor Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-16">Why Sponsor Us?</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                  <Building2 className="h-6 w-6 text-orange-500 mr-2" />
                  Your Brand, Our Reach
                </h3>
                <p className="text-gray-600">
                  Get unmatched visibility by partnering with HelpOps Quest. With a thriving community of DevOps professionals, your brand will reach highly engaged and targeted individuals.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                  <Heart className="h-6 w-6 text-orange-500 mr-2" />
                  Create a Lasting Impact
                </h3>
                <p className="text-gray-600">
                  Support a mission-driven initiative that fosters education, innovation, and collaboration. Your sponsorship enables us to continue providing value to our growing community.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-6">Brand Exposure Benefits</h3>
              <ul className="space-y-4">
                {[
                  'Featured logo placement on our homepage and sponsor page',
                  'Mentions in our newsletters reaching 10,000+ subscribers',
                  'Social media promotion across all channels',
                  'Custom campaigns and blog posts promoting your brand',
                  'Direct engagement with our DevOps community'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section id="sponsorship-tiers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-16">Sponsorship Tiers</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {sponsorTiers.map((tier, index) => (
              <div
                key={index}
                className={`
                  rounded-lg p-8 transition-all duration-300 transform hover:scale-105
                  ${tier.recommended
                    ? 'bg-gradient-to-br from-blue-900 to-blue-800 text-white shadow-xl'
                    : 'bg-white border border-gray-200 shadow-lg'
                  }
                `}
              >
                {tier.recommended && (
                  <div className="text-orange-400 text-sm font-semibold mb-4">RECOMMENDED</div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${tier.recommended ? 'text-white' : 'text-blue-900'}`}>
                  {tier.name}
                </h3>
                <p className={`text-3xl font-bold mb-6 ${tier.recommended ? 'text-orange-400' : 'text-blue-900'}`}>
                  {tier.price}
                </p>
                <ul className="space-y-4 mb-8">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <CheckCircle2 className={`h-5 w-5 mr-2 flex-shrink-0 mt-1 ${
                        tier.recommended ? 'text-orange-400' : 'text-green-500'
                      }`} />
                      <span className={tier.recommended ? 'text-blue-100' : 'text-gray-600'}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`
                    w-full py-3 rounded-lg font-semibold transition-colors duration-300
                    ${tier.recommended
                      ? 'bg-orange-500 hover:bg-orange-600 text-white'
                      : 'bg-blue-900 hover:bg-blue-800 text-white'
                    }
                  `}
                >
                  Choose {tier.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600">
              Interested in sponsoring? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="tier" className="block text-sm font-medium text-gray-700 mb-1">
                Sponsorship Interest
              </label>
              <select
                id="tier"
                value={formData.tier}
                onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                required
              >
                <option value="">Select a tier</option>
                <option value="gold">Gold Sponsor</option>
                <option value="silver">Silver Sponsor</option>
                <option value="bronze">Bronze Sponsor</option>
                <option value="custom">Custom Package</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center"
            >
              Send Message
              <Send className="ml-2 h-5 w-5" />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Prefer email? Reach out directly at{' '}
              <a href="mailto:sponsors@helpops-hub.com" className="text-orange-500 hover:text-orange-600">
                sponsors@helpops-hub.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Current Sponsors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Valued Sponsors</h2>
          <p className="text-gray-600 mb-12">
            Thank you to our incredible sponsors for their continued support. Your contribution makes our mission possible.
          </p>
          
          {/* Sponsor Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="w-40 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 font-semibold">Sponsor Logo</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SponsorPage;