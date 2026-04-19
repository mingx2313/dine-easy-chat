import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-chinese.jpg";
import todaysSpecialImg from "@/assets/todays-special-chinese.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ReservationForm from "@/components/ReservationForm";

import harGow from "@/assets/dishes/har-gow.jpg";
import siuMai from "@/assets/dishes/siu-mai.jpg";
import xlb from "@/assets/dishes/xlb.jpg";
import cheungFun from "@/assets/dishes/cheung-fun.jpg";
import turnipCake from "@/assets/dishes/turnip-cake.jpg";
import hotSourSoup from "@/assets/dishes/hot-sour-soup.jpg";
import springRolls from "@/assets/dishes/spring-rolls.jpg";
import wontonSoup from "@/assets/dishes/wonton-soup.jpg";
import saltPepperSquid from "@/assets/dishes/salt-pepper-squid.jpg";
import pekingDuck from "@/assets/dishes/peking-duck.jpg";
import kungPao from "@/assets/dishes/kung-pao.jpg";
import mapoTofu from "@/assets/dishes/mapo-tofu.jpg";
import charSiu from "@/assets/dishes/char-siu.jpg";
import steamedFish from "@/assets/dishes/steamed-fish.jpg";
import beefChowFun from "@/assets/dishes/beef-chow-fun.jpg";
import sweetSourPork from "@/assets/dishes/sweet-sour-pork.jpg";
import danDan from "@/assets/dishes/dan-dan.jpg";
import friedRice from "@/assets/dishes/fried-rice.jpg";
import wontonNoodle from "@/assets/dishes/wonton-noodle.jpg";
import mangoPudding from "@/assets/dishes/mango-pudding.jpg";
import eggTarts from "@/assets/dishes/egg-tarts.jpg";
import sesameBalls from "@/assets/dishes/sesame-balls.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dragon Palace — Authentic Chinese Restaurant | Dim Sum & Peking Duck" },
      { name: "description", content: "Dragon Palace serves authentic Chinese cuisine including handmade dim sum, Peking duck, and wok-fired Cantonese & Sichuan dishes. Reserve your table via WhatsApp." },
      { property: "og:title", content: "Dragon Palace — Authentic Chinese Restaurant" },
      { property: "og:description", content: "Authentic dim sum, Peking duck, and wok-fired classics. Reserve via WhatsApp." },
      { property: "og:type", content: "restaurant" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": "Dragon Palace",
          "alternateName": "龍宮",
          "servesCuisine": ["Chinese", "Cantonese", "Sichuan", "Dim Sum"],
          "priceRange": "$$",
          "address": { "@type": "PostalAddress", "streetAddress": "123 Dragon Street", "addressLocality": "Chinatown", "addressRegion": "NY", "postalCode": "10013" },
          "telephone": "+1-234-567-890",
          "menu": "https://dragonpalace.com/#menu",
        }),
      },
    ],
  }),
  component: Index,
});

const WHATSAPP_NUMBER = "1234567890";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'd like to make a reservation.");

interface MenuItem {
  name: string;
  chinese?: string;
  description: string;
  price: string;
  image: string;
}

interface MenuSectionData {
  id: string;
  title: string;
  chinese: string;
  items: MenuItem[];
}

