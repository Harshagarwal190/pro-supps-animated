import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Facebook, Heart, MessageCircle } from "lucide-react";
import workoutScene from "@/assets/workout-scene.jpg";
import lifestyle1 from "@/assets/lifestyle-1.jpg";
import lifestyle2 from "@/assets/lifestyle-2.jpg";
import lifestyle3 from "@/assets/lifestyle-3.jpg";

const socialPosts = [
  {
    platform: "instagram",
    image: workoutScene,
    caption: "Morning grind 💪 #ProSupps #FitnessMotivation",
    likes: "2.4K",
    comments: "89",
    delay: "0s",
  },
  {
    platform: "instagram",
    image: lifestyle1,
    caption: "Pre-workout fuel ⚡ Ready to crush today's session!",
    likes: "1.8K",
    comments: "67",
    delay: "0.2s",
  },
  {
    platform: "instagram",
    image: lifestyle2,
    caption: "Transformation Tuesday 🔥 3 months of consistency",
    likes: "3.2K",
    comments: "124",
    delay: "0.4s",
  },
  {
    platform: "instagram",
    image: lifestyle3,
    caption: "Back day never looked so good 💪 #BackWorkout",
    likes: "1.5K",
    comments: "43",
    delay: "0.6s",
  },
];

const SocialIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case "instagram":
      return <Instagram className="h-5 w-5" />;
    case "twitter":
      return <Twitter className="h-5 w-5" />;
    case "facebook":
      return <Facebook className="h-5 w-5" />;
    default:
      return <Instagram className="h-5 w-5" />;
  }
};

export const SocialFeedSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="mb-4">Join Our Community</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Follow Us on <span className="text-primary">Social Media</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get daily motivation, tips, and connect with fellow fitness enthusiasts
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button variant="outline" size="icon" className="hover:text-primary">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="hover:text-primary">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="hover:text-primary">
              <Facebook className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {socialPosts.map((post, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up group cursor-pointer"
              style={{ animationDelay: post.delay }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt="Social post"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full p-2">
                  <SocialIcon platform={post.platform} />
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm line-clamp-2">{post.caption}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
