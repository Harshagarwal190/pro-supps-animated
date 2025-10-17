import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    question: "How should I take protein supplements?",
    answer: "Mix one scoop with 250-300ml of water or milk. Best taken post-workout or as a meal replacement. For optimal results, consume 1-2 servings daily.",
  },
  {
    question: "Are your products safe and tested?",
    answer: "Yes! All our products are third-party tested, manufactured in certified facilities, and meet strict quality standards. We use only premium ingredients with no harmful additives.",
  },
  {
    question: "How long until I see results?",
    answer: "Most customers notice improvements within 2-3 weeks. Significant muscle gain and strength improvements typically occur within 8-12 weeks when combined with proper training and nutrition.",
  },
  {
    question: "Can beginners use these products?",
    answer: "Absolutely! Our products are suitable for all fitness levels. We recommend starting with our standard protein powder and gradually exploring other supplements as you progress.",
  },
  {
    question: "What's your return policy?",
    answer: "We offer a 30-day money-back guarantee. If you're not satisfied with your purchase, contact our support team for a full refund - no questions asked.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship worldwide! Delivery times vary by location (3-5 days domestic, 7-14 days international). Free shipping on orders over $50.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="mb-4">Got Questions?</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about ProSupps
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