const menuData: MenuSectionData[] = [
  {
    id: "dimsum", title: "Dim Sum", chinese: "点心",
    items: [
      { name: "Har Gow", chinese: "虾饺", description: "Crystal shrimp dumplings, hand-pleated", price: "$8", image: harGow },
      { name: "Siu Mai", chinese: "烧卖", description: "Pork & shrimp dumplings, tobiko topping", price: "$7", image: siuMai },
      { name: "Xiao Long Bao", chinese: "小笼包", description: "Soup dumplings with rich pork broth", price: "$10", image: xlb },
      { name: "Cheung Fun", chinese: "肠粉", description: "Silky rice noodle rolls, shrimp or char siu", price: "$9", image: cheungFun },
      { name: "Turnip Cake", chinese: "萝卜糕", description: "Pan-fried radish cake with dried shrimp", price: "$7", image: turnipCake },
    ],
  },
  {
    id: "starters", title: "Starters", chinese: "前菜",
    items: [
      { name: "Hot & Sour Soup", chinese: "酸辣汤", description: "Classic Sichuan soup with tofu, bamboo shoots", price: "$8", image: hotSourSoup },
      { name: "Spring Rolls", chinese: "春卷", description: "Crispy rolls stuffed with vegetables & pork", price: "$9", image: springRolls },
      { name: "Wonton Soup", chinese: "馄饨汤", description: "Handmade pork wontons in clear broth", price: "$9", image: wontonSoup },
      { name: "Salt & Pepper Squid", chinese: "椒盐鱿鱼", description: "Lightly battered, wok-tossed with chilies", price: "$14", image: saltPepperSquid },
    ],
  },
  {
    id: "mains", title: "Mains", chinese: "主菜",
    items: [
      { name: "Peking Duck", chinese: "北京烤鸭", description: "Whole roasted duck, pancakes, scallion, hoisin", price: "$58", image: pekingDuck },
      { name: "Kung Pao Chicken", chinese: "宫保鸡丁", description: "Wok-fired chicken, peanuts, dried chilies", price: "$22", image: kungPao },
      { name: "Mapo Tofu", chinese: "麻婆豆腐", description: "Silken tofu in spicy Sichuan chili bean sauce", price: "$18", image: mapoTofu },
      { name: "Char Siu Pork", chinese: "叉烧", description: "Cantonese BBQ pork, honey glaze", price: "$24", image: charSiu },
      { name: "Steamed Whole Fish", chinese: "清蒸鱼", description: "Market fish, ginger, scallion, soy", price: "$38", image: steamedFish },
      { name: "Beef Chow Fun", chinese: "干炒牛河", description: "Wok-charred flat rice noodles, tender beef", price: "$20", image: beefChowFun },
      { name: "Sweet & Sour Pork", chinese: "咕噜肉", description: "Crispy pork, bell peppers, pineapple", price: "$22", image: sweetSourPork },
    ],
  },
  {
    id: "noodles", title: "Noodles & Rice", chinese: "面饭",
    items: [
      { name: "Dan Dan Noodles", chinese: "担担面", description: "Sichuan sesame-chili noodles, minced pork", price: "$16", image: danDan },
      { name: "Yang Chow Fried Rice", chinese: "扬州炒饭", description: "Shrimp, char siu, egg, scallion", price: "$16", image: friedRice },
      { name: "Wonton Noodle Soup", chinese: "云吞面", description: "Thin egg noodles, pork-shrimp wontons", price: "$14", image: wontonNoodle },
    ],
  },
  {
    id: "desserts", title: "Desserts", chinese: "甜品",
    items: [
      { name: "Mango Pudding", chinese: "芒果布丁", description: "Silky mango coconut pudding", price: "$8", image: mangoPudding },
      { name: "Egg Tarts", chinese: "蛋挞", description: "Flaky pastry, smooth custard filling", price: "$7", image: eggTarts },
      { name: "Sesame Balls", chinese: "芝麻球", description: "Fried glutinous rice balls, red bean filling", price: "$8", image: sesameBalls },
    ],
  },
];

const categories = menuData.map((s) => ({ id: s.id, title: s.title, chinese: s.chinese }));

function DishCard({ item }: { item: MenuItem }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          width={512}
          height={512}
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h4 className="font-display text-base font-semibold text-foreground">{item.name}</h4>
            {item.chinese && <span className="font-body text-xs text-primary">{item.chinese}</span>}
          </div>
          <span className="shrink-0 font-display text-lg font-bold text-primary">{item.price}</span>
        </div>
        <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">{item.description}</p>
      </div>
    </div>
  );
}

