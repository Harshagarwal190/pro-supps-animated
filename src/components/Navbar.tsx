import { Button } from "@/components/ui/button";
import { Dumbbell } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 animate-fade-in-left">
            <Dumbbell className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
              ProSupps
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 animate-fade-in">
            <a href="#home" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Home
            </a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Products
            </a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Features
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Testimonials
            </a>
          </div>

          <div className="flex items-center gap-2 animate-fade-in-right">
            <Button variant="ghost" className="hover:scale-105 transition-transform duration-300">
              Log In
            </Button>
            <Button className="bg-gradient-to-r from-primary to-red-600 hover:shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
