
const Disclaimer = () => {
  return (
    <section id="disclaimer" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title opacity-0 animate-fade-in">Legal Disclaimer</h2>
          <p className="section-subtitle opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>Important information about using Travel Agent GPT</p>
        </div>
        
        <div className="max-w-4xl mx-auto card-glass p-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="prose prose-sm prose-invert max-w-none">
            <h3 className="text-xl font-medium mb-4">Disclaimer of Warranty and Limitation of Liability</h3>
            
            <p className="mb-4 text-white/70">
              Travel Agent GPT is provided "as is" without any warranties, expressed or implied. AI Web Tools LLC does not warrant that the service will be error-free, uninterrupted, or free from harmful components.
            </p>
            
            <p className="mb-4 text-white/70">
              The information provided by Travel Agent GPT is for general informational purposes only. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained within Travel Agent GPT.
            </p>
            
            <p className="mb-4 text-white/70">
              Travel recommendations, pricing information, availability, and other details are subject to change without notice. Users should independently verify all information before making travel arrangements or financial commitments.
            </p>
            
            <p className="mb-4 text-white/70">
              AI Web Tools LLC is not responsible for booking services on behalf of users. All bookings and purchases are conducted directly between the user and the third-party service provider through the provided links. We are not responsible for any actions taken by these third-party providers.
            </p>
            
            <p className="mb-4 text-white/70">
              Under no circumstances shall AI Web Tools LLC be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of Travel Agent GPT, whether based on contract, tort, strict liability, or any other legal theory, even if AI Web Tools LLC has been advised of the possibility of damages.
            </p>
            
            <h3 className="text-xl font-medium my-4">Third-Party Content</h3>
            
            <p className="mb-4 text-white/70">
              Travel Agent GPT may provide links to third-party websites or services. These links are provided for your convenience only. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
            </p>
            
            <h3 className="text-xl font-medium my-4">OpenAI Usage</h3>
            
            <p className="mb-4 text-white/70">
              Travel Agent GPT is a custom GPT created using OpenAI's platform. Your use of Travel Agent GPT is also subject to OpenAI's terms of service and privacy policy.
            </p>
            
            <p className="mb-4 text-white/70">
              By using Travel Agent GPT, you acknowledge that you have read and understood this disclaimer and agree to be bound by its terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
