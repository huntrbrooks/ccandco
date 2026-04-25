import type { Metadata } from "next";
import { Handshake, Package, Sparkles, Users } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { TradeForm } from "@/components/TradeForm";
import { Card } from "@/components/ui/card";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Trade | CC & CO. Aesthetics",
  description:
    "Trade enquiries for CC & CO. including beauty industry collaborations, training, product partnerships, wholesale and brand opportunities.",
  path: "/trade",
});

const tradeOptions = [
  {
    title: "Beauty industry collaborations",
    description:
      "Partnerships with aligned studios, artists and industry professionals.",
    icon: Users,
  },
  {
    title: "Training enquiries",
    description:
      "Future education, mentoring and professional development opportunities.",
    icon: Sparkles,
  },
  {
    title: "Product partnerships",
    description:
      "Thoughtful product, tool and aftercare collaborations for the studio.",
    icon: Package,
  },
  {
    title: "Wholesale and brand opportunities",
    description:
      "Professional relationships with brands that align with the CC & CO. standard.",
    icon: Handshake,
  },
];

export default function TradePage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Trade"
          title="Professional opportunities with CC & CO."
          description="A polished home for future expansion across training, collaborations, wholesale, product and brand partnerships."
          as="h1"
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tradeOptions.map((option) => {
            const Icon = option.icon;

            return (
              <Card key={option.title} className="p-6">
                <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <h2 className="mt-5 font-serif text-2xl text-charcoal">
                  {option.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {option.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-serif text-4xl font-semibold text-charcoal">
              Enquire about working together.
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Share a few details and the studio will respond if there is a
              strong brand, training or professional fit.
            </p>
          </div>
          <Card className="p-6 sm:p-8">
            <TradeForm />
          </Card>
        </div>
      </div>
    </section>
  );
}
