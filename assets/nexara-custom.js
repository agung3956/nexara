(function () {
  const logoSrc = "./images/logo-nexara.svg";
  const portfolioImages = [
    "./images/portfolio-kasir.svg",
    "./images/portfolio-booking.svg",
    "./images/portfolio-order.svg",
    "./images/portfolio-invoice.svg",
    "./images/portfolio-content.svg",
    "./images/portfolio-company.svg",
    "./images/portfolio-landing.svg",
    "./images/portfolio-absensi.svg"
  ];

  const samples = [
    ["Dashboard Kasir UMKM", "Mencatat penjualan harian, stok barang, omzet, produk terlaris, dan riwayat transaksi untuk warung, toko kue, reseller, katering, dan usaha rumahan.", ["Transaksi", "Stok otomatis", "Cetak nota"]],
    ["Sistem Booking Jasa", "Pelanggan memilih layanan, tanggal, jam, nama, dan nomor WhatsApp. Data booking masuk ke admin untuk barbershop, salon, fotografer, bengkel, laundry, klinik kecil, dan jasa desain.", ["Form booking", "Kalender", "WhatsApp"]],
    ["Dashboard Admin Order Digital", "Mengelola pesanan jasa dari pelanggan mulai dari masuk, diproses, revisi, sampai selesai. Cocok untuk alur kerja Nexara Creative sendiri.", ["Status order", "Deadline", "Biaya"]],
    ["Aplikasi Invoice dan Kwitansi Otomatis", "Membuat invoice, kwitansi, penawaran harga, dan tanda terima secara cepat untuk freelancer, UMKM, EO, jasa digital, dan toko kecil.", ["Item kerja", "Diskon/pajak", "Export PDF"]],
    ["AI Content Planner", "Membantu bisnis membuat ide konten Instagram, TikTok, caption, kalender posting, dan headline promosi dengan pemanfaatan ChatGPT dan AI tools.", ["10 ide konten", "Caption", "Kalender"]],
    ["Company Profile Generator", "Membuat draft profil usaha otomatis dari form sederhana berisi nama usaha, bidang, keunggulan, layanan, alamat, dan kontak.", ["Form usaha", "Draft profil", "Siap pakai"]],
    ["Landing Page Builder Mini", "Pengguna mengisi nama usaha, warna brand, layanan, testimoni, dan kontak. Sistem langsung membuat preview landing page sederhana.", ["Warna brand", "Preview", "Kontak"]],
    ["Sistem Buku Tamu Digital", "Tamu mengisi nama, instansi, keperluan, nomor HP, foto, dan tanda tangan. Data masuk ke dashboard kantor, sekolah, event, klinik, atau komunitas.", ["Form tamu", "Filter tanggal", "Export data"]],
    ["Dashboard Monitoring Tugas", "Mengelola daftar tugas, status pekerjaan, PIC, deadline, prioritas, dan progres untuk tim kecil, kantor, EO, komunitas, keluarga, atau sekolah.", ["Kanban", "Checklist", "Prioritas"]],
    ["Aplikasi Absensi QR Code", "Peserta scan QR, isi nama, lokasi, dan waktu hadir, lalu data masuk ke dashboard untuk pelatihan, seminar, kelas, komunitas, dan kantor kecil.", ["Generate QR", "Rekap", "Export Excel"]],
    ["Kalkulator Harga Jasa", "Calon pelanggan memilih paket desain, website, konten, atau otomasi. Sistem menghitung estimasi harga dan deadline.", ["Pilih layanan", "Revisi", "Estimasi harga"]],
    ["AI Proposal Generator", "Membantu membuat proposal singkat untuk kegiatan, bisnis, sponsorship, atau penawaran jasa bagi UMKM, mahasiswa, organisasi, komunitas, dan instansi kecil.", ["Tujuan", "Anggaran", "Proposal ringkas"]],
    ["Sistem Manajemen Dokumen Mini", "Menyimpan daftar dokumen penting, kategori, tanggal, status, dan link file untuk UMKM, kantor kecil, yayasan, dan sekolah.", ["Google Drive", "Kategori", "Pencarian"]],
    ["Aplikasi Survey Kepuasan Pelanggan", "Membuat form penilaian layanan dan dashboard hasil kepuasan untuk UMKM, jasa layanan, pelatihan, kantor, dan event.", ["Rating", "Komentar", "Grafik"]],
    ["Media Monitoring Mini", "Memantau berita atau isu berdasarkan kata kunci, lalu memberi ringkasan dan klasifikasi sentimen untuk instansi, brand lokal, tokoh publik, dan UMKM besar.", ["Kata kunci", "Sentimen", "Rekomendasi"]]
  ];

  function replaceLogos() {
    document.querySelectorAll('a[href="#hero"] svg').forEach((svg) => {
      if (svg.dataset.nexaraReplaced) return;
      const img = document.createElement("img");
      img.src = logoSrc;
      img.alt = "Nexara Creative";
      img.className = "nexara-brand-logo";
      svg.dataset.nexaraReplaced = "true";
      svg.replaceWith(img);
    });

    document.querySelectorAll('a[href="#hero"] span').forEach((span) => {
      if (span.textContent.trim() === "Nexara") span.textContent = "Nexara Creative";
    });
  }

  function replacePortfolio() {
    document.querySelectorAll(".lens-cell-inner").forEach((cell, index) => {
      if (portfolioImages[index]) {
        cell.style.backgroundImage = `url(${portfolioImages[index]})`;
        cell.style.backgroundPosition = "center";
        cell.style.backgroundSize = "cover";
      }
    });
  }

  function createSamplesSection() {
    if (document.getElementById("sample-apps")) return;
    const portfolio = document.getElementById("portfolio");
    if (!portfolio) return;

    const section = document.createElement("section");
    section.id = "sample-apps";
    section.className = "nexara-samples";
    section.innerHTML = `
      <div class="nexara-samples__inner">
        <div class="nexara-samples__head">
          <div>
            <span class="nexara-samples__eyebrow">SAMPLE APLIKASI</span>
            <h2>Demo Aplikasi yang Bisa Ditampilkan Nexara</h2>
          </div>
          <p class="nexara-samples__intro">Kumpulan contoh aplikasi ini dibuat agar calon pelanggan langsung memahami manfaat website, dashboard, otomasi, dan AI untuk kebutuhan bisnis sehari-hari.</p>
        </div>
        <div class="nexara-samples__grid">
          ${samples.map((item, index) => `
            <article class="nexara-sample-card">
              <div class="nexara-sample-card__top">
                <div class="nexara-sample-card__icon">${String(index + 1).padStart(2, "0")}</div>
                <span class="nexara-sample-card__tag">Demo siap presentasi</span>
              </div>
              <h3>${item[0]}</h3>
              <p>${item[1]}</p>
              <div class="nexara-sample-card__features">
                ${item[2].map((feature) => `<span>${feature}</span>`).join("")}
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    `;

    portfolio.insertAdjacentElement("afterend", section);
  }

  function applyChanges() {
    replaceLogos();
    replacePortfolio();
    createSamplesSection();
  }

  window.addEventListener("DOMContentLoaded", () => {
    applyChanges();
    setTimeout(applyChanges, 250);
    setTimeout(applyChanges, 900);
    new MutationObserver(applyChanges).observe(document.body, { childList: true, subtree: true });
  });
})();
