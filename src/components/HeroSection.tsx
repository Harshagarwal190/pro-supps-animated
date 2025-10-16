import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroProduct from "@/assets/hero-product.png";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary animate-scale-in">
              <Zap className="h-4 w-4" />
              <span className="text-sm font-semibold">Premium Quality Supplements</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Premium Whey Protein
              <br />
              <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
                For Peak Performance
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              Fuel your workouts with our premium whey protein. Made with the finest ingredients for optimal muscle recovery and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-red-600 hover:shadow-xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300 text-lg group w-full sm:w-auto"
                >
                  View Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 hover:bg-primary/5 hover:border-primary hover:scale-105 transition-all duration-300 text-lg"
              >
                Contact Us
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Pure Whey</div>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                <div className="text-3xl font-bold text-primary">5★</div>
                <div className="text-sm text-muted-foreground">Rated Product</div>
              </div>
            </div>
          </div>

          {/* Right column - Product image */}
          <div className="relative animate-fade-in-right">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-red-600/20 rounded-full blur-3xl animate-pulse-glow" />
            <img 
              src={heroProduct} 
              alt="Premium Whey Protein Products" 
              className="relative z-10 w-full h-auto animate-float drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
