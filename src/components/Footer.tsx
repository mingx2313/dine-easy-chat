import { MessageCircle, MapPin, Clock } from "lucide-react";

const WHATSAPP_NUMBER = "1234567890";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'd like to make a reservation.");

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl font-bold text-primary">龍 Dragon Palace</h3>
          <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
            Authentic Chinese cuisine crafted with tradition and passion since 1998.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 text-primary" />
            <p className="font-body text-sm text-muted-foreground">123 Chinatown Street<br />Downtown, City 10001</p>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-4 w-4 text-primary" />
            <p className="font-body text-sm text-muted-foreground">Mon – Sun: 11:30 AM – 10:00 PM<br />Dim Sum: 11:30 AM – 3:00 PM</p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <p className="font-body text-sm font-medium text-foreground">Reserve a Table</p>
          <a
            href="/#reserve"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-body text-sm font-medium text-whatsapp-foreground transition-opacity hover:opacity-90"
          >
            Book Now
          </a>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-border px-6 pt-6">
        <p className="font-body text-xs text-muted-foreground">© {new Date().getFullYear()} Dragon Palace. All rights reserved.</p>
      </div>
    </footer>
  );
}
