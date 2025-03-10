
import { ExternalLink, Mail, Phone, Plane } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-light py-16 px-4 relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Column 1 - Logo and tagline */}
          <div className="md:col-span-1">
            <a 
              href="https://chatgpt.com/g/g-ALS0tTWJO-travel-agent-gpt" 
              className="flex items-center space-x-2 mb-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 rounded-full bg-ocean flex items-center justify-center">
                <Plane size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">Travel Agent GPT</h3>
              </div>
            </a>
            
            <p className="text-white/70 text-sm mb-4">
              Your AI travel companion from planning to vacation and beyond
            </p>
            
            <a 
              href="https://www.aiwebtools.ai" 
              className="inline-flex items-center text-sm text-ocean hover:text-ocean-light transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>More AI Tools</span>
              <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
          
          {/* Column 2 - Links */}
          <div className="md:col-span-1">
            <h3 className="text-white font-medium mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-ALS0tTWJO-travel-agent-gpt" 
                  className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Travel Agent GPT
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://www.aiwebtools.ai" 
                  className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Legal */}
          <div className="md:col-span-1">
            <h3 className="text-white font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.ai/terms-of-services" 
                  className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div className="md:col-span-1">
            <h3 className="text-white font-medium mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:4758008096" 
                  className="text-white/70 hover:text-white text-sm transition-colors duration-200 flex items-center"
                >
                  <Phone size={16} className="mr-2 text-ocean" />
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-white/70 hover:text-white text-sm transition-colors duration-200 flex items-center"
                >
                  <Mail size={16} className="mr-2 text-ocean" />
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* More AI Tools Button */}
        <div className="flex justify-end mt-12">
          <a 
            href="https://www.aiwebtools.ai" 
            className="bg-ocean hover:bg-ocean-dark text-white font-medium px-6 py-3 rounded-full transition-all duration-300 inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            More AI Tools
          </a>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm">
          <a 
            href="https://www.aiwebtools.ai" 
            className="hover:text-white transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            © 2025 AI WEB TOOLS LLC All rights reserved.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
