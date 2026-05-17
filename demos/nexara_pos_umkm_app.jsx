import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  ReceiptText,
  BarChart3,
  Users,
  Settings,
  Search,
  Bell,
  Plus,
  Minus,
  Trash2,
  CreditCard,
  Banknote,
  QrCode,
  Sun,
  Moon,
  Menu,
  X,
  AlertTriangle,
  TrendingUp,
  Download,
  Printer,
  Sparkles,
  ShieldCheck,
  LogOut,
  ChevronRight,
  Store,
  UserRound,
  CheckCircle2,
  Clock3,
  Boxes
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid
} from 'recharts';

const LOGO = 'data:image/png;base64,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';

const initialProducts = [
  { id: 1, name: 'Kue Lapis Bangka', category: 'Kue', price: 35000, cost: 22000, stock: 18, min: 8, sold: 42, emoji: '🍰' },
  { id: 2, name: 'Kopi Susu Botol', category: 'Minuman', price: 18000, cost: 9000, stock: 36, min: 12, sold: 65, emoji: '🥤' },
  { id: 3, name: 'Keripik Singkong', category: 'Snack', price: 12000, cost: 6500, stock: 9, min: 10, sold: 31, emoji: '🍘' },
  { id: 4, name: 'Paket Nasi Ayam', category: 'Makanan', price: 28000, cost: 17500, stock: 24, min: 8, sold: 53, emoji: '🍱' },
  { id: 5, name: 'Brownies Mini', category: 'Kue', price: 16000, cost: 8500, stock: 6, min: 10, sold: 29, emoji: '🍫' },
  { id: 6, name: 'Es Teh Lemon', category: 'Minuman', price: 10000, cost: 3500, stock: 41, min: 15, sold: 74, emoji: '🍋' }
];

const seedTransactions = [
  { id: 'TRX-2401', time: '09:12', customer: 'Walk-in Customer', total: 53000, method: 'QRIS', items: 2, cashier: 'Kasir 1' },
  { id: 'TRX-2402', time: '10:03', customer: 'Ibu Rina', total: 98000, method: 'Tunai', items: 4, cashier: 'Kasir 1' },
  { id: 'TRX-2403', time: '11:40', customer: 'Pak Dani', total: 46000, method: 'Debit', items: 2, cashier: 'Kasir 2' },
  { id: 'TRX-2404', time: '13:22', customer: 'Walk-in Customer', total: 72000, method: 'QRIS', items: 3, cashier: 'Kasir 1' }
];

const salesData = [
  { day: 'Sen', omzet: 820000, trx: 26 },
  { day: 'Sel', omzet: 940000, trx: 32 },
  { day: 'Rab', omzet: 780000, trx: 24 },
  { day: 'Kam', omzet: 1120000, trx: 38 },
  { day: 'Jum', omzet: 1460000, trx: 44 },
  { day: 'Sab', omzet: 1740000, trx: 51 },
  { day: 'Min', omzet: 1210000, trx: 36 }
];

const menu = [
  { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { key: 'kasir', label: 'Kasir', icon: ShoppingCart },
  { key: 'produk', label: 'Produk & Stok', icon: Package },
  { key: 'transaksi', label: 'Transaksi', icon: ReceiptText },
  { key: 'laporan', label: 'Laporan', icon: BarChart3 },
  { key: 'pelanggan', label: 'Pelanggan', icon: Users },
  { key: 'pengaturan', label: 'Pengaturan', icon: Settings }
];

function rupiah(value) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);
}

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Card({ children, className = '' }) {
  return <div className={cx('rounded-[28px] border border-black/5 bg-white/80 p-5 shadow-[0_24px_70px_rgba(15,23,42,.08)] backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/70 dark:shadow-black/20', className)}>{children}</div>;
}

