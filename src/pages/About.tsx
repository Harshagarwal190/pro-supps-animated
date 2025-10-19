import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Target, Users, Award, Lightbulb, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import workoutScene from "@/assets/workout-scene1.jpg";
import lifestyleImage from "@/assets/lifestyle-1.jpg";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
              <Badge className="mb-4">Our Story</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our <span className="text-primary">Inspiration</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Every great product starts with a powerful why. Here's ours.
              </p>
            </div>
          </div>
        </section>

        {/* Inspiration Story */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <div className="flex items-center gap-3 mb-6">
                  <Lightbulb className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    The Spark That Started It All
                  </h2>
                </div>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    In 2015, our founder was training for a marathon while working a demanding corporate job. Despite trying numerous supplement brands, nothing delivered the clean energy and recovery needed to push through intense training sessions.
                  </p>
                  <p>
                    The market was flooded with products full of artificial ingredients, excessive fillers, and false promises. It became clear that athletes deserved better—supplements that were transparent, effective, and built on real science.
                  </p>
                  <p>
                    That frustration became our mission: to create premium supplements that we'd be proud to use ourselves and recommend to our loved ones.
                  </p>
                </div>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <img 
                  src={workoutScene}
                  alt="Our journey began with a passion for fitness"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-background p-8 rounded-2xl shadow-lg animate-fade-in-up">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower every athlete—from weekend warriors to elite competitors—with premium, science-backed supplements that fuel their journey to peak performance.
                </p>
              </div>
              <div className="bg-background p-8 rounded-2xl shadow-lg animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become the most trusted name in sports nutrition by maintaining unwavering commitment to quality, transparency, and real results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <Badge className="mb-4">What Drives Us</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Core <span className="text-primary">Values</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                These principles guide every decision we make and every product we create.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Target,
                  title: "Quality First",
                  description: "We never compromise on ingredient quality. Every batch is third-party tested for purity and potency."
                },
                {
                  icon: Heart,
                  title: "Customer Obsessed",
                  description: "Your success is our success. We're here to support your fitness journey every step of the way."
                },
                {
                  icon: Users,
                  title: "Community Driven",
                  description: "Built by athletes, for athletes. We listen to our community and evolve based on your feedback."
                },
                {
                  icon: Award,
                  title: "Science Backed",
                  description: "Every formula is grounded in the latest research and clinical studies, not marketing hype."
                }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="bg-background p-6 rounded-xl border shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <Badge className="mb-4">Our Journey</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                The <span className="text-primary">ProSupps</span> Story
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  year: "2015",
                  title: "The Beginning",
                  description: "Started in a small garage with a big dream and a commitment to quality over profit."
                },
                {
                  year: "2017",
                  title: "First Major Milestone",
                  description: "Reached 1,000 satisfied customers and launched our signature Gold Standard Whey."
                },
                {
                  year: "2019",
                  title: "Going Premium",
                  description: "Introduced Isolate Premium and expanded our product line based on community feedback."
                },
                {
                  year: "2021",
                  title: "Global Recognition",
                  description: "Won multiple industry awards and expanded shipping to 25+ countries worldwide."
                },
                {
                  year: "2025",
                  title: "Today & Beyond",
                  description: "Trusted by thousands of athletes worldwide, constantly innovating and improving our formulas."
                }
              ].map((milestone, index) => (
                <div 
                  key={index}
                  className="flex gap-6 items-start animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="bg-primary text-primary-foreground w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="bg-background p-6 rounded-xl shadow-lg flex-1">
                    <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl">
              <img 
                src={lifestyleImage}
                alt="Join the ProSupps community"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
              <div className="relative py-20 px-8 text-center text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Join Our Journey
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  Become part of a community that's redefining what premium supplements should be.
                </p>
                <Link to="/products">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Shop Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
