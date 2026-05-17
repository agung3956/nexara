const form = document.getElementById('plannerForm');
const ideasList = document.getElementById('ideasList');
const emptyState = document.getElementById('emptyState');
const loadingState = document.getElementById('loadingState');
const calendarGrid = document.getElementById('calendarGrid');
const savedList = document.getElementById('savedList');
const ideaCount = document.getElementById('ideaCount');
const savedCount = document.getElementById('savedCount');
const toast = document.getElementById('toast');

let ideas = [];
let savedIdeas = JSON.parse(localStorage.getItem('nexara_saved_ideas') || '[]');

const templates = [
  { type: 'Reels Edukasi', angle: 'Masalah umum pembeli', hook: 'Banyak orang belum tahu cara memilih produk yang tepat.' },
  { type: 'Carousel', angle: 'Tips praktis', hook: 'Simpan postingan ini sebelum membeli.' },
  { type: 'Story Promo', angle: 'Penawaran harian', hook: 'Hari ini cocok untuk mulai mencoba.' },
  { type: 'Testimoni', angle: 'Social proof', hook: 'Ini alasan pelanggan kembali membeli.' },
  { type: 'Behind The Scene', angle: 'Proses produksi', hook: 'Lihat proses di balik produk ini.' },
  { type: 'Reels Trend', angle: 'Konten ringan', hook: 'Kalau kamu suka produk lokal, ini wajib dilihat.' },
  { type: 'Live Teaser', angle: 'Interaksi audiens', hook: 'Malam ini kita bahas cara memilih produk terbaik.' },
  { type: 'Before After', angle: 'Perubahan hasil', hook: 'Perbedaannya terasa sejak pertama mencoba.' },
  { type: 'FAQ Content', angle: 'Jawab pertanyaan', hook: 'Pertanyaan ini paling sering ditanyakan calon pembeli.' },
  { type: 'Soft Selling', angle: 'Cerita pelanggan', hook: 'Awalnya ragu, lalu akhirnya jadi langganan.' }
];

function getValue(id) { return document.getElementById(id).value.trim(); }

function generateIdeas(data) {
  return templates.map((item, index) => {
    const title = `${item.type}: ${data.product} untuk ${data.audience}`;
    const cta = index % 3 === 0 ? 'Klik pesan sekarang.' : index % 3 === 1 ? 'Simpan dulu agar tidak lupa.' : 'Hubungi kami untuk info lengkap.';
    const caption = `${item.hook}\n\n${data.businessName} menghadirkan ${data.product} untuk ${data.audience}. Konten ini dibuat dengan gaya ${data.tone.toLowerCase()} agar audiens lebih mudah memahami manfaat produk. Fokus utama: ${data.goal.toLowerCase()}.\n\n${cta}`;
    return { id: Date.now() + index, title, hook: item.hook, caption, cta, type: item.type, platform: data.platform, angle: item.angle, day: index % 7 };
  });
}

function renderIdeas() {
  ideasList.innerHTML = ideas.map((idea, index) => `
    <article class="idea-card" style="animation-delay:${index * 35}ms">
      <div class="idea-top">
        <div>
          <h3>${index + 1}. ${idea.title}</h3>
          <div class="idea-meta"><span>${idea.platform}</span><span>${idea.type}</span><span>${idea.angle}</span></div>
        </div>
        <span class="pill">Day ${idea.day + 1}</span>
      </div>
      <p><strong>Hook:</strong> ${idea.hook}</p>
      <div class="caption">${idea.caption.replaceAll('\n', '<br>')}</div>
      <div class="card-actions">
        <button class="small-btn" onclick="copyText(${idea.id})">Copy Caption</button>
        <button class="small-btn" onclick="saveIdea(${idea.id})">Save Idea</button>
      </div>
    </article>
  `).join('');
  ideaCount.textContent = ideas.length;
}

function renderCalendar() {
  const days = ['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu'];
  calendarGrid.innerHTML = days.map((day, index) => {
    const idea = ideas.find(item => item.day === index);
    return `<article class="day-card"><strong>${day}</strong><p>${idea ? idea.type + '<br>' + idea.title : 'Belum ada jadwal.'}</p></article>`;
  }).join('');
}

function renderSaved() {
  savedCount.textContent = savedIdeas.length;
  if (!savedIdeas.length) {
    savedList.className = 'saved-list empty-small';
    savedList.textContent = 'Belum ada ide yang disimpan.';
    return;
  }
  savedList.className = 'saved-list';
  savedList.innerHTML = savedIdeas.map((idea, index) => `
    <article class="idea-card">
      <h3>${index + 1}. ${idea.title}</h3>
      <div class="idea-meta"><span>${idea.platform}</span><span>${idea.type}</span></div>
      <p>${idea.caption}</p>
    </article>
  `).join('');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  emptyState.classList.add('hidden');
  ideasList.innerHTML = '';
  loadingState.classList.remove('hidden');

  const data = {
    businessName: getValue('businessName'),
    product: getValue('product'),
    audience: getValue('audience'),
    platform: getValue('platform'),
    tone: getValue('tone'),
    goal: getValue('goal')
  };

  setTimeout(() => {
    ideas = generateIdeas(data);
    loadingState.classList.add('hidden');
    renderIdeas();
    renderCalendar();
  }, 700);
});

function copyText(id) {
  const idea = ideas.find(item => item.id === id) || savedIdeas.find(item => item.id === id);
  if (!idea) return;
  navigator.clipboard.writeText(idea.caption);
  showToast('Caption berhasil disalin');
}

function saveIdea(id) {
  const idea = ideas.find(item => item.id === id);
  if (!idea) return;
  if (!savedIdeas.some(item => item.id === id)) savedIdeas.unshift(idea);
  localStorage.setItem('nexara_saved_ideas', JSON.stringify(savedIdeas));
  renderSaved();
  showToast('Ide berhasil disimpan');
}

function exportIdeas() {
  if (!ideas.length) return showToast('Belum ada ide untuk diexport');
  const text = ideas.map((idea, index) => `${index + 1}. ${idea.title}\nPlatform: ${idea.platform}\nFormat: ${idea.type}\nHook: ${idea.hook}\nCaption:\n${idea.caption}\n`).join('\n---\n');
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'nexara-content-plan.txt';
  a.click();
  URL.revokeObjectURL(url);
}

function loadExample() {
  document.getElementById('businessName').value = 'Kopi Bukit Bangka';
  document.getElementById('product').value = 'kopi robusta kemasan premium';
  document.getElementById('audience').value = 'pekerja kantoran dan pecinta kopi lokal';
  document.getElementById('platform').value = 'Instagram';
  document.getElementById('tone').value = 'Premium';
  document.getElementById('goal').value = 'Meningkatkan penjualan';
  scrollToGenerator();
}

function scrollToGenerator() { document.getElementById('generator').scrollIntoView({ behavior: 'smooth' }); }
function showToast(message) { toast.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 1800); }

document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('light');
  document.getElementById('themeToggle').textContent = document.body.classList.contains('light') ? 'Dark Mode' : 'Light Mode';
});

renderCalendar();
renderSaved();
