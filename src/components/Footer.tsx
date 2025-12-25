import { Phone, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-secondary py-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main content */}
        <div className="text-center mb-10">
          <div className="inline-block mb-6">
            <span className="text-5xl animate-pulse-slow">🙏</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-3 animate-slide-up">
            जयेश शशिकांत महंत (स्वामी)
          </h3>
          <p className="text-xl text-secondary-foreground/70 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            धार्मिक विधी व ज्योतिष सेवा
          </p>
        </div>

        {/* Contact buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
          <a 
            href="tel:+919876543210"
            className="group flex items-center gap-3 bg-secondary-foreground/10 hover:bg-accent/20 rounded-full px-6 py-3 transition-all duration-300 hover:shadow-glow hover:scale-105"
          >
            <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center group-hover:animate-pulse">
              <Phone className="w-5 h-5 text-secondary" />
            </div>
            <span className="text-lg text-secondary-foreground">+91 98765 43210</span>
          </a>
          <a 
            href="tel:+919876543211"
            className="group flex items-center gap-3 bg-secondary-foreground/10 hover:bg-accent/20 rounded-full px-6 py-3 transition-all duration-300 hover:shadow-glow hover:scale-105"
          >
            <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center group-hover:animate-pulse">
              <Phone className="w-5 h-5 text-secondary" />
            </div>
            <span className="text-lg text-secondary-foreground">+91 98765 43211</span>
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-24 h-0.5 gradient-gold rounded-full" />
          <span className="text-accent text-xl animate-pulse-slow">✦</span>
          <div className="w-24 h-0.5 gradient-gold rounded-full" />
        </div>

        {/* Bottom message */}
        <div className="text-center">
          <p className="text-lg text-secondary-foreground/80 mb-4">
            ॥ श्री सिद्धिविनायक प्रसन्न ॥ &nbsp;•&nbsp; ॥ श्री खंडाळेश्वर प्रसन्न ॥
          </p>
          <p className="text-sm text-secondary-foreground/50 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" /> for spiritual guidance
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
