import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export const blogArticles = [
  {
    id: "protein-sources-muscle-growth",
    title: "10 Best Protein Sources for Muscle Growth",
    excerpt: "Discover the top protein sources that will help you build lean muscle mass faster and more effectively.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop",
    category: "Nutrition",
    readTime: "5 min read",
    content: `
# 10 Best Protein Sources for Muscle Growth

Building muscle requires more than just hitting the gym - your nutrition plays a crucial role, especially protein intake. Here are the top 10 protein sources that will help you maximize your gains.

## 1. Chicken Breast
One of the leanest sources of protein available. A 100g serving provides approximately 31g of protein with minimal fat.

## 2. Whey Protein
Fast-absorbing protein perfect for post-workout recovery. Contains all essential amino acids your muscles need.

## 3. Eggs
Complete protein source with all 9 essential amino acids. One large egg contains about 6g of protein.

## 4. Greek Yogurt
Packed with protein and probiotics. A cup can contain up to 20g of protein.

## 5. Salmon
Rich in protein and omega-3 fatty acids. A 100g serving provides 25g of protein.

## 6. Lean Beef
Excellent source of protein, iron, and B vitamins. Choose grass-fed options when possible.

## 7. Tuna
Low in fat and high in protein. A can of tuna contains about 25g of protein.

## 8. Cottage Cheese
Slow-digesting casein protein, perfect before bed. One cup provides about 28g of protein.

## 9. Quinoa
Complete plant-based protein source. One cup cooked contains 8g of protein.

## 10. Lentils
Budget-friendly plant protein. One cup cooked provides 18g of protein and plenty of fiber.

## Conclusion
Incorporating these protein sources into your diet will help you meet your muscle-building goals. Aim for 1.6-2.2g of protein per kg of body weight daily for optimal muscle growth.
    `,
  },
  {
    id: "pre-workout-supplements-guide",
    title: "Complete Guide to Pre-Workout Supplements",
    excerpt: "Learn everything about pre-workout supplements, when to take them, and how they boost your performance.",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=500&fit=crop",
    category: "Supplements",
    readTime: "7 min read",
    content: `
# Complete Guide to Pre-Workout Supplements

Pre-workout supplements have become a staple in many fitness enthusiasts' routines. Let's dive deep into what they are and how to use them effectively.

## What Are Pre-Workout Supplements?

Pre-workout supplements are designed to boost your energy, focus, and performance during training sessions. They typically contain a blend of ingredients that work synergistically to enhance your workout.

## Key Ingredients

### Caffeine
The primary energy booster in most pre-workouts. Typical doses range from 150-300mg per serving.

### Beta-Alanine
Helps buffer lactic acid buildup, allowing you to train harder for longer. May cause a tingling sensation.

### Creatine
Increases ATP production for explosive power and strength gains.

### Citrulline Malate
Improves blood flow and reduces fatigue during intense training.

### BCAAs
Branch-chain amino acids help prevent muscle breakdown during training.

## When to Take Pre-Workout

Take your pre-workout 20-30 minutes before training for optimal effects. Avoid taking it within 6 hours of bedtime if it contains caffeine.

## Dosage Guidelines

Start with half a serving to assess tolerance, especially if you're sensitive to caffeine. Gradually increase to full serving as needed.

## Benefits

- Increased energy and focus
- Enhanced endurance
- Better muscle pumps
- Improved strength output
- Faster recovery between sets

## Potential Side Effects

- Jitters from excessive caffeine
- Tingling sensation from beta-alanine
- Digestive discomfort if taken on empty stomach
- Sleep disruption if taken too late

## Cycling Pre-Workout

Consider cycling your pre-workout usage (8-12 weeks on, 2-4 weeks off) to maintain effectiveness and prevent tolerance buildup.

## Conclusion

Pre-workout supplements can be a valuable tool in your fitness arsenal when used correctly. Choose quality products, time your intake appropriately, and listen to your body.
    `,
  },
  {
    id: "workout-routines-maximum-results",
    title: "5 Workout Routines for Maximum Results",
    excerpt: "Proven workout routines designed to maximize your gains and help you reach your fitness goals faster.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop",
    category: "Training",
    readTime: "6 min read",
    content: `
# 5 Workout Routines for Maximum Results

Whether you're a beginner or advanced lifter, having a structured workout routine is essential for consistent progress. Here are 5 proven routines to help you reach your goals.

## 1. Push/Pull/Legs (PPL)

**Frequency**: 6 days per week (2x per muscle group)

### Push Day
- Bench Press: 4x6-8
- Overhead Press: 3x8-10
- Incline Dumbbell Press: 3x10-12
- Lateral Raises: 3x12-15
- Tricep Dips: 3x10-12

### Pull Day
- Deadlifts: 4x6-8
- Pull-ups: 3x8-10
- Barbell Rows: 3x8-10
- Face Pulls: 3x12-15
- Bicep Curls: 3x10-12

### Leg Day
- Squats: 4x6-8
- Romanian Deadlifts: 3x8-10
- Leg Press: 3x10-12
- Leg Curls: 3x12-15
- Calf Raises: 4x15-20

## 2. Upper/Lower Split

**Frequency**: 4 days per week

Great for balancing volume and recovery. Train upper body twice and lower body twice per week.

## 3. Full Body Routine

**Frequency**: 3 days per week

Perfect for beginners or those with limited time. Hit all major muscle groups each session.

## 4. Bro Split

**Frequency**: 5 days per week

Traditional bodybuilding approach focusing on one muscle group per day.

## 5. 5x5 Strength Program

**Frequency**: 3 days per week

Focus on compound movements with 5 sets of 5 reps. Excellent for building strength and mass.

## Choosing the Right Routine

Consider these factors:
- Your experience level
- Available training days
- Recovery capacity
- Specific goals (strength vs. hypertrophy)

## Progressive Overload

Regardless of which routine you choose, consistently apply progressive overload by:
- Adding weight
- Increasing reps
- Improving form
- Reducing rest time

## Recovery and Nutrition

Remember that growth happens outside the gym. Prioritize:
- 7-9 hours of quality sleep
- Adequate protein intake (1.6-2.2g per kg bodyweight)
- Proper hydration
- Rest days

## Conclusion

The best workout routine is one you can stick to consistently. Choose a program that fits your schedule and goals, then commit to it for at least 12 weeks before switching.
    `,
  },
  {
    id: "creatine-benefits-guide",
    title: "The Science Behind Creatine Supplementation",
    excerpt: "Understand how creatine works, its benefits, and why it's one of the most researched supplements.",
    image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=800&h=500&fit=crop",
    category: "Supplements",
    readTime: "8 min read",
    content: `
# The Science Behind Creatine Supplementation

Creatine is one of the most extensively researched and effective supplements available. Let's explore the science behind it.

## What is Creatine?

Creatine is a naturally occurring compound found in muscle cells. It helps produce ATP, the primary energy currency of cells.

## Types of Creatine

- **Creatine Monohydrate**: Most researched and cost-effective
- **Creatine HCL**: Better solubility, lower doses needed
- **Creatine Ethyl Ester**: Less studied, questionable benefits

## Benefits

### Increased Strength
Studies show 5-15% increase in strength and power output.

### Muscle Growth
Helps increase muscle mass through enhanced training capacity and water retention.

### Improved Recovery
Reduces muscle damage and inflammation post-workout.

### Cognitive Benefits
May improve memory and cognitive function, especially under stress.

## How to Use

**Loading Phase**: 20g per day for 5-7 days (optional)
**Maintenance**: 3-5g per day, taken consistently

## Safety and Side Effects

Creatine is one of the safest supplements available. Potential minor side effects include:
- Water retention
- Digestive discomfort (if taken in large doses)

## Conclusion

Creatine monohydrate is a proven, safe, and effective supplement for improving athletic performance and muscle growth.
    `,
  },
  {
    id: "meal-prep-muscle-gain",
    title: "Meal Prep Strategies for Muscle Gain",
    excerpt: "Master meal preparation to ensure you're consistently hitting your nutrition targets.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=500&fit=crop",
    category: "Nutrition",
    readTime: "6 min read",
    content: `
# Meal Prep Strategies for Muscle Gain

Consistent nutrition is key to building muscle. Here's how to master meal prep for maximum gains.

## Calculate Your Needs

First, determine your caloric needs:
- Maintenance calories + 300-500 surplus
- Protein: 1.6-2.2g per kg bodyweight
- Fats: 0.8-1g per kg bodyweight
- Carbs: Fill remaining calories

## Essential Prep Containers

Invest in quality containers:
- Glass containers for reheating
- Portion-control containers
- Insulated bags for transport

## Sample Weekly Meal Prep

### Protein Sources
- 3 lbs chicken breast
- 2 lbs ground turkey
- 1 dozen eggs
- Greek yogurt

### Carb Sources
- Brown rice
- Sweet potatoes
- Oats
- Whole grain pasta

### Vegetables
- Broccoli
- Spinach
- Bell peppers
- Carrots

## Meal Prep Tips

1. **Batch Cook**: Prepare large quantities at once
2. **Season Variety**: Keep meals interesting with different seasonings
3. **Prep on Sundays**: Set aside 2-3 hours for weekly prep
4. **Freeze Portions**: Store extras in freezer for busy weeks

## Sample Daily Menu

**Meal 1**: Oats with protein powder and berries
**Meal 2**: Chicken breast, brown rice, broccoli
**Meal 3**: Ground turkey, sweet potato, mixed vegetables
**Meal 4**: Post-workout shake with banana
**Meal 5**: Salmon, quinoa, asparagus
**Meal 6**: Greek yogurt with nuts

## Storage Guidelines

- Cooked meals: 3-4 days in fridge
- Raw proteins: 1-2 days in fridge
- Frozen meals: Up to 3 months

## Conclusion

Successful muscle gain requires consistent nutrition. Meal prep removes guesswork and ensures you're always prepared to hit your targets.
    `,
  },
  {
    id: "recovery-techniques",
    title: "Advanced Recovery Techniques for Athletes",
    excerpt: "Optimize your recovery with proven techniques used by professional athletes.",
    image: "https://images.unsplash.com/photo-1540206395-68808572332f?w=800&h=500&fit=crop",
    category: "Training",
    readTime: "7 min read",
    content: `
# Advanced Recovery Techniques for Athletes

Recovery is when your body adapts and grows stronger. Here are advanced techniques to optimize your recovery.

## Sleep Optimization

The foundation of recovery:
- 7-9 hours per night
- Consistent sleep schedule
- Cool, dark room (65-68°F)
- No screens 1 hour before bed

## Active Recovery

Light activity promotes blood flow and reduces soreness:
- Walking
- Swimming
- Yoga
- Light cycling

## Nutrition Timing

Optimize post-workout nutrition:
- Protein within 2 hours: 20-40g
- Carbs to replenish glycogen: 0.5-0.7g per lb bodyweight
- Hydration: Replace 150% of fluid lost

## Massage and Soft Tissue Work

Benefits include:
- Reduced muscle tension
- Improved blood flow
- Faster recovery
- Better range of motion

## Cold Therapy

Ice baths and cold showers may help:
- Reduce inflammation
- Decrease muscle soreness
- Improve recovery between sessions

## Heat Therapy

Sauna and hot baths can:
- Increase blood flow
- Relax muscles
- Improve sleep quality

## Mobility Work

Daily mobility routines prevent injury:
- Dynamic stretching pre-workout
- Static stretching post-workout
- Foam rolling
- Joint circles

## Stress Management

Mental recovery is crucial:
- Meditation
- Deep breathing exercises
- Time in nature
- Social connections

## Deload Weeks

Every 4-8 weeks, reduce volume by 40-50% to allow full recovery and supercompensation.

## Conclusion

Prioritize recovery as much as training. Implement these techniques consistently for optimal results.
    `,
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4">Learn & Grow</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert tips, guides, and insights to help you on your fitness journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article, index) => (
              <Card 
                key={article.id}
                className="overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
