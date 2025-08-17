import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-glove.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-gradient-primary text-transparent bg-clip-text text-sm font-semibold tracking-wide uppercase">
                  Revolutionary Technology
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Bridge Communication with{" "}
                <span className="bg-gradient-primary text-transparent bg-clip-text">
                  AI-Powered
                </span>{" "}
                Sign Language
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Transform sign language into real-time text and speech with our cutting-edge AI translation glove. 
                Making communication accessible for everyone.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button variant="hero" size="lg" className="group">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </Link>
              <Button variant="glass" size="lg" className="group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-smooth" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500ms</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary/20 rounded-3xl blur-2xl"></div>
            <img 
              src={heroImage} 
              alt="AI Sign Language Translation Glove in action" 
              className="relative w-full h-auto rounded-3xl shadow-card hover:shadow-glow transition-smooth"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;