import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Zap, Shield, Users, Globe, Heart } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Advanced AI Recognition",
    description: "Cutting-edge neural networks trained on thousands of sign language patterns for maximum accuracy."
  },
  {
    icon: Zap,
    title: "Real-Time Translation",
    description: "Instant translation with minimal latency, enabling natural, flowing conversations."
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "All processing happens locally on device. Your conversations remain completely private."
  },
  {
    icon: Users,
    title: "Multi-User Support",
    description: "Connect multiple gloves for group conversations with seamless translation management."
  },
  {
    icon: Globe,
    title: "Multiple Languages",
    description: "Support for ASL, BSL, and many other sign languages with regular updates."
  },
  {
    icon: Heart,
    title: "Accessibility Focused",
    description: "Designed with the deaf and hard-of-hearing community to ensure true inclusivity."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Powerful Features for{" "}
            <span className="bg-gradient-primary text-transparent bg-clip-text">
              Everyone
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI translation glove combines advanced technology with user-centered design 
            to create seamless communication experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-smooth border-border/50 hover:border-primary/20"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="group-hover:text-primary transition-smooth">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;