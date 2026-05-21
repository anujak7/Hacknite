import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Brain, Code2, Coins, Cpu, Gamepad2, Shield, Calendar, MapPin,
  Trophy, Users, Mic, Zap, HeartHandshake, Sparkles, ChevronDown,
  Twitter, Instagram, Linkedin, Github, Mail, Phone,
} from "lucide-react";
import logo from "@/assets/hacknite-logo.png";
import heroBg from "@/assets/hero-vortex.jpg";
import squadPurple from "@/assets/squad-purple.png";
import squadOrange from "@/assets/squad-orange.jpeg";

export const Route = createFileRoute("/")({ component: Index });

/* ------------ shared bits ------------ */

function Particles() {
  const [parts, setParts] = useState<{ x: number; y: number; d: number; s: number }[]>([]);
  useEffect(() => {
    setParts(
      Array.from({ length: 40 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        d: 4 + Math.random() * 6,
        s: 0.4 + Math.random() * 1.2,
      }))
    );
  }, []);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {parts.map((p, i) => (
        <motion.span
          key={i}
          className="particle"
          style={{ left: `${p.x}%`, top: `${p.y}%`, transform: `scale(${p.s})` }}
          animate={{ y: [0, -40, 0], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: p.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-accent">
      <span className="h-px w-8 bg-accent" />
      {children}
      <span className="h-px w-8 bg-accent" />
    </div>
  );
}

function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`text-5xl md:text-7xl font-black uppercase ${className}`}>{children}</h2>
  );
}

/* ------------ NAV ------------ */
function Nav() {
  const links = [
    ["About", "#about"],
    ["Tracks", "#tracks"],
    ["Sponsors", "#sponsors"],
    ["Team", "#team"],
    ["FAQ", "#faq"],
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/40 border-b border-accent/20">
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="HACKNITE" className="h-8 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-7 font-mono text-sm uppercase tracking-widest">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="text-muted-foreground hover:text-accent transition-colors relative group">
              {l}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all" />
            </a>
          ))}
        </nav>
        <a href="#register" className="btn-royale text-sm py-2.5 px-5">Register</a>
      </div>
    </header>
  );
}

/* ------------ HERO ------------ */
function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-70" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>
      <Particles />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-12 md:pt-20 pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 fortnite-panel font-mono text-xs uppercase tracking-[0.3em] text-accent"
        >
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Season 01 · Drop Incoming
        </motion.div>

        <motion.img
          src={logo}
          alt="HACKNITE"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto w-full max-w-[min(1200px,95vw)] h-auto mb-6 drop-shadow-[0_0_60px_oklch(0.78_0.18_200_/_0.7)]"
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-black uppercase leading-[0.9] tracking-tight"
        >
          <span className="block text-3xl md:text-5xl gradient-text">CODE ROYALE</span>
          <span className="block text-lg md:text-2xl mt-3 text-foreground glow-text-cyan tracking-[0.3em]">12 HOUR HACKATHON</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-6 font-display text-3xl md:text-5xl tracking-wider"
        >
          <span className="text-primary glow-text-orange">BUILD.</span>{" "}
          <span className="text-secondary glow-text-purple">INNOVATE.</span>{" "}
          <span className="text-accent glow-text-cyan">SURVIVE.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#register" className="btn-royale">Register Now</a>
          <a href="#sponsors" className="btn-royale btn-royale-outline">Become a Sponsor</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-14 flex flex-wrap justify-center gap-4"
        >
          <div className="fortnite-panel px-6 py-4 flex items-center gap-3">
            <Calendar className="text-primary" size={20} />
            <div className="text-left">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Drop Date</div>
              <div className="font-display text-xl tracking-wider">7 AUGUST</div>
            </div>
          </div>
          <div className="fortnite-panel px-6 py-4 flex items-center gap-3">
            <MapPin className="text-accent" size={20} />
            <div className="text-left">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Battle Arena</div>
              <div className="font-display text-xl tracking-wider">SVSU HARYANA</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-20 flex justify-center"
        >
          <ChevronDown className="text-accent animate-bounce" size={28} />
        </motion.div>
      </div>
    </section>
  );
}

