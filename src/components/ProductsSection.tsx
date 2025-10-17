// ...existing code...
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";

const products = [
  {
    name: "Gold Standard Whey",
    price: "$49.99",
    rating: 5,
    description: "24g protein, 5.5g BCAAs, 4g Glutamine",
    delay: "0s",
  },
  {
    name: "Isolate Premium",
    price: "$59.99",
    rating: 5,
    description: "30g protein, ultra-filtered whey isolate",
    delay: "0.2s",
  },
  {
    name: "Mass Gainer",
    price: "$69.99",
    rating: 5,
    description: "50g protein, 250g carbs, 1250 calories",
    delay: "0.4s",
  },
];

export const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of premium protein supplements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: product.delay }}
            >
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="text-8xl font-bold text-primary/20">W</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: product.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-primary">{product.price}</span>
                  <Button className="bg-gradient-to-r from-primary to-red-600 hover:shadow-lg hover:shadow-primary/50 group-hover:scale-105 transition-all duration-300">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* More Products button that redirects to the full products page */}
        <div className="flex justify-center mt-8">
          <Button
            onClick={() => (window.location.href = "/products")}
            className="bg-gradient-to-r from-primary to-red-600 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
            aria-label="View more products"
          >
            More Products
          </Button>
        </div>
      </div>
    </section>
  );
};
// ...existing code...