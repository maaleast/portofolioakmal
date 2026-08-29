// ============================================================
//  SEMUA ISI WEBSITE ADA DI FILE INI.
//  Untuk menambah / mengubah konten, cukup edit file ini saja.
//  Jangan menyentuh file komponen kecuali ingin mengubah layout.
// ============================================================

export const profile = {
  name: "Akmal Farizky Hardhana",
  firstName: "Akmal",
  role: "Full-Stack Developer & Game Developer",
  location: "Semarang, Jawa Tengah",
  email: "akmalfatizky@gmail.com",
  whatsapp: "+62 899-1855-149",
  whatsappUrl: "https://wa.me/+628991855149",
  website: "akmalfh.me",
  websiteUrl: "https://akmalfh.me",
  youtube: "https://www.youtube.com/@kepikiranajacuy",

  // Logo/foto profil channel YouTube Kepikiran Aja.
  youtubeAvatar: "/kepikiranaja.jpg",

  // Ganti dengan path CV kamu. Taruh file PDF-nya di folder /public
  cvDeveloperUrl: "/CV_Akmal_Developer.pdf",
  cvCreativeUrl: "/CV_Akmal_Creative.pdf",

  // Taruh foto di /public lalu ubah path-nya, contoh: "/foto-profil.jpg"
  photoUrl: "/Gambar/gabss.png",

  tagline:
    "Software developer dan content creator dengan pengalaman membangun software, game, serta konten digital, menggabungkan kemampuan teknis dan kreativitas untuk mengubah ide menjadi sesuatu yang nyata.",
};

export const about = {
  paragraphs: [
    "Lulusan Teknik Informatika Universitas Dian Nuswantoro yang berfokus pada software development, dengan pengalaman membangun aplikasi, sistem, dan game dari frontend hingga backend.",
    "Selain software development, saya juga mengembangkan game di Roblox Studio dan menjalankan channel YouTube sendiri. Saya terbiasa membawa sebuah ide dari tahap pengembangan hingga dirilis, kemudian menggunakan feedback dan data pengguna untuk terus mengembangkannya.",
  ],
  highlights: [
    { label: "Full-Stack Development", detail: "Frontend, backend, dan REST API" },
    { label: "Game Development", detail: "Roblox Studio dengan Luau" },
    { label: "Content Creation", detail: "Channel YouTube 200K+ subscriber" },
    { label: "Video Editing", detail: "Profesional sejak 2020" },
  ],
  stats: [
    { value: "200K+", label: "YouTube Subscriber" },
    { value: "5+", label: "Tahun Video Editing" },
    { value: "4+", label: "Tahun Pengalaman Development" },
    { value: "3,42", label: "IPK / 4,00" },
  ],
};

export const skillGroups = [
  {
    title: "Software Development",
    items: [
      "Full-Stack Web Development",
      "Frontend Development",
      "Backend Development",
      "Web Application Development",
      "REST API Development",
    ],
  },
  {
    title: "Languages & Frameworks",
    items: [
      "JavaScript",
      "PHP",
      "Luau",
      "HTML",
      "CSS",
      "React.js",
      "Laravel",
      "Inertia.js",
      "Express.js",
      "Node.js",
    ],
  },
  {
    title: "Game Development",
    items: [
      "Roblox Studio",
      "Gameplay Programming",
      "Game System Development",
      "DataStore / ProfileStore",
      "Game Analytics",
      "Game Monetization",
    ],
  },
  {
    title: "Video Editing & Creative",
    items: [
      "Adobe Premiere Pro",
      "Adobe After Effects",
      "CapCut",
      "Motion Graphics",
      "Visual Effects",
      "Video Post-Production",
      "Scriptwriting",
      "Voice Over",
      "Storytelling",
    ],
  },
  {
    title: "Content & Analytics",
    items: [
      "YouTube Analytics",
      "Content Strategy",
      "Audience Engagement",
      "Short-Form Content Creation",
    ],
  },
];

