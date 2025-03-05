
import { Plane, Calendar, CreditCard, MapPin, Clock, FileText, Globe, Image, BellRing } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Plane className="text-ocean" size={24} />,
      title: "Comprehensive Travel Planning",
      description: "From flights to accommodations, activities, and transportation—everything planned precisely to your specifications."
    },
    {
      icon: <Calendar className="text-ocean" size={24} />,
      title: "Day-by-Day Itineraries",
      description: "Detailed daily schedules with optimized routes to maximize your experience in each destination."
    },
    {
      icon: <CreditCard className="text-ocean" size={24} />,
      title: "Budget Optimization",
      description: "Find the best deals across multiple booking platforms to ensure your vacation stays within budget."
    },
    {
      icon: <MapPin className="text-ocean" size={24} />,
      title: "Local Recommendations",
      description: "Personalized suggestions for restaurants, attractions, and hidden gems based on your interests."
    },
    {
      icon: <Clock className="text-ocean" size={24} />,
      title: "Real-time Booking Links",
      description: "Direct links to book flights, hotels, tours, and attractions with verified current availability."
    },
    {
      icon: <FileText className="text-ocean" size={24} />,
      title: "Downloadable Travel Plans",
      description: "Complete itineraries compiled into a shareable, downloadable document for easy offline access."
    },
    {
      icon: <Globe className="text-ocean" size={24} />,
      title: "Language Assistance",
      description: "Translation help and cultural insights to navigate foreign destinations with confidence."
    },
    {
      icon: <Image className="text-ocean" size={24} />,
      title: "Virtual Destination Previews",
      description: "AI-generated visual previews of destinations to help you visualize your upcoming experience."
    },
    {
      icon: <BellRing className="text-ocean" size={24} />,
      title: "Travel Alerts & Support",
      description: "Stay informed about travel advisories and receive guidance throughout your journey."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title opacity-0 animate-fade-in">Powerful AI Travel Assistance</h2>
          <p className="section-subtitle opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>Everything you need for the perfect trip</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex items-start">
                <div className="w-12 h-12 bg-ocean/10 rounded-xl flex items-center justify-center mr-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">{feature.title}</h3>
                  <p className="text-white/70 text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
