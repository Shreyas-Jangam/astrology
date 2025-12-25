import { Card, CardContent } from "@/components/ui/card";

const services = [
  { title: "विवाह संबंधी पूजा व विधी", icon: "💒", color: "from-rose-500 to-pink-600" },
  { title: "अभिषेक", icon: "🪔", color: "from-amber-500 to-orange-600" },
  { title: "वास्तुशांती", icon: "🏠", color: "from-emerald-500 to-teal-600" },
  { title: "प्राणप्रतिष्ठा", icon: "🕉️", color: "from-violet-500 to-purple-600" },
  { title: "व्रतवैकल्य", icon: "📿", color: "from-cyan-500 to-blue-600" },
  { title: "जन्मकुंडली तयार करणे", icon: "📜", color: "from-yellow-500 to-amber-600" },
  { title: "नक्षत्र व नवग्रह पूजा", icon: "⭐", color: "from-indigo-500 to-violet-600" },
  { title: "कालसर्प शांती", icon: "🐍", color: "from-red-500 to-rose-600" },
  { title: "सत्यनारायण पूजा", icon: "🙏", color: "from-orange-500 to-red-600" },
  { title: "घरातील शांतीसाठी विधी", icon: "☮️", color: "from-teal-500 to-emerald-600" },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <div className="inline-block animate-scale-bounce">
            <span className="text-6xl mb-4 block animate-pulse-slow">🙏</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-gradient-spiritual mb-6 animate-slide-up drop-shadow-lg">
            ॥ शिवशक्ती ॥
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground animate-slide-up" style={{ animationDelay: '0.1s' }}>
            खालील सेवा केल्या जातात
          </p>
          <div className="flex items-center justify-center gap-4 mt-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-20 md:w-32 h-1 gradient-spiritual rounded-full" />
            <span className="text-accent text-xl animate-pulse-slow">✦</span>
            <div className="w-20 md:w-32 h-1 gradient-spiritual rounded-full" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group relative bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-3 cursor-pointer overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-accent/0 to-primary/0 group-hover:via-accent/20 blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              <CardContent className="relative p-6 text-center">
                <div className="relative">
                  <div className="text-5xl mb-4 group-hover:scale-125 transition-all duration-500 group-hover:animate-float">
                    {service.icon}
                  </div>
                  {/* Icon glow */}
                  <div className="absolute inset-0 text-5xl opacity-0 group-hover:opacity-50 blur-md transition-all duration-500">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