function MetricCard({ icon: Icon, title, value, note, tone = 'orange' }) {
  const tones = {
    orange: 'from-orange-500 to-amber-400',
    dark: 'from-zinc-900 to-zinc-700 dark:from-white dark:to-zinc-300',
    green: 'from-emerald-500 to-lime-400',
    red: 'from-red-500 to-rose-400'
  };
  return (
    <Card className="relative overflow-hidden">
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-orange-400/10 blur-2xl" />
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{title}</p>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">{value}</p>
          <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">{note}</p>
        </div>
        <div className={cx('flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg', tones[tone])}>
          <Icon size={20} />
        </div>
      </div>
    </Card>
  );
}

function Sidebar({ active, setActive, open, setOpen }) {
  return (
    <aside className={cx('fixed inset-y-0 left-0 z-40 w-72 transform border-r border-white/10 bg-zinc-950 p-5 text-white transition-transform duration-300 lg:translate-x-0', open ? 'translate-x-0' : '-translate-x-full')}>
      <div className="flex items-center justify-between">
        <button onClick={() => setActive('dashboard')} className="flex items-center gap-3">
          <img src={LOGO} alt="Nexara" className="h-12 w-24 object-contain brightness-0 invert" />
          <div className="text-left">
            <p className="text-xs uppercase tracking-[.24em] text-orange-300">POS UMKM</p>
            <p className="text-sm text-zinc-400">Enterprise Demo</p>
          </div>
        </button>
        <button className="lg:hidden" onClick={() => setOpen(false)}><X size={22} /></button>
      </div>

      <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[.04] p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500"><Store size={19} /></div>
          <div>
            <p className="font-medium">Nexara Mart</p>
            <p className="text-xs text-zinc-400">Cabang Pangkalpinang</p>
          </div>
        </div>
      </div>

      <nav className="mt-6 space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;
          const selected = active === item.key;
          return (
            <button
              key={item.key}
              onClick={() => { setActive(item.key); setOpen(false); }}
              className={cx('group flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm transition', selected ? 'bg-white text-zinc-950 shadow-lg' : 'text-zinc-400 hover:bg-white/10 hover:text-white')}
            >
              <span className="flex items-center gap-3"><Icon size={18} />{item.label}</span>
              {selected && <ChevronRight size={16} />}
            </button>
          );
        })}
      </nav>

      <div className="absolute bottom-5 left-5 right-5 rounded-[28px] border border-orange-300/20 bg-gradient-to-br from-orange-500/20 to-white/5 p-4">
        <div className="flex items-center gap-2 text-orange-200"><Sparkles size={16} /><span className="text-sm font-medium">AI Insight</span></div>
        <p className="mt-2 text-xs leading-relaxed text-zinc-300">Stok Brownies Mini perlu ditambah. Penjualan minuman naik pada akhir pekan.</p>
      </div>
    </aside>
  );
}

