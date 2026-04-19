import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, MapPin, Clock, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ReservationForm from "@/components/ReservationForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Hours — Dragon Palace | Chinese Restaurant" },
      { name: "description", content: "Find Dragon Palace's address, opening hours, and contact details. Reserve your table instantly via WhatsApp for dim sum, Peking duck, and more." },
      { property: "og:title", content: "Contact & Hours — Dragon Palace" },
      { property: "og:description", content: "Find our address, opening hours, and reserve your table via WhatsApp." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": "Dragon Palace",
          "servesCuisine": "Chinese",
          "address": { "@type": "PostalAddress", "streetAddress": "123 Dragon Street", "addressLocality": "Chinatown", "addressRegion": "NY", "postalCode": "10013" },
          "telephone": "+1-234-567-890",
          "openingHoursSpecification": [
            { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"], "opens": "11:00", "closes": "22:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Friday", "Saturday"], "opens": "11:00", "closes": "23:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "10:00", "closes": "22:00" },
          ],
          "priceRange": "$$",
        }),
      },
    ],
  }),
  component: ContactPage,
});

const WHATSAPP_NUMBER = "1234567890";

const hours = [
  { days: "Monday — Thursday", time: "11:00 AM — 10:00 PM" },
  { days: "Friday — Saturday", time: "11:00 AM — 11:00 PM" },
  { days: "Sunday", time: "10:00 AM — 10:00 PM (Dim Sum from 10 AM)" },
];

const contactInfo = [
  { icon: MapPin, label: "Address", value: "123 Dragon Street, Chinatown, NY 10013", href: "https://maps.google.com/?q=123+Dragon+Street+Chinatown+NY" },
  { icon: Phone, label: "Phone", value: "+1 (234) 567-890", href: "tel:+1234567890" },
  { icon: MessageCircle, label: "WhatsApp", value: "Message us to reserve", href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to make a reservation.")}` },
];

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-foreground">
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/90 to-foreground/70" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 pt-24 text-center">
          <p className="font-body text-sm font-medium uppercase tracking-[0.3em]" style={{ color: "oklch(0.75 0.14 60)" }}>
            Get In Touch
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold md:text-7xl" style={{ color: "oklch(0.98 0 0)" }}>
            Visit Us
          </h1>
          <p className="mt-2 font-display text-2xl text-primary">联系我们</p>
        </div>
      </section>

      {/* Contact & Hours Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Info */}
            <div>
              <p className="font-body text-sm font-medium uppercase tracking-[0.2em] text-primary">Contact Details</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground">Reach Us</h2>
              <p className="mt-2 font-display text-lg text-primary">联系方式</p>
              <div className="mt-8 space-y-6">
                {contactInfo.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <c.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-xs font-medium uppercase tracking-wider text-muted-foreground">{c.label}</p>
                      <p className="mt-1 font-body text-base font-medium text-foreground">{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div>
              <p className="font-body text-sm font-medium uppercase tracking-[0.2em] text-primary">When We're Open</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground">Opening Hours</h2>
              <p className="mt-2 font-display text-lg text-primary">营业时间</p>
              <div className="mt-8 space-y-4">
                {hours.map((h) => (
                  <div key={h.days} className="flex items-center justify-between rounded-xl border border-border bg-card px-6 py-5 shadow-sm">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="font-body text-sm font-medium text-foreground">{h.days}</span>
                    </div>
                    <span className="font-body text-sm text-muted-foreground">{h.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
                <p className="font-display text-lg font-semibold text-foreground">Sunday Dim Sum</p>
                <p className="mt-1 font-body text-sm text-primary">点心早茶</p>
                <p className="mt-2 font-body text-sm text-muted-foreground">Join us every Sunday from 10 AM for our full dim sum service with over 30 selections.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="border-y border-border bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground">Find Us</h2>
          <p className="mt-2 font-display text-lg text-primary">位置</p>
          <div className="mx-auto mt-8 aspect-[16/7] max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <iframe
              title="Dragon Palace location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2!2d-73.997!3d40.716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzU3LjYiTiA3M8KwNTknNDkuMiJX!5e0!3m2!1sen!2sus!4v1"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <ReservationForm />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