export const experience = [
  {
    role: "Game Developer & Owner Studio",
    org: "ThinkBros Studio",
    period: "2024 — Sekarang",
    current: true,
    track: "game",
    points: [
      "Mengembangkan dan menerbitkan game Roblox menggunakan Luau di Roblox Studio.",
      "Merancang sistem gameplay, progresi pemain, dan mekanik permainan yang interaktif.",
      "Membangun sistem penyimpanan data pemain dan fungsionalitas sisi backend game.",
    ],
    // Logo studio + statistik. Taruh logo di /public, contoh: "/thinkbros.png".
    logo: "/thinkbros.png",
    stats: [
      { value: "1.100+", label: "Member" },
      { value: "1.700.000+", label: "Total Visit" },
    ],
  },
  {
    role: "Full-Stack Web Developer Intern",
    org: "Indonesia Career Center Network (ICCN)",
    period: "2024 — 2025",
    track: "dev",
    points: [
      "Mengembangkan dan memelihara website resmi organisasi bersama tim pengembang internal.",
      "Menangani frontend untuk antarmuka dan backend untuk fungsionalitas di baliknya.",
      "Melakukan debugging, testing, dan maintenance rutin agar website tetap stabil.",
    ],
    logo: "/iccn.png",
  },
  {
    role: "Full-Stack Software Developer Intern",
    org: "PT. Samaya Interactive",
    period: "2023 — 2024",
    track: "dev",
    points: [
      "Mengembangkan aplikasi web untuk klien perusahaan sebagai bagian dari tim development.",
      "Menggunakan Laravel Breeze untuk autentikasi dan Inertia.js sebagai penghubung backend Laravel dengan frontend React.",
      "Mengimplementasikan fitur sesuai kebutuhan klien, lengkap dengan debugging dan testing.",
    ],
    logo: "/samaya.png",
  },
  {
    role: "Content Creator & Owner Channel YouTube",
    org: "Kepikiran Aja",
    period: "2023 — Sekarang",
    current: true,
    track: "content",
    points: [
      "Membangun dan mengelola channel YouTube hingga lebih dari 200.000 subscriber.",
      "Mengisi sendiri seluruh voice over, naskah, dan konsep konten.",
      "Menganalisis performa konten dan keterlibatan audiens sebagai dasar strategi.",
    ],
    logo: profile.youtubeAvatar,
  },
  {
    role: "Video Editor Profesional",
    org: "Freelance / Independen",
    period: "2020 — Sekarang",
    current: true,
    track: "creative",
    points: [
      "Mengedit konten video format pendek maupun panjang dengan standar produksi profesional.",
      "Membuat motion graphics dan visual effects dengan Adobe After Effects.",
      "Menangani post-production menyeluruh sampai ekspor sesuai format tiap platform.",
    ],
    // Tidak ada logo perusahaan (freelance), jadi pakai icon lucide-react.
    icon: "Clapperboard",
  },
];

// ============================================================
//  PROJECT GALLERY
//  Cara menambah project baru:
//  1. Tambahkan satu objek baru di array di bawah ini.
//  2. "icon" diisi nama icon dari lucide-react (contoh: "Gamepad2", "Film").
//     Lihat daftar nama icon di https://lucide.dev/icons
//     Kartu akan menampilkan icon itu dengan animasi bergerak otomatis,
//     jadi tidak perlu upload gambar/foto project sama sekali.
//  3. Kalau project ini milik perusahaan / tidak boleh dibuka publik,
//     set "private: true" dan isi "company" dengan nama perusahaannya.
//     Kartunya otomatis menampilkan icon gembok + keterangan "Private Project".
//  4. Isi "url" dengan link project. Kalau "url" dibiarkan null
//     (atau "private: true"), kartunya tidak bisa diklik.
//  5. Kalau nambah kategori baru, jangan lupa tambahkan juga di
//     "projectCategories" di bawah supaya muncul sebagai tombol filter.
// ============================================================

export const projectCategories = [
  "Semua",
  "Fullstack Web Development",
  "Fullstack Laravel Web Development",
  "Frontend Web Development",
  "Game",
  "Video & Konten",
];

