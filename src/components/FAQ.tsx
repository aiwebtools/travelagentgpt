
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
  index: number;
}

const FAQItem = ({ question, answer, isOpen, toggleOpen, index }: FAQItemProps) => {
  return (
    <div 
      className="border-b border-white/10 py-4 opacity-0 animate-fade-in"
      style={{ animationDelay: `${0.3 + index * 0.1}s` }}
    >
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        {isOpen ? (
          <ChevronUp className="text-ocean" size={20} />
        ) : (
          <ChevronDown className="text-ocean" size={20} />
        )}
      </button>
      
      {isOpen && (
        <div className="mt-2 text-white/70 text-sm">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What is Travel Agent GPT?",
      answer: "Travel Agent GPT is an AI-powered travel assistant that helps you plan detailed vacations based on your preferences. It creates custom itineraries, finds the best travel deals, suggests accommodations and activities, and provides a downloadable document with your complete travel plan."
    },
    {
      question: "How accurate are the travel recommendations?",
      answer: "Travel Agent GPT searches multiple sources in real-time to provide up-to-date recommendations and pricing. While it strives for accuracy, prices and availability can change quickly in the travel industry, so it's always good to verify critical details before booking."
    },
    {
      question: "Can I use Travel Agent GPT for international travel?",
      answer: "Yes! Travel Agent GPT can assist with planning trips worldwide. It can provide insights on visa requirements, local customs, currency information, and even help with language translation needs during your trip."
    },
    {
      question: "How detailed are the day-by-day itineraries?",
      answer: "Travel Agent GPT creates comprehensive daily plans that include recommended activities, dining options, transportation details, estimated costs, and even suggested timing to optimize your experience while accounting for travel time between locations."
    },
    {
      question: "Is there a limit to how many questions I can ask?",
      answer: "No, you can have an extended conversation to refine your travel plans. Travel Agent GPT is designed to ask clarifying questions and incorporate your feedback until the itinerary perfectly matches your vision."
    },
    {
      question: "Can Travel Agent GPT help me if my plans change during the trip?",
      answer: "Yes, Travel Agent GPT can assist with on-the-go changes to your itinerary, suggesting alternatives if weather disrupts plans, recommending new restaurants if reservations fall through, or helping reroute your schedule due to unexpected events."
    }
  ];
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title opacity-0 animate-fade-in">Frequently Asked Questions</h2>
          <p className="section-subtitle opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>Everything you need to know about Travel Agent GPT</p>
        </div>
        
        <div className="max-w-3xl mx-auto card-glass p-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
