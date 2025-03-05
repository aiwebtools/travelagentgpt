
import ThreeDWaves from './ThreeDWaves';
import { MapPin, Calendar, Plane } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-32 px-4 overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-ocean/20 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-ocean/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      
      {/* Content */}
      <div className="container mx-auto z-10 text-center">
        <div className="inline-block mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="px-4 py-1.5 rounded-full bg-ocean/10 text-ocean text-sm font-medium border border-ocean/20">
            Your Personal AI Travel Assistant
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-5xl mx-auto leading-tight opacity-0 animate-fade-in glow-text" style={{ animationDelay: '0.4s' }}>
          Plan Your Perfect Vacation With AI Precision
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Travel Agent GPT crafts personalized itineraries, finds the best deals, and handles every detail from flights to attractions—all while staying within your budget.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <a 
            href="https://chatgpt.com/g/g-ALS0tTWJO-travel-agent-gpt" 
            className="btn-primary text-center flex items-center justify-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Plane size={18} />
            Plan My Trip Now
          </a>
          <a href="#how-it-works" className="btn-secondary text-center">
            Learn How It Works
          </a>
        </div>
        
        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="card-glass p-5">
            <div className="w-12 h-12 bg-ocean/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-ocean" />
            </div>
            <h3 className="text-lg font-medium mb-2">Personalized Itineraries</h3>
            <p className="text-white/70 text-sm">Custom travel plans tailored to your preferences and interests</p>
          </div>
          
          <div className="card-glass p-5">
            <div className="w-12 h-12 bg-ocean/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="text-ocean" />
            </div>
            <h3 className="text-lg font-medium mb-2">Day-by-Day Planning</h3>
            <p className="text-white/70 text-sm">Detailed daily schedules with activities, restaurants, and attractions</p>
          </div>
          
          <div className="card-glass p-5">
            <div className="w-12 h-12 bg-ocean/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Plane className="text-ocean" />
            </div>
            <h3 className="text-lg font-medium mb-2">Best Travel Deals</h3>
            <p className="text-white/70 text-sm">Real-time search for the best prices on flights, hotels, and more</p>
          </div>
        </div>
      </div>
      
      {/* 3D Waves */}
      <ThreeDWaves />
      
      {/* Video preview section - REDUCED SIZE */}
      <div className="relative z-10 w-full max-w-3xl mx-auto mt-16 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden card-glass p-2">
          <img 
            src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-futuristic-setting-where-a-_3Mwmg.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true" 
            alt="Travel Agent GPT in action" 
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
