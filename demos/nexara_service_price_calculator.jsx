import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  Sparkles,
  Globe2,
  Palette,
  FileText,
  Workflow,
  Clock,
  RefreshCw,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Zap,
  Layers3,
  MessageSquareText,
  Download,
  Smartphone,
  Monitor,
  Moon,
  Sun,
} from "lucide-react";

const services = [
  {
    id: "design",
    name: "Desain Visual",
    icon: Palette,
    basePrice: 350000,
    description: "Logo, banner, poster, feed Instagram, company profile visual.",
    deliverables: ["Konsep visual", "File siap pakai", "Revisi terukur"],
  },
  {
    id: "website",
    name: "Website",
    icon: Globe2,
    basePrice: 1800000,
    description: "Landing page, company profile, katalog, website bisnis modern.",
    deliverables: ["Responsive website", "SEO dasar", "Deploy awal"],
  },
  {
    id: "content",
    name: "Konten Digital",
    icon: FileText,
    basePrice: 500000,
    description: "Konten media sosial, copywriting, kalender konten, caption.",
    deliverables: ["Content plan", "Caption", "Ide visual"],
  },
  {
    id: "automation",
    name: "Otomasi Bisnis",
    icon: Workflow,
    basePrice: 2500000,
    description: "Form otomatis, dashboard, integrasi spreadsheet, AI workflow.",
    deliverables: ["Workflow map", "Automated process", "Dashboard ringan"],
  },
];

const complexityOptions = [
  { id: "basic", label: "Basic", multiplier: 1, note: "Kebutuhan sederhana dan cepat." },
  { id: "standard", label: "Standard", multiplier: 1.45, note: "Fitur lebih lengkap dan visual lebih kuat." },
  { id: "premium", label: "Premium", multiplier: 2.15, note: "Detail tinggi, UX matang, dan hasil presentation-ready." },
  { id: "enterprise", label: "Enterprise", multiplier: 3.2, note: "Struktur kompleks, keamanan, workflow, dan skalabilitas." },
];

const deadlineOptions = [
  { id: "relaxed", label: "7–14 hari", multiplier: 1, note: "Timeline normal." },
  { id: "standard", label: "4–6 hari", multiplier: 1.15, note: "Prioritas sedang." },
  { id: "fast", label: "2–3 hari", multiplier: 1.35, note: "Butuh pengerjaan cepat." },
  { id: "urgent", label: "24 jam", multiplier: 1.75, note: "Urgent dan masuk prioritas tinggi." },
];

const revisionOptions = [
  { id: 1, label: "1x revisi", extra: 0 },
  { id: 2, label: "2x revisi", extra: 125000 },
  { id: 3, label: "3x revisi", extra: 250000 },
  { id: 5, label: "5x revisi", extra: 500000 },
];

const addOns = [
  { id: "brand", name: "Mini Brand Guide", price: 450000, icon: Sparkles },
  { id: "copy", name: "Copywriting Premium", price: 350000, icon: MessageSquareText },
  { id: "mobile", name: "Mobile Optimization", price: 300000, icon: Smartphone },
  { id: "security", name: "Security Setup", price: 550000, icon: ShieldCheck },
  { id: "deploy", name: "Deploy & Domain Assist", price: 400000, icon: Monitor },
  { id: "speed", name: "Speed Optimization", price: 375000, icon: Zap },
];

function formatRupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NexaraServicePriceCalculator() {
  const [selectedService, setSelectedService] = useState("website");
  const [complexity, setComplexity] = useState("standard");
  const [deadline, setDeadline] = useState("standard");
  const [revision, setRevision] = useState(2);
  const [selectedAddOns, setSelectedAddOns] = useState(["copy", "mobile"]);
  const [darkMode, setDarkMode] = useState(true);

  const activeService = services.find((item) => item.id === selectedService);
  const activeComplexity = complexityOptions.find((item) => item.id === complexity);
  const activeDeadline = deadlineOptions.find((item) => item.id === deadline);
  const activeRevision = revisionOptions.find((item) => item.id === revision);

  const calculation = useMemo(() => {
    const base = activeService.basePrice;
    const complexityPrice = base * activeComplexity.multiplier;
    const deadlinePrice = complexityPrice * activeDeadline.multiplier;
    const revisionPrice = activeRevision.extra;
    const addOnTotal = addOns
      .filter((item) => selectedAddOns.includes(item.id))
      .reduce((total, item) => total + item.price, 0);
    const subtotal = deadlinePrice + revisionPrice + addOnTotal;
    const platformFee = Math.round(subtotal * 0.03);
    const total = Math.round(subtotal + platformFee);

    return {
      base,
      complexityPrice: Math.round(complexityPrice),
      deadlinePrice: Math.round(deadlinePrice - complexityPrice),
      revisionPrice,
      addOnTotal,
      platformFee,
      total,
    };
  }, [activeService, activeComplexity, activeDeadline, activeRevision, selectedAddOns]);

  const toggleAddOn = (id) => {
    setSelectedAddOns((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  };

  const shellClass = darkMode
    ? "min-h-screen bg-[#060914] text-white"
    : "min-h-screen bg-[#f5f7fb] text-slate-950";

  const cardClass = darkMode
    ? "border-white/10 bg-white/[0.06] shadow-2xl shadow-black/30"
    : "border-slate-200 bg-white shadow-xl shadow-slate-200/70";

  const mutedText = darkMode ? "text-slate-300" : "text-slate-600";
  const softText = darkMode ? "text-slate-400" : "text-slate-500";

  return (
    <div className={shellClass}>
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className={classNames("absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full blur-3xl", darkMode ? "bg-cyan-500/20" : "bg-cyan-300/40")} />
        <div className={classNames("absolute right-0 top-48 h-96 w-96 rounded-full blur-3xl", darkMode ? "bg-violet-500/20" : "bg-violet-300/40")} />
        <div className={classNames("absolute bottom-0 left-10 h-72 w-72 rounded-full blur-3xl", darkMode ? "bg-blue-500/10" : "bg-blue-300/30")} />
      </div>

      <main className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <nav className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 shadow-lg shadow-cyan-500/20">
              <Calculator className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.24em] text-cyan-400">NEXARA</p>
              <h1 className="text-lg font-semibold">Service Price Calculator</h1>
            </div>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={classNames("flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition", cardClass)}
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            {darkMode ? "Light" : "Dark"}
          </button>
        </nav>

        <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className={classNames("rounded-[2rem] border p-5 backdrop-blur-2xl sm:p-7", cardClass)}
          >
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                  <Sparkles className="h-4 w-4" />
                  Smart estimation for premium digital service
                </div>
                <h2 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
                  Hitung harga jasa dalam beberapa detik.
                </h2>
                <p className={classNames("mt-4 max-w-2xl text-base leading-7", mutedText)}>
                  Calon pelanggan bisa memilih layanan, tingkat kesulitan, revisi, deadline, dan add-on. Sistem langsung menampilkan estimasi harga yang rapi dan mudah dipahami.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Jenis Layanan</h3>
                  <span className={classNames("text-sm", softText)}>Pilih kebutuhan utama</span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {services.map((service) => {
                    const Icon = service.icon;
                    const active = selectedService === service.id;
                    return (
                      <button
                        key={service.id}
                        onClick={() => setSelectedService(service.id)}
                        className={classNames(
                          "group rounded-3xl border p-4 text-left transition duration-300",
                          active
                            ? "border-cyan-400/60 bg-cyan-400/10 shadow-lg shadow-cyan-500/10"
                            : darkMode
                            ? "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.07]"
                            : "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-white"
                        )}
                      >
                        <div className="mb-4 flex items-center justify-between">
                          <div className={classNames("flex h-11 w-11 items-center justify-center rounded-2xl", active ? "bg-cyan-400 text-slate-950" : darkMode ? "bg-white/10 text-white" : "bg-white text-slate-900 shadow") }>
                            <Icon className="h-5 w-5" />
                          </div>
                          {active && <CheckCircle2 className="h-5 w-5 text-cyan-300" />}
                        </div>
                        <p className="font-semibold">{service.name}</p>
                        <p className={classNames("mt-2 text-sm leading-6", mutedText)}>{service.description}</p>
                        <p className="mt-3 text-sm font-semibold text-cyan-400">Mulai {formatRupiah(service.basePrice)}</p>
                      </button>
                    );
                  })}
                </div>
              </section>

              <section>
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Tingkat Kesulitan</h3>
                  <Layers3 className="h-4 w-4 text-cyan-400" />
                </div>
                <div className="grid gap-3 sm:grid-cols-4">
                  {complexityOptions.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setComplexity(item.id)}
                      className={classNames(
                        "rounded-2xl border p-4 text-left transition",
                        complexity === item.id
                          ? "border-violet-400/60 bg-violet-400/10"
                          : darkMode
                          ? "border-white/10 bg-white/[0.03] hover:bg-white/[0.07]"
                          : "border-slate-200 bg-slate-50 hover:bg-white"
                      )}
                    >
                      <p className="font-semibold">{item.label}</p>
                      <p className={classNames("mt-2 text-xs leading-5", softText)}>{item.note}</p>
                    </button>
                  ))}
                </div>
              </section>

              <div className="grid gap-6 lg:grid-cols-2">
                <section>
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Deadline</h3>
                    <Clock className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div className="space-y-3">
                    {deadlineOptions.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setDeadline(item.id)}
                        className={classNames(
                          "flex w-full items-center justify-between rounded-2xl border p-4 text-left transition",
                          deadline === item.id
                            ? "border-cyan-400/60 bg-cyan-400/10"
                            : darkMode
                            ? "border-white/10 bg-white/[0.03] hover:bg-white/[0.07]"
                            : "border-slate-200 bg-slate-50 hover:bg-white"
                        )}
                      >
                        <div>
                          <p className="font-semibold">{item.label}</p>
                          <p className={classNames("mt-1 text-xs", softText)}>{item.note}</p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-cyan-400" />
                      </button>
                    ))}
                  </div>
                </section>

                <section>
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Jumlah Revisi</h3>
                    <RefreshCw className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {revisionOptions.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setRevision(item.id)}
                        className={classNames(
                          "rounded-2xl border p-4 text-left transition",
                          revision === item.id
                            ? "border-violet-400/60 bg-violet-400/10"
                            : darkMode
                            ? "border-white/10 bg-white/[0.03] hover:bg-white/[0.07]"
                            : "border-slate-200 bg-slate-50 hover:bg-white"
                        )}
                      >
                        <p className="font-semibold">{item.label}</p>
                        <p className={classNames("mt-2 text-xs", softText)}>{item.extra ? `+ ${formatRupiah(item.extra)}` : "Termasuk paket"}</p>
                      </button>
                    ))}
                  </div>
                </section>
              </div>

              <section>
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Add-on Profesional</h3>
                  <span className={classNames("text-sm", softText)}>Opsional</span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {addOns.map((item) => {
                    const Icon = item.icon;
                    const active = selectedAddOns.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        onClick={() => toggleAddOn(item.id)}
                        className={classNames(
                          "rounded-2xl border p-4 text-left transition",
                          active
                            ? "border-cyan-400/60 bg-cyan-400/10"
                            : darkMode
                            ? "border-white/10 bg-white/[0.03] hover:bg-white/[0.07]"
                            : "border-slate-200 bg-slate-50 hover:bg-white"
                        )}
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <Icon className="h-5 w-5 text-cyan-400" />
                          {active && <CheckCircle2 className="h-4 w-4 text-cyan-300" />}
                        </div>
                        <p className="text-sm font-semibold">{item.name}</p>
                        <p className={classNames("mt-2 text-xs", softText)}>{formatRupiah(item.price)}</p>
                      </button>
                    );
                  })}
                </div>
              </section>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="lg:sticky lg:top-6 lg:self-start"
          >
            <div className={classNames("overflow-hidden rounded-[2rem] border backdrop-blur-2xl", cardClass)}>
              <div className="border-b border-white/10 bg-gradient-to-br from-cyan-400/20 via-violet-500/20 to-transparent p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-300">
                    Estimasi Penawaran
                  </div>
                  <ShieldCheck className="h-5 w-5 text-cyan-300" />
                </div>
                <p className={classNames("text-sm", mutedText)}>Total estimasi</p>
                <h2 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">{formatRupiah(calculation.total)}</h2>
                <p className={classNames("mt-4 text-sm leading-6", mutedText)}>
                  Estimasi ini bersifat awal. Harga final dapat berubah setelah kebutuhan, bahan, deadline, dan ruang lingkup pekerjaan dikunci.
                </p>
              </div>

              <div className="space-y-5 p-6">
                <div className={classNames("rounded-3xl border p-5", darkMode ? "border-white/10 bg-black/20" : "border-slate-200 bg-slate-50")}>
                  <div className="mb-4 flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950">
                      {React.createElement(activeService.icon, { className: "h-5 w-5" })}
                    </div>
                    <div>
                      <p className="font-semibold">{activeService.name}</p>
                      <p className={classNames("mt-1 text-sm leading-6", mutedText)}>{activeService.description}</p>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    {activeService.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                        <span className={mutedText}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <PriceRow label="Harga dasar" value={formatRupiah(calculation.base)} mutedText={mutedText} />
                  <PriceRow label={`Kesulitan ${activeComplexity.label}`} value={formatRupiah(calculation.complexityPrice)} mutedText={mutedText} />
                  <PriceRow label={`Deadline ${activeDeadline.label}`} value={`+ ${formatRupiah(calculation.deadlinePrice)}`} mutedText={mutedText} />
                  <PriceRow label={activeRevision.label} value={`+ ${formatRupiah(calculation.revisionPrice)}`} mutedText={mutedText} />
                  <PriceRow label="Add-on" value={`+ ${formatRupiah(calculation.addOnTotal)}`} mutedText={mutedText} />
                  <PriceRow label="Service handling" value={`+ ${formatRupiah(calculation.platformFee)}`} mutedText={mutedText} />
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">Total</p>
                  <p className="text-2xl font-semibold text-cyan-300">{formatRupiah(calculation.total)}</p>
                </div>

                <button className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.01]">
                  Buat Penawaran
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </button>

                <button className={classNames("flex w-full items-center justify-center gap-3 rounded-2xl border px-5 py-4 font-semibold transition", darkMode ? "border-white/10 bg-white/[0.04] hover:bg-white/[0.08]" : "border-slate-200 bg-white hover:bg-slate-50")}>
                  <Download className="h-5 w-5" />
                  Download Ringkasan
                </button>
              </div>
            </div>

            <div className={classNames("mt-6 rounded-[2rem] border p-5 backdrop-blur-2xl", cardClass)}>
              <p className="mb-3 font-semibold">AI-ready improvement</p>
              <p className={classNames("text-sm leading-6", mutedText)}>
                Versi lanjutan dapat menambahkan AI brief analyzer. Calon pelanggan menulis kebutuhan, lalu sistem merekomendasikan paket, add-on, estimasi harga, dan timeline secara otomatis.
              </p>
            </div>
          </motion.aside>
        </section>
      </main>
    </div>
  );
}

function PriceRow({ label, value, mutedText }) {
  return (
    <div className="flex items-center justify-between gap-4 text-sm">
      <span className={mutedText}>{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}
