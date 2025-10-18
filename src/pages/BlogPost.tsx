import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ArrowLeft } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { blogArticles } from "./Blog";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const article = blogArticles.find(a => a.id === id);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Button asChild variant="ghost" className="mb-6 animate-fade-in">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <div className="mb-8 animate-fade-in-up">
            <Badge className="mb-4">{article.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg mb-8 animate-fade-in">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {article.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('# ')) {
                return <h1 key={index} className="text-4xl font-bold mt-8 mb-4">{paragraph.slice(2)}</h1>;
              } else if (paragraph.startsWith('## ')) {
                return <h2 key={index} className="text-3xl font-bold mt-6 mb-3">{paragraph.slice(3)}</h2>;
              } else if (paragraph.startsWith('### ')) {
                return <h3 key={index} className="text-2xl font-bold mt-4 mb-2">{paragraph.slice(4)}</h3>;
              } else if (paragraph.startsWith('- ')) {
                return <li key={index} className="ml-6">{paragraph.slice(2)}</li>;
              } else if (paragraph.trim() === '') {
                return <br key={index} />;
              } else {
                return <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>;
              }
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-border animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {blogArticles
                .filter(a => a.id !== article.id && a.category === article.category)
                .slice(0, 2)
                .map((related) => (
                  <Link 
                    key={related.id}
                    to={`/blog/${related.id}`}
                    className="group block p-4 rounded-lg border border-border hover:border-primary transition-colors"
                  >
                    <Badge className="mb-2">{related.category}</Badge>
                    <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">
                      {related.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {related.excerpt}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
