import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, Users, Award, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import workoutScene from "@/assets/workout-scene.jpg";
import lifestyleProducts from "@/assets/lifestyle-products.jpg";

const values = [
  {
    icon: Target,
    title: "Quality First",
    description: "Premium ingredients, rigorously tested",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Built by athletes, for athletes",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Trusted by thousands worldwide",
  },
  {
    icon: Heart,
    title: "Your Success",
    description: "Committed to your fitness journey",
  },
];

export const BrandStorySection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Image */}
        <div className="mb-16 animate-fade-in-up">
          <img 
            src={workoutScene}
            alt="Athletes training with ProSupps"
            className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <Badge className="mb-4">Our Story</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built by Athletes,<br />
              For <span className="text-primary">Athletes</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>
                Founded in 2015, ProSupps was born from a simple belief: everyone deserves access to premium supplements that actually work.
              </p>
              <p>
                We started in a small garage with a mission to create products that we'd be proud to use ourselves. Today, we're trusted by thousands of athletes and fitness enthusiasts worldwide.
              </p>
              <p>
                Every product we create undergoes rigorous testing and quality control. We don't just sell supplements—we're your partners in achieving your fitness goals.
              </p>
            </div>
            <Link to="/about">
              <Button size="lg" className="group">
                Learn More About Us
                <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-background p-6 rounded-lg border shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Lifestyle Products Image */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <img 
            src={lifestyleProducts}
            alt="ProSupps product lineup"
            className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};
