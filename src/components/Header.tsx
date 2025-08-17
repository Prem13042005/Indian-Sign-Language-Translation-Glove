import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Hand, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border/40 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-smooth">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Hand className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold">SignGlove AI</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-smooth">
            Home
          </Link>
          <Link to="/features" className="text-muted-foreground hover:text-foreground transition-smooth">
            Features
          </Link>
          <Link to="/about" className="text-muted-foreground hover:text-foreground transition-smooth">
            About
          </Link>
          <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-smooth">
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost">Sign In</Button>
          </Link>
          <Link to="/register">
            <Button variant="hero" size="sm">Get Started</Button>
          </Link>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;