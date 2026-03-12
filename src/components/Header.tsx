
import { useState, useEffect } from 'react';
import { Menu, X, Plane } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-light/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="https://chatgpt.com/g/g-ALS0tTWJO-travel-agent-gpt" className="flex items-center space-x-2" target="_blank" rel="noopener noreferrer">
          <div className="w-10 h-10 rounded-full bg-ocean flex items-center justify-center">
            <Plane size={20} className="text-white" />
          </div>
          <div>
            <h1 className="font-bold text-xl text-white">Travel Agent GPT</h1>
            <p className="text-[10px] text-white/70">Presented by AiWebTools.Ai</p>
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <a href="https://chatgpt.com/g/g-ALS0tTWJO-travel-agent-gpt" className="nav-link" target="_blank" rel="noopener noreferrer">
            Travel Agent GPT
          </a>
          <a href="#faq" className="nav-link">
            FAQ
          </a>
          <a href="#disclaimer" className="nav-link">
            Disclaimer
          </a>
          <a href="https://aiwebtools.lovable.app/?via=aiwebtools" className="nav-link" target="_blank" rel="noopener noreferrer">
            More AI Tools
          </a>
          <a href="https://chatgpt.com/g/g-ALS0tTWJO-travel-agent-gpt" className="btn-primary ml-4" target="_blank" rel="noopener noreferrer">
            Try Now
          </a>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-dark-light/95 backdrop-blur-lg py-4 px-6 flex flex-col space-y-4 animate-fade-in">
          <a 
            href="https://chatgpt.com/g/g-ALS0tTWJO-travel-agent-gpt" 
            className="text-white py-2 border-b border-white/10"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
          >
            Travel Agent GPT
          </a>
          <a 
            href="#faq" 
            className="text-white py-2 border-b border-white/10"
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="text-white py-2 border-b border-white/10"
            onClick={() => setMobileMenuOpen(false)}
          >
            Disclaimer
          </a>
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            className="text-white py-2"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
          >
            More AI Tools
          </a>
          <a 
            href="https://chatgpt.com/g/g-ALS0tTWJO-travel-agent-gpt" 
            className="btn-primary text-center"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
          >
            Try Now
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
