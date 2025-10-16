import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mike Johnson",
    role: "Professional Athlete",
    content: "Best protein I've ever used. Results are visible within weeks!",
    rating: 5,
    delay: "0s",
  },
  {
    name: "Sarah Williams",
    role: "Fitness Enthusiast",
    content: "Amazing taste and quality. It's become a staple in my daily routine.",
    rating: 5,
    delay: "0.2s",
  },
  {
    name: "David Chen",
    role: "Bodybuilder",
    content: "ProSupps has helped me achieve my muscle gain goals faster than expected.",
    rating: 5,
    delay: "0.4s",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: testimonial.delay }}
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
              <div>
                <div className="font-bold text-lg">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
