import { Badge } from "@/components/ui/badge";
import React, { useRef, useState } from "react";

export const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setHasPlayed(true);
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          {/* <Badge className="mb-4">Watch Now</Badge> */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See ProSupps in <span className="text-primary">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how our products help athletes achieve their goals
          </p>
        </div>

        <div
          className="relative max-w-7xl mx-auto px-4 sm:px-6"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group">
            <video
              ref={videoRef}
              className="w-full h-full object-cover transition-transform duration-500 cursor-pointer"
              loop
              controls={hasPlayed}
              onClick={handlePlay}
              poster="/videos/gym-poster.jpg"
            >
              <source src="/videos/gym-workout.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play button overlay */}
            {!hasPlayed && (
              <button
                onClick={handlePlay}
                aria-label="Play video"
                className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black bg-opacity-40 hover:bg-opacity-60 transition-opacity"
                style={{ cursor: "pointer" }}
              >
                <svg
                  className="w-16 h-16"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="playGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#FF6A00" />
                      <stop offset="100%" stopColor="#D91E18" />
                    </linearGradient>
                  </defs>
                  <circle cx="32" cy="32" r="32" fill="url(#playGradient)" />
                  <polygon points="26,20 46,32 26,44" fill="white" />
                </svg>
              </button>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent pointer-events-none" />

            <div className="absolute bottom-8 left-8 right-8 text-left text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                The Science Behind ProSupps
              </h3>
              <p className="text-white/90 text-lg">
                Learn how our premium ingredients and advanced formulas deliver
                real results
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">100K+</div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Premium Products</p>
            </div>
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
