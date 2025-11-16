import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is ZynPay Technology's core platform?",
      answer: " ZynPay Technology has engineered a comprehensive Unified API Platform designed to transform digital transaction processing across India, enhancing business engagement and revenue optimization."
    },
    {
      question: "How secure are transactions on your platform?",
      answer: "Absolutely secure. Our platform employs military-grade encryption, advanced security protocols, and multi-layer authentication to ensure complete protection of all transactions and sensitive data."
    },
    {
      question: "Are you officially recognized by regulatory authorities?",
      answer: "Yes, ZynPay Technology is officially registered and certified by the National Payments Corporation of India (NPCI) and maintains full compliance with all financial regulations."
    },
    {
      question: "What range of services does your platform provide?",
      answer: "We offer an extensive portfolio including UPI integration, BBPS services, AePS solutions, money transfer, PAN card processing, insurance services, micro ATM solutions, and comprehensive payment gateways."
    },
    {
      question: "Do you offer customizable software solutions for businesses?",
      answer: "Absolutely. We provide fully customizable white-label software solutions that can be tailored to match your specific business requirements, branding, and operational needs."
    },
    {
      question: "What distinguishes ZynPay Technology in the fintech industry?",
      answer: "Our cutting-edge technology infrastructure, NPCI certification, round-the-clock support, enterprise-grade security, and comprehensive service ecosystem position us as an industry leader in digital financial services."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-emerald-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <HelpCircle className="w-8 h-8 text-purple-600" />
            <p className="text-purple-600 font-bold text-lg">COMMON INQUIRIES</p>
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-8">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Find answers to the most common questions about our platform and services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:border-purple-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-purple-50 hover:to-emerald-50 transition-all duration-300"
              >
                <span className="font-bold text-gray-800 text-lg">{faq.question}</span>
                <div className="flex items-center space-x-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-gradient-to-r from-purple-500 to-emerald-500' 
                      : 'bg-gray-100'
                  }`}>
                    <ChevronDown
                      className={`w-5 h-5 transition-all duration-300 ${
                        openIndex === index 
                          ? 'rotate-180 text-white' 
                          : 'text-gray-500'
                      }`}
                    />
                  </div>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="bg-gradient-to-r from-purple-50 to-emerald-50 rounded-xl p-6">
                    <p className="text-gray-700 leading-relaxed text-lg">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;