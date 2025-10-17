import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const transformations = [
  {
    name: "John D.",
    duration: "3 months",
    beforeImg: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=500&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop",
    stats: "-15kg, +8kg muscle",
    delay: "0s",
  },
  {
    name: "Sarah M.",
    duration: "4 months",
    beforeImg: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=500&fit=crop",
    stats: "-12kg, Toned physique",
    delay: "0.2s",
  },
  {
    name: "Mike R.",
    duration: "6 months",
    beforeImg: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&h=500&fit=crop",
    stats: "+12kg muscle gain",
    delay: "0.4s",
  },
];

export const BeforeAfterSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="mb-4">Real Results</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Amazing <span className="text-primary">Transformations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our customers achieved with ProSupps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((transformation, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: transformation.delay }}
            >
              <div className="grid grid-cols-2 gap-2 p-4">
                <div className="relative">
                  <img 
                    src={transformation.beforeImg} 
                    alt="Before transformation"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <Badge className="absolute top-2 left-2 bg-background/90">Before</Badge>
                </div>
                <div className="relative">
                  <img 
                    src={transformation.afterImg} 
                    alt="After transformation"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <Badge className="absolute top-2 left-2 bg-primary">After</Badge>
                </div>
              </div>
              <div className="p-6 pt-0">
                <h3 className="font-bold text-xl mb-2">{transformation.name}</h3>
                <p className="text-muted-foreground mb-1">{transformation.duration}</p>
                <p className="text-primary font-semibold">{transformation.stats}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
