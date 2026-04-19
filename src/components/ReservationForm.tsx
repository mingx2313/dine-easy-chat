import { useState } from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "1234567890";

export default function ReservationForm() {
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    guests: "2",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi! I'd like to reserve a table.\n\nName: ${form.name}\nDate: ${form.date}\nTime: ${form.time}\nGuests: ${form.guests}${form.notes ? `\nNotes: ${form.notes}` : ""}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <section id="reserve" className="scroll-mt-24 border-t border-border py-24">
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center">
          <p className="font-body text-sm font-medium uppercase tracking-[0.2em] text-primary">Book Your Experience</p>
          <h2 className="mt-4 font-display text-4xl font-bold text-foreground">Reserve a Table</h2>
          <p className="mt-2 font-display text-xl text-primary">预订餐桌</p>
          <p className="mt-4 font-body text-muted-foreground">
            Fill in your details and we'll confirm your reservation instantly via WhatsApp.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <div>
            <label htmlFor="name" className="block font-body text-sm font-medium text-foreground">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="mt-1.5 w-full rounded-xl border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="date" className="block font-body text-sm font-medium text-foreground">
                Date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                required
                value={form.date}
                onChange={handleChange}
                className="mt-1.5 w-full rounded-xl border border-border bg-card px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="time" className="block font-body text-sm font-medium text-foreground">
                Time
              </label>
              <input
                id="time"
                name="time"
                type="time"
                required
                value={form.time}
                onChange={handleChange}
                className="mt-1.5 w-full rounded-xl border border-border bg-card px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label htmlFor="guests" className="block font-body text-sm font-medium text-foreground">
              Number of Guests
            </label>
            <select
              id="guests"
              name="guests"
              value={form.guests}
              onChange={handleChange}
              className="mt-1.5 w-full rounded-xl border border-border bg-card px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <option key={n} value={String(n)}>
                  {n} {n === 1 ? "Guest" : "Guests"}
                </option>
              ))}
              <option value="10+">10+ Guests (Large Party)</option>
            </select>
          </div>

          <div>
            <label htmlFor="notes" className="block font-body text-sm font-medium text-foreground">
              Special Requests <span className="text-muted-foreground">(optional)</span>
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              value={form.notes}
              onChange={handleChange}
              placeholder="Allergies, birthday, high chair, etc."
              className="mt-1.5 w-full rounded-xl border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 font-body text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" />
            Confirm via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
