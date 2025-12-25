import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Users, FileText, Home, Hash } from "lucide-react";

const astrologyServices = [
  {
    icon: Star,
    title: "ज्योतिष विषयक सल्ला",
    description: "ग्रहदशा, राशी आणि नक्षत्रांवर आधारित सखोल मार्गदर्शन",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    icon: Users,
    title: "वधू-वर जुळवणी",
    description: "गुणमिलन आणि योग्य जोडीदार निवडीसाठी सल्ला",
    gradient: "from-rose-400 to-pink-500",
  },
  {
    icon: FileText,
    title: "जन्मपत्रिका (कुंडली)",
    description: "संपूर्ण जन्मकुंडली तयार करून दिली जाते",
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    icon: Home,
    title: "वास्तुशास्त्र सल्ला",
    description: "घर व कार्यालयासाठी वास्तुशास्त्र मार्गदर्शन",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    icon: Hash,
    title: "अंकज्योतिष",
    description: "नाव व जन्मतारखेवर आधारित अंकशास्त्र सल्ला",
    gradient: "from-violet-400 to-purple-500",
  },
];

const AstrologySection = () => {
  return (
    <section className="py-24 gradient-mystical relative overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-twinkle"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              backgroundColor: `hsl(43 96% ${50 + Math.random() * 30}%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float-delayed" />

      {/* Constellation Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
        <line x1="10" y1="20" x2="30" y2="35" stroke="currentColor" strokeWidth="0.1" className="text-accent" />
        <line x1="30" y1="35" x2="25" y2="60" stroke="currentColor" strokeWidth="0.1" className="text-accent" />
        <line x1="70" y1="15" x2="85" y2="40" stroke="currentColor" strokeWidth="0.1" className="text-accent" />
        <line x1="85" y1="40" x2="75" y2="70" stroke="currentColor" strokeWidth="0.1" className="text-accent" />
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <div className="inline-block animate-scale-bounce">
            <span className="text-6xl mb-4 block animate-float">🔮</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-slide-up drop-shadow-lg">
            ज्योतिष विषयक माहिती
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 animate-slide-up max-w-2xl mx-auto" style={{ animationDelay: '0.1s' }}>
            ग्रहदोष निराकरणासाठी व जीवनातील समस्यांवर उपाय
          </p>
          <div className="flex items-center justify-center gap-4 mt-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-20 md:w-32 h-1 gradient-gold rounded-full" />
            <span className="text-accent text-xl animate-twinkle">⭐</span>
            <div className="w-20 md:w-32 h-1 gradient-gold rounded-full" />
          </div>
        </div>

        {/* Astrology Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {astrologyServices.map((service, index) => (
            <Card 
              key={index}
              className="group relative bg-primary-foreground/5 backdrop-blur-lg border-accent/20 hover:border-accent/60 transition-all duration-500 hover:shadow-glow-lg overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated gradient border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              
              <CardHeader className="text-center pb-2 relative">
                {/* Icon container with glow */}
                <div className="relative mx-auto mb-4">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-glow-lg`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  {/* Glow behind icon */}
                  <div className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 mx-auto`} />
                </div>
                <CardTitle className="text-xl text-primary-foreground group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center relative">
                <p className="text-primary-foreground/70 group-hover:text-primary-foreground/90 transition-colors duration-300">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Note */}
        <div className="mt-20 text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="inline-block relative group">
            {/* Animated border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-3xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow" />
            
            <div className="relative glass-effect rounded-2xl px-10 py-8 shadow-glow-lg">
              <div className="flex items-center justify-center gap-4">
                <span className="text-4xl animate-float">📜</span>
                <p className="text-2xl md:text-4xl font-bold text-accent animate-glow">
                  जन्मपत्रिका बनवून मिळेल
                </p>
                <span className="text-4xl animate-float" style={{ animationDelay: '0.5s' }}>📜</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AstrologySection;
