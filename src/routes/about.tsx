import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Award, Clock, Users, ChefHat } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Dragon Palace | Authentic Chinese Restaurant" },
      { name: "description", content: "Discover Dragon Palace's story — three generations of authentic Chinese cooking, from traditional dim sum to Cantonese roast meats. Meet our chefs and learn our philosophy." },
      { property: "og:title", content: "About Us — Dragon Palace" },
      { property: "og:description", content: "Three generations of authentic Chinese cooking tradition. Meet our chefs and discover our story." },
    ],
  }),
  component: AboutPage,
});

const WHATSAPP_NUMBER = "1234567890";

const values = [
  { icon: ChefHat, title: "Authentic Recipes", chinese: "正宗食谱", description: "Every dish follows traditional techniques passed down through three generations of our family." },
  { icon: Award, title: "Finest Ingredients", chinese: "上等食材", description: "We source premium ingredients daily — from live seafood to hand-pulled noodles made fresh each morning." },
  { icon: Clock, title: "Time-Honored Methods", chinese: "传统工艺", description: "From 24-hour broth simmering to precise wok hei, we never take shortcuts with our craft." },
  { icon: Users, title: "Family Warmth", chinese: "宾至如归", description: "Dining with us feels like visiting family. Our team treats every guest with genuine care and hospitality." },
];

const timeline = [
  { year: "1988", title: "The Beginning", description: "Chef Wong opens a small dim sum shop in Guangzhou, perfecting har gow and siu mai recipes." },
  { year: "1995", title: "A New Chapter", description: "The family emigrates and brings their culinary heritage to a new community, opening the first Dragon Palace." },
  { year: "2008", title: "Expansion", description: "Dragon Palace moves to its current location — a beautifully renovated space with a dedicated dim sum kitchen." },
  { year: "2024", title: "Today", description: "Now led by the third generation, we continue to honor tradition while embracing modern techniques." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-foreground">
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/90 to-foreground/70" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 pt-24 text-center">
          <p className="font-body text-sm font-medium uppercase tracking-[0.3em]" style={{ color: "oklch(0.75 0.14 60)" }}>
            Our Story
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold md:text-7xl" style={{ color: "oklch(0.98 0 0)" }}>
            Three Generations of Flavor
          </h1>
          <p className="mt-2 font-display text-2xl text-primary">三代传承</p>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed" style={{ color: "oklch(0.80 0.01 80)" }}>
            From a small dim sum kitchen in Guangzhou to your neighborhood — our family has been perfecting the art of Chinese cuisine for over 35 years.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">What We Stand For</p>
            <h2 className="mt-4 font-display text-4xl font-bold text-foreground md:text-5xl">Our Philosophy</h2>
            <p className="mt-2 font-display text-xl text-primary">我们的理念</p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <v.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-1 font-body text-xs text-primary">{v.chinese}</p>
                <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-y border-border bg-secondary py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">Our Journey</p>
            <h2 className="mt-4 font-display text-4xl font-bold text-foreground md:text-5xl">Through the Years</h2>
            <p className="mt-2 font-display text-xl text-primary">历程</p>
          </div>
          <div className="mt-16 space-y-12">
            {timeline.map((t, i) => (
              <div key={t.year} className={`flex gap-8 ${i % 2 === 1 ? "flex-row-reverse text-right" : ""}`}>
                <div className="flex-shrink-0">
                  <span className="font-display text-3xl font-bold text-primary">{t.year}</span>
                </div>
                <div className="border-l-2 border-primary/30 pl-6" style={i % 2 === 1 ? { borderLeft: "none", borderRight: "2px solid", paddingLeft: 0, paddingRight: "1.5rem" } : {}}>
                  <h3 className="font-display text-xl font-semibold text-foreground">{t.title}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">{t.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-display text-4xl font-bold text-foreground">Come Dine With Us</h2>
          <p className="mt-2 font-display text-xl text-primary">欢迎光临</p>
          <p className="mt-4 font-body text-muted-foreground">Experience three generations of culinary tradition. Reserve your table today.</p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to make a reservation.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-whatsapp px-8 py-3.5 font-body text-sm font-semibold text-whatsapp-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" />
            Reserve via WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
