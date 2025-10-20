import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { User } from "@supabase/supabase-js";

interface CartItem {
  id: string;
  product_id: string;
  quantity: number;
  product_name: string;
  product_price: number;
  product_image: string;
}

const Cart = () => {
  const [user, setUser] = useState<User | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (!session?.user) {
        navigate("/auth");
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (!session?.user) {
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (user) {
      fetchCartItems();
    }
  }, [user]);

  const fetchCartItems = async () => {
    try {
      const { data, error } = await supabase
        .from("cart")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      // Map cart items with product details (hardcoded for now)
      const itemsWithDetails = data?.map((item) => ({
        id: item.id,
        product_id: item.product_id,
        quantity: item.quantity,
        product_name: getProductName(item.product_id),
        product_price: getProductPrice(item.product_id),
        product_image: getProductImage(item.product_id),
      })) || [];

      setCartItems(itemsWithDetails);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getProductName = (productId: string) => {
    const products: Record<string, string> = {
      "gold-standard": "Gold Standard Whey",
      "isolate-premium": "Isolate Premium",
      "mass-gainer": "Mass Gainer",
    };
    return products[productId] || "Unknown Product";
  };

  const getProductPrice = (productId: string) => {
    const prices: Record<string, number> = {
      "gold-standard": 4999,
      "isolate-premium": 5999,
      "mass-gainer": 6999,
    };
    return prices[productId] || 0;
  };

  const getProductImage = (productId: string) => {
    const images: Record<string, string> = {
      "gold-standard": "/images/gold-standard.png",
      "isolate-premium": "/images/isolate-premium.png",
      "mass-gainer": "/images/mass-gainer.png",
    };
    return images[productId] || "";
  };

  const updateQuantity = async (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    try {
      const { error } = await supabase
        .from("cart")
        .update({ quantity: newQuantity })
        .eq("id", itemId);

      if (error) throw error;

      setCartItems(items =>
        items.map(item =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );

      toast({
        title: "Updated",
        description: "Cart quantity updated",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const removeItem = async (itemId: string) => {
    try {
      const { error } = await supabase
        .from("cart")
        .delete()
        .eq("id", itemId);

      if (error) throw error;

      setCartItems(items => items.filter(item => item.id !== itemId));

      toast({
        title: "Removed",
        description: "Item removed from cart",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.product_price * item.quantity), 0).toFixed(2);
  };

  const handleCheckout = () => {
    toast({
      title: "Checkout",
      description: "Checkout functionality will be implemented soon",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-16 flex items-center justify-center">
          <p className="text-lg">Loading cart...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Your <span className="text-primary">Cart</span>
          </h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground mb-4" />
              <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">Add some products to get started!</p>
              <Button onClick={() => navigate("/products")}>
                Browse Products
              </Button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="p-6">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                        <img
                          src={item.product_image}
                          alt={item.product_name}
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{item.product_name}</h3>
                        <p className="text-2xl font-bold text-primary mb-4">
                          ₹{item.product_price}
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-12 text-center font-semibold">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <Button
                            variant="destructive"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold">
                          ₹{(item.product_price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="lg:col-span-1">
                <Card className="p-6 sticky top-24">
                  <h3 className="text-2xl font-bold mb-6">Order Summary</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-lg">
                      <span>Subtotal:</span>
                      <span className="font-semibold">₹{calculateTotal()}</span>
                    </div>
                    <div className="flex justify-between text-lg">
                      <span>Shipping:</span>
                      <span className="font-semibold">Free</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between text-2xl font-bold">
                        <span>Total:</span>
                        <span className="text-primary">₹{calculateTotal()}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-primary to-red-600 hover:shadow-lg"
                    onClick={handleCheckout}
                  >
                    Proceed to Checkout
                  </Button>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
