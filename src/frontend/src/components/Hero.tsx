import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-bg.dim_1920x1080.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/75" />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center text-center px-4 py-20">
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <img 
            src="/assets/generated/logo.dim_200x200.png" 
            alt="Ankur Logo" 
            className="h-24 w-24 md:h-32 md:w-32 mx-auto rounded-2xl shadow-2xl"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
          Welcome to <span className="text-primary">Ankur</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          Building innovative solutions with passion and expertise. 
          We transform ideas into reality through cutting-edge technology and creative thinking.
        </p>
        
        <Button 
          size="lg" 
          onClick={scrollToContact}
          className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 group"
        >
          Get in Touch
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
}
