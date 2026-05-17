(function () {
  const logoSrc = "./images/logo/nexara-logo-color.png";

  const portfolioItems = [
    ["Logo Brand", "Identitas visual siap pakai untuk bisnis dan personal brand.", "./images/portfolio/logo/1.jpg"],
    ["Logo Brand", "Eksplorasi logo resmi dari portofolio Nexara.", "./images/portfolio/logo/2.jpg"],
    ["Logo Brand", "Desain logo modern untuk kebutuhan usaha.", "./images/portfolio/logo/3.jpg"],
    ["Logo Brand", "Arah visual brand yang rapi dan mudah diaplikasikan.", "./images/portfolio/logo/4.jpg"],
    ["Logo Brand", "Alternatif logo untuk kebutuhan promosi dan profil usaha.", "./images/portfolio/logo/5.jpg"],
    ["Logo Brand", "Karya logo dengan gaya visual profesional.", "./images/portfolio/logo/6.jpg"],
    ["Logo Brand", "Logo custom dari folder hasil karya Nexara.", "./images/portfolio/logo/7.jpg"],
    ["Logo Brand", "Identitas brand untuk tampilan digital dan cetak.", "./images/portfolio/logo/8.jpg"],
    ["Logo Brand", "Koleksi logo portofolio resmi Nexara.", "./images/portfolio/logo/9.jpg"],
    ["Feed Instagram", "Konten visual untuk media sosial dan promosi harian.", "./images/portfolio/feed-instagram/1.jpg"],
    ["Feed Instagram", "Desain feed promosi yang siap digunakan.", "./images/portfolio/feed-instagram/2.jpg"],
    ["Feed Instagram", "Materi konten untuk memperkuat tampilan brand.", "./images/portfolio/feed-instagram/3.jpg"],
    ["Feed Instagram", "Template visual Instagram untuk kebutuhan usaha.", "./images/portfolio/feed-instagram/4.jpg"],
    ["Media Promosi", "Materi promosi untuk campaign, penawaran, dan publikasi.", "./images/portfolio/media-promosi/8.jpg"],
    ["Media Promosi", "Desain promosi Nexara untuk kanal digital.", "./images/portfolio/media-promosi/NEXARA%202.jpg"],
    ["Produk Branding", "Mockup dan kebutuhan visual produk untuk brand.", "./images/portfolio/produk-branding/1.jpg"],
    ["Produk Branding", "Desain kemasan dan produk branding.", "./images/portfolio/produk-branding/2%20A.jpg"],
    ["Produk Branding", "Materi visual produk untuk promosi.", "./images/portfolio/produk-branding/2.jpg"],
    ["Produk Branding", "Karya branding produk siap presentasi.", "./images/portfolio/produk-branding/3.jpg"],
    ["Produk Branding", "Visual produk untuk memperkuat kesan profesional.", "./images/portfolio/produk-branding/4.jpg"],
    ["Produk Branding", "Desain produk branding dari portofolio Nexara.", "./images/portfolio/produk-branding/5.jpg"]
  ];

  const samples = [
    ["Dashboard Kasir UMKM", "Mencatat penjualan harian, stok barang, omzet, produk terlaris, dan riwayat transaksi untuk warung, toko kue, reseller, katering, dan usaha rumahan.", ["Transaksi", "Stok otomatis", "Cetak nota"], "./demos/pos-umkm-demo.html", "Buka Demo"],
    ["Sistem Booking Jasa", "Pelanggan memilih layanan, tanggal, jam, nama, dan nomor WhatsApp. Data booking masuk ke admin untuk barbershop, salon, fotografer, bengkel, laundry, klinik kecil, dan jasa desain.", ["Form booking", "Kalender", "WhatsApp"], "./demos/nexara_booking_app.html", "Buka Demo"],
    ["Dashboard Admin Order Digital", "Mengelola pesanan jasa dari pelanggan mulai dari masuk, diproses, revisi, sampai selesai. Cocok untuk alur kerja Nexara Creative sendiri.", ["Status order", "Deadline", "Biaya"], "./demos/nexara-orderflow.html", "Buka Demo"],
    ["Aplikasi Invoice dan Kwitansi Otomatis", "Membuat invoice, kwitansi, penawaran harga, dan tanda terima secara cepat untuk freelancer, UMKM, EO, jasa digital, dan toko kecil.", ["Item kerja", "Diskon/pajak", "Preview invoice"], "./demos/invoiceflow-demo.html", "Buka Demo"],
    ["AI Content Planner", "Membantu bisnis membuat ide konten Instagram, TikTok, caption, kalender posting, dan headline promosi dengan pemanfaatan AI tools.", ["Ide konten", "Caption", "Kalender"], "./demos/ai-content-planner/index.html", "Buka Demo"],
    ["Company Profile Generator", "Membuat draft profil usaha otomatis dari form sederhana berisi nama usaha, bidang, keunggulan, layanan, alamat, dan kontak.", ["Form usaha", "Draft profil", "Siap pakai"], "./demos/company-profile-generator/index.html", "Buka Demo"],
    ["Landing Page Builder Mini", "Pengguna mengisi nama usaha, warna brand, layanan, testimoni, dan kontak. Sistem langsung membuat preview landing page sederhana.", ["Warna brand", "Preview", "Kontak"], "./demos/nexara-pageforge.html", "Buka Demo"],
    ["Sistem Buku Tamu Digital", "Tamu mengisi nama, instansi, keperluan, nomor HP, foto, dan tanda tangan. Data masuk ke dashboard kantor, sekolah, event, klinik, atau komunitas.", ["Form tamu", "QR", "Rekap"], "./demos/attendflow-qr/attendflow_qr_demo.html", "Buka Demo"],
    ["Dashboard Monitoring Tugas", "Mengelola daftar tugas, status pekerjaan, PIC, deadline, prioritas, dan progres untuk tim kecil, kantor, EO, komunitas, keluarga, atau sekolah.", ["Kanban", "Checklist", "Prioritas"], "./demos/taskos-dashboard/index.html", "Buka Demo"],
    ["Kalkulator Harga Jasa", "Calon pelanggan memilih paket desain, website, konten, atau otomasi. Sistem menghitung estimasi harga dan deadline.", ["Pilih layanan", "Revisi", "Estimasi harga"], "./demos/service-price-calculator-demo.html", "Buka Demo"]
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

  function replacePortfolioPreview() {
    document.querySelectorAll(".lens-cell-inner").forEach((cell, index) => {
      const item = portfolioItems[index];
      if (!item) return;
      cell.style.backgroundImage = `url("${item[2]}")`;
      cell.style.backgroundPosition = "center";
      cell.style.backgroundSize = "cover";
    });
  }

  function createPortfolioGallery() {
    if (document.getElementById("portfolio-gallery")) return;
    const portfolio = document.getElementById("portfolio");
    if (!portfolio) return;

    const section = document.createElement("section");
    section.id = "portfolio-gallery";
    section.className = "nexara-portfolio-gallery";
    section.innerHTML = `
      <div class="nexara-portfolio-gallery__inner">
        <div class="nexara-section-head">
          <span class="nexara-section-eyebrow">PORTOFOLIO</span>
          <h2>Hasil Karya Kami</h2>
        </div>
        <div class="nexara-portfolio-gallery__grid">
          ${portfolioItems.map((item) => `
            <figure class="nexara-work-card">
              <img src="${item[2]}" alt="${item[0]} Nexara" loading="lazy">
              <figcaption>
                <strong>${item[0]}</strong>
                <span>${item[1]}</span>
              </figcaption>
            </figure>
          `).join("")}
        </div>
      </div>
    `;

    portfolio.insertAdjacentElement("afterend", section);
  }

  function createSamplesSection() {
    if (document.getElementById("sample-apps")) return;
    const anchor = document.getElementById("portfolio-gallery") || document.getElementById("portfolio");
    if (!anchor) return;

    const section = document.createElement("section");
    section.id = "sample-apps";
    section.className = "nexara-samples";
    section.innerHTML = `
      <div class="nexara-samples__inner">
        <div class="nexara-section-head nexara-section-head--split">
          <div>
            <span class="nexara-section-eyebrow">SAMPLE APLIKASI</span>
            <h2>Demo aplikasi yang bisa ditampilkan Nexara</h2>
          </div>
          <p>Semua contoh aplikasi tersedia sebagai live demo agar calon pelanggan bisa langsung melihat alur, tampilan, dan manfaatnya.</p>
        </div>
        <div class="nexara-samples__grid">
          ${samples.map((item, index) => `
            <article class="nexara-sample-card">
              <div class="nexara-sample-card__top">
                <div class="nexara-sample-card__icon">${String(index + 1).padStart(2, "0")}</div>
                <span class="nexara-sample-card__tag">${item[4]}</span>
              </div>
              <h3>${item[0]}</h3>
              <p>${item[1]}</p>
              <div class="nexara-sample-card__features">
                ${item[2].map((feature) => `<span>${feature}</span>`).join("")}
              </div>
              <a class="nexara-sample-card__link" href="${item[3]}" target="_blank" rel="noopener">${item[4]}</a>
            </article>
          `).join("")}
        </div>
      </div>
    `;

    anchor.insertAdjacentElement("afterend", section);
  }

  function applyChanges() {
    replaceLogos();
    replacePortfolioPreview();
    createPortfolioGallery();
    createSamplesSection();
  }

  window.addEventListener("DOMContentLoaded", () => {
    applyChanges();
    setTimeout(applyChanges, 250);
    setTimeout(applyChanges, 900);
    new MutationObserver(applyChanges).observe(document.body, { childList: true, subtree: true });
  });
})();
