/**
 * Portfolio Aulia Ferina Sendhitasari, S.Kom., M.Kom.
 * Interactive Academic Engine:
 * - Bilingual Switcher (Indonesian & English)
 * - Dynamic Academic Typewriter
 * - Mobile Navigation Menu Toggle
 * - Interactive Academic Modal Viewer
 * - Direct WhatsApp Academic Consultation Dispatcher (+62 821-4064-0716)
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. BILINGUAL DICTIONARY (ID & EN)
     ========================================================================== */
  const translations = {
    id: {
      // Navbar
      nav_brand_sub: "Akademisi Sistem Informasi & Bisnis Digital",
      nav_tridharma: "Tridharma",
      nav_education: "Pendidikan",
      nav_research: "Riset & Tesis",
      nav_experience: "Pengalaman",
      nav_courses: "Mata Kuliah",
      nav_contact: "Kontak",
      nav_cv_btn: "CV Akademik (ATS)",

      // Hero
      hero_pill: "Akademisi Bidang Sistem Informasi & Bisnis Digital",
      hero_greeting: "Halo, Saya",
      hero_role_prefix: "Fokus Keilmuan:",
      hero_bio: "Akademisi berlatar belakang pendidikan linier <strong>Sarjana Komputer (S.Kom.)</strong> dan <strong>Magister Komputer (M.Kom.)</strong> di bidang <strong>Sistem Informasi</strong>, Fakultas Rekayasa Industri, <strong>Universitas Telkom</strong> (Terakreditasi \"Unggul\" BAN-PT). Memiliki pengalaman profesional lebih dari 3 tahun di perguruan tinggi terkemuka sebagai <strong>Staf Program Studi S1 Bisnis Digital (Februari 2026 – Sekarang)</strong> dan sebelumnya sebagai <strong>Staf Sekretariat Pimpinan / SEKPIM (2023 – 2026)</strong> di Fakultas Ekonomi dan Bisnis (FEB) Telkom University. Menguasai tata kelola akademik institusi, kurikulum <em>Outcome-Based Education (OBE)</em>, penjaminan mutu akreditasi, serta aktif meneliti pada domain <strong>Green Information Systems (GEEI Framework)</strong>, efisiensi energi kampus, integrasi sistem enterprise, dan transformasi bisnis digital.",
      hero_cta_cv: "Lihat CV Akademik (ATS)",
      hero_cta_research: "Eksplorasi Riset Tridharma",
      hero_avatar_badge_title: "S1 & S2 Sistem Informasi",
      hero_avatar_badge_sub: "Universitas Telkom (Terakreditasi Unggul BAN-PT)",

      // Stats
      stat_exp_num: "3+ Tahun",
      stat_exp_lbl: "Pengalaman Tata Kelola Kampus FEB",
      stat_edu_num: "Linier",
      stat_edu_lbl: "S1 & S2 Sistem Informasi Telkom University",
      stat_gpa_num: "3.56",
      stat_gpa_lbl: "IPK S2 Magister Sistem Informasi",
      stat_sks_num: "203 SKS",
      stat_sks_lbl: "Total Beban Kumulatif S1 & S2 Lulus",

      // Tridharma Section
      sec_tridharma_tag: "Pilar Tri Dharma Perguruan Tinggi",
      sec_tridharma_title: "Dedikasi Menyeluruh untuk Pendidikan Tinggi",
      sec_tridharma_desc: "Kesiapan integritas mengabdi sebagai akademisi profesional yang menyeimbangkan pengajaran kurikulum digital, penelitian berkelanjutan, dan tata kelola akademik.",
      card_tri1_title: "Pendidikan & Pengajaran",
      card_tri1_sub: "Pedagogi & Kurikulum Modern",
      card_tri1_desc: "Kompetensi mengajar mata kuliah Sistem Informasi dan Bisnis Digital berorientasi Outcome-Based Education (OBE), siap mentransfer wawasan teoritis dan studi kasus riil.",
      card_tri1_b1: "Penyusunan RPS & Modul Ajar Terstruktur",
      card_tri1_b2: "Evaluasi Capaian Pembelajaran Lulusan (CPL)",
      card_tri1_b3: "Metode Pembelajaran Interaktif & Case Method",

      card_tri2_title: "Penelitian & Karya Ilmiah",
      card_tri2_sub: "Green IT & Sistem Enterprise",
      card_tri2_desc: "Fokus riset terapan pada Green Information Systems (GEEI Framework), efisiensi energi fasilitas pendidikan, dan digitalisasi penjaminan mutu soal ujian akademik.",
      card_tri2_b1: "Perancangan GEEI Framework Efisiensi Energi Kampus",
      card_tri2_b2: "Sistem Monitoring Pengumpulan Soal Ujian Web",
      card_tri2_b3: "Penerapan Metodologi Waterfall & Enterprise Architecture",

      card_tri3_title: "Pengabdian & Tata Kelola",
      card_tri3_sub: "Manajemen Prodi & Pimpinan",
      card_tri3_desc: "Pengalaman praktis mengelola operasional Program Studi Bisnis Digital dan mengawal keprotokoleran pimpinan Dekanat FEB Telkom University.",
      card_tri3_b1: "Persiapan Akreditasi BAN-PT, LAMEMBA, AACSB",
      card_tri3_b2: "Koordinasi Dosen Pengampu & Mahasiswa MBKM",
      card_tri3_b3: "Tata Kelola Persuratan & Hubungan Kelembagaan",

      // Education Section
      sec_edu_tag: "Jejak Akademis Formal",
      sec_edu_title: "Pendidikan Linier Sistem Informasi",
      sec_edu_desc: "Komitmen keilmuan yang konsisten dari jenjang Sarjana hingga Magister di institusi teknologi terkemuka Indonesia.",
      edu_s2_title: "Magister Sistem Informasi (M.Kom.)",
      edu_s2_inst: "Universitas Telkom — Fakultas Rekayasa Industri",
      edu_s2_gpa_lbl: "IPK KELULUSAN",
      edu_s2_sks_lbl: "TOTAL BEBAN",
      edu_s2_thesis_lbl: "Tesis Magister (Master Thesis)",
      edu_s2_thesis_title: "Perancangan GEEI FRAMEWORK Untuk Efisiensi Energi Fakultas Ekonomi Dan Bisnis Universitas Telkom",
      edu_s2_thesis_desc: "Merumuskan kerangka kerja Green Enterprise Energy Information (GEEI) untuk audit, monitoring, dan rekomendasi efisiensi konsumsi daya perangkat TI & fasilitas fakultas.",
      edu_s2_meta_no: "No. Ijazah: 041057591012026100019 | Terakreditasi Unggul BAN-PT",

      edu_s1_title: "Sarjana Sistem Informasi (S.Kom.)",
      edu_s1_inst: "Universitas Telkom — Fakultas Rekayasa Industri",
      edu_s1_gpa_lbl: "IPK KELULUSAN",
      edu_s1_sks_lbl: "TOTAL BEBAN",
      edu_s1_thesis_lbl: "Skripsi Sarjana (Undergraduate Thesis)",
      edu_s1_thesis_title: "Pengembangan Sistem Monitoring Pengumpulan Soal Ujian Berbasis Website Untuk Modul Ketua Program Studi Dengan Metode Waterfall",
      edu_s1_thesis_desc: "Membangun sistem web monitoring pengumpulan dan penelaahan soal ujian semester untuk Ketua Program Studi demi menunjang kepatuhan audit mutu akademik.",
      edu_s1_meta_no: "No. Ijazah: 572012021002973 | Terakreditasi Unggul BAN-PT",

      // Research Feature
      sec_res_tag: "Fokus Riset Unggulan",
      sec_res_title: "Inovasi Keilmuan & Publikasi",
      sec_res_desc: "Integrasi konsep keberlanjutan lingkungan (Green IT) dan digitalisasi penjaminan mutu perguruan tinggi.",
      res_feat_tag: "Tesis Magister S2 Telkom University",
      res_feat_title: "GEEI FRAMEWORK: Kerangka Efisiensi Energi Ramah Lingkungan",
      res_feat_desc: "Tesis ini mengkaji permasalahan tingginya konsumsi energi listrik pada infrastruktur pendidikan tinggi. Melalui pendekatan Green Enterprise Architecture, dirancang framework GEEI yang memetakan konsumsi energi perangkat keras, server data center, dan fasilitas ruang kuliah dengan rekomendasi kebijakan hemat energi terukur.",
      res_btn_detail: "Lihat Detail Framework",

      // Experience Section
      sec_exp_tag: "Rekam Jejak Profesional",
      sec_exp_title: "Pengalaman Manajemen & Tata Kelola Kampus",
      sec_exp_desc: "Pemahaman menyeluruh mengenai alur administrasi akademik, regulasi kementerian, dan pelayanan Tridharma institusi.",
      exp_role1: "Staf Program Studi S1 Bisnis Digital",
      exp_date1: "Februari 2026 – Sekarang",
      exp_inst1: "Fakultas Ekonomi dan Bisnis (FEB) — Universitas Telkom",
      exp_1_b1: "Mengelola administrasi kurikulum Outcome-Based Education (OBE) dan jadwal perkuliahan dosen pengampu semester aktif.",
      exp_1_b2: "Mengoordinasikan portofolio asesmen mata kuliah, silabus RPS, dan rekapitulasi evaluasi beban mengajar dosen (BOD).",
      exp_1_b3: "Berperan aktif dalam tim penjaminan mutu program studi untuk persiapan akreditasi nasional (LAMEMBA) dan internasional (AACSB).",
      exp_1_b4: "Memfasilitasi layanan akademik mahasiswa, bimbingan magang industri (MBKM), dan kemitraan kurikulum Bisnis Digital.",

      exp_role2: "Staf Sekretariat Pimpinan (SEKPIM)",
      exp_date2: "2023 – 2026",
      exp_inst2: "Fakultas Ekonomi dan Bisnis (FEB) — Universitas Telkom",
      exp_2_b1: "Mengawal dan mengoordinasikan agenda protokoler Dekanat (Dekan, Wakil Dekan Akademik, dan Wakil Dekan Sumber Daya).",
      exp_2_b2: "Mengelola tata persuratan dinas akademik, surat keputusan dekanat, memorandum pengangkatan, dan disposisi rahasia.",
      exp_2_b3: "Koordinator operasional acara akademik strategis: Rapat Senat Terbuka, Yudisium Kelulusan, dan Visitasi Asesor Akreditasi Internasional.",
      exp_2_b4: "Menjembatani koordinasi dinas resmi antara pimpinan fakultas dengan Rektorat Universitas Telkom dan mitra eksternal.",

      // Courses Section
      sec_crs_tag: "Bidang Pengajaran",
      sec_crs_title: "Mata Kuliah Siap Diampu",
      sec_crs_desc: "Kesiapan mengajar mata kuliah inti pada Program Studi Sistem Informasi, Bisnis Digital, dan Manajemen Informatika.",
      crs1_name: "Pengantar Sistem Informasi & Bisnis Digital",
      crs1_desc: "Konsep dasar teknologi informasi, komponen sistem enterprise, dan pemodelan bisnis digital di era industri 4.0.",
      crs2_name: "Tata Kelola TI (IT Governance)",
      crs2_desc: "Kerangka kerja COBIT, ITIL, kebijakan tata kelola data, kepatuhan regulasi institusi, dan manajemen risiko TI.",
      crs3_name: "Analisis & Perancangan Sistem (SDLC)",
      crs3_desc: "Metodologi Waterfall, Agile Scrum, pemodelan proses bisnis BPMN, diagram UML, dan pengujian sistem aplikasi.",
      crs4_name: "E-Business & Digital Customer Experience",
      crs4_desc: "Strategi perdagangan elektronik, model CRM, pengalaman pelanggan digital, dan analisis saluran omni-channel.",
      crs5_name: "Manajemen Proyek Sistem Informasi",
      crs5_desc: "Perencanaan ruang lingkup proyek digital, estimasi jadwal & biaya, manajemen risiko, serta evaluasi deliverable sistem.",
      crs6_name: "Etika Profesi, Hukum Siber & HKI",
      crs6_desc: "Standar kode etik profesional TI, regulasi UU ITE, perlindungan data pribadi (PDP), dan kepemilikan hak cipta kekayaan intelektual.",

      // Contact Section
      sec_cnt_tag: "Komunikasi & Korespondensi",
      sec_cnt_title: "Terhubung untuk Diskusi Akademik",
      sec_cnt_desc: "Saya sangat terbuka untuk peluang kolaborasi akademik, pengajaran, penelitian bersama, dan pengabdian masyarakat.",
      cnt_loc_title: "Lokasi & Domisili",
      cnt_loc_val: "Bandung, Jawa Barat, Indonesia",
      cnt_phone_title: "Telepon / WhatsApp",
      cnt_email_title: "Surat Elektronik (Email)",
      cnt_form_title: "Kirim Pesan Langsung (WhatsApp)",
      cnt_form_name: "Nama Lengkap / Institusi",
      cnt_form_subj: "Subjek Keperluan",
      cnt_form_msg: "Pesan / Undangan Akademik",
      cnt_form_btn: "Kirim via WhatsApp",

      // Footer
      footer_title: "Aulia Ferina Sendhitasari, S.Kom., M.Kom.",
      footer_sub: "Akademisi Sistem Informasi & Bisnis Digital • Universitas Telkom",
      footer_copy: "© 2026 Aulia Ferina Sendhitasari. All rights reserved."
    },

    en: {
      // Navbar
      nav_brand_sub: "Academician in Information Systems & Digital Business",
      nav_tridharma: "Tri Dharma",
      nav_education: "Education",
      nav_research: "Research & Thesis",
      nav_experience: "Experience",
      nav_courses: "Courses",
      nav_contact: "Contact",
      nav_cv_btn: "Academic CV (ATS)",

      // Hero
      hero_pill: "Academician in Information Systems & Digital Business",
      hero_greeting: "Hello, I am",
      hero_role_prefix: "Academic Focus:",
      hero_bio: "Dedicated academician holding linear degrees: <strong>Bachelor of Computer Science (S.Kom.)</strong> and <strong>Master of Computer Science (M.Kom.)</strong> in <strong>Information Systems</strong> from the School of Industrial Engineering, <strong>Telkom University</strong> (Accredited \"Unggul\" by BAN-PT). Possessing over 3 years of higher education management experience as <strong>Staff of the Bachelor in Digital Business Study Program (February 2026 – Present)</strong> and previously as <strong>Executive Secretariat Staff / SEKPIM (2023 – 2026)</strong> at the Faculty of Economics and Business (FEB) Telkom University. Proficient in institutional academic governance, <em>Outcome-Based Education (OBE)</em> curricula, quality assurance for international/national accreditations, and actively researching in <strong>Green Information Systems (GEEI Framework)</strong>, campus energy efficiency, enterprise systems integration, and digital business transformation.",
      hero_cta_cv: "View Academic CV (ATS)",
      hero_cta_research: "Explore Tri Dharma Research",
      hero_avatar_badge_title: "Linear B.Sc. & M.Sc. in IS",
      hero_avatar_badge_sub: "Telkom University (Accredited Unggul BAN-PT)",

      // Stats
      stat_exp_num: "3+ Years",
      stat_exp_lbl: "Campus Governance Experience at FEB",
      stat_edu_num: "Linear",
      stat_edu_lbl: "B.Sc. & M.Sc. Information Systems Tel-U",
      stat_gpa_num: "3.56",
      stat_gpa_lbl: "Master's Degree GPA (Information Systems)",
      stat_sks_num: "203 Credits",
      stat_sks_lbl: "Total Cumulative Credits Completed",

      // Tridharma Section
      sec_tridharma_tag: "Tri Dharma Higher Education Pillars",
      sec_tridharma_title: "Comprehensive Dedication to Higher Education",
      sec_tridharma_desc: "Demonstrated readiness and integrity to serve as a professional academician balancing digital curricula pedagogy, sustainable scientific research, and academic governance.",
      card_tri1_title: "Teaching & Pedagogy",
      card_tri1_sub: "Modern Curriculum Delivery",
      card_tri1_desc: "Qualified to instruct core Information Systems and Digital Business courses aligned with Outcome-Based Education (OBE), combining theoretical rigor and empirical case studies.",
      card_tri1_b1: "Structured Semester Learning Plans (RPS)",
      card_tri1_b2: "Graduate Learning Outcome (CPL) Assessment",
      card_tri1_b3: "Interactive & Case-Based Learning Methods",

      card_tri2_title: "Research & Scholarly Work",
      card_tri2_sub: "Green IT & Enterprise Systems",
      card_tri2_desc: "Applied scientific inquiry centered on Green Information Systems (GEEI Framework), university facility energy efficiency, and digital academic exam quality monitoring.",
      card_tri2_b1: "Campus Energy Efficiency GEEI Framework Design",
      card_tri2_b2: "Web-Based Academic Exam Collection Monitoring",
      card_tri2_b3: "Waterfall SDLC & Enterprise Architecture Adoption",

      card_tri3_title: "Community Service & Governance",
      card_tri3_sub: "Study Program & Deanship Management",
      card_tri3_desc: "Hands-on operational leadership managing the Digital Business Study Program and executing protocol for the Deanship leadership of FEB Telkom University.",
      card_tri3_b1: "Accreditation Prep (BAN-PT, LAMEMBA, AACSB)",
      card_tri3_b2: "Lecturer Coordination & MBKM Student Internships",
      card_tri3_b3: "Official Correspondence & Institutional Liaison",

      // Education Section
      sec_edu_tag: "Formal Academic Background",
      sec_edu_title: "Linear Degrees in Information Systems",
      sec_edu_desc: "Consistent academic dedication spanning Bachelor's to Master's degrees at Indonesia's leading technological university.",
      edu_s2_title: "Master of Information Systems (M.Kom.)",
      edu_s2_inst: "Telkom University — School of Industrial Engineering",
      edu_s2_gpa_lbl: "GRADUATION GPA",
      edu_s2_sks_lbl: "TOTAL CREDITS",
      edu_s2_thesis_lbl: "Master Thesis",
      edu_s2_thesis_title: "Design of the GEEI Framework for Energy Efficiency at the Faculty of Economics and Business Telkom University",
      edu_s2_thesis_desc: "Formulated the Green Enterprise Energy Information (GEEI) framework to audit, monitor, and model actionable energy reduction policies across university hardware and educational facilities.",
      edu_s2_meta_no: "National Certificate: 041057591012026100019 | Accredited \"Unggul\" BAN-PT",

      edu_s1_title: "Bachelor of Information Systems (S.Kom.)",
      edu_s1_inst: "Telkom University — School of Industrial Engineering",
      edu_s1_gpa_lbl: "GRADUATION GPA",
      edu_s1_sks_lbl: "TOTAL CREDITS",
      edu_s1_thesis_lbl: "Undergraduate Thesis",
      edu_s1_thesis_title: "Development of Website-Based Exam Collection Monitoring System for Head of the Study Program Module with Waterfall Method",
      edu_s1_thesis_desc: "Engineered a web application for monitoring and auditing semester examination submissions for the Head of the Study Program to ensure academic quality compliance.",
      edu_s1_meta_no: "National Certificate: 572012021002973 | Accredited \"Unggul\" BAN-PT",

      // Research Feature
      sec_res_tag: "Key Research Milestone",
      sec_res_title: "Scientific Innovation & Publications",
      sec_res_desc: "Bridging environmental sustainability (Green IT) and digital quality assurance in higher educational institutions.",
      res_feat_tag: "Master Thesis Milestone — Telkom University",
      res_feat_title: "GEEI FRAMEWORK: Sustainable Campus Energy Efficiency Model",
      res_feat_desc: "This thesis investigated the heavy electric power consumption across higher education IT infrastructure. Utilizing a Green Enterprise Architecture methodology, the GEEI Framework maps energy consumption across data servers, faculty computing devices, and classroom equipment, delivering measurable power-saving strategies.",
      res_btn_detail: "View Framework Blueprint",

      // Experience Section
      sec_exp_tag: "Professional Track Record",
      sec_exp_title: "Higher Education Governance & Management",
      sec_exp_desc: "In-depth operational mastery of university academic lifecycles, ministerial regulations, and Tri Dharma institutional services.",
      exp_role1: "Staff of Digital Business Study Program (S1)",
      exp_date1: "February 2026 – Present",
      exp_inst1: "Faculty of Economics and Business (FEB) — Telkom University",
      exp_1_b1: "Directs day-to-day Outcome-Based Education (OBE) curriculum administration and semester course schedules for active faculty lecturers.",
      exp_1_b2: "Coordinates course assessment portfolios, Semester Learning Plans (RPS), and lecturer teaching workload (BOD) monitoring.",
      exp_1_b3: "Active member of the study program quality assurance task force preparing for national accreditation (LAMEMBA) and international accreditation (AACSB).",
      exp_1_b4: "Facilitates student academic services, certified industry internships (MBKM), and digital business corporate curriculum partnerships.",

      exp_role2: "Executive Secretariat Staff (SEKPIM)",
      exp_date2: "2023 – 2026",
      exp_inst2: "Faculty of Economics and Business (FEB) — Telkom University",
      exp_2_b1: "Coordinated high-level protocol schedules for the Dean and Vice Deans (Academic, Research, Financial & Logistics).",
      exp_2_b2: "Administered institutional academic official correspondence, deanship decrees, appointment memoranda, and confidential executive dispositions.",
      exp_2_b3: "Operational lead for premier academic events: Open Senate Sessions, Graduation Judicium, Deanship Strategic Summits, and International Assessor Visits.",
      exp_2_b4: "Liaised official inter-unit correspondence between faculty leadership, the Telkom University Rectorate, and external partner institutions.",

      // Courses Section
      sec_crs_tag: "Teaching Competencies",
      sec_crs_title: "Courses Qualified to Teach",
      sec_crs_desc: "Prepared to instruct core subjects in Information Systems, Digital Business, and Information Management curricula.",
      crs1_name: "Introduction to Information Systems & Digital Business",
      crs1_desc: "Foundations of information technology, enterprise system components, and emerging digital business models in Industry 4.0.",
      crs2_name: "IT Governance & Compliance",
      crs2_desc: "COBIT, ITIL frameworks, data governance policies, regulatory compliance, and IT risk mitigation.",
      crs3_name: "System Analysis & Design (SDLC)",
      crs3_desc: "Waterfall, Agile Scrum methodologies, BPMN business process modeling, UML diagrams, and software testing lifecycles.",
      crs4_name: "E-Business & Digital Customer Experience",
      crs4_desc: "Electronic commerce strategies, customer relationship management (CRM), omni-channel customer journeys, and digital metrics.",
      crs5_name: "Digital Information Systems Project Management",
      crs5_desc: "Digital project scope planning, schedule & cost estimation, risk management, and system deliverable assessment.",
      crs6_name: "Professional Ethics, Cyber Law & Intellectual Property",
      crs6_desc: "IT professional codes of ethics, cybersecurity laws (UU ITE), personal data protection (PDP), and intellectual property rights.",

      // Contact Section
      sec_cnt_tag: "Communication & Inquiry",
      sec_cnt_title: "Connect for Academic Engagement",
      sec_cnt_desc: "Open for academic engagement, teaching collaboration, joint scientific research, and community service initiatives.",
      cnt_loc_title: "Campus & Domicile Location",
      cnt_loc_val: "Bandung, West Java, Indonesia",
      cnt_phone_title: "Phone / WhatsApp",
      cnt_email_title: "Electronic Mail (Email)",
      cnt_form_title: "Direct WhatsApp Message",
      cnt_form_name: "Full Name / University",
      cnt_form_subj: "Inquiry Subject",
      cnt_form_msg: "Academic Message / Invitation",
      cnt_form_btn: "Send via WhatsApp",

      // Footer
      footer_title: "Aulia Ferina Sendhitasari, S.Kom., M.Kom.",
      footer_sub: "Academician in Information Systems & Digital Business • Telkom University",
      footer_copy: "© 2026 Aulia Ferina Sendhitasari. All rights reserved."
    }
  };

  /* ==========================================================================
     2. LANGUAGE SWITCHER LOGIC
     ========================================================================== */
  let currentLang = 'id';

  function applyLanguage(lang) {
    currentLang = lang;
    const dict = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Update active lang buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update CV button links with current lang query
    const navCvBtn = document.getElementById('navCvBtn');
    const heroCvBtn = document.getElementById('heroCvBtn');
    if (navCvBtn) navCvBtn.href = `CV_Aulia_Ferina_Sendhitasari_Printable.html?lang=${lang}`;
    if (heroCvBtn) heroCvBtn.href = `CV_Aulia_Ferina_Sendhitasari_Printable.html?lang=${lang}`;

    document.documentElement.lang = lang;
    initTypewriter();
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      applyLanguage(selectedLang);
    });
  });

  /* ==========================================================================
     3. DYNAMIC TYPEWRITER FOR ACADEMIC ROLES
     ========================================================================== */
  const typewriterRoles = {
    id: [
      "Akademisi Sistem Informasi & Bisnis Digital",
      "Staf Program Studi S1 Bisnis Digital FEB Telkom University",
      "Magister Komputer (M.Kom.) — Lulusan S2 Sistem Informasi Tel-U",
      "Peneliti Green Information Systems (GEEI Framework)",
      "Praktisi Tata Kelola Akademik & Kurikulum OBE"
    ],
    en: [
      "Academician in Information Systems & Digital Business",
      "Staff of S1 Digital Business Study Program FEB Telkom University",
      "Master of Information Systems (M.Kom.) — Telkom University",
      "Green Information Systems (GEEI Framework) Academic Researcher",
      "Higher Education Governance & OBE Curriculum Practitioner"
    ]
  };

  let typeIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeTimer = null;

  function initTypewriter() {
    clearTimeout(typeTimer);
    typeIndex = 0;
    charIndex = 0;
    isDeleting = false;
    typeLoop();
  }

  function typeLoop() {
    const roles = typewriterRoles[currentLang];
    const currentRole = roles[typeIndex];
    const targetEl = document.getElementById('typewriterText');
    if (!targetEl) return;

    if (isDeleting) {
      targetEl.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      targetEl.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentRole.length) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      typeIndex = (typeIndex + 1) % roles.length;
      delay = 400;
    }

    typeTimer = setTimeout(typeLoop, delay);
  }

  /* ==========================================================================
     4. MOBILE NAVIGATION TOGGLE
     ========================================================================== */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Close when clicking nav link on mobile
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  /* ==========================================================================
     5. MODAL DETAIL POPUP
     ========================================================================== */
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const btnOpenThesisModal = document.getElementById('btnOpenThesisModal');

  if (btnOpenThesisModal && modalBackdrop) {
    btnOpenThesisModal.addEventListener('click', () => {
      modalBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  if (modalCloseBtn && modalBackdrop) {
    modalCloseBtn.addEventListener('click', () => {
      modalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    });

    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        modalBackdrop.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  /* ==========================================================================
     6. WHATSAPP CONTACT DISPATCHER (+62 821-4064-0716)
     ========================================================================== */
  const contactForm = document.getElementById('contactAcademicForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('formName').value.trim();
      const subject = document.getElementById('formSubject').value.trim();
      const message = document.getElementById('formMessage').value.trim();

      const text = `Halo Ibu Aulia Ferina Sendhitasari, S.Kom., M.Kom.\n\nSaya: ${name}\nPerihal / Subjek: ${subject}\n\nPesan:\n${message}\n\n(Terkirim melalui Website Portofolio Akademik)`;
      const url = `https://wa.me/6282140640716?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    });
  }

  // Initial Boot
  applyLanguage('id'); // Default Indonesian
});
