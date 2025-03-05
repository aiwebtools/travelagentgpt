
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jessica M.",
      location: "San Francisco, CA",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      stars: 5,
      text: "Travel Agent GPT planned our family trip to Japan flawlessly. The day-by-day itinerary was perfectly balanced with activities for both adults and children, and the restaurant recommendations were spot-on for our dietary preferences."
    },
    {
      name: "Michael T.",
      location: "London, UK",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      stars: 5,
      text: "I was skeptical about using AI for travel planning, but Travel Agent GPT exceeded my expectations. It found flight deals I couldn't find myself and created a European tour that hit all my bucket list spots while staying under budget."
    },
    {
      name: "Sophia L.",
      location: "Melbourne, Australia",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      stars: 5,
      text: "As a solo female traveler, safety was my priority. Travel Agent GPT considered this in all recommendations and provided incredibly useful local insights. The downloadable travel guide was a lifesaver when I lost internet connection!"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title opacity-0 animate-fade-in">Traveler Experiences</h2>
          <p className="section-subtitle opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>See what our users are saying</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="feature-card p-6 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <p className="text-white/50 text-sm">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-white/80 text-sm italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
