
import { useState, useEffect } from 'react';
import { X, Check, Info } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const DisclaimerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user has already accepted disclaimer
    const hasAccepted = localStorage.getItem('disclaimerAccepted');
    
    if (!hasAccepted) {
      // If not accepted, show the popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // Save to localStorage
    localStorage.setItem('disclaimerAccepted', 'true');
    
    // Close the popup
    setIsOpen(false);
    
    // Show success toast
    toast({
      title: "Welcome aboard!",
      description: "Get ready for the perfect AI-planned vacation experience.",
      variant: "default",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-all duration-300">
      <div 
        className="relative max-w-md w-full mx-4 p-6 overflow-hidden card-glass rounded-3xl border border-ocean/30 shadow-[0_0_30px_rgba(14,165,233,0.3)]"
        style={{
          animation: 'fade-in-up 0.5s ease-out forwards',
        }}
      >
        {/* Floating elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-ocean/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-ocean/5 rounded-full filter blur-3xl"></div>
        
        {/* Close button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-dark-lighter hover:bg-ocean/20 transition-colors"
        >
          <X size={18} className="text-white/80" />
        </button>
        
        {/* Content */}
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-ocean/20 rounded-lg">
              <Info size={24} className="text-ocean" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">
              Important Disclaimer
            </h2>
          </div>
          
          <div className="space-y-4 mb-6 text-white/80">
            <p>
              Travel Agent GPT provides travel suggestions based on available information, but cannot guarantee accuracy, completeness, or fulfillment of accommodations.
            </p>
            <p>
              All bookings, reservations, and transactions are conducted directly with third-party providers. We are not responsible for any issues arising from these arrangements.
            </p>
            <p>
              By clicking "I AGREE", you acknowledge these limitations and proceed at your own discretion.
            </p>
          </div>
          
          <button 
            onClick={handleAccept}
            className="group w-full py-3.5 px-6 rounded-xl bg-ocean hover:bg-ocean-dark transition-all duration-300 flex items-center justify-center gap-2 font-medium text-white shadow-[0_0_15px_rgba(14,165,233,0.4)] hover:shadow-[0_0_25px_rgba(14,165,233,0.6)]"
          >
            <span className="relative bg-clip-text bg-gradient-to-r from-white to-white/90 text-white text-lg tracking-wide">
              I AGREE
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white/40 transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
            </span>
            <Check size={20} className="text-white ml-1 transform group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