function MenuCategorySection({ section }: { section: MenuSectionData }) {
  return (
    <div id={`cat-${section.id}`} className="scroll-mt-32">
      <div className="mb-8 flex items-baseline gap-3">
        <h3 className="font-display text-3xl font-bold text-foreground">{section.title}</h3>
        <span className="font-display text-xl text-primary">{section.chinese}</span>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {section.items.map((item) => (
          <DishCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

function Index() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id.replace("cat-", ""));
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    for (const section of menuData) {
      const el = document.getElementById(`cat-${section.id}`);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const scrollToCategory = (id: string) => {
    document.getElementById(`cat-${id}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <img src={heroBg} alt="Chinese restaurant dining" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="animate-fade-in font-body text-sm font-medium uppercase tracking-[0.3em]" style={{ color: "oklch(0.95 0.01 80)" }}>
            Authentic Chinese Cuisine
          </p>
          <h1 className="mt-6 animate-fade-up font-display text-5xl font-bold leading-tight md:text-7xl lg:text-8xl" style={{ color: "oklch(0.98 0 0)" }}>
            Dragon Palace
          </h1>
          <p className="mt-2 animate-fade-up font-display text-2xl" style={{ color: "oklch(0.80 0.14 75)", animationDelay: "0.15s" }}>
            龍宮
          </p>
          <p className="mx-auto mt-6 max-w-lg animate-fade-up font-body text-lg leading-relaxed" style={{ color: "oklch(0.85 0.01 80)", animationDelay: "0.2s" }}>
            Traditional flavors perfected through generations. Dim sum, Peking duck, and wok-fired classics.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#reserve"
              className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-whatsapp px-8 py-3.5 font-body text-sm font-semibold text-whatsapp-foreground transition-opacity hover:opacity-90"
              style={{ animationDelay: "0.3s" }}
            >
              Reserve a Table
            </a>
            <a
              href="#menu"
              className="animate-fade-up inline-flex items-center gap-2 rounded-full border px-8 py-3.5 font-body text-sm font-medium transition-colors"
              style={{ borderColor: "oklch(0.85 0.01 80)", color: "oklch(0.95 0 0)", animationDelay: "0.4s" }}
            >
              View Menu ↓
            </a>
          </div>
        </div>
      </section>

      {/* Today's Special */}
      <section id="special" className="border-b border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl">
              <img src={todaysSpecialImg} alt="Peking Duck — Today's special" className="aspect-square w-full object-cover" loading="lazy" width={800} height={800} />
              <div className="absolute left-4 top-4 rounded-full bg-primary px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                Today's Special
              </div>
            </div>
            <div>
              <p className="font-body text-sm font-medium uppercase tracking-[0.2em] text-primary">Chef's Recommendation</p>
              <h2 className="mt-4 font-display text-4xl font-bold text-foreground md:text-5xl">Peking Duck</h2>
              <p className="mt-1 font-display text-xl text-primary">北京烤鸭</p>
              <p className="mt-6 font-body text-base leading-relaxed text-muted-foreground">
                Our signature whole Peking duck, roasted to perfection with crackling lacquered skin.
                Served tableside with hand-rolled pancakes, julienned scallions, cucumber, and house-made hoisin sauce.
              </p>
              <p className="mt-4 font-display text-3xl font-semibold text-primary">$58</p>
              <a
                href="#reserve"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-body text-sm font-semibold text-whatsapp-foreground transition-opacity hover:opacity-90"
              >
                Reserve a Table
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">Our Selection</p>
            <h2 className="mt-4 font-display text-5xl font-bold text-foreground md:text-6xl">The Menu</h2>
            <p className="mt-2 font-display text-2xl text-primary">菜单</p>
            <div className="mx-auto mt-6 h-px w-16 bg-primary" />
          </div>

          {/* Sticky Category Nav */}
          <div className="sticky top-[73px] z-40 -mx-6 mt-12 overflow-x-auto border-b border-border bg-background/95 px-6 backdrop-blur-md">
            <div className="flex items-center justify-center gap-1 py-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToCategory(cat.id)}
                  className={`shrink-0 rounded-full px-5 py-2 font-body text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat.title} <span className="ml-1 text-xs">{cat.chinese}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-16 space-y-20">
            {menuData.map((section) => (
              <MenuCategorySection key={section.id} section={section} />
            ))}
          </div>
        </div>
      </section>

      <ReservationForm />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
