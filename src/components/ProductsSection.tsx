import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import type { User } from "@supabase/supabase-js";

const products = [
  {
    name: "Gold Standard Whey",
    price: "₹4500",
    originalPrice: "₹4999",
    rating: 5,
    description: "24g protein, 5.5g BCAAs, 4g Glutamine",
    image: "/images/gold-standard.png",
    delay: "0s",
  },
  {
    name: "Isolate Premium",
    price: "₹5499",
    originalPrice: "₹5999",
    rating: 5,
    description: "30g protein, ultra-filtered whey isolate",
    image: "/images/isolate-premium.png",
    delay: "0.2s",
  },
  {
    name: "Mass Gainer",
    price: "₹6499",
    originalPrice: "₹6999",
    rating: 5,
    description: "50g protein, 250g carbs, 1250 calories",
    image: "/images/mass-gainer.png",
    delay: "0.4s",
  },
];

const additionalProducts = [
  {
    name: "BCAA Energy",
    price: "₹2999",
    originalPrice: "₹3499",
    discount: "14% OFF",
    rating: 5,
    description: "Energy-boosting BCAAs with electrolytes",
    image: "/images/bcaa-energy.png",
    delay: "0.6s",
  },
    {
    name: "Pre-Workout Elite",
    price: "₹3499",
    originalPrice: "₹3999",
    discount: "12% OFF",
    rating: 5,
    description: "Advanced pre-workout formula",
    image: "/images/pre-workout.png",
    delay: "0.8s",
  },
  {
    name: "Creatine Monohydrate",
    price: "₹1999",
    originalPrice: "₹2499",
    discount: "20% OFF",
    rating: 5,
    description: "Pure micronized creatine for strength",
    image: "/images/creatine.png",
    delay: "1.0s",
  },
];
export const ProductsSection = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const getProductId = (productName: string) => {
    const productIds: Record<string, string> = {
      "Gold Standard Whey": "gold-standard",
      "Isolate Premium": "isolate-premium",
      "Mass Gainer": "mass-gainer",
    };
    return productIds[productName] || productName.toLowerCase().replace(/\s+/g, '-');
  };

  const handleAddToCart = async (productName: string) => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please login to add items to cart",
        variant: "destructive",
      });
      navigate("/auth");
      return;
    }

    setLoading(productName);
    
    try {
      const productId = getProductId(productName);
      
      // Check if product already exists in cart
      const { data: existingItem, error: fetchError } = await supabase
        .from("cart")
        .select("*")
        .eq("user_id", user.id)
        .eq("product_id", productId)
        .single();

      if (fetchError && fetchError.code !== "PGRST116") {
        throw fetchError;
      }

      if (existingItem) {
        // Update quantity if item exists
        const { error: updateError } = await supabase
          .from("cart")
          .update({ quantity: existingItem.quantity + 1 })
          .eq("id", existingItem.id);

        if (updateError) throw updateError;
      } else {
        // Insert new item
        const { error: insertError } = await supabase
          .from("cart")
          .insert({
            user_id: user.id,
            product_id: productId,
            quantity: 1,
          });

        if (insertError) throw insertError;
      }

      toast({
        title: "Added to Cart",
        description: `${productName} has been added to your cart`,
      });
      
      // Redirect to cart page
      navigate("/cart");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to add item to cart",
        variant: "destructive",
      });
    } finally {
      setLoading(null);
    }
  };

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
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-6"
                    loading="lazy"
                  />
                ) : (
                  <div className="text-8xl font-bold text-primary/20">W</div>
                )}
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
                  <Button 
                    onClick={() => handleAddToCart(product.name)}
                    disabled={loading === product.name}
                    className="bg-gradient-to-r from-primary to-red-600 hover:shadow-lg hover:shadow-primary/50 group-hover:scale-105 transition-all duration-300"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {loading === product.name ? "Adding..." : "Add to Cart"}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* More Products button that redirects to the full products page */}
        <div className="flex justify-center mt-8">
          <Link to="/products" aria-label="View more products">
            <Button className="bg-gradient-to-r from-primary to-red-600 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
              More Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};