export const projects = [
  {
    title: "Samaya Interactive Sistem Manajemen Inventaris",
    category: "Fullstack Web Development",
    description:
      "Mengembangkan sistem internal untuk membantu pengelolaan inventaris pada bisnis material bangunan. Sistem digunakan untuk mengelola data produk, stok, serta kebutuhan pencatatan inventaris secara terstruktur.",
    tech: ["Laravel", "Inertia.js", "React"],
    icon: "Lock",
    private: true,
    company: "PT. Samaya Interactive",
    image: null,
    url: null,
  },
  {
    title: "Pengembangan Aplikasi Web ICCN",
    category: "Fullstack Web Development",
    description: "Mengembangkan aplikasi web untuk kebutuhan Indonesia Career Center selama menjalani program magang. Mengerjakan pengembangan aplikasi dari sisi frontend dan backend, termasuk implementasi fitur dan logika aplikasi. Proyek tidak dirilis secara publik dan source code sudah tidak tersedia.",
    tech: ["React", "Express.js", "Node.js"],
    icon: "Lock",
    private: true,
    company: "Indonesia Career Center Network (ICCN)",
    image: null,
    url: null,
  },
   {
    title: "Undangan pernikahan digital Client Tema Minimalis",
    category: "Frontend Web Development",
    description: "Undangan pernikahan digital dengan tema minimalis, menampilkan informasi acara, galeri foto, dan RSVP online. Aplikasi ini dirancang untuk memberikan pengalaman interaktif bagi tamu undangan.",
    tech: ["React", "Express.js", "Node.js", "html", "css", "tailwindcss"],
    icon: "Heart",
    image: "/undanganminimalis.png",
    url: "https://bit.ly/UndanganTedyTri",
  },
  {
    title: "Sistem Manajemen Kesehatan",
    category: "Fullstack Laravel Web Development",
    description: "Fullstack web application untuk manajemen data kesehatan, termasuk pendaftaran pasien, rekam medis, dan laporan kesehatan. Sistem ini dirancang untuk mempermudah pengelolaan data dan meningkatkan efisiensi operasional di fasilitas kesehatan.",
    tech: ["Laravel", "PHP", "Blade", "MySQL", "Bootstrap"],
    icon: "Heart",
    image: "/sistemkesehatan.png",
    url: "https://github.com/maaleast/Sistem-Manajemen-Kesehatan",
  },
    {
    title: "Ticketing Application",
    category: "Fullstack Laravel Web Development",
    description: "Fullstack web application untuk manajemen tiket acara, termasuk pendaftaran peserta, penjualan tiket, dan laporan kehadiran. Sistem ini dirancang untuk mempermudah pengelolaan acara dan meningkatkan pengalaman peserta.",
    tech: ["Laravel", "PHP", "Blade", "MySQL", "Bootstrap"],
    icon: "Heart",
    image: "/ticketingapp.png",
    url: "https://github.com/maaleast/ticketudahupdate",
  },
   {
    title: "Undangan pernikahan digital Tema Modern",
    category: "Frontend Web Development",
    description: "Undangan pernikahan digital dengan tema modern, menampilkan informasi acara, galeri foto, dan RSVP online. Aplikasi ini dirancang untuk memberikan pengalaman interaktif bagi tamu undangan.",
    tech: ["React", "Express.js", "Node.js", "html", "css", "tailwindcss"],
    icon: "Sparkles",
    image: "/undanganmodern.png",
    url: "https://wedding-boru-rendi.vercel.app/",
  },
  {
    title: "Generator Tamu Undangan Digital",
    category: "Frontend Web Development",
    description: "Aplikasi untuk menghasilkan undangan pernikahan digital dengan tema modern, menampilkan informasi acara, galeri foto, dan RSVP online. Aplikasi ini dirancang untuk memberikan pengalaman interaktif bagi tamu undangan.",
    tech: ["React", "Express.js", "Node.js", "html", "css", "tailwindcss"],
    icon: "WandSparkles",
    image: "/GeneratorTamuUndangan.png",
    url: "https://generatorlinkundanganpernikahan-qmi.vercel.app/",
  },
  {
    title: "Ikuti Kata Budi!",
    category: "Game",
    description:
      "Terinspirasi dari Simon Says dan game mobile populer, Ikuti Kata Budi! adalah game berbasis Roblox yang menantang pemain untuk mengikuti perintah karakter Budi. Pemain harus meniru gerakan dan kata-kata yang diberikan dalam waktu terbatas, dengan tingkat kesulitan yang meningkat seiring berjalannya permainan.",
    tech: ["Roblox Studio", "Luau", "DataStore"],
    icon: "Gamepad2",
    image: "/IkutiKataBudi.png",
    url: "https://www.roblox.com/games/140538765782221/Ikuti-Kata-Budi",
  },
  {
    title: "Ruang Singgah [Voice Chat]",
    category: "Game",
    description:
      "Ruang Singgah [Voice Chat] adalah game berbasis Roblox yang menawarkan pengalaman bermain dengan fitur chat suara. Pemain dapat berinteraksi melalui obrolan suara langsung, membuat pengalaman bermain yang lebih imersif dan menyenangkan.",
    tech: ["Roblox Studio", "Luau", "DataStore"],
    icon: "Gamepad2",
    image: "/ruangsinggah.png",
    url: "https://www.roblox.com/games/112182998310668/Ruang-Singgah",
  },
  {
    title: "Mount Thalvyn",
    category: "Game",
    description: "Mount Thalvyn adalah game petualangan berbasis Roblox yang menawarkan pengalaman eksplorasi dunia fantasi. Pemain dapat menjelajahi berbagai lokasi, menyelesaikan quest, dan berinteraksi dengan karakter dalam game. Game ini menekankan pada narasi dan interaksi sosial antar pemain.",
    tech: ["Roblox Studio", "Luau"],
    icon: "Mountain",
    image: "/MountThalvyn.png",
    url: "https://www.roblox.com/games/77006923870243/Mount-Thalvyn-Dutch-Highlands",
  },
  {
    title: "Konten Motion Graphics & Video Editing",
    category: "Video & Konten",
    description: "Motion Graphics dan video editing untuk berbagai konten, termasuk video pendek, animasi, dan efek visual. Konten ini dibuat untuk keperluan promosi, edukasi, dan hiburan di berbagai platform digital.",
    tech: ["Premiere Pro", "After Effects", "CapCut"],
    icon: "Clapperboard",
    image: "https://i.ytimg.com/vi/-RxRRXtlcMs/hqdefault.jpg",
    url: "https://www.youtube.com/shorts/-RxRRXtlcMs?feature=share",
  },
  {
    title: "Editing Short-Form Content untuk YouTube",
    category: "Video & Konten",
    description: "Editing Shorts dan konten video pendek untuk channel YouTube, termasuk penambahan efek visual, transisi, dan pengaturan audio. Konten ini dirancang untuk menarik perhatian audiens dalam format video singkat.",
    tech: ["CapCut", "Voice Over"],
    icon: "Scissors",
    image: "https://i.ytimg.com/vi/LpwfcLvvaiQ/hqdefault.jpg",
    url: "https://www.youtube.com/shorts/LpwfcLvvaiQ?feature=share",
  },
];

