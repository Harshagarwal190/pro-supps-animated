import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Patel",
    role: "Fitness Trainer",
    content: "The best supplement I've used so far. It boosts my energy and enhances my performance in the gym.",
    rating: 4.5,
    delay: "0s",
  },
  {
    name: "Priya Sharma",
    role: "Yoga Instructor",
    content: "I love how natural and clean the ingredients are. It's a great addition to my daily routine!",
    rating: 5,
    delay: "0.2s",
  },
  {
    name: "Vikram Singh",
    role: "Bodybuilder",
    content: "I noticed significant muscle gains in just a few weeks. The taste is also quite good compared to other brands.",
    rating: 4,
    delay: "0.4s",
  },
  {
    name: "Anjali Verma",
    role: "Marathon Runner",
    content: "I’ve been using this protein supplement for a few months now. It’s perfect for recovery after long runs!",
    rating: 4.5,
    delay: "0.6s",
  },
  {
    name: "Rahul Desai",
    role: "Nutritionist",
    content: "The protein blend is fantastic! I recommend it to all my clients looking for an effective and reliable supplement.",
    rating: 5,
    delay: "0.8s",
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
                {testimonial.rating % 1 !== 0 && (
                  <Star className="h-5 w-5 fill-primary text-primary opacity-50" />
                )}
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
