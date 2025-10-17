import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export const VideoSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <Badge className="mb-4">Watch Now</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See ProSupps in <span className="text-primary">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how our products help athletes achieve their goals
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=675&fit=crop"
              alt="Video thumbnail"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            
            <Button 
              size="lg"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-20 h-20 p-0 shadow-2xl hover:scale-110 transition-all duration-300 group"
            >
              <Play className="h-8 w-8 ml-1 group-hover:scale-110 transition-transform" fill="currentColor" />
            </Button>

            <div className="absolute bottom-8 left-8 right-8 text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                The Science Behind ProSupps
              </h3>
              <p className="text-white/90 text-lg">
                Learn how our premium ingredients and advanced formulas deliver real results
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">100K+</div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Premium Products</p>
            </div>
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