// Thumbnail video YouTube. Isi "url" dengan link videonya
// dan "image" dengan path thumbnail di /public.
export const featuredVideos = [
  {
    title: "kenapa asap kebakaran di Kalimantan bisa sampe negara lain?",
    image: "https://i.ytimg.com/vi/-RxRRXtlcMs/hqdefault.jpg",
    url: "https://www.youtube.com/shorts/-RxRRXtlcMs",
  },
  {
    title: "kenapa burung ga kesetrum saat berdiri di kabel listrik?",
    image: "https://i.ytimg.com/vi/Aat-toTmkYU/hqdefault.jpg",
    url: "https://www.youtube.com/shorts/Aat-toTmkYU",
  },
  {
    title: "kenapa ikan kiamat ini muncul di pantai pink lombok?",
    image: "https://i.ytimg.com/vi/gyHwB4HgqaE/hqdefault.jpg",
    url: "https://www.youtube.com/shorts/gyHwB4HgqaE",
  },
];

export const contentSkills = [
  "Short-form Content",
  "Voice Over",
  "Scriptwriting",
  "Video Editing",
  "Content Strategy",
  "YouTube Analytics",
];

// Tumpukan teknologi development. Taruh logo software di /public/tech/.
export const developerTools = [
  { name: "React.js", logo: "/tech/react.svg" },
  { name: "Laravel", logo: "/tech/laravel.svg" },
  { name: "Node.js", logo: "/tech/nodejs.svg" },
  { name: "Express.js", logo: "/tech/express.svg" },
  { name: "Inertia.js", logo: "/tech/inertia.svg" },
  { name: "JavaScript", logo: "/tech/javascript.svg" },
  { name: "PHP", logo: "/tech/php.svg" },
  { name: "HTML", logo: "/tech/html5.svg" },
  { name: "CSS", logo: "/tech/css3.svg" },
  { name: "Luau", logo: "/tech/lua.svg" },
];

export const creativeTools = [
  {
    name: "Adobe Premiere Pro",
    note: "Editing dan post-production",
    logo: "/tools/premiere-pro.svg",
  },
  {
    name: "Adobe After Effects",
    note: "Motion graphics dan visual effects",
    logo: "/tools/after-effects.svg",
  },
  {
    name: "CapCut",
    note: "Editing cepat untuk format pendek",
    logo: "/tools/capcut.png",
  },
];

export const education = {
  degree: "S1 Teknik Informatika",
  school: "Universitas Dian Nuswantoro",
  period: "2022 — 2026",
  detail: "IPK 3,42 / 4,00",
  logo: "/udinus.webp",
  location: "Semarang",
  locationLogo: "/semarang.svg",
};

export const certifications = [
  {
    name: "Certificate of Competence — Communication and Informatics",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    year: "2026",
  },
  {
    name: "AI Literacy for Everyone: Understand, Apply, Create",
    issuer: "Bass Training Center & Consultant",
    year: "2025",
  },
  {
    name: "Workshop Bimbingan Karir TI-S1",
    issuer: "Fakultas Ilmu Komputer, Universitas Dian Nuswantoro",
    year: "2026",
  },
  {
    name: "Semarang Young Entrepreneur Festival International (SYEF)",
    issuer: "SYEF",
    year: "2022",
  },
];

export const navLinks = [
  { label: "Tentang", href: "#about" },
  { label: "Keahlian", href: "#skills" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Project", href: "#projects" },
  { label: "Konten", href: "#content" },
  { label: "Developer", href: "#developer" },
  { label: "Editing", href: "#editing" },
  { label: "Kontak", href: "#contact" },
];