/* ------------ ABOUT ------------ */
function About() {
  const items = [
    {
      icon: Zap, label: "WHAT",
      title: "What is Hacknite?",
      body: "A 12-hour hackathon where developers and designers compete to build impactful tech solutions under pressure — blending speed, creativity, and innovation.",
      color: "text-primary",
    },
    {
      icon: Trophy, label: "WHY",
      title: "Why Participate?",
      body: "Win prizes, gain mentorship from industry leaders, build your portfolio, and meet the most ambitious builders in the country — all in one electric night.",
      color: "text-secondary",
    },
    {
      icon: Users, label: "WHO",
      title: "Who's it For?",
      body: "Passionate student developers, designers, and builders — plus organizations seeking to engage with and recruit emerging tech talent.",
      color: "text-accent",
    },
  ];
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-10 hidden lg:block w-[520px] opacity-25"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      >
        <img src={squadPurple} alt="" className="w-full h-auto" />
      </div>
      <div className="relative mx-auto max-w-7xl text-center">
        <SectionLabel>Mission Briefing</SectionLabel>
        <SectionTitle><span className="gradient-text">ABOUT HACKNITE</span></SectionTitle>
        <p className="mt-6 max-w-2xl mx-auto text-muted-foreground text-lg">
          The storm is closing in. Only the sharpest builders survive the night.
        </p>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="fortnite-panel p-8 text-left group"
            >
              <div className={`font-mono text-xs tracking-[0.3em] ${it.color} mb-3`}>// {it.label}</div>
              <it.icon className={`${it.color} mb-4`} size={36} />
              <h3 className="text-3xl uppercase mb-3">{it.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{it.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------ TRACKS ------------ */
function Tracks() {
  const tracks = [
    { icon: Brain, name: "AI / ML", desc: "Train. Predict. Dominate.", color: "var(--neon-pink)" },
    { icon: Code2, name: "Web / App Dev", desc: "Ship pixel-perfect interfaces.", color: "var(--neon-cyan)" },
    { icon: Coins, name: "Blockchain / Crypto", desc: "Decentralize the future.", color: "var(--neon-orange)" },
    { icon: Cpu, name: "IoT", desc: "Wire the physical world.", color: "var(--neon-purple)" },
    { icon: Gamepad2, name: "Game Dev", desc: "Build worlds. Break records.", color: "var(--neon-blue)" },
    { icon: Shield, name: "Cybersecurity", desc: "Defend. Attack. Outsmart.", color: "var(--neon-pink)" },
  ];
  return (
    <section id="tracks" className="relative py-32 px-6 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `url(${squadOrange})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <SectionLabel>Loadout Selection</SectionLabel>
          <SectionTitle><span className="gradient-text">PICK YOUR TRACK</span></SectionTitle>
          <p className="mt-6 text-muted-foreground text-lg">Six battle classes. One champion.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="fortnite-panel scanline relative overflow-hidden p-8 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-md"
                  style={{
                    background: `linear-gradient(135deg, ${t.color}30, transparent)`,
                    border: `1px solid ${t.color}`,
                    boxShadow: `0 0 20px ${t.color}40`,
                  }}
                >
                  <t.icon style={{ color: t.color }} size={32} />
                </div>
                <div className="font-mono text-xs text-muted-foreground">0{i + 1}</div>
              </div>
              <h3 className="text-3xl uppercase mb-2">{t.name}</h3>
              <p className="text-muted-foreground">{t.desc}</p>
              <div
                className="mt-6 font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: t.color }}
              >
                → ENTER LOBBY
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------ SPONSORS ------------ */
function Sponsors() {
  const groups: { type: string; color: string; sponsors: { name: string; initials: string }[] }[] = [
    {
      type: "Title Sponsor",
      color: "var(--neon-orange)",
      sponsors: [{ name: "Your Brand Here", initials: "TS" }],
    },
    {
      type: "Powered By",
      color: "var(--neon-cyan)",
      sponsors: [
        { name: "Your Brand Here", initials: "P1" },
        { name: "Your Brand Here", initials: "P2" },
      ],
    },
    {
      type: "Associate Sponsors",
      color: "var(--neon-pink)",
      sponsors: [
        { name: "Your Brand Here", initials: "A1" },
        { name: "Your Brand Here", initials: "A2" },
        { name: "Your Brand Here", initials: "A3" },
      ],
    },
    {
      type: "Community Partners",
      color: "var(--neon-purple)",
      sponsors: [
        { name: "Your Brand Here", initials: "C1" },
        { name: "Your Brand Here", initials: "C2" },
        { name: "Your Brand Here", initials: "C3" },
        { name: "Your Brand Here", initials: "C4" },
      ],
    },
  ];
  return (
    <section id="sponsors" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <SectionLabel>Loot Drops</SectionLabel>
          <SectionTitle><span className="gradient-text">OUR SPONSORS</span></SectionTitle>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Backed by the brands powering the next generation of builders.
          </p>
        </div>

        <div className="space-y-14">
          {groups.map((g, gi) => (
            <motion.div
              key={g.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="h-px flex-1"
                  style={{ background: `linear-gradient(to right, transparent, ${g.color})` }}
                />
                <div
                  className="font-mono text-xs md:text-sm uppercase tracking-[0.4em]"
                  style={{ color: g.color }}
                >
                  {g.type}
                </div>
                <span
                  className="h-px flex-1"
                  style={{ background: `linear-gradient(to left, transparent, ${g.color})` }}
                />
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                {g.sponsors.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="fortnite-panel p-6 w-48 md:w-56 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform"
                    style={{ borderColor: `${g.color}66` }}
                  >
                    <div
                      className="w-20 h-20 mb-4 flex items-center justify-center font-display text-2xl tracking-wider"
                      style={{
                        background: `linear-gradient(135deg, ${g.color}30, transparent)`,
                        border: `1px solid ${g.color}`,
                        boxShadow: `0 0 24px ${g.color}40`,
                        color: g.color,
                      }}
                    >
                      {s.initials}
                    </div>
                    <div className="font-display text-base tracking-wider">{s.name}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="mailto:arnabbanerjee3d@gmail.com" className="btn-royale">Partner With Us</a>
        </div>
      </div>
    </section>
  );
}

/* ------------ TEAM ------------ */
function Team() {
  const organizers = [
    { name: "Anuj Khan", role: "Lead Organizer", initials: "AK", color: "orange" },
    { name: "Arnab Banerjee", role: "Lead Organizer", initials: "AB", color: "purple" },
  ];

  const leads = [
    { name: "Divyansh Kumar", role: "Management Lead", initials: "DK", color: "pink", floatClass: "float-stagger-1" },
    { name: "Gourav Bhatiya", role: "Technical Lead", initials: "GB", color: "cyan", floatClass: "float-stagger-2" },
    { name: "Aayush Arya", role: "Operations Lead", initials: "AA", color: "orange", floatClass: "float-stagger-3" },
    { name: "Raghav Arora", role: "Social Media Lead", initials: "RA", color: "purple", floatClass: "float-stagger-4" },
    { name: "Kabir Mehta", role: "Sponsorship Lead", initials: "KM", color: "blue", floatClass: "float-stagger-5" },
    { name: "Dev Kapoor", role: "Design Lead", initials: "DKp", color: "pink", floatClass: "float-stagger-6" },
    { name: "Ishita Roy", role: "Community Lead", initials: "IR", color: "cyan", floatClass: "float-stagger-7" },
  ];

  // Double the leads for seamless infinite loop scroll
  const marqueeLeads = [...leads, ...leads];

  return (
    <section id="team" className="relative py-32 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <SectionLabel>The Squad</SectionLabel>
          <SectionTitle><span className="gradient-text">ORGANIZERS</span></SectionTitle>
        </div>

        {/* Organizers Grid */}
        <div className="flex flex-wrap justify-center gap-8 mb-24">
          {organizers.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="fortnite-panel p-6 text-center group w-64 float-stagger-1"
            >
              <div
                className="mx-auto w-24 h-24 mb-4 flex items-center justify-center font-display text-4xl text-background float-icon-slow"
                style={{
                  background: `linear-gradient(135deg, var(--neon-${m.color}), var(--neon-cyan))`,
                  clipPath: "polygon(20% 0, 100% 0, 80% 100%, 0 100%)",
                }}
              >
                {m.initials}
              </div>
              <div className="font-display text-2xl tracking-wider">{m.name}</div>
              <div className="font-mono text-xs uppercase tracking-widest text-accent mt-1">{m.role}</div>
              <div className="flex justify-center gap-3 mt-4 opacity-60 group-hover:opacity-100 transition">
                <Twitter size={16} className="text-muted-foreground hover:text-accent" />
                <Linkedin size={16} className="text-muted-foreground hover:text-accent" />
                <Github size={16} className="text-muted-foreground hover:text-accent" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-10">
          <SectionTitle><span className="gradient-text">TEAM LEADS</span></SectionTitle>
          <p className="text-muted-foreground mt-2 font-mono text-xs uppercase tracking-widest">
            // Moving & Fluctuating Squad
          </p>
        </div>

        {/* Team Leads Marquee */}
        <div className="marquee-container">
          <div className="marquee-content">
            {marqueeLeads.map((m, i) => (
              <div
                key={`${m.name}-${i}`}
                className={`fortnite-panel p-5 text-center group w-52 shrink-0 ${m.floatClass}`}
              >
                <div
                  className="mx-auto w-20 h-20 mb-4 flex items-center justify-center font-display text-3xl text-background float-icon-slow"
                  style={{
                    background: `linear-gradient(135deg, var(--neon-${m.color}), var(--neon-cyan))`,
                    clipPath: "polygon(20% 0, 100% 0, 80% 100%, 0 100%)",
                  }}
                >
                  {m.initials}
                </div>
                <div className="font-display text-lg tracking-wider truncate">{m.name}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-accent mt-1 truncate">{m.role}</div>
                <div className="flex justify-center gap-2 mt-3 opacity-60 group-hover:opacity-100 transition">
                  <Twitter size={14} className="text-muted-foreground hover:text-accent" />
                  <Linkedin size={14} className="text-muted-foreground hover:text-accent" />
                  <Github size={14} className="text-muted-foreground hover:text-accent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------ EXPERIENCE ------------ */
function Experience() {
  const items = [
    { icon: Mic, t: "Mentorship", d: "1:1 guidance from industry pros." },
    { icon: Users, t: "Networking", d: "Meet the future of tech." },
    { icon: Sparkles, t: "Live Judging", d: "Demo to top-tier panels." },
    { icon: Trophy, t: "Prizes", d: "Cash, gear & opportunities." },
    { icon: Zap, t: "Challenges", d: "Mini-quests through the night." },
    { icon: HeartHandshake, t: "Community", d: "Find your co-founders." },
  ];
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 hidden lg:block w-[600px] opacity-20"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        }}
      >
        <img src={squadPurple} alt="" className="w-full h-auto" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <SectionLabel>The Experience</SectionLabel>
          <SectionTitle><span className="gradient-text">INSIDE THE ARENA</span></SectionTitle>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="fortnite-panel p-6 flex items-start gap-4"
            >
              <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-accent/10 border border-accent/40">
                <it.icon className="text-accent" size={22} />
              </div>
              <div>
                <h4 className="font-display text-xl tracking-wider">{it.t}</h4>
                <p className="text-sm text-muted-foreground mt-1">{it.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------ FAQ ------------ */
function Faq() {
  const faqs = [
    { q: "Who can participate?", a: "Any student developer, designer, or builder with a passion for shipping. Beginners welcome." },
    { q: "What's the team size?", a: "Teams of 2–4. Solo entries are allowed but we strongly recommend squading up." },
    { q: "Is it offline?", a: "Yes — fully in-person at SVSU Haryana on 7th August. Bring the energy." },
    { q: "Are there registration fees?", a: "Registration is free for selected participants. Apply via the registration portal." },
    { q: "What's the prize pool?", a: "₹2L+ in cash and prizes across tracks, plus internships, swag, and mentorship." },
    { q: "What should I bring?", a: "Laptop, charger, ID card, water bottle, and your sharpest ideas. Snacks and meals are on us." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <SectionLabel>Intel Briefing</SectionLabel>
          <SectionTitle><span className="gradient-text">FAQ</span></SectionTitle>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="fortnite-panel overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-display text-lg md:text-xl tracking-wider">{f.q}</span>
                <ChevronDown
                  className={`text-accent transition-transform ${open === i ? "rotate-180" : ""}`}
                  size={20}
                />
              </button>
              <motion.div
                initial={false}
                animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-5 text-muted-foreground">{f.a}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------ REGISTER CTA ------------ */
function RegisterCTA() {
  return (
    <section id="register" className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl fortnite-panel p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: `url(${squadPurple})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
          }}
        />
        <div className="relative">
        <SectionLabel>Final Call</SectionLabel>
        <h2 className="text-5xl md:text-7xl font-black uppercase">
          <span className="gradient-text">JOIN THE DROP</span>
        </h2>
        <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
          The lobby is filling up fast. Lock in your slot before the storm closes.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#" className="btn-royale">Register Now</a>
          <a href="#sponsors" className="btn-royale btn-royale-outline">Sponsor the Event</a>
        </div>
        </div>
      </div>
    </section>
  );
}

/* ------------ FOOTER ------------ */
function Footer() {
  return (
    <footer className="relative border-t border-accent/20 mt-20 px-6 py-16">
      <div className="mx-auto max-w-7xl grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <img src={logo} alt="HACKNITE" className="h-10 w-auto mb-4" />
          <p className="text-muted-foreground max-w-sm">
            HACKNITE: CODE ROYALE — a 12-hour hackathon where the boldest builders compete to survive the storm and ship the future.
          </p>
          <p className="mt-4 font-mono text-xs uppercase tracking-widest text-accent">
            Organized by Hackers Cult
          </p>
        </div>
        <div>
          <h5 className="font-display text-lg tracking-wider mb-4 text-accent">QUICK LINKS</h5>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#about" className="hover:text-accent">About</a></li>
            <li><a href="#tracks" className="hover:text-accent">Tracks</a></li>
            <li><a href="#sponsors" className="hover:text-accent">Sponsors</a></li>
            <li><a href="#faq" className="hover:text-accent">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-display text-lg tracking-wider mb-4 text-accent">CONTACT</h5>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li className="flex items-center gap-2"><Phone size={14} /> +91 93190 13618</li>
            <li className="flex items-center gap-2"><Mail size={14} /><span>arnabbanerjee3d@gmail.com</span></li>
          </ul>
          <div className="flex gap-3 mt-4">
            {[Twitter, Instagram, Linkedin, Github].map((I, i) => (
              <a key={i} href="#" className="w-9 h-9 flex items-center justify-center fortnite-panel">
                <I size={16} className="text-accent" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-12 pt-6 border-t border-accent/10 flex flex-wrap justify-between items-center gap-4 font-mono text-xs text-muted-foreground uppercase tracking-widest">
        <span>© 2026 HACKERS CULT</span>
        <span>Build · Innovate · Survive</span>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Tracks />
      <Sponsors />
      <Team />
      <Experience />
      <Faq />
      <RegisterCTA />
      <Footer />
    </div>
  );
}
