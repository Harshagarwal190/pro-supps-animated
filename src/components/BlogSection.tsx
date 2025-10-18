import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    id: "protein-sources-muscle-growth",
    title: "10 Best Protein Sources for Muscle Growth",
    excerpt: "Discover the top protein sources that will help you build lean muscle mass faster and more effectively.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop",
    category: "Nutrition",
    readTime: "5 min read",
    delay: "0s",
  },
  {
    id: "pre-workout-supplements-guide",
    title: "Complete Guide to Pre-Workout Supplements",
    excerpt: "Learn everything about pre-workout supplements, when to take them, and how they boost your performance.",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=500&fit=crop",
    category: "Supplements",
    readTime: "7 min read",
    delay: "0.2s",
  },
  {
    id: "workout-routines-maximum-results",
    title: "5 Workout Routines for Maximum Results",
    excerpt: "Proven workout routines designed to maximize your gains and help you reach your fitness goals faster.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop",
    category: "Training",
    readTime: "6 min read",
    delay: "0.4s",
  },
];

export const BlogSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="mb-4">Learn & Grow</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Articles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert tips and guides to help you on your fitness journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card 
              key={article.id}
              className="overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: article.delay }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4">{article.category}</Badge>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>
                  <Button asChild variant="ghost" size="sm" className="group">
                    <Link to={`/blog/${article.id}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link to="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
