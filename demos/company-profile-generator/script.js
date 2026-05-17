const form = document.getElementById('profileForm');
const output = document.getElementById('output');
const toast = document.getElementById('toast');
const themeToggle = document.getElementById('themeToggle');

const fields = ['businessName','businessField','foundedYear','targetMarket','services','advantages','address','contact','tone','docType'];

function val(id) {
  return document.getElementById(id).value.trim();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
}

function buildProfile() {
  const name = val('businessName') || '[Nama Usaha]';
  const field = val('businessField') || '[Bidang Usaha]';
  const year = val('foundedYear') || 'beberapa tahun terakhir';
  const target = val('targetMarket') || 'pelanggan yang membutuhkan solusi berkualitas';
  const services = val('services') || 'produk dan layanan utama yang relevan dengan kebutuhan pelanggan';
  const advantages = val('advantages') || 'kualitas produk, pelayanan responsif, dan komitmen terhadap kepuasan pelanggan';
  const address = val('address') || '[Alamat Usaha]';
  const contact = val('contact') || '[Kontak Usaha]';
  const tone = val('tone');
  const docType = val('docType');

  const opener = tone === 'promosi'
    ? `${name} hadir sebagai pilihan tepat bagi Anda yang membutuhkan ${field} dengan kualitas yang dapat diandalkan.`
    : `${name} merupakan usaha yang bergerak di bidang ${field}.`;

  const compact = `${opener} Usaha ini berdiri sejak ${year} dan melayani ${target}. Produk atau layanan utama yang ditawarkan meliputi ${services}. Keunggulan ${name} terletak pada ${advantages}. Lokasi usaha berada di ${address}. Informasi lebih lanjut dapat diperoleh melalui ${contact}.`;

  if (docType === 'singkat') return compact;

  if (docType === 'website') {
    return `Headline\n${name}\n\nSubheadline\nSolusi ${field} yang profesional, relevan, dan mudah diakses untuk ${target}.\n\nTentang Kami\n${opener} Sejak ${year}, kami berkomitmen menghadirkan produk dan layanan yang sesuai dengan kebutuhan pelanggan.\n\nLayanan Kami\n${services}.\n\nMengapa Memilih Kami\n${advantages}.\n\nHubungi Kami\nAlamat: ${address}\nKontak: ${contact}`;
  }

  if (docType === 'proposal') {
    return `PROFIL USAHA\n\n1. Identitas Usaha\nNama Usaha: ${name}\nBidang Usaha: ${field}\nTahun Berdiri: ${year}\nAlamat: ${address}\nKontak: ${contact}\n\n2. Gambaran Umum\n${opener} Usaha ini dikembangkan untuk menjawab kebutuhan ${target} melalui produk dan layanan yang relevan, praktis, dan bernilai guna.\n\n3. Produk dan Layanan\n${name} menyediakan ${services}. Setiap produk dan layanan diarahkan untuk memberikan manfaat nyata bagi pelanggan.\n\n4. Keunggulan\nKeunggulan utama ${name} meliputi ${advantages}. Keunggulan ini menjadi dasar dalam menjaga kepercayaan pelanggan dan mitra.\n\n5. Penutup\nDengan pengalaman dan komitmen yang dimiliki, ${name} siap menjadi mitra yang dapat dipercaya dalam bidang ${field}.`;
  }

  return `COMPANY PROFILE\n\n${name}\n\nA. Tentang Usaha\n${opener} Usaha ini berdiri sejak ${year} dan terus berkembang untuk melayani ${target}. ${name} hadir dengan pendekatan yang praktis, profesional, dan berorientasi pada kebutuhan pelanggan.\n\nB. Bidang Usaha\n${name} fokus pada bidang ${field}. Fokus ini membantu usaha menjaga kualitas, memahami kebutuhan pasar, dan memberikan layanan yang lebih tepat sasaran.\n\nC. Produk dan Layanan\nProduk atau layanan yang ditawarkan meliputi ${services}. Setiap layanan disusun agar mudah dipahami, mudah diakses, dan memberi nilai tambah bagi pelanggan.\n\nD. Keunggulan\nKeunggulan utama ${name} adalah ${advantages}. Keunggulan ini menjadi fondasi dalam membangun kepercayaan dan hubungan jangka panjang dengan pelanggan.\n\nE. Target Pelanggan\n${name} melayani ${target}. Dengan memahami karakter pelanggan, usaha ini dapat memberikan solusi yang lebih sesuai dan efektif.\n\nF. Alamat dan Kontak\nAlamat: ${address}\nKontak: ${contact}\n\nG. Penutup\n${name} berkomitmen untuk terus meningkatkan kualitas produk, layanan, dan hubungan dengan pelanggan. Dengan dukungan tim dan proses kerja yang terarah, ${name} siap menjadi pilihan yang dapat diandalkan di bidang ${field}.`;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  output.value = buildProfile();
  showToast('Company profile berhasil dibuat.');
});

document.getElementById('copyBtn').addEventListener('click', async () => {
  await navigator.clipboard.writeText(output.value);
  showToast('Berhasil disalin.');
});

document.getElementById('downloadBtn').addEventListener('click', () => {
  const blob = new Blob([output.value], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${val('businessName') || 'company-profile'}.txt`;
  a.click();
  URL.revokeObjectURL(url);
});

document.getElementById('printBtn').addEventListener('click', () => window.print());

document.getElementById('resetBtn').addEventListener('click', () => {
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (el.tagName === 'SELECT') return;
    el.value = '';
  });
  output.value = 'Isi form di sebelah kiri, lalu klik Generate Company Profile. Hasilnya akan muncul di sini dan bisa diedit langsung.';
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? 'Mode Terang' : 'Mode Gelap';
});
