import { createFileRoute } from "@tanstack/react-router";
import heroFish from "@/assets/hero-fish.jpg";
import fishImg from "@/assets/fish.jpg";
import goatsImg from "@/assets/goats.jpg";
import sheepImg from "@/assets/sheep.jpg";
import pigsImg from "@/assets/pigs.jpg";
import poultryImg from "@/assets/poultry.jpg";
import deliveryImg from "@/assets/delivery.jpg";
import logo from "@/assets/pemi-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PEMI FARMS — Farmed with care, served with pride" },
      {
        name: "description",
        content:
          "PEMI FARMS provides sustainable fish farming, livestock rearing, poultry and farm-to-door delivery across Africa.",
      },
      { property: "og:title", content: "PEMI FARMS" },
      {
        property: "og:description",
        content: "Sustainable aquaculture, livestock and poultry. Farmed with care, served with pride.",
      },
      { property: "og:image", content: heroFish },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Fish Cage & Aquaculture",
    image: fishImg,
    points: [
      "Design and installation of fish cages in lakes, rivers and ponds",
      "Technical guidance on fingerlings, feeding and cage management",
      "Harvesting, packaging and doorstep fish delivery",
    ],
  },
  {
    title: "Goat Rearing",
    image: goatsImg,
    points: [
      "Healthy, adaptable goat breeds for milk or meat",
      "Farm management support and breeding stock",
      "Training in zero grazing and open field systems",
    ],
  },
  {
    title: "Sheep Farming",
    image: sheepImg,
    points: [
      "High-quality sheep for meat and wool",
      "Disease control and breeding best practices",
      "Supply of breeding stock and consultancy",
    ],
  },
  {
    title: "Pig Farming",
    image: pigsImg,
    points: [
      "Quality pig breeds for pork production",
      "Modern pen design and feeding practices",
      "Training and veterinary support",
    ],
  },
  {
    title: "Poultry Farming",
    image: poultryImg,
    points: [
      "Layers, broilers and indigenous chickens",
      "Egg and meat production for home and commercial use",
      "Poultry housing setup and vaccination programs",
    ],
  },
  {
    title: "Farm-to-Door Delivery",
    image: deliveryImg,
    points: [
      "Timely delivery of live animals, fish, eggs and meat",
      "Direct to your doorstep or market point",
      "Fresh, traceable, dependable",
    ],
  },
];

const values = [
  { k: "Integrity", v: "Honesty in our processes and products" },
  { k: "Quality", v: "Uncompromising standards in everything we do" },
  { k: "Sustainability", v: "Farming that respects people, animals and nature" },
  { k: "Innovation", v: "Applying modern techniques for better yields" },
  { k: "Community", v: "Empowering local farmers and customers" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-white">
          <a href="#top" className="flex items-center">
            <img src={logo} alt="PEMI FARMS logo" width={1536} height={1024} className="h-12 w-auto brightness-0 invert" />
          </a>
          <div className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#about" className="hover:text-white/80">About</a>
            <a href="#services" className="hover:text-white/80">Services</a>
            <a href="#values" className="hover:text-white/80">Values</a>
            <a href="#contact" className="hover:text-white/80">Contact</a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-foreground shadow-lg transition hover:scale-105"
          >
            Order produce
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative flex min-h-[92vh] items-center overflow-hidden"
      >
        <img
          src={heroFish}
          alt="PEMI FARMS aquaculture cages at sunrise"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.35_0.12_235/0.85)] via-[oklch(0.45_0.13_230/0.55)] to-[oklch(0.78_0.13_230/0.4)]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 text-white">
          <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur">
            Est. 2016 · Africa
          </span>
          <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Farmed with care.<br />
            <span className="italic font-light">Served with pride.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            Sustainable fish farming, livestock and poultry — delivered fresh from our
            cages, pens and pastures to your table.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#services"
              className="rounded-full bg-white px-7 py-3 font-semibold text-foreground shadow-[var(--shadow-brand)] transition hover:translate-y-[-2px]"
            >
              Explore our services
            </a>
            <a
              href="#about"
              className="rounded-full border border-white/40 px-7 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              About PEMI
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">About us</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Farming with purpose, from land and water to your table.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Founded in 2016, PEMI FARMS specializes in fish farming, goat and sheep
              rearing, pig farming and poultry production. From the calm waters of our
              fish cages to well-kept pens and pastures, we are committed to ethical
              practices, modern techniques and community empowerment.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We don't only farm — we train, support and deliver. Whether you're a
              first-time farmer, an investor, or a customer looking for fresh, healthy
              products, PEMI FARMS is your trusted partner.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="rounded-2xl border bg-card p-8 shadow-[var(--shadow-brand)]">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our Vision</p>
              <p className="mt-3 text-lg">
                To be a leading provider of sustainable and innovative livestock and
                aquaculture solutions in Africa and beyond.
              </p>
            </div>
            <div className="rounded-2xl border bg-card p-8 shadow-[var(--shadow-brand)]">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our Mission</p>
              <p className="mt-3 text-lg">
                To deliver high-quality farm products and services while empowering
                communities through training, employment and responsible farming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="relative py-28"
        style={{ background: "var(--gradient-soft)" }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">What we do</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
                Sustainable livestock & aquaculture solutions
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Designed to support food security, livelihood and agribusiness growth
              across our communities.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="group overflow-hidden rounded-3xl border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-brand)]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold tracking-tight">{s.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="mx-auto max-w-7xl px-6 py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Core values</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
          The principles that guide every harvest.
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {values.map((v, i) => (
            <div
              key={v.k}
              className="rounded-2xl border bg-card p-6 transition hover:bg-accent"
            >
              <div className="text-3xl font-black text-primary">0{i + 1}</div>
              <h3 className="mt-4 text-lg font-bold">{v.k}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact / CTA */}
      <section
        id="contact"
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-brand)" }}
      >
        <div className="mx-auto max-w-5xl px-6 py-24 text-center text-white">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Fresh from our farm to your door.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">
            Order fresh produce, book a training, or partner with us to grow your
            agribusiness.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hello@pemifarms.com"
              className="rounded-full bg-white px-7 py-3 font-semibold text-foreground shadow-lg transition hover:scale-105"
            >
              hello@pemifarms.com
            </a>
            <a
              href="tel:+000000000"
              className="rounded-full border border-white/40 px-7 py-3 font-semibold backdrop-blur transition hover:bg-white/10"
            >
              Call us today
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t bg-background py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} PEMI FARMS. Farmed with care, served with pride.</p>
          <p>Africa · Sustainable Agriculture</p>
        </div>
      </footer>
    </div>
  );
}
