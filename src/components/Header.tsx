import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "1234567890";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'd like to make a reservation.");

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-2xl font-bold text-primary">
          龍 Dragon Palace
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="/#menu"
            className="font-body text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
          >
            Menu
          </a>
          <Link
            to="/about"
            className="font-body text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "font-body text-sm tracking-wide text-foreground font-medium" }}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="font-body text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "font-body text-sm tracking-wide text-foreground font-medium" }}
          >
            Contact
          </Link>
          <a
            href="/#reserve"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2 font-body text-sm font-medium text-whatsapp-foreground transition-opacity hover:opacity-90"
          >
            Reserve a Table
          </a>
        </nav>

        <a
          href="/#reserve"
          className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 font-body text-sm font-medium text-whatsapp-foreground md:hidden"
        >
          Reserve
        </a>
      </div>
    </header>
  );
}
