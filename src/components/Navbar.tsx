import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dumbbell, LogOut, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import type { User as SupabaseUser } from "@supabase/supabase-js";

export const Navbar = () => {
  const [user, setUser] = useState<SupabaseUser | null>(null);
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

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: "Failed to logout",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Logged out successfully",
      });
      navigate("/");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 animate-fade-in-left">
            <Dumbbell className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
              ProSupps
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 animate-fade-in">
            <Link to="/" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link to="/products" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Products
            </Link>
            <Link to="/features" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Features
            </Link>
            <Link to="/testimonials" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Testimonials
            </Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Blog
            </Link>
          </div>

          <div className="flex items-center gap-2 animate-fade-in-right">
            {user ? (
              <>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <User className="h-4 w-4" />
                  <span className="hidden md:inline">{user.email}</span>
                </div>
                <Button 
                  variant="ghost" 
                  onClick={handleLogout}
                  className="hover:scale-105 transition-transform duration-300"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  onClick={() => navigate("/auth")}
                  className="hover:scale-105 transition-transform duration-300"
                >
                  Log In
                </Button>
                <Button 
                  onClick={() => navigate("/auth")}
                  className="bg-gradient-to-r from-primary to-red-600 hover:shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
