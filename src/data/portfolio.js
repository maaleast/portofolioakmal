// ============================================================
//  SEMUA ISI WEBSITE ADA DI FILE INI.
//  Untuk menambah / mengubah konten, cukup edit file ini saja.
//  Jangan menyentuh file komponen kecuali ingin mengubah layout.
// ============================================================

export const profile = {
  name: "Akmal Farizky Hardhana",
  firstName: "Akmal",
  role: "Full-Stack Developer, Game Developer & Creator.",
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
  cvDeveloperUrl: "/CV/CV_Akmal_Developer.pdf",
  cvCreativeUrl: "/CV/CV_Akmal_Creative.pdf",

  // Taruh foto di /public lalu ubah path-nya, contoh: "/foto-profil.jpg"
  photoUrl: "/Gambar/fixfoto.png",

  tagline:
    "Software Developer and Content Creator combining technology, creativity, and data to build digital products, games, and engaging content.",
};

export const about = {
  paragraphs: [
    "Lulusan Teknik Informatika Universitas Dian Nuswantoro yang berfokus pada pengembangan perangkat lunak, dengan pengalaman membangun aplikasi, sistem, dan game dari sisi antarmuka hingga server.",
"Selain pengembangan perangkat lunak, saya juga mengembangkan game di Roblox Studio dan menjalankan kanal YouTube sendiri. Saya terbiasa membawa ide dari tahap pengembangan hingga peluncuran, lalu menggunakan masukan dan data pengguna untuk terus mengembangkannya.",
  ],
  highlights: [
    { label: "Full-Stack Engineering", detail: "Frontend, backend, & REST API" },
    { label: "Game Development", detail: "Roblox Studio & Luau" },
    { label: "Content Creation", detail: "YouTube 200K+ subscribers" },
    { label: "Video Editing", detail: "Editing & post-production since 2020" },
  ],
  stats: [
    { value: "200K+", label: "YouTube Subscriber" },
    { value: "5+", label: "Content & Analytics" },
    { value: "3+", label: "Software & Game Development" },
    { value: "3,42", label: "GPA · Informatics Engineering · Dian Nuswantoro University" },
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
    "API Integration",
    "Database Design",
    "Database Management",
    "Server-Side Development",
    "Client-Side Development",
    "Authentication & Authorization",
    "CRUD Application Development",
    "Responsive Web Development",
    "Third-Party API Integration",
    "Cloud-Based Application Development",
    "Application Architecture",
    "Software Architecture",
    "Performance Optimization",
    "Debugging & Troubleshooting",
    "Version Control & Git",
    ],
  },
  {
    title: "Languages & Frameworks",
    items: [
     // Languages
    "JavaScript",
    "PHP",
    "Luau",
    "SQL",
    "HTML5",
    "CSS3",

    // Frontend
    "React.js",
    "Inertia.js",
    "Tailwind CSS",
    "Bootstrap",
    "Vite",

    // Backend
    "Laravel",
    "Laravel Breeze",
    "Laravel Eloquent",
    "Laravel Blade",
    "Express.js",
    "Node.js",

    // Database & Backend Services
    "MySQL",
    "Firebase",
    "Cloud Firestore",
    "Google Cloud SQL",
    "REST API",

    // Development Tools
    "Git",
    "GitHub",
    "NPM",
    "Postman",
    ],
  },
  {
    title: "Game Development",
    items: [
      "Roblox Studio",
    "Luau Programming",
    "Gameplay Programming",
    "Game Systems Architecture",
    "DataStore & ProfileStore",
    "Multiplayer Systems",
    "Game Analytics",
    "Game Monetization",
    "Performance Optimization",
    "Game Economy Design",
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
    "Creative Direction",
    "Scriptwriting",
    "Storytelling",
    "Voice Over",
    "Video Composition",
    "Visual Storytelling",
    "Pacing & Retention",
    "Sound Design",
    "Color Grading",
    ],
  },
  {
    title: "Content & Analytics",
    items: [
    "YouTube & Social Media Analytics",
    "Content Strategy",
    "Audience Analytics",
    "Audience Engagement",
    "Content Performance Analysis",
    "Content Optimization",
    "Short-Form Content Creation",
    "Long-Form Content Creation",
    "Content Ideation",
    "Storytelling & Scriptwriting",
    "Trend Analysis",
    "Social Media Strategy",
    "Audience Growth",
    "Performance Tracking",
    "Content Planning",
    "A/B Testing & Experimentation",
    ],
  },
];

