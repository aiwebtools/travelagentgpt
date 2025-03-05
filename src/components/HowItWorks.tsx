
import { MessageSquare, Search, Calendar, FileText } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageSquare className="text-ocean" size={24} />,
      title: "Share Your Travel Preferences",
      description: "Tell Travel Agent GPT about your destination interests, budget, travel dates, companions, and activity preferences."
    },
    {
      icon: <Search className="text-ocean" size={24} />,
      title: "AI Searches for the Best Options",
      description: "The AI searches across multiple platforms to find the best flights, accommodations, and activities based on your criteria."
    },
    {
      icon: <Calendar className="text-ocean" size={24} />,
      title: "Receive Your Custom Itinerary",
      description: "Get a detailed day-by-day plan with balanced activities, dining options, and direct booking links."
    },
    {
      icon: <FileText className="text-ocean" size={24} />,
      title: "Download Your Travel Guide",
      description: "Save your complete travel plan as a downloadable document to access offline during your trip."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title opacity-0 animate-fade-in">How It Works</h2>
          <p className="section-subtitle opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>Plan your dream vacation in four simple steps</p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-ocean/10 rounded-full flex items-center justify-center shrink-0">
                <div className="w-12 h-12 bg-ocean/20 rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              
              <div className="card-glass p-6 w-full">
                <div className="flex items-center mb-3">
                  <span className="bg-ocean text-white text-xs w-6 h-6 rounded-full flex items-center justify-center mr-3">
                    {index + 1}
                  </span>
                  <h3 className="font-semibold text-xl">{step.title}</h3>
                </div>
                <p className="text-white/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <a 
            href="https://chatgpt.com/g/g-ALS0tTWJO-travel-agent-gpt" 
            className="btn-primary inline-flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Planning Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
