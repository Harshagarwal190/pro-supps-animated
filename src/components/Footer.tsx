import { Dumbbell, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center gap-2">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
                ProSupps
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Premium nutrition supplements for athletes and fitness enthusiasts. Fuel your performance with quality.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                  Products
                </a>
              </li>
              <li>
                <a href="/features" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="/testimonials" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 8199786745 </span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>support@prosupps.com</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span>Bikaner Sweets  <br />katraj, Pune 411043</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-lg font-semibold text-foreground">Newsletter</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to get special offers and fitness tips.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-background border-border focus:border-primary transition-colors"
              />
              <Button className="bg-gradient-to-r from-primary to-red-600 hover:shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 ProSupps. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
