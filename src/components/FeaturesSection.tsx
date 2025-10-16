import { Card } from "@/components/ui/card";
import { Zap, Shield, Trophy, Heart } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Absorption",
    description: "Rapid protein delivery for quick muscle recovery and growth after intense workouts.",
    delay: "0s",
  },
  {
    icon: Shield,
    title: "Premium Quality",
    description: "Certified pure whey protein with no fillers or artificial ingredients.",
    delay: "0.2s",
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description: "Trusted by athletes and fitness enthusiasts worldwide for peak performance.",
    delay: "0.4s",
  },
  {
    icon: Heart,
    title: "Great Taste",
    description: "Delicious flavors that make your protein shake something to look forward to.",
    delay: "0.6s",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary">ProSupps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium quality ingredients and unmatched taste make us the choice of champions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 hover:border-primary/50 animate-fade-in-up group cursor-pointer"
              style={{ animationDelay: feature.delay }}
            >
              <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
