import { jsxs, jsx } from "react/jsx-runtime";
import { h as heroFish } from "./router-DInsewMO.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "react";
const fishImg = "/assets/fish-BqyxNlcH.jpg";
const goatsImg = "/assets/goats-CkL7dBJi.jpg";
const sheepImg = "/assets/sheep-C9OAcCbA.jpg";
const pigsImg = "/assets/pigs-BY0YvEaJ.jpg";
const poultryImg = "/assets/poultry-BNl2uv8V.jpg";
const deliveryImg = "/assets/delivery-BAJh6EqZ.jpg";
const services = [{
  title: "Fish Cage & Aquaculture",
  image: fishImg,
  points: ["Design and installation of fish cages in lakes, rivers and ponds", "Technical guidance on fingerlings, feeding and cage management", "Harvesting, packaging and doorstep fish delivery"]
}, {
  title: "Goat Rearing",
  image: goatsImg,
  points: ["Healthy, adaptable goat breeds for milk or meat", "Farm management support and breeding stock", "Training in zero grazing and open field systems"]
}, {
  title: "Sheep Farming",
  image: sheepImg,
  points: ["High-quality sheep for meat and wool", "Disease control and breeding best practices", "Supply of breeding stock and consultancy"]
}, {
  title: "Pig Farming",
  image: pigsImg,
  points: ["Quality pig breeds for pork production", "Modern pen design and feeding practices", "Training and veterinary support"]
}, {
  title: "Poultry Farming",
  image: poultryImg,
  points: ["Layers, broilers and indigenous chickens", "Egg and meat production for home and commercial use", "Poultry housing setup and vaccination programs"]
}, {
  title: "Farm-to-Door Delivery",
  image: deliveryImg,
  points: ["Timely delivery of live animals, fish, eggs and meat", "Direct to your doorstep or market point", "Fresh, traceable, dependable"]
}];
const values = [{
  k: "Integrity",
  v: "Honesty in our processes and products"
}, {
  k: "Quality",
  v: "Uncompromising standards in everything we do"
}, {
  k: "Sustainability",
  v: "Farming that respects people, animals and nature"
}, {
  k: "Innovation",
  v: "Applying modern techniques for better yields"
}, {
  k: "Community",
  v: "Empowering local farmers and customers"
}];
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx("header", { className: "absolute top-0 left-0 right-0 z-20", children: /* @__PURE__ */ jsxs("nav", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-white", children: [
      /* @__PURE__ */ jsxs("a", { href: "#top", className: "flex items-center gap-2 font-bold tracking-tight", children: [
        /* @__PURE__ */ jsx("span", { className: "grid h-9 w-9 place-items-center rounded-full bg-white text-primary-foreground font-black", children: "P" }),
        /* @__PURE__ */ jsx("span", { className: "text-lg", children: "PEMI FARMS" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden gap-8 text-sm font-medium md:flex", children: [
        /* @__PURE__ */ jsx("a", { href: "#about", className: "hover:text-white/80", children: "About" }),
        /* @__PURE__ */ jsx("a", { href: "#services", className: "hover:text-white/80", children: "Services" }),
        /* @__PURE__ */ jsx("a", { href: "#values", className: "hover:text-white/80", children: "Values" }),
        /* @__PURE__ */ jsx("a", { href: "#contact", className: "hover:text-white/80", children: "Contact" })
      ] }),
      /* @__PURE__ */ jsx("a", { href: "#contact", className: "rounded-full bg-white px-5 py-2 text-sm font-semibold text-foreground shadow-lg transition hover:scale-105", children: "Order produce" })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { id: "top", className: "relative flex min-h-[92vh] items-center overflow-hidden", children: [
      /* @__PURE__ */ jsx("img", { src: heroFish, alt: "PEMI FARMS aquaculture cages at sunrise", width: 1920, height: 1280, className: "absolute inset-0 h-full w-full object-cover" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[oklch(0.35_0.12_235/0.85)] via-[oklch(0.45_0.13_230/0.55)] to-[oklch(0.78_0.13_230/0.4)]" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 text-white", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur", children: "Est. 2016 · Africa" }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-6 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl", children: [
          "Farmed with care.",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "italic font-light", children: "Served with pride." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-xl text-lg text-white/85", children: "Sustainable fish farming, livestock and poultry — delivered fresh from our cages, pens and pastures to your table." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsx("a", { href: "#services", className: "rounded-full bg-white px-7 py-3 font-semibold text-foreground shadow-[var(--shadow-brand)] transition hover:translate-y-[-2px]", children: "Explore our services" }),
          /* @__PURE__ */ jsx("a", { href: "#about", className: "rounded-full border border-white/40 px-7 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10", children: "About PEMI" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "about", className: "mx-auto max-w-7xl px-6 py-28", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-16 md:grid-cols-2 md:items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-[0.2em] text-primary", children: "About us" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-bold tracking-tight md:text-5xl", children: "Farming with purpose, from land and water to your table." }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg leading-relaxed text-muted-foreground", children: "Founded in 2016, PEMI FARMS specializes in fish farming, goat and sheep rearing, pig farming and poultry production. From the calm waters of our fish cages to well-kept pens and pastures, we are committed to ethical practices, modern techniques and community empowerment." }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg leading-relaxed text-muted-foreground", children: "We don't only farm — we train, support and deliver. Whether you're a first-time farmer, an investor, or a customer looking for fresh, healthy products, PEMI FARMS is your trusted partner." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border bg-card p-8 shadow-[var(--shadow-brand)]", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-widest text-primary", children: "Our Vision" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-lg", children: "To be a leading provider of sustainable and innovative livestock and aquaculture solutions in Africa and beyond." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border bg-card p-8 shadow-[var(--shadow-brand)]", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-widest text-primary", children: "Our Mission" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-lg", children: "To deliver high-quality farm products and services while empowering communities through training, employment and responsible farming." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "services", className: "relative py-28", style: {
      background: "var(--gradient-soft)"
    }, children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-[0.2em] text-primary", children: "What we do" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl", children: "Sustainable livestock & aquaculture solutions" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "max-w-md text-muted-foreground", children: "Designed to support food security, livelihood and agribusiness growth across our communities." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: services.map((s) => /* @__PURE__ */ jsxs("article", { className: "group overflow-hidden rounded-3xl border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-brand)]", children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: s.image, alt: s.title, width: 1024, height: 768, loading: "lazy", className: "h-full w-full object-cover transition duration-700 group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxs("div", { className: "p-7", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold tracking-tight", children: s.title }),
          /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-2 text-sm text-muted-foreground", children: s.points.map((p) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
            p
          ] }, p)) })
        ] })
      ] }, s.title)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { id: "values", className: "mx-auto max-w-7xl px-6 py-28", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-[0.2em] text-primary", children: "Core values" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl", children: "The principles that guide every harvest." }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-3 lg:grid-cols-5", children: values.map((v, i) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border bg-card p-6 transition hover:bg-accent", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-3xl font-black text-primary", children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 text-lg font-bold", children: v.k }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: v.v })
      ] }, v.k)) })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "contact", className: "relative overflow-hidden", style: {
      background: "var(--gradient-brand)"
    }, children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-6 py-24 text-center text-white", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold tracking-tight md:text-5xl", children: "Fresh from our farm to your door." }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-xl text-lg text-white/85", children: "Order fresh produce, book a training, or partner with us to grow your agribusiness." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsx("a", { href: "mailto:hello@pemifarms.com", className: "rounded-full bg-white px-7 py-3 font-semibold text-foreground shadow-lg transition hover:scale-105", children: "hello@pemifarms.com" }),
        /* @__PURE__ */ jsx("a", { href: "tel:+000000000", className: "rounded-full border border-white/40 px-7 py-3 font-semibold backdrop-blur transition hover:bg-white/10", children: "Call us today" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("footer", { className: "border-t bg-background py-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " PEMI FARMS. Farmed with care, served with pride."
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Africa · Sustainable Agriculture" })
    ] }) })
  ] });
}
export {
  Index as component
};