function Topbar({ dark, setDark, setSidebarOpen }) {
  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-zinc-50/75 px-4 py-4 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/70 lg:px-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button className="rounded-2xl border border-black/10 bg-white p-2 dark:border-white/10 dark:bg-zinc-900 lg:hidden" onClick={() => setSidebarOpen(true)}><Menu size={20} /></button>
          <div className="hidden h-11 items-center gap-3 rounded-2xl border border-black/5 bg-white px-4 shadow-sm dark:border-white/10 dark:bg-zinc-900 md:flex">
            <Search size={18} className="text-zinc-400" />
            <input className="w-72 bg-transparent text-sm outline-none placeholder:text-zinc-400" placeholder="Cari transaksi, produk, pelanggan..." />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setDark(!dark)} className="rounded-2xl border border-black/5 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-zinc-900">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="relative rounded-2xl border border-black/5 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-zinc-900">
            <Bell size={18} />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-orange-500" />
          </button>
          <div className="hidden items-center gap-3 rounded-2xl border border-black/5 bg-white px-3 py-2 shadow-sm dark:border-white/10 dark:bg-zinc-900 sm:flex">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"><UserRound size={17} /></div>
            <div>
              <p className="text-sm font-medium text-zinc-950 dark:text-white">Owner UMKM</p>
              <p className="text-xs text-zinc-500">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Dashboard({ products, transactions }) {
  const omzet = transactions.reduce((a, b) => a + b.total, 0) + 1210000;
  const lowStock = products.filter(p => p.stock <= p.min);
  const top = [...products].sort((a, b) => b.sold - a.sold).slice(0, 4);

  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-medium text-orange-600 dark:text-orange-400">Dashboard bisnis</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white md:text-5xl">Ringkasan penjualan hari ini</h1>
          <p className="mt-3 max-w-2xl text-sm text-zinc-500 dark:text-zinc-400">Pantau omzet, transaksi, stok kritis, dan performa produk dalam satu tampilan.</p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-950 px-5 py-3 text-sm font-medium text-white shadow-xl shadow-zinc-900/10 dark:bg-white dark:text-zinc-950"><Download size={17} /> Export Laporan</button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard icon={TrendingUp} title="Omzet Hari Ini" value={rupiah(omzet)} note="Naik 18% dari kemarin" />
        <MetricCard icon={ReceiptText} title="Transaksi" value={transactions.length + 36} note="Rata-rata 3 item per transaksi" tone="dark" />
        <MetricCard icon={Package} title="Produk Aktif" value={products.length} note={`${lowStock.length} produk stok kritis`} tone="green" />
        <MetricCard icon={AlertTriangle} title="Stok Kritis" value={lowStock.length} note="Perlu restock hari ini" tone="red" />
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">Grafik omzet 7 hari</h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Monitoring tren penjualan mingguan</p>
            </div>
            <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700 dark:bg-orange-500/10 dark:text-orange-300">Live</span>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData} margin={{ left: 0, right: 8, top: 10, bottom: 0 }}>
                <defs>
                  <linearGradient id="omzet" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.35}/>
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" tickLine={false} axisLine={false} />
                <YAxis tickFormatter={(v) => `${v / 1000000}jt`} tickLine={false} axisLine={false} />
                <Tooltip formatter={(value) => rupiah(value)} />
                <Area type="monotone" dataKey="omzet" stroke="#f97316" strokeWidth={3} fill="url(#omzet)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">Produk terlaris</h2>
          <p className="mb-5 text-sm text-zinc-500 dark:text-zinc-400">Berdasarkan jumlah terjual</p>
          <div className="space-y-4">
            {top.map((p, i) => (
              <div key={p.id} className="flex items-center gap-3 rounded-2xl bg-zinc-50 p-3 dark:bg-white/5">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-xl shadow-sm dark:bg-zinc-900">{p.emoji}</div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-zinc-950 dark:text-white">{p.name}</p>
                  <p className="text-xs text-zinc-500">{p.sold} terjual</p>
                </div>
                <span className="rounded-xl bg-zinc-950 px-2 py-1 text-xs text-white dark:bg-white dark:text-zinc-950">#{i + 1}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">Transaksi terbaru</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-black/5 dark:border-white/10">
            {transactions.slice(0, 5).map((t) => (
              <div key={t.id} className="grid grid-cols-4 items-center gap-3 border-b border-black/5 p-4 text-sm last:border-0 dark:border-white/10">
                <div>
                  <p className="font-medium text-zinc-950 dark:text-white">{t.id}</p>
                  <p className="text-xs text-zinc-500">{t.time}</p>
                </div>
                <div className="text-zinc-600 dark:text-zinc-300">{t.customer}</div>
                <div className="text-zinc-500">{t.method}</div>
                <div className="text-right font-semibold text-zinc-950 dark:text-white">{rupiah(t.total)}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-100 text-red-600 dark:bg-red-500/10"><AlertTriangle size={20} /></div>
            <div>
              <h2 className="font-semibold text-zinc-950 dark:text-white">Alert stok</h2>
              <p className="text-sm text-zinc-500">Produk di bawah batas minimum</p>
            </div>
          </div>
          <div className="mt-5 space-y-3">
            {lowStock.map((p) => (
              <div key={p.id} className="flex items-center justify-between rounded-2xl bg-red-50 p-3 dark:bg-red-500/10">
                <span className="text-sm font-medium text-zinc-950 dark:text-white">{p.name}</span>
                <span className="text-sm text-red-600 dark:text-red-300">{p.stock} sisa</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </motion.div>
  );
}

function Kasir({ products, setProducts, transactions, setTransactions }) {
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState('');
  const [payMethod, setPayMethod] = useState('QRIS');
  const filtered = products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase()));
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const addToCart = (product) => {
    if (product.stock <= 0) return;
    setCart((current) => {
      const found = current.find(i => i.id === product.id);
      if (found) return current.map(i => i.id === product.id ? { ...i, qty: Math.min(i.qty + 1, product.stock) } : i);
      return [...current, { ...product, qty: 1 }];
    });
  };

  const changeQty = (id, delta) => {
    setCart((current) => current.map(i => i.id === id ? { ...i, qty: Math.max(1, Math.min(i.qty + delta, i.stock)) } : i));
  };

  const checkout = () => {
    if (!cart.length) return;
    const trx = {
      id: `TRX-${Math.floor(2500 + Math.random() * 7000)}`,
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      customer: 'Walk-in Customer',
      total,
      method: payMethod,
      items: cart.reduce((s, i) => s + i.qty, 0),
      cashier: 'Kasir 1'
    };
    setTransactions([trx, ...transactions]);
    setProducts(products.map(p => {
      const item = cart.find(i => i.id === p.id);
      return item ? { ...p, stock: p.stock - item.qty, sold: p.sold + item.qty } : p;
    }));
    setCart([]);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="grid gap-6 xl:grid-cols-[1fr_420px]">
      <div className="space-y-6">
        <div>
          <p className="text-sm font-medium text-orange-600 dark:text-orange-400">Kasir cepat</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white md:text-5xl">Transaksi baru</h1>
        </div>
        <div className="flex h-13 items-center gap-3 rounded-[24px] border border-black/5 bg-white px-5 py-4 shadow-sm dark:border-white/10 dark:bg-zinc-900">
          <Search size={19} className="text-zinc-400" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} className="w-full bg-transparent text-sm outline-none" placeholder="Cari produk atau kategori..." />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-3">
          {filtered.map((p) => (
            <button key={p.id} onClick={() => addToCart(p)} className="group rounded-[28px] border border-black/5 bg-white p-4 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-zinc-900">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-zinc-50 text-3xl dark:bg-white/5">{p.emoji}</div>
                <span className={cx('rounded-full px-3 py-1 text-xs font-medium', p.stock <= p.min ? 'bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-300' : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300')}>Stok {p.stock}</span>
              </div>
              <p className="mt-4 font-semibold text-zinc-950 dark:text-white">{p.name}</p>
              <p className="mt-1 text-sm text-zinc-500">{p.category}</p>
              <p className="mt-4 text-lg font-semibold text-orange-600 dark:text-orange-400">{rupiah(p.price)}</p>
            </button>
          ))}
        </div>
      </div>

      <Card className="sticky top-24 h-fit">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-zinc-950 dark:text-white">Keranjang</h2>
            <p className="text-sm text-zinc-500">{cart.length} produk dipilih</p>
          </div>
          <button onClick={() => setCart([])} className="rounded-2xl bg-zinc-100 p-3 text-zinc-500 hover:text-red-600 dark:bg-white/5"><Trash2 size={18} /></button>
        </div>

        <div className="mt-5 space-y-3">
          <AnimatePresence>
            {cart.length === 0 && <div className="rounded-3xl border border-dashed border-zinc-300 p-8 text-center text-sm text-zinc-500 dark:border-white/10">Belum ada item. Pilih produk untuk memulai transaksi.</div>}
            {cart.map((item) => (
              <motion.div layout initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .96 }} key={item.id} className="flex items-center gap-3 rounded-2xl bg-zinc-50 p-3 dark:bg-white/5">
                <div className="text-2xl">{item.emoji}</div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-zinc-950 dark:text-white">{item.name}</p>
                  <p className="text-xs text-zinc-500">{rupiah(item.price)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => changeQty(item.id, -1)} className="rounded-xl bg-white p-2 dark:bg-zinc-900"><Minus size={14} /></button>
                  <span className="w-5 text-center text-sm font-medium">{item.qty}</span>
                  <button onClick={() => changeQty(item.id, 1)} className="rounded-xl bg-white p-2 dark:bg-zinc-900"><Plus size={14} /></button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2">
          {['QRIS', 'Tunai', 'Debit'].map((m) => (
            <button key={m} onClick={() => setPayMethod(m)} className={cx('rounded-2xl border p-3 text-sm font-medium transition', payMethod === m ? 'border-orange-500 bg-orange-500 text-white' : 'border-black/5 bg-white text-zinc-600 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300')}>
              {m === 'QRIS' ? <QrCode className="mx-auto mb-1" size={18} /> : m === 'Tunai' ? <Banknote className="mx-auto mb-1" size={18} /> : <CreditCard className="mx-auto mb-1" size={18} />}
              {m}
            </button>
          ))}
        </div>

        <div className="mt-6 rounded-3xl bg-zinc-950 p-5 text-white dark:bg-white dark:text-zinc-950">
          <div className="flex items-center justify-between text-sm opacity-70"><span>Subtotal</span><span>{rupiah(total)}</span></div>
          <div className="mt-2 flex items-center justify-between text-sm opacity-70"><span>Diskon</span><span>{rupiah(0)}</span></div>
          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 text-xl font-semibold dark:border-zinc-900/10"><span>Total</span><span>{rupiah(total)}</span></div>
        </div>

        <button onClick={checkout} className="mt-4 flex w-full items-center justify-center gap-2 rounded-3xl bg-orange-500 px-5 py-4 font-semibold text-white shadow-xl shadow-orange-500/20 transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50" disabled={!cart.length}>
          <CheckCircle2 size={20} /> Simpan Transaksi
        </button>
      </Card>
    </motion.div>
  );
}

function Produk({ products, setProducts }) {
  const [form, setForm] = useState({ name: '', category: 'Umum', price: '', cost: '', stock: '', min: '5' });
  const addProduct = () => {
    if (!form.name || !form.price) return;
    setProducts([{ id: Date.now(), emoji: '📦', sold: 0, name: form.name, category: form.category, price: Number(form.price), cost: Number(form.cost || 0), stock: Number(form.stock || 0), min: Number(form.min || 5) }, ...products]);
    setForm({ name: '', category: 'Umum', price: '', cost: '', stock: '', min: '5' });
  };
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <p className="text-sm font-medium text-orange-600 dark:text-orange-400">Produk & stok</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white md:text-5xl">Kelola katalog produk</h1>
      </div>
      <Card>
        <div className="grid gap-3 md:grid-cols-6">
          {[
            ['name', 'Nama produk'], ['category', 'Kategori'], ['price', 'Harga jual'], ['cost', 'Harga modal'], ['stock', 'Stok'], ['min', 'Stok min.']
          ].map(([key, label]) => (
            <input key={key} value={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })} placeholder={label} className="rounded-2xl border border-black/5 bg-zinc-50 px-4 py-3 text-sm outline-none focus:border-orange-400 dark:border-white/10 dark:bg-white/5" />
          ))}
        </div>
        <button onClick={addProduct} className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950"><Plus size={17} /> Tambah Produk</button>
      </Card>
      <Card>
        <div className="overflow-hidden rounded-2xl border border-black/5 dark:border-white/10">
          <div className="grid grid-cols-6 gap-3 bg-zinc-50 p-4 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:bg-white/5">
            <span>Produk</span><span>Kategori</span><span>Harga</span><span>Modal</span><span>Stok</span><span>Status</span>
          </div>
          {products.map((p) => (
            <div key={p.id} className="grid grid-cols-6 items-center gap-3 border-t border-black/5 p-4 text-sm dark:border-white/10">
              <span className="font-medium text-zinc-950 dark:text-white">{p.emoji} {p.name}</span>
              <span className="text-zinc-500">{p.category}</span>
              <span>{rupiah(p.price)}</span>
              <span>{rupiah(p.cost)}</span>
              <span>{p.stock}</span>
              <span className={cx('w-fit rounded-full px-3 py-1 text-xs font-medium', p.stock <= p.min ? 'bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-300' : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300')}>{p.stock <= p.min ? 'Stok kritis' : 'Aman'}</span>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

function Transaksi({ transactions }) {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <p className="text-sm font-medium text-orange-600 dark:text-orange-400">Riwayat transaksi</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white md:text-5xl">Audit penjualan</h1>
      </div>
      <Card>
        <div className="overflow-hidden rounded-2xl border border-black/5 dark:border-white/10">
          <div className="grid grid-cols-6 gap-3 bg-zinc-50 p-4 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:bg-white/5">
            <span>ID</span><span>Waktu</span><span>Pelanggan</span><span>Item</span><span>Metode</span><span className="text-right">Total</span>
          </div>
          {transactions.map((t) => (
            <div key={t.id} className="grid grid-cols-6 items-center gap-3 border-t border-black/5 p-4 text-sm dark:border-white/10">
              <span className="font-medium text-zinc-950 dark:text-white">{t.id}</span>
              <span className="text-zinc-500">{t.time}</span>
              <span>{t.customer}</span>
              <span>{t.items}</span>
              <span>{t.method}</span>
              <span className="text-right font-semibold">{rupiah(t.total)}</span>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

function Laporan({ products, transactions }) {
  const categoryData = Object.values(products.reduce((acc, p) => {
    acc[p.category] = acc[p.category] || { category: p.category, sold: 0 };
    acc[p.category].sold += p.sold;
    return acc;
  }, {}));
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <p className="text-sm font-medium text-orange-600 dark:text-orange-400">Laporan</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white md:text-5xl">Analitik omzet & produk</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard icon={Banknote} title="Total Omzet Simulasi" value={rupiah(transactions.reduce((s, t) => s + t.total, 0))} note="Berdasarkan transaksi tersimpan" />
        <MetricCard icon={Boxes} title="Total Stok" value={products.reduce((s, p) => s + p.stock, 0)} note="Seluruh produk aktif" tone="green" />
        <MetricCard icon={ShieldCheck} title="Margin Kotor" value="38%" note="Estimasi dari harga modal" tone="dark" />
      </div>
      <Card>
        <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">Produk terjual per kategori</h2>
        <div className="mt-6 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sold" fill="#f97316" radius={[14,14,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </motion.div>
  );
}

function PlaceholderPage({ title, subtitle, icon: Icon }) {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <p className="text-sm font-medium text-orange-600 dark:text-orange-400">Modul lanjutan</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white md:text-5xl">{title}</h1>
        <p className="mt-3 text-zinc-500 dark:text-zinc-400">{subtitle}</p>
      </div>
      <Card className="flex min-h-[420px] flex-col items-center justify-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-[28px] bg-orange-100 text-orange-600 dark:bg-orange-500/10"><Icon size={34} /></div>
        <h2 className="mt-6 text-2xl font-semibold text-zinc-950 dark:text-white">Siap dikembangkan</h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">Struktur halaman sudah tersedia. Modul ini dapat dihubungkan ke database, role access, dan automation workflow pada tahap berikutnya.</p>
      </Card>
    </motion.div>
  );
}

function Login({ onEnter, dark, setDark }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 rounded-full bg-orange-600/10 blur-3xl" />
      </div>
      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-6 py-10 lg:grid-cols-2">
        <div>
          <img src={LOGO} alt="Nexara" className="h-24 w-52 object-contain brightness-0 invert" />
          <p className="mt-10 w-fit rounded-full border border-orange-300/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-200">Dashboard Kasir UMKM Premium</p>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">Kelola penjualan UMKM dalam satu dashboard pintar.</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">Catat transaksi harian, pantau stok, lihat omzet, temukan produk terlaris, dan ambil keputusan bisnis lebih cepat.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={onEnter} className="rounded-3xl bg-orange-500 px-7 py-4 font-semibold text-white shadow-2xl shadow-orange-500/30 transition hover:bg-orange-600">Masuk Dashboard</button>
            <button onClick={() => setDark(!dark)} className="rounded-3xl border border-white/10 px-7 py-4 font-semibold text-white transition hover:bg-white/10">Ganti Mode</button>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="rounded-[38px] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-2xl">
          <div className="rounded-[30px] bg-zinc-950/80 p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3"><div className="h-3 w-3 rounded-full bg-red-400" /><div className="h-3 w-3 rounded-full bg-yellow-400" /><div className="h-3 w-3 rounded-full bg-green-400" /></div>
              <p className="text-sm text-zinc-400">Live Preview</p>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-5 text-zinc-950"><p className="text-sm text-zinc-500">Omzet hari ini</p><p className="mt-2 text-3xl font-semibold">Rp1,74jt</p></div>
              <div className="rounded-3xl bg-orange-500 p-5 text-white"><p className="text-sm opacity-80">Transaksi</p><p className="mt-2 text-3xl font-semibold">51</p></div>
            </div>
            <div className="mt-4 rounded-3xl bg-white/5 p-5">
              <div className="mb-4 flex items-center justify-between"><p className="font-medium">Produk terlaris</p><TrendingUp className="text-orange-400" /></div>
              {initialProducts.slice(0, 4).map((p) => <div key={p.id} className="mt-3 flex items-center justify-between rounded-2xl bg-white/5 p-3"><span>{p.emoji} {p.name}</span><span className="text-orange-300">{p.sold}</span></div>)}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState('dashboard');
  const [dark, setDark] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [products, setProducts] = useState(initialProducts);
  const [transactions, setTransactions] = useState(seedTransactions);

  const page = useMemo(() => {
    if (active === 'dashboard') return <Dashboard products={products} transactions={transactions} />;
    if (active === 'kasir') return <Kasir products={products} setProducts={setProducts} transactions={transactions} setTransactions={setTransactions} />;
    if (active === 'produk') return <Produk products={products} setProducts={setProducts} />;
    if (active === 'transaksi') return <Transaksi transactions={transactions} />;
    if (active === 'laporan') return <Laporan products={products} transactions={transactions} />;
    if (active === 'pelanggan') return <PlaceholderPage title="Data pelanggan" subtitle="Kelola pelanggan, riwayat belanja, segmentasi, dan kontak WhatsApp." icon={Users} />;
    return <PlaceholderPage title="Pengaturan sistem" subtitle="Kelola profil usaha, cabang, role kasir, printer, backup, dan keamanan." icon={Settings} />;
  }, [active, products, transactions]);

  if (!loggedIn) return <div className={dark ? 'dark' : ''}><Login onEnter={() => setLoggedIn(true)} dark={dark} setDark={setDark} /></div>;

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-zinc-50 text-zinc-900 transition dark:bg-zinc-950 dark:text-zinc-100">
        <Sidebar active={active} setActive={setActive} open={sidebarOpen} setOpen={setSidebarOpen} />
        {sidebarOpen && <div className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />}
        <div className="lg:pl-72">
          <Topbar dark={dark} setDark={setDark} setSidebarOpen={setSidebarOpen} />
          <main className="px-4 py-6 lg:px-8 lg:py-8">
            {page}
          </main>
          <button onClick={() => setLoggedIn(false)} className="fixed bottom-5 right-5 flex items-center gap-2 rounded-2xl border border-black/5 bg-white px-4 py-3 text-sm font-medium shadow-xl dark:border-white/10 dark:bg-zinc-900"><LogOut size={16} /> Keluar</button>
        </div>
      </div>
    </div>
  );
}
