import { Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const FloatingParticle = ({ delay, left, size }: { delay: number; left: string; size: number }) => (
  <div
    className="absolute rounded-full bg-accent/60 animate-twinkle"
    style={{
      width: size,
      height: size,
      left,
      top: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      filter: 'blur(0.5px)',
    }}
  />
);

const OmSymbol = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <text x="50" y="65" textAnchor="middle" fontSize="50" className="fill-accent font-marathi">ॐ</text>
  </svg>
);

const HeroSection = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    delay: Math.random() * 5,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 2,
  }));

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/70 to-background/95" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <FloatingParticle key={i} {...p} />
        ))}
      </div>

      {/* Decorative Om Symbols */}
      <div className="absolute top-8 left-8 w-24 h-24 md:w-32 md:h-32 animate-pulse-slow opacity-30">
        <OmSymbol />
      </div>
      <div className="absolute top-8 right-8 w-24 h-24 md:w-32 md:h-32 animate-pulse-slow opacity-30" style={{ animationDelay: '1s' }}>
        <OmSymbol />
      </div>
      <div className="absolute bottom-32 left-16 w-16 h-16 animate-float opacity-20">
        <OmSymbol />
      </div>
      <div className="absolute bottom-40 right-16 w-16 h-16 animate-float-delayed opacity-20">
        <OmSymbol />
      </div>

      {/* Rotating Mandala Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 animate-spin-slow pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <pattern id="mandala" patternUnits="userSpaceOnUse" width="40" height="40">
              <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
              <circle cx="20" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
            </pattern>
          </defs>
          <circle cx="100" cy="100" r="95" fill="url(#mandala)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-center text-primary-foreground mb-8">
          <div className="text-center md:text-left mb-4 md:mb-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-xl md:text-2xl text-accent animate-glow font-semibold">॥ श्री सिद्धिविनायक प्रसन्न ॥</p>
            <p className="text-lg text-primary-foreground/80 mt-1">शिव</p>
          </div>
          <div className="text-center md:text-right animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-accent animate-glow font-semibold">॥ श्री खंडाळेश्वर प्रसन्न ॥</p>
            <p className="text-lg text-primary-foreground/80 mt-1">आरंभ</p>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center py-16 md:py-24">
          {/* Decorative Top Line */}
          <div className="inline-block mb-8 animate-scale-bounce">
            <div className="flex items-center gap-4">
              <div className="w-16 md:w-24 h-0.5 gradient-gold rounded-full" />
              <span className="text-accent text-2xl animate-pulse-slow">✦</span>
              <div className="w-16 md:w-24 h-0.5 gradient-gold rounded-full" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 animate-slide-up drop-shadow-2xl" style={{ animationDelay: '0.3s' }}>
            जयेश शशिकांत महंत
          </h1>
          <p className="text-2xl md:text-4xl text-accent mb-8 animate-slide-up animate-glow font-semibold" style={{ animationDelay: '0.4s' }}>
            (स्वामी)
          </p>
          
          {/* Decorative Bottom Line */}
          <div className="inline-block mt-6 animate-scale-bounce" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-4">
              <div className="w-16 md:w-24 h-0.5 gradient-gold rounded-full" />
              <span className="text-accent text-2xl animate-pulse-slow">✦</span>
              <div className="w-16 md:w-24 h-0.5 gradient-gold rounded-full" />
            </div>
          </div>
        </div>

        {/* Contact Numbers */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <a 
            href="tel:+919876543210" 
            className="group flex items-center gap-3 glass-effect rounded-full px-8 py-4 text-primary-foreground hover:bg-accent/30 transition-all duration-500 shadow-glow hover:shadow-glow-lg hover:scale-105"
          >
            <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center group-hover:animate-pulse">
              <Phone className="w-5 h-5 text-secondary" />
            </div>
            <span className="text-lg font-medium">+91 98765 43210</span>
          </a>
          <a 
            href="tel:+919876543211" 
            className="group flex items-center gap-3 glass-effect rounded-full px-8 py-4 text-primary-foreground hover:bg-accent/30 transition-all duration-500 shadow-glow hover:shadow-glow-lg hover:scale-105"
          >
            <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center group-hover:animate-pulse">
              <Phone className="w-5 h-5 text-secondary" />
            </div>
            <span className="text-lg font-medium">+91 98765 43211</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-8 h-14 border-2 border-accent/60 rounded-full flex justify-center pt-2 shadow-glow">
            <div className="w-2 h-3 bg-accent rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