export const experience = [
  {
    role: "Game Developer & Owner Studio",
    org: "ThinkBros Studio",
    period: "2024 — Present",
    current: true,
    track: "game",
    points: [
      "Mengembangkan dan menerbitkan game Roblox menggunakan Luau di Roblox Studio.",
      "Merancang sistem permainan, perkembangan pemain, dan mekanik game yang interaktif.",
      "Membangun sistem penyimpanan data pemain dan fungsi server untuk game.",
    ],
    logo: "/thinkbros.png",
    stats: [
      { value: "1.100+", label: "Member" },
      { value: "1.700.000+", label: "Total Visit" },
    ],
    tools: [{ name: "Roblox Studio", logo: "https://cdn.simpleicons.org/roblox" }],
  },
  {
    role: "Full-Stack Web Developer Intern",
    org: "Indonesia Career Center Network (ICCN)",
    period: "2024 — 2025",
    track: "dev",
    points: [
      "Mengembangkan dan memelihara official website bersama internal development team menggunakan React, Vite, Node.js, Express.js, Tailwind CSS, dan MySQL.",
      "Mengembangkan front-end interfaces menggunakan React dan Tailwind CSS serta membangun back-end functionality menggunakan Node.js dan Express.js.",
      "Mengelola dan mengembangkan MySQL databases, termasuk implementasi serta pengelolaan data yang mendukung kebutuhan aplikasi.",
      "Melakukan debugging, testing, dan routine maintenance untuk menjaga stability, functionality, dan performance website.",
      "Berkolaborasi dengan development team dalam implementasi fitur, pengelolaan data, dan penyelesaian technical issues.",
    ],
    logo: "/iccn.png",
  },
  {
    role: "Full-Stack Software Developer Intern",
    org: "PT. Samaya Interactive",
    period: "2023 — 2024",
    track: "dev",
    points: [
      "Mengembangkan web applications untuk kebutuhan client sebagai bagian dari development team.",
      "Mengimplementasikan Laravel Breeze untuk authentication serta Inertia.js sebagai bridge antara Laravel dan React.",
      "Mengembangkan fitur berdasarkan kebutuhan client dengan memperhatikan functionality, usability, dan maintainability.",
      "Melakukan debugging dan testing untuk memastikan fitur berjalan sesuai requirements.",
    ],
    logo: "/samaya.png",
  },
  {
    role: "Content Creator & Channel Owner",
    org: "Kepikiran Aja – YouTube",
    period: "2023 — Sekarang",
    current: true,
    track: "content",
    points: [
      "Membangun dan mengelola YouTube Channel hingga mencapai 200K+ subscribers dan 92M+ total views.",
      "Mengembangkan short-form content secara end-to-end, mulai dari concept development, topic research, scripting, hingga publication.",
      "Menulis script dengan strong hooks, narrative pacing, dan storytelling yang dirancang untuk mempertahankan audience attention dan retention.",
      "Memproduksi dan membawakan voice-over untuk seluruh published content dengan menyesuaikan tone dan delivery terhadap setiap konsep.",
      "Menganalisis content performance melalui YouTube Analytics, mencakup views, audience retention, dan engagement patterns.",
      "Mengubah performance insights menjadi content strategy dengan mengoptimalkan topic selection, content formats, dan hooks untuk mendukung audience growth.",
    ],
    logo: profile.youtubeAvatar,
    stats: [
      { value: "200K+", label: "Subscribers" },
      { value: "92M+", label: "Total Views" },
    ],
    tools: [{ name: "YouTube", logo: "https://cdn.simpleicons.org/youtube" }],
  },
  {
    role: "Video Editor & Post-Production Specialist",
    org: "Freelance / Independent",
    period: "2020 — Sekarang",
    current: true,
    track: "creative",
    points: [
      "Mengedit short-form dan long-form video content untuk berbagai digital platforms dengan professional production standards.",
      "Membangun visual storytelling melalui pacing, motion graphics, visual effects, dan sound design.",
      "Menangani full post-production workflow, mulai dari rough cut hingga final delivery, termasuk color correction, color grading, dan audio editing.",
      "Menyesuaikan editing style dan export format dengan karakteristik platform serta target audience.",
      "Menggunakan Adobe Premiere Pro, Adobe After Effects, dan CapCut sebagai tools utama dalam proses editing dan post-production.",
    ],
    icon: "Clapperboard",
  },
  {
    role: "Creative & Digital Content Projects",
    org: "Independent Digital Project",
    period: "2024 — Sekarang",
    current: true,
    track: "creative",
    points: [
      "Mengembangkan creative concepts dan digital experiences untuk Roblox dan online communities.",
      "Merancang dan menjalankan independent creative projects dari concept development hingga launch dan iteration.",
      "Mengevaluasi audience feedback dan performance data untuk memahami engagement serta user behavior.",
      "Melakukan eksperimen terhadap creative concepts dan presentation approaches untuk meningkatkan audience reach dan engagement.",
    ],
    tools: [
      { name: "Figma", logo: "https://cdn.simpleicons.org/figma" },
      {
        name: "Canva",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
      },
    ],
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
  "All Projects",
  "IT & Software Development",
  "Game",
  "Video & Content",
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
    description: "Mengembangkan aplikasi web untuk kebutuhan Indonesia Career Center selama menjalani program magang, dari antarmuka hingga server. Halaman publik menampilkan frontend dan backend dashboard dinonaktifkan karena kebijakan privasi perusahaan.",
    tech: ["React", "Express.js", "Node.js"],
    icon: "Lock",
    private: false,
    company: "Indonesia Career Center Network (ICCN)",
    notice: "Hanya menampilkan Frontend. Backend Dashboard sedang dinonaktifkan karena privasi perusahaan.",
    image: "/Project/ICCN.png",
    url: "https://iccn-eight.vercel.app/",
  },
   {
    title: "Undangan pernikahan digital Client Tema Minimalis",
    category: "Frontend Web Development",
    description: "Undangan pernikahan digital dengan tema minimalis, menampilkan informasi acara, galeri foto, dan RSVP online. Aplikasi ini dirancang untuk memberikan pengalaman interaktif bagi tamu undangan.",
    tech: ["React", "Express.js", "Node.js", "html", "css", "tailwindcss"],
    icon: "Heart",
    image: "/Project/undanganminimalis.png",
    url: "https://bit.ly/UndanganTedyTri",
  },
  {
    title: "Sistem Manajemen Kesehatan",
    category: "Fullstack Web Development",
    description: "Aplikasi web menyeluruh untuk manajemen data kesehatan, termasuk pendaftaran pasien, rekam medis, dan laporan kesehatan. Sistem ini dirancang untuk mempermudah pengelolaan data dan meningkatkan efisiensi operasional di fasilitas kesehatan.",
    tech: ["Laravel", "PHP", "Blade", "MySQL", "Bootstrap"],
    icon: "Heart",
    image: "/Project/sistemkesehatan.png",
    url: "https://github.com/maaleast/Sistem-Manajemen-Kesehatan",
  },
    {
    title: "Ticketing Application",
    category: "Fullstack Web Development",
    description: "Aplikasi web menyeluruh untuk manajemen tiket acara, termasuk pendaftaran peserta, penjualan tiket, dan laporan kehadiran. Sistem ini dirancang untuk mempermudah pengelolaan acara dan meningkatkan pengalaman peserta.",
    tech: ["Laravel", "PHP", "Blade", "MySQL", "Bootstrap"],
    icon: "Heart",
    image: "/Project/ticketingapp.png",
    url: "https://github.com/maaleast/ticketudahupdate",
  },
   {
    title: "Undangan pernikahan digital Tema Modern",
    category: "Frontend Web Development",
    description: "Undangan pernikahan digital dengan tema modern, menampilkan informasi acara, galeri foto, dan RSVP online. Aplikasi ini dirancang untuk memberikan pengalaman interaktif bagi tamu undangan.",
    tech: ["React", "Express.js", "Node.js", "html", "css", "tailwindcss"],
    icon: "Sparkles",
    image: "/Project/undanganmodern.png",
    url: "https://wedding-boru-rendi.vercel.app/",
  },
  {
    title: "Generator Tamu Undangan Digital",
    category: "Frontend Web Development",
    description: "Aplikasi untuk menghasilkan undangan pernikahan digital dengan tema modern, menampilkan informasi acara, galeri foto, dan RSVP online. Aplikasi ini dirancang untuk memberikan pengalaman interaktif bagi tamu undangan.",
    tech: ["React", "Express.js", "Node.js", "html", "css", "tailwindcss"],
    icon: "WandSparkles",
    image: "/Project/GeneratorTamuUndangan.png",
    url: "https://generatorlinkundanganpernikahan-qmi.vercel.app/",
  },
  {
    title: "Ikuti Kata Budi!",
    category: "Game",
    description:
      "Terinspirasi dari Simon Says dan game seluler populer, Ikuti Kata Budi! adalah game berbasis Roblox yang menantang pemain untuk mengikuti perintah karakter Budi. Pemain harus meniru gerakan dan kata-kata yang diberikan dalam waktu terbatas, dengan tingkat kesulitan yang meningkat seiring berjalannya permainan.",
    tech: ["Roblox Studio", "Luau", "DataStore"],
    icon: "Gamepad2",
    image: "/Project/IkutiKataBudi.png",
    url: "https://www.roblox.com/games/140538765782221/Ikuti-Kata-Budi",
  },
  {
    title: "Ruang Singgah [Voice Chat]",
    category: "Game",
    description:
      "Ruang Singgah [Voice Chat] adalah game berbasis Roblox yang menawarkan pengalaman bermain dengan fitur obrolan suara. Pemain dapat berinteraksi melalui obrolan suara langsung, membuat pengalaman bermain yang lebih imersif dan menyenangkan.",
    tech: ["Roblox Studio", "Luau", "DataStore"],
    icon: "Gamepad2",
    image: "/Project/ruangsinggah.png",
    url: "https://www.roblox.com/games/112182998310668/Ruang-Singgah",
  },
  {
    title: "Mount Thalvyn",
    category: "Game",
    description: "Mount Thalvyn adalah game petualangan berbasis Roblox yang menawarkan pengalaman eksplorasi dunia fantasi. Pemain dapat menjelajahi berbagai lokasi, menyelesaikan misi, dan berinteraksi dengan karakter dalam game. Game ini menekankan pada narasi dan interaksi sosial antar pemain.",
    tech: ["Roblox Studio", "Luau"],
    icon: "Mountain",
    image: "/Project/MountThalvyn.png",
    url: "https://www.roblox.com/games/77006923870243/Mount-Thalvyn-Dutch-Highlands",
  },
  {
    title: "Fooddash App",
    category: "Frontend Web Development",
    description: "Frontend aplikasi pemesanan makanan dengan tampilan menu, detail makanan, keranjang, dan alur pemesanan yang dibuat sederhana agar nyaman digunakan. Fokus project ini ada pada visual interface dan pengalaman pengguna.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    icon: "Utensils",
    image: "/Project/Fooddash.png",
    url: "https://fooddash-taupe.vercel.app/",
  },
  {
    title: "Game 17-an",
    category: "Game",
    categories: ["Frontend Web Development"],
    description: "Kumpulan game interaktif bertema 17-an yang dibuat dalam satu website frontend. Di dalamnya ada Memory Game, Antar Budi, dan Bantu Dewi, dengan konsep permainan yang berbeda dan ringan untuk dimainkan.",
    tech: ["React", "JavaScript", "Frontend Development"],
    icon: "Gamepad2",
    image: "/Project/game17an.png",
    url: "https://game17an.vercel.app/",
  },
  {
    title: "ThinkBoost Website TopUp",
    category: "Fullstack Web Development",
    categories: ["Frontend Web Development"],
    description: "Platform top up game untuk komunitas ThinkBros Studio. Website ini menangani alur pembelian, data pengguna, dan proses top up secara terintegrasi untuk memberikan pengalaman transaksi yang lebih praktis.",
    tech: ["React", "Laravel", "MySQL", "REST API"],
    icon: "Gamepad2",
    image: "/Project/thinkboost.png",
    url: "https://thinkboost-five.vercel.app/",
  },
  {
    title: "WeatherApp API Integration",
    category: "Frontend Web Development",
    description: "Aplikasi cuaca yang mengintegrasikan API untuk menampilkan kondisi cuaca berdasarkan lokasi. Data ditampilkan secara ringkas dengan fokus pada informasi suhu, kondisi langit, dan pembaruan cuaca yang mudah dipahami.",
    tech: ["React", "JavaScript", "REST API"],
    icon: "CloudSun",
    image: "/Project/weatherapp.png",
    url: "https://weatherapp-teal-gamma.vercel.app/",
  },
  {
    title: "Konten Motion Graphics & Video Editing",
    category: "Video & Content",
    description: "Motion graphics dan video editing untuk berbagai konten, termasuk video pendek, animasi, dan efek visual. Konten ini dibuat untuk kebutuhan promosi, edukasi, dan hiburan di berbagai platform digital.",
    tech: ["Premiere Pro", "After Effects", "CapCut"],
    icon: "Clapperboard",
    image: "https://i.ytimg.com/vi/-RxRRXtlcMs/hqdefault.jpg",
    url: "https://www.youtube.com/shorts/-RxRRXtlcMs?feature=share",
  },
  {
    title: "Editing Short-Form Content untuk YouTube",
    category: "Video & Content",
    description: "Editing video pendek dan konten Shorts untuk kanal YouTube, termasuk efek visual, transisi, dan pengaturan audio. Konten ini dibuat untuk menarik perhatian audiens dalam format video singkat.",
    tech: ["CapCut", "Voice Over"],
    icon: "Scissors",
    image: "https://i.ytimg.com/vi/LpwfcLvvaiQ/hqdefault.jpg",
    url: "https://www.youtube.com/shorts/LpwfcLvvaiQ?feature=share",
  },
  {
    title: "Motion Graphics",
    category: "Video & Content",
    description: "Motion graphics untuk video pendek dengan perpaduan animasi, typography, dan visual effects agar penyampaian pesan terasa lebih dinamis.",
    tech: ["After Effects", "Motion Graphics"],
    icon: "Clapperboard",
    image: "https://i.ytimg.com/vi/nIqdQRW3C2s/hqdefault.jpg",
    url: "https://www.youtube.com/shorts/nIqdQRW3C2s",
  },
  {
    title: "Short Video Editing",
    category: "Video & Content",
    description: "Editing video pendek dengan pacing yang cepat, transisi yang rapi, dan penyesuaian audio untuk membuat konten lebih engaging.",
    tech: ["Premiere Pro", "Video Editing"],
    icon: "Scissors",
    image: "https://i.ytimg.com/vi/Hp_nrqE7zGw/hqdefault.jpg",
    url: "https://www.youtube.com/shorts/Hp_nrqE7zGw",
  },
  {
    title: "Cinematic Edit After Effects",
    category: "Video & Content",
    description: "Cinematic edit yang menggabungkan color grading, sound design, visual effects, dan motion untuk membangun suasana yang lebih kuat.",
    tech: ["After Effects", "Color Grading", "Sound Design"],
    icon: "Sparkles",
    image: "/Project/cinematicaeinstagram.png",
    url: "https://www.instagram.com/p/C26wtf8rpWO/",
  },
  {
    title: "Editing for Client",
    category: "Video & Content",
    description: "Project editing untuk client dengan fokus pada penyusunan footage, ritme video, visual effects, dan hasil akhir yang sesuai kebutuhan brand.",
    tech: ["Premiere Pro", "After Effects", "Client Work"],
    icon: "Clapperboard",
    image: "/Project/editanclient.png",
    url: "https://www.instagram.com/p/CzobRRJRGBT/",
  },
  {
    title: "Motion Graphic using After Effects",
    category: "Video & Content",
    description: "Eksplorasi motion graphic menggunakan After Effects dengan fokus pada animasi elemen visual, transisi, dan timing yang smooth.",
    tech: ["After Effects", "Motion Graphics"],
    icon: "Sparkles",
    image: "/Project/motiongraphicaftereffect.png",
    url: "https://www.instagram.com/p/Czl_mgiSV03/",
  },
  {
    title: "Motion Graphic using CapCut",
    category: "Video & Content",
    description: "Motion graphic yang dibuat dengan CapCut untuk menghasilkan konten pendek yang visualnya menarik, ringan, dan cocok untuk social media.",
    tech: ["CapCut", "Motion Graphics"],
    icon: "Sparkles",
    image: "/Project/motiongraphicusingcapcut.png",
    url: "https://www.tiktok.com/@thalviordev/video/7677898444555488529?is_from_webapp=1&sender_device=pc",
  },
  {
    title: "Promosi YUP Roblox TopUp",
    category: "Video & Content",
    description: "Video promosi untuk YUP Roblox TopUp yang dibuat untuk memperkenalkan layanan top up dengan penyampaian yang singkat dan mudah dipahami.",
    tech: ["Video Editing", "Motion Graphics", "CapCut"],
    icon: "Clapperboard",
    image: "/Project/promosiyup.png",
    url: "https://www.tiktok.com/@thalviordev/video/7623990183154797840",
  },
  {
    title: "Promosi Game Baru Mount Thalvyn",
    category: "Video & Content",
    description: "Video promosi untuk memperkenalkan Mount Thalvyn, menampilkan suasana game, daya tarik gameplay, dan pengalaman yang bisa ditemukan pemain.",
    tech: ["Video Editing", "Roblox", "Motion Graphics"],
    icon: "Mountain",
    image: "/Project/promosithalvyn.png",
    url: "https://www.tiktok.com/@thalviordev/video/7561400034768538896",
  },
  {
    title: "Cinematic Trailer New Game",
    category: "Video & Content",
    description: "Cinematic trailer untuk game baru dengan fokus pada atmosfer, storytelling visual, dan build-up yang membuat audiens penasaran.",
    tech: ["After Effects", "Video Editing", "Sound Design"],
    icon: "Clapperboard",
    image: "/Project/trailernewgame.png",
    url: "https://www.tiktok.com/@thalviordev/video/7592570300974304528",
  },
  {
    title: "Promosi Game Baru Ikuti Kata Budi",
    category: "Video & Content",
    description: "Video promosi untuk Ikuti Kata Budi yang menonjolkan konsep permainan, tantangan, dan momen seru yang bisa dimainkan bersama.",
    tech: ["Video Editing", "Roblox", "Motion Graphics"],
    icon: "Gamepad2",
    image: "/Project/promosikutikatabudi.png",
    url: "https://www.tiktok.com/@thalviordev/video/7674557999440088321",
  },
  {
    title: "Promosi Game Baru Ruang Singgah",
    category: "Video & Content",
    description: "Video promosi untuk Ruang Singgah yang memperkenalkan pengalaman bermain dan fitur voice chat dalam suasana yang santai dan interaktif.",
    tech: ["Video Editing", "Roblox", "Motion Graphics"],
    icon: "Gamepad2",
    image: "/Project/promosiruangsinggah.png",
    url: "https://www.tiktok.com/@thalviordev/video/7603707411068652816",
  },
  {
    title: "Clip Game Edit After Effect Simple",
    category: "Video & Content",
    description: "Clip game dengan editing After Effects yang simple, clean, dan fokus pada pacing serta visual utama agar tetap nyaman ditonton.",
    tech: ["After Effects", "Video Editing"],
    icon: "Clapperboard",
    image: "/Project/clipgameeditaftereffect2.png",
    url: "https://www.instagram.com/p/DdECv05SbL6/",
  },
  {
    title: "Clip Game Edit After Effect Niat",
    category: "Video & Content",
    description: "Clip game dengan proses editing After Effects yang lebih detail, menggunakan visual effects, timing, dan compositing untuk hasil yang lebih polished.",
    tech: ["After Effects", "Visual Effects", "Compositing"],
    icon: "Sparkles",
    image: "/Project/clipeditgameaftereffect.png",
    url: "https://www.instagram.com/p/DdECziISB4b/",
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
    note: "Grafik gerak dan efek visual",
    logo: "/tools/after-effects.svg",
  },
  {
    name: "CapCut",
    note: "Fast editing untuk short-form content",
    logo: "/tools/capcut.png",
  },
];

export const education = {
  degree: "S1 Teknik Informatika",
  school: "Universitas Dian Nuswantoro",
  period: "2022 — 2026",
  detail: "IPK 3,42",
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
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Konten", href: "#content" },
  { label: "Developer", href: "#developer" },
  { label: "Editing", href: "#editing" },
  { label: "Contact", href: "#contact" },
];
