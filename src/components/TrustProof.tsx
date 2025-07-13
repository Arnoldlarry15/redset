import React from 'react';
import { Star, Award, Users, TrendingUp } from 'lucide-react';

export const TrustProof: React.FC = () => {
  const testimonials = [
    {
      quote: "Red Set caught a critical jailbreak vulnerability that our internal testing missed. The detailed reports saved us weeks of manual security review.",
      author: "Sarah Chen",
      title: "Head of AI Security",
      company: "TechCorp AI",
      rating: 5
    },
    {
      quote: "The bias detection agents identified patterns in our model responses that we never would have found manually. Game-changing for our compliance efforts.",
      author: "Marcus Rodriguez",
      title: "ML Engineering Lead",
      company: "DataFlow Systems",
      rating: 5
    },
    {
      quote: "Red Set's continuous monitoring gives us confidence that our AI deployments are secure. The integration was seamless and the insights are actionable.",
      author: "Dr. Emily Watson",
      title: "Chief Technology Officer",
      company: "AI Innovations Lab",
      rating: 5
    }
  ];

  const achievements = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Winner",
      subtitle: "AI Security Hackathon 2024",
      description: "Best Security Tool"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "500+",
      subtitle: "Security Teams",
      description: "Trust Red Set Daily"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "10,000+",
      subtitle: "Vulnerabilities",
      description: "Detected & Prevented"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "4.9/5",
      subtitle: "Customer Rating",
      description: "Based on 200+ Reviews"
    }
  ];

  const partners = [
    "OpenAI Compatible",
    "Anthropic Certified",
    "Hugging Face Partner",
    "AWS Security Validated",
    "SOC 2 Compliant"
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See what leading AI teams already trust.
          </h2>
          <p className="text-xl text-gray-600">
            Join hundreds of security professionals protecting AI systems worldwide
          </p>
        </div>
        
        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <div className="text-red-500">{achievement.icon}</div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{achievement.title}</div>
              <div className="text-lg font-semibold text-red-500 mb-1">{achievement.subtitle}</div>
              <div className="text-sm text-gray-600">{achievement.description}</div>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            What Security Leaders Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.title}</div>
                  <div className="text-sm text-red-500 font-medium">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Case Study Highlight */}
        <div className="bg-gradient-to-r from-red-50 to-gray-50 rounded-2xl p-8 mb-16 border border-red-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-4">
                Case Study
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                How Red Set Caught a Zero-Day Bias Exploit in FinanceAI's Customer Service Bot
              </h3>
              <p className="text-gray-700 mb-6">
                Our bias detection agents identified discriminatory patterns in loan approval responses 
                that traditional testing missed, preventing potential regulatory violations and 
                protecting customer trust.
              </p>
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Read Full Case Study
              </button>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg border">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-red-500">87%</div>
                <div className="text-sm text-gray-600">Bias Reduction</div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Detection Time</span>
                  <span className="text-sm font-semibold">2.3 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Manual Testing</span>
                  <span className="text-sm font-semibold">Would take 3+ weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Compliance Risk</span>
                  <span className="text-sm font-semibold text-green-600">Eliminated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Partner Logos */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-8">
            Trusted by teams using
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium text-gray-700">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};