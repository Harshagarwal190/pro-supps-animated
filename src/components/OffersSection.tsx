import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Tag, ShoppingCart } from "lucide-react";

export const OffersSection = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-primary/10 via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden border-2 border-primary/20 shadow-xl animate-fade-in-up">
          <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="destructive" className="text-lg px-4 py-2">
                  <Tag className="h-4 w-4 mr-2" />
                  Limited Time Offer
                </Badge>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Save <span className="text-primary">30%</span> on Your First Order!
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Get premium supplements at an unbeatable price. Perfect for beginners starting their fitness journey!
              </p>
              <div className="flex items-center gap-2 mb-8">
                <Clock className="h-5 w-5 text-primary animate-pulse" />
                <span className="text-lg font-semibold">Ends in: 2 days 14 hours 32 minutes</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Claim Offer Now
                  <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
                <Button size="lg" variant="outline">
                  View All Deals
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl" />
              <img 
                src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800&h=600&fit=crop"
                alt="Special offer products"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-destructive text-destructive-foreground rounded-full w-24 h-24 flex flex-col items-center justify-center font-bold shadow-xl animate-pulse">
                <span className="text-3xl">30%</span>
                <span className="text-xs">OFF</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
