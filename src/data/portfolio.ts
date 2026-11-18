import {
  CompetencyItem,
  WhyHireStat,
  ExperienceProjectItem,
  DocumentationLogItem,
  AchievementItem,
  OrganizationItem,
  CertificationItem,
} from "@/types/portfolio";

export const PROFILE_DATA = {
  name: "Nabil Zulfan Nurtsani",
  shortName: "Nabil Zulfan",
  badge: {
    en: "Computer Engineering Technology • IPB University",
    id: "Teknologi Rekayasa Komputer • IPB University",
  },
  heroHeadlineLine1: {
    en: "Engineering Reliable IoT, Network",
    id: "Merancang Sistem IoT, Jaringan",
  },
  heroHeadlineLine2: {
    en: "& IT Infrastructure",
    id: "& Infrastruktur IT Lapangan",
  },
  heroSummaryLeft: {
    en: "Undergraduate Computer Engineering Technology student at IPB University focused on embedded IoT hardware, Cisco network administration, and physical IT security infrastructure.",
    id: "Mahasiswa Teknologi Rekayasa Komputer IPB University dengan pengalaman langsung merakit perangkat keras IoT, administrasi jaringan Cisco, dan migrasi infrastruktur keamanan IT.",
  },
  heroStatLeftNumber: "20+",
  heroStatLeftLabel: {
    en: "National Competitions\nin Essay & Innovation",
    id: "Kompetisi Nasional\nEsai Ilmiah & Inovasi",
  },
  heroRightBadgeTop: {
    en: "3.72 / 4.00 GPA • Dual CCNA",
    id: "IPK 3.72 / 4.00 • Dual CCNA",
  },
  heroRightBadgeSub: {
    en: "IPB University & Cisco Academy",
    id: "IPB University & Cisco Academy",
  },
  ctaPrimary: {
    en: "Download CV",
    id: "Unduh CV",
  },
  ctaSecondary: {
    en: "View Documentation",
    id: "Lihat Dokumentasi Kerja",
  },
  email: "nabilzulfan.nurtsani@gmail.com",
  phone: "081281909701",
  whatsappUrl: "https://wa.me/6281281909701",
  location: {
    en: "Bogor Tengah, Kota Bogor, West Java 16128",
    id: "Bogor Tengah, Kota Bogor, Jawa Barat 16128",
  },
  cvUrl: "/cv/CV-Nabil-Zulfan-Nurtsani.pdf",
  portraitUrl: "/images/profile-almet-ipb-v3.jpg",
  socials: {
    github: "https://github.com/nabjul",
    linkedin: "https://linkedin.com/in/nabil-zulfan-placeholder",
  },
  education: {
    university: "Institut Pertanian Bogor (IPB University)",
    degree: {
      en: "Undergraduate Diploma in Computer Engineering Technology",
      id: "Sarjana Terapan (D4) Teknologi Rekayasa Komputer",
    },
    period: {
      en: "Aug 2024 – Jun 2028 (Expected)",
      id: "Agu 2024 – Jun 2028 (Estimasi)",
    },
    gpa: "3.72 / 4.00",
    highSchool: "SMAN 13 Kota Bekasi — MIPA (2021 – 2024)",
  },
};

export const COMPETENCIES_DATA: CompetencyItem[] = [
  {
    id: "iot-embedded",
    code: "01",
    iconName: "cpu",
    title: {
      en: "IoT & Embedded Hardware",
      id: "Perangkat Keras IoT & Embedded",
    },
    description: {
      en: "Wiring microcontroller boards, calibrating EC/pH/level sensors, and building relay-driven nutrient dosing hardware.",
      id: "Perakitan mikrokontroler, kalibrasi sensor nutrisi, serta kendali pompa/katup berbasis relay untuk otomasi.",
    },
    tags: ["Microcontrollers", "Sensors & Relays", "AB Mix Dosing", "Wiring & PCB"],
  },
  {
    id: "network-infra",
    code: "02",
    iconName: "network",
    title: {
      en: "Network Engineering (CCNA)",
      id: "Rekayasa Jaringan (CCNA)",
    },
    description: {
      en: "Configuring L2/L3 switches, routers, VLAN trunking, wireless LANs, and IPv4/IPv6 subnetting via Cisco IOS CLI.",
      id: "Konfigurasi switch L2/L3, router, segmentasi VLAN, jaringan wireless, dan subnetting IPv4/IPv6 melalui Cisco CLI.",
    },
    tags: ["Cisco IOS CLI", "VLAN & Trunking", "Routing", "Wireless LAN"],
  },
  {
    id: "it-security-support",
    code: "03",
    iconName: "shield",
    title: {
      en: "IT Security & Field Support",
      id: "Keamanan IT & Dukungan Teknis",
    },
    description: {
      en: "Physical office IT migration, installing 10+ CCTV cameras and panic buttons, cable termination, and LAN diagnostics.",
      id: "Migrasi perangkat IT kantor, instalasi 10+ titik CCTV dan panic button, terminasi kabel, serta troubleshooting jaringan.",
    },
    tags: ["CCTV Installation", "Panic Button", "Network Migration", "Troubleshooting"],
  },
  {
    id: "mobile-telemetry",
    code: "04",
    iconName: "smartphone",
    title: {
      en: "Mobile Monitoring Apps",
      id: "Aplikasi Mobile Pemantauan",
    },
    description: {
      en: "Developing mobile interfaces to monitor live sensor readings and trigger remote mixing actuators.",
      id: "Membangun antarmuka aplikasi mobile untuk membaca telemetri sensor secara langsung dan mengontrol aktuator.",
    },
    tags: ["Mobile App UI", "Live Telemetry", "Remote Control", "API / MQTT"],
  },
  {
    id: "cloud-integration",
    code: "05",
    iconName: "cloud",
    title: {
      en: "System Integration & Testing",
      id: "Integrasi & Pengujian Sistem",
    },
    description: {
      en: "Connecting field hardware, local networks, and mobile dashboards, followed by end-to-end functional verification.",
      id: "Menghubungkan hardware lapangan, jaringan lokal, dan aplikasi mobile beserta pengujian fungsional terpadu.",
    },
    tags: ["End-to-End Testing", "Hardware-Software Sync", "Network Verification"],
  },
  {
    id: "leadership-writing",
    code: "06",
    iconName: "award",
    title: {
      en: "Research, PR & Coordination",
      id: "Riset Ilmiah, Humas & Koordinasi",
    },
    description: {
      en: "Authoring 20+ national competition papers (6 podiums/finalists) and leading PR & logistics teams across 8+ campus bodies.",
      id: "Menyusun karya tulis di 20+ kompetisi nasional (6 gelar juara/finalis) serta memimpin tim Humas & Logistik di 8+ organisasi.",
    },
    tags: ["Scientific Writing", "Public Relations", "Event Logistics", "Team Leadership"],
  },
];

export const WHY_HIRE_STATS: WhyHireStat[] = [
  {
    metric: "3.72 / 4.00",
    title: {
      en: "Cumulative GPA at IPB",
      id: "IPK Teknologi Rekayasa Komputer",
    },
    subtitle: {
      en: "Strong foundation in embedded systems, computer networks, and system implementation",
      id: "Fondasi akademik kuat di sistem tertanam, jaringan komputer, dan implementasi sistem",
    },
  },
  {
    metric: "2x CCNA",
    title: {
      en: "Cisco Certified + Field Tested",
      id: "Sertifikasi Cisco + Pengalaman Lapangan",
    },
    subtitle: {
      en: "Proven in real banking branch migration (BSI) and greenhouse automation (Kalta Farm)",
      id: "Terbukti pada migrasi jaringan kantor perbankan (BSI) dan otomasi hidroponik (Kalta Farm)",
    },
  },
  {
    metric: "6 Awards",
    title: {
      en: "National Winner & Finalist",
      id: "Juara & Finalis Tingkat Nasional",
    },
    subtitle: {
      en: "Recognized by BRIN (YESC), UNNES (NEXTION), UTM (NEC), IPGMI, and DECISION",
      id: "Diakui di kompetisi nasional BRIN (YESC), UNNES (NEXTION), UTM (NEC), IPGMI, dan DECISION",
    },
  },
];

export const EXPERIENCE_PROJECTS_DATA: ExperienceProjectItem[] = [
  {
    id: "kalta-farm-iot",
    badge: {
      en: "IoT & Mobile Dev",
      id: "IoT & Aplikasi Mobile",
    },
    featured: true,
    category: "iot",
    company: "Kalta Farm",
    location: "Megamendung, Bogor",
    period: {
      en: "Jul 2026 – Present",
      id: "Jul 2026 – Sekarang",
    },
    role: {
      en: "IoT Hardware & Mobile App Developer",
      id: "IoT Hardware & Mobile App Developer",
    },
    domain: {
      en: "Hydroponic AB Mix Nutrient Automation",
      id: "Sistem Otomasi Nutrisi Hidroponik AB Mix",
    },
    summary: {
      en: "Built an automated IoT hardware unit and companion mobile app to dose, mix, and monitor AB Mix hydroponic nutrients in a 9-person team.",
      id: "Membangun perangkat keras IoT pencampur nutrisi AB Mix otomatis beserta aplikasi mobile pemantauannya bersama 9 anggota tim.",
    },
    metrics: {
      en: "9-Member Team • Hardware + Mobile App",
      id: "Tim 9 Orang • Hardware + Aplikasi Mobile",
    },
    highlights: [
      {
        en: "Developed embedded hardware for automated AB Mix nutrient mixing in hydroponic cultivation.",
        id: "Merakit dan memprogram hardware IoT untuk pencampuran otomatis nutrisi AB Mix hidroponik.",
      },
      {
        en: "Built the mobile application used by operators for real-time monitoring and valve/pump control.",
        id: "Membangun aplikasi mobile untuk memantau kondisi larutan dan mengendalikan pompa/katup dari jarak jauh.",
      },
      {
        en: "Collaborated with a 9-member team to integrate electronics, mobile UI, and greenhouse testing.",
        id: "Bekerja sama dalam tim 9 orang untuk menyatukan modul elektronik, aplikasi, dan uji coba di kebun.",
      },
    ],
    executionSteps: [
      {
        step: "01",
        title: {
          en: "Hardware Assembly & Sensor Wiring",
          id: "Perakitan Hardware & Pengkabelan Sensor",
        },
        detail: {
          en: "Assembled the microcontroller unit, dosing pumps, solenoid valves, and nutrient sensors inside an enclosure suitable for greenhouse humidity.",
          id: "Merakit mikrokontroler, pompa dosing, katup solenoid, dan sensor nutrisi ke dalam panel pelindung yang tahan kelembaban greenhouse.",
        },
      },
      {
        step: "02",
        title: {
          en: "Mobile Application Development",
          id: "Pembuatan Aplikasi Mobile Kontrol & Monitoring",
        },
        detail: {
          en: "Created the mobile interface displaying real-time nutrient concentration status and manual/auto mixing triggers.",
          id: "Membuat antarmuka aplikasi mobile yang menampilkan status kepekatan nutrisi secara real-time serta tombol pemicu pencampuran otomatis/manual.",
        },
      },
      {
        step: "03",
        title: {
          en: "Integration & Field Calibration",
          id: "Integrasi Sistem & Kalibrasi di Kebun",
        },
        detail: {
          en: "Tested end-to-end communication between the hardware controller and mobile app with the 9-member team at Cipayung Datar, Megamendung.",
          id: "Menguji komunikasi data antara hardware dan aplikasi mobile sekaligus melakukan kalibrasi takaran nutrisi bersama 9 anggota tim di lokasi Kalta Farm.",
        },
      },
    ],
    techStack: ["IoT Microcontroller", "Embedded C/C++", "Sensor Calibration", "Relay & Pump Control", "Mobile App Dev"],
    docImages: [
      {
        src: "/images/docs/kalta-iot-hardware.jpg",
        caption: {
          en: "Automated AB Mix IoT Hardware Panel & Dosing Pumps at Kalta Farm",
          id: "Panel Hardware IoT Pencampur Nutrisi AB Mix & Pompa Dosing di Kalta Farm",
        },
        placeholderHint: "public/images/docs/kalta-iot-hardware.jpg",
      },
      {
        src: "/images/docs/kalta-mobile-app.jpg",
        caption: {
          en: "Mobile Application Interface for Nutrient Telemetry & Control",
          id: "Tampilan Aplikasi Mobile Monitoring & Kontrol Nutrisi Hidroponik",
        },
        placeholderHint: "public/images/docs/kalta-mobile-app.jpg",
      },
    ],
  },
  {
    id: "bsi-it-support",
    badge: {
      en: "IT Security & Network",
      id: "Keamanan IT & Jaringan",
    },
    featured: false,
    category: "network",
    company: "Bank Syariah Indonesia (BSI)",
    location: "Bogor, Indonesia",
    period: {
      en: "Aug 2025",
      id: "Agu 2025",
    },
    role: {
      en: "Freelance IT Support",
      id: "Freelance IT Support",
    },
    domain: {
      en: "Branch Office IT Security & Network Migration",
      id: "Migrasi Infrastruktur Keamanan IT & Jaringan Kantor",
    },
    summary: {
      en: "Executed the physical and network migration of IT security systems—including 10 CCTV units and panic buttons—from the old branch office to a new location.",
      id: "Menangani migrasi fisik dan jaringan perangkat keamanan IT—termasuk 10 titik CCTV dan panic button—dari kantor lama ke gedung kantor baru.",
    },
    metrics: {
      en: "10 CCTV Units + Panic Button Network",
      id: "10 Unit CCTV + Jaringan Panic Button",
    },
    highlights: [
      {
        en: "Managed IT security infrastructure migration from the old office to the new branch location.",
        id: "Mengelola pemindahan infrastruktur keamanan IT dari gedung kantor lama ke lokasi kantor baru.",
      },
      {
        en: "Installed and configured up to 10 CCTV cameras and emergency panic button systems.",
        id: "Memasang dan mengonfigurasi hingga 10 kamera CCTV serta sistem tombol darurat (panic button).",
      },
      {
        en: "Integrated security devices into the new office LAN and performed link & system troubleshooting.",
        id: "Mengintegrasikan perangkat keamanan ke jaringan lokal kantor baru serta melakukan pengujian dan troubleshooting.",
      },
    ],
    executionSteps: [
      {
        step: "01",
        title: {
          en: "Decommissioning & Site Survey",
          id: "Inventarisasi & Survei Titik Gedung Baru",
        },
        detail: {
          en: "Audited existing security assets at the old office and mapped optimal camera angles, cable routes, and panic button placements at the new office.",
          id: "Mendata perangkat keamanan dari kantor lama serta memetakan titik sudut kamera CCTV, jalur penarikan kabel, dan posisi panic button di kantor baru.",
        },
      },
      {
        step: "02",
        title: {
          en: "Installation of 10 CCTV & Panic Buttons",
          id: "Instalasi Fisik 10 CCTV & Sistem Panic Button",
        },
        detail: {
          en: "Mounted up to 10 CCTV units and panic button nodes, terminated cabling, and connected NVR/DVR recording units.",
          id: "Memasang hingga 10 unit kamera CCTV dan titik panic button, melakukan terminasi konektor kabel, serta menghubungkannya ke perangkat perekam utama.",
        },
      },
      {
        step: "03",
        title: {
          en: "Network Integration & Troubleshooting",
          id: "Integrasi Jaringan Kantor & Uji Fungsi",
        },
        detail: {
          en: "Configured IP addressing to integrate the security devices into the new branch network and verified zero blind spots or connection drops.",
          id: "Mengatur pengalamatan IP agar terhubung dengan jaringan kantor baru, lalu menguji seluruh tangkapan layar CCTV dan pemicu alarm darurat.",
        },
      },
    ],
    techStack: ["CCTV Deployment", "Panic Button Systems", "LAN Integration", "Cable Termination", "IT Troubleshooting"],
    docImages: [
      {
        src: "/images/docs/bsi-cctv-migration.jpg",
        caption: {
          en: "CCTV & Security Network Migration at Bank Syariah Indonesia (BSI) Bogor",
          id: "Instalasi & Migrasi Jaringan 10 CCTV dan Panic Button di BSI Bogor",
        },
        placeholderHint: "public/images/docs/bsi-cctv-migration.jpg",
      },
    ],
  },
  {
    id: "ccna-network-lab",
    badge: {
      en: "Enterprise Networking",
      id: "Jaringan Komputer",
    },
    featured: false,
    category: "network",
    company: "Cisco Networking Academy • IPB",
    location: "Bogor, Indonesia",
    period: {
      en: "2024 – 2025",
      id: "2024 – 2025",
    },
    role: {
      en: "Cisco Switching, Routing & Wireless Lab",
      id: "Praktikum Switching, Routing & Wireless Cisco",
    },
    domain: {
      en: "Enterprise LAN / WLAN Configuration & Diagnostics",
      id: "Konfigurasi & Diagnostik Jaringan LAN / WLAN",
    },
    summary: {
      en: "Completed two Cisco CCNA certifications covering multi-VLAN switching, static/dynamic routing, wireless LAN security, and packet troubleshooting.",
      id: "Menyelesaikan dua modul sertifikasi Cisco CCNA mencakup konfigurasi multi-VLAN, routing, keamanan jaringan wireless, dan troubleshooting paket.",
    },
    metrics: {
      en: "2 Cisco CCNA Certifications (2024 & 2025)",
      id: "2 Sertifikasi Resmi Cisco CCNA (2024 & 2025)",
    },
    highlights: [
      {
        en: "Configured Layer 2 switching, VLAN segmentation, 802.1Q trunking, and Rapid PVST+ / EtherChannel.",
        id: "Mengonfigurasi switching Layer 2, segmentasi VLAN, trunking 802.1Q, serta EtherChannel.",
      },
      {
        en: "Implemented inter-VLAN routing, IPv4/IPv6 VLSM addressing, and wireless LAN architectures.",
        id: "Mengimplementasikan inter-VLAN routing, subnetting IPv4/IPv6 VLSM, dan jaringan wireless.",
      },
      {
        en: "Diagnosed L1–L3 connectivity bottlenecks using Cisco IOS CLI verification commands.",
        id: "Melakukan analisis dan pemecahan masalah konektivitas Layer 1–3 menggunakan CLI Cisco IOS.",
      },
    ],
    executionSteps: [
      {
        step: "01",
        title: {
          en: "IPv4/IPv6 Subnetting & Topology Design",
          id: "Perancangan Skema IP (VLSM) & Topologi",
        },
        detail: {
          en: "Calculated hierarchical IPv4/IPv6 addressing blocks for multi-department network segments.",
          id: "Menghitung pembagian blok subnet IPv4/IPv6 (VLSM) untuk memisahkan trafik antar divisi secara efisien.",
        },
      },
      {
        step: "02",
        title: {
          en: "Switch & Router CLI Provisioning",
          id: "Konfigurasi Switch & Router via Cisco CLI",
        },
        detail: {
          en: "Configured VLANs, trunk ports, Router-on-a-Stick / L3 SVI, port security, and DHCP pools.",
          id: "Mengatur VLAN, port trunk, inter-VLAN routing, port security, dan layanan DHCP langsung melalui antarmuka baris perintah (CLI).",
        },
      },
    ],
    techStack: ["Cisco IOS CLI", "VLAN & 802.1Q", "Inter-VLAN Routing", "Wireless LAN", "IPv4/IPv6 VLSM"],
    docImages: [
      {
        src: "/images/docs/ccna-network-topology.jpg",
        caption: {
          en: "Enterprise Multi-VLAN & Wireless Network Topology Configuration",
          id: "Konfigurasi Topologi Jaringan Multi-VLAN & Wireless Cisco CCNA",
        },
        placeholderHint: "public/images/docs/ccna-network-topology.jpg",
      },
    ],
  },
];

export const DOCUMENTATION_LOG_DATA: DocumentationLogItem[] = [
  {
    id: "doc-kalta-hardware",
    category: "iot",
    categoryLabel: {
      en: "IoT Hardware",
      id: "Hardware IoT",
    },
    title: {
      en: "Automated AB Mix Nutrient Mixing Hardware",
      id: "Perakitan Hardware Otomasi Nutrisi AB Mix",
    },
    projectOrEvent: "Kalta Farm — Megamendung, Bogor",
    date: "Jul 2026 – Present",
    location: "Bogor",
    imageSrc: "/images/docs/kalta-iot-hardware.jpg",
    placeholderFile: "public/images/docs/kalta-iot-hardware.jpg",
    whatIDid: {
      en: "Wired microcontroller relays, dosing pumps, and nutrient sensors to automate hydroponic AB Mix dosing without manual mixing.",
      id: "Merakit rangkaian mikrokontroler, relay pompa dosing, dan sensor nutrisi untuk mengotomatisasi pencampuran larutan AB Mix hidroponik.",
    },
    toolsUsed: ["Microcontroller", "Relay Module", "Dosing Pumps", "Nutrient Sensors"],
    outcome: {
      en: "Automated nutrient preparation tested on-site with a 9-member engineering team.",
      id: "Sistem pencampuran nutrisi otomatis berjalan stabil dan diuji langsung bersama 9 anggota tim.",
    },
  },
  {
    id: "doc-kalta-mobile",
    category: "iot",
    categoryLabel: {
      en: "Mobile Application",
      id: "Aplikasi Mobile",
    },
    title: {
      en: "Hydroponic Monitoring & Control Mobile App",
      id: "Pengembangan Aplikasi Mobile Kontrol Hidroponik",
    },
    projectOrEvent: "Kalta Farm — Megamendung, Bogor",
    date: "Jul 2026 – Present",
    location: "Bogor",
    imageSrc: "/images/docs/kalta-mobile-app.jpg",
    placeholderFile: "public/images/docs/kalta-mobile-app.jpg",
    whatIDid: {
      en: "Built the companion mobile application allowing farm operators to view real-time nutrient status and trigger mixing cycles remotely.",
      id: "Membuat aplikasi mobile yang menampilkan pembacaan sensor secara langsung serta fitur kendali pompa/katup dari smartphone.",
    },
    toolsUsed: ["Mobile UI", "Real-Time Telemetry", "IoT API Integration"],
    outcome: {
      en: "Simplified daily greenhouse monitoring and remote actuator control.",
      id: "Memudahkan operator kebun memantau dan mengontrol sistem nutrisi dari jarak jauh.",
    },
  },
  {
    id: "doc-bsi-migration",
    category: "network",
    categoryLabel: {
      en: "IT Security & Network",
      id: "Keamanan IT & Jaringan",
    },
    title: {
      en: "10 CCTV Units, Panic Button & Network Migration",
      id: "Instalasi 10 CCTV, Panic Button & Migrasi Jaringan",
    },
    projectOrEvent: "Bank Syariah Indonesia (BSI)",
    date: "Aug 2025",
    location: "Bogor",
    imageSrc: "/images/docs/bsi-cctv-migration.jpg",
    placeholderFile: "public/images/docs/bsi-cctv-migration.jpg",
    whatIDid: {
      en: "Migrated security infrastructure from the old office to a new location, physically installing 10 CCTV cameras and panic buttons and integrating them into the new office LAN.",
      id: "Memindahkan infrastruktur keamanan dari kantor lama ke kantor baru, memasang 10 titik CCTV dan sistem panic button, lalu mengintegrasikannya ke jaringan kantor baru.",
    },
    toolsUsed: ["10x CCTV Cameras", "Panic Button System", "LAN Cabling", "Network Testing"],
    outcome: {
      en: "All 10 surveillance nodes and emergency triggers operational and verified on the new branch network.",
      id: "Seluruh 10 titik kamera pengawas dan tombol darurat berfungsi normal di jaringan kantor baru.",
    },
  },
  {
    id: "doc-ccna-lab",
    category: "network",
    categoryLabel: {
      en: "Network Engineering",
      id: "Praktikum Jaringan",
    },
    title: {
      en: "Enterprise Switching, Routing & Wireless Configuration",
      id: "Konfigurasi Switching, Routing & Wireless (CCNA)",
    },
    projectOrEvent: "Cisco Networking Academy — IPB University",
    date: "2024 – 2025",
    location: "Bogor",
    imageSrc: "/images/docs/ccna-network-topology.jpg",
    placeholderFile: "public/images/docs/ccna-network-topology.jpg",
    whatIDid: {
      en: "Configured multi-VLAN topologies, 802.1Q trunking, inter-VLAN routing, wireless LAN controllers, and IPv4/IPv6 subnetting.",
      id: "Mengonfigurasi topologi multi-VLAN, trunking 802.1Q, inter-VLAN routing, jaringan wireless, serta pengalamatan IPv4/IPv6.",
    },
    toolsUsed: ["Cisco IOS CLI", "VLAN & Routing", "Wireless LAN", "Packet Tracer"],
    outcome: {
      en: "Earned 2 official Cisco Networking Academy certifications (ITN 2024 & SRWE 2025).",
      id: "Menyelesaikan 2 sertifikasi resmi Cisco Networking Academy (2024 & 2025).",
    },
  },
  {
    id: "doc-national-competitions",
    category: "competition",
    categoryLabel: {
      en: "National Competitions",
      id: "Kompetisi Nasional",
    },
    title: {
      en: "Scientific Essay & Business Plan Presentations",
      id: "Riset & Presentasi Finalis Kompetisi Nasional",
    },
    projectOrEvent: "BRIN YESC, NEXTION UNNES, NEC Vol. 2, IPGMI & DECISION",
    date: "2025 – 2026",
    location: "National",
    imageSrc: "/images/docs/competition-presentation.jpg",
    placeholderFile: "public/images/docs/competition-presentation.jpg",
    whatIDid: {
      en: "Led research teams of 2–3 students to design technical innovations in clean energy transition, digital economy, and sustainable development, pitching before national juries.",
      id: "Memimpin tim riset (2–3 orang) merumuskan gagasan inovasi transisi energi, ekonomi digital, dan SDGs serta mempresentasikannya di hadapan dewan juri nasional.",
    },
    toolsUsed: ["Research & Data Analysis", "Scientific Writing", "Pitch Deck & Presentation"],
    outcome: {
      en: "2nd Place NEXTION, 3rd Place NEC Vol. 2, Best Presenter DECISION, Top 10 BRIN YESC & Top 5 IPGMI.",
      id: "Meraih Juara 2 NEXTION, Juara 3 NEC Vol. 2, Best Presenter DECISION, Finalis BRIN YESC & Top 5 IPGMI.",
    },
  },
  {
    id: "doc-org-leadership",
    category: "organization",
    categoryLabel: {
      en: "Public Relations & Logistics",
      id: "Humas & Kepemimpinan",
    },
    title: {
      en: "PR Campaigns, External Partnerships & Event Logistics",
      id: "Manajemen Humas, Kemitraan & Logistik Kampus",
    },
    projectOrEvent: "Himpunan TRK IPB, BEM SV IPB, Vokasi 911 & Reach a Dream",
    date: "2024 – Present",
    location: "IPB University",
    imageSrc: "/images/docs/organization-activity.jpg",
    placeholderFile: "public/images/docs/organization-activity.jpg",
    whatIDid: {
      en: "Led up to 15 PR staff members, coordinated partnerships with 7 external organizations, and managed +40 logistics inventory items for campus events.",
      id: "Memimpin hingga 15 anggota tim Humas, menjalin kemitraan dengan 7 organisasi eksternal, serta mengelola pengadaan +40 item logistik acara kampus.",
    },
    toolsUsed: ["Public Relations", "Stakeholder Partnership", "Logistics & Inventory", "Student Advocacy"],
    outcome: {
      en: "Reached +2,000 campaign views and supported 8+ student organizations & committees at IPB.",
      id: "Menjangkau +2.000 tayangan kampanye publikasi dan berkontribusi aktif di 8+ organisasi/kepanitiaan IPB.",
    },
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "ccna-srwe-2025",
    code: "CCNA-02",
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    year: "2025",
    description: {
      en: "Completed Cisco Networking Academy training in Layer 2 switching, VLANs, inter-VLAN routing, wireless networking, and basic network configuration and troubleshooting.",
      id: "Menyelesaikan pelatihan Cisco Networking Academy mencakup switching, routing, jaringan wireless, serta konfigurasi dan troubleshooting dasar jaringan.",
    },
    skills: ["Switching", "Routing", "VLANs", "Wireless LAN", "Network Troubleshooting"],
  },
  {
    id: "ccna-itn-2024",
    code: "CCNA-01",
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    year: "2024",
    description: {
      en: "Completed Cisco Networking Academy training covering networking fundamentals, network protocols, IP addressing, Ethernet, and basic router and switch configuration.",
      id: "Menyelesaikan pelatihan Cisco Networking Academy mencakup fundamental jaringan, protokol jaringan, pengalamatan IP, Ethernet, serta konfigurasi dasar router dan switch.",
    },
    skills: ["Network Protocols", "IPv4 & IPv6 Addressing", "Ethernet", "Router & Switch CLI"],
  },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "nextion-2026",
    rank: {
      en: "2nd Place Winner",
      id: "Juara 2 Nasional",
    },
    title: "NEXTION 2026 National Essay Competition",
    organizer: {
      en: "Development Economics Student Association, FEB Universitas Negeri Semarang (UNNES)",
      id: "Himpunan Mahasiswa Ekonomi Pembangunan, FEB Universitas Negeri Semarang (UNNES)",
    },
    year: "2026",
    category: {
      en: "Youth Innovation & Digital Economy",
      id: "Inovasi Pemuda & Transformasi Ekonomi Digital",
    },
    description: {
      en: "Awarded 2nd Place in a national-level essay competition focusing on youth innovation and economic transformation in the digital era.",
      id: "Meraih Juara 2 tingkat nasional pada kompetisi esai yang berfokus pada inovasi generasi muda dan transformasi ekonomi di era digital.",
    },
  },
  {
    id: "nec-vol2-2026",
    rank: {
      en: "3rd Place Winner",
      id: "Juara 3 Nasional",
    },
    title: "National Essay Competition Vol. 2 (NEC Vol. 2) by INOVASI 2026",
    organizer: {
      en: "UKMFT INOVASI, Universitas Trunojoyo Madura",
      id: "UKMFT INOVASI, Universitas Trunojoyo Madura",
    },
    year: "2026",
    category: {
      en: "Sustainable Innovation & SDGs",
      id: "Inovasi Berkelanjutan & SDGs",
    },
    description: {
      en: "Awarded 3rd Place nationally, leading a 2-member team to develop an essay on sustainable innovation and the Sustainable Development Goals (SDGs).",
      id: "Meraih Juara 3 tingkat nasional, memimpin tim beranggotakan 2 orang dalam menyusun esai tentang inovasi berkelanjutan dan SDGs.",
    },
  },
  {
    id: "yesc-brin-2026",
    rank: {
      en: "Top 10 National Finalist",
      id: "Top 10 Finalis Nasional",
    },
    title: "Young Energy Scientist Competition (YESC)",
    organizer: {
      en: "Badan Riset dan Inovasi Nasional (BRIN)",
      id: "Badan Riset dan Inovasi Nasional (BRIN)",
    },
    year: "2026",
    category: {
      en: "Energy Transition Innovation",
      id: "Inovasi Transisi Energi Indonesia",
    },
    description: {
      en: "Selected as one of 10 national finalists out of 105 university participants in a competition organized by BRIN, leading a 3-member team to develop an innovative solution for Indonesia's energy transition.",
      id: "Terpilih sebagai 10 finalis nasional dari 105 peserta universitas pada kompetisi yang diselenggarakan oleh BRIN, memimpin 3 anggota tim mengembangkan solusi transisi energi Indonesia.",
    },
  },
  {
    id: "ipgmi-2026",
    rank: {
      en: "Top 5 National Finalist",
      id: "Top 5 Finalis Nasional",
    },
    title: "Inovasi Pangan dan Gizi Mahasiswa Indonesia (IPGMI)",
    organizer: {
      en: "IPGMI National Competition",
      id: "Kompetisi Nasional IPGMI",
    },
    year: "2026",
    category: {
      en: "Functional Food Innovation",
      id: "Inovasi Pangan Fungsional",
    },
    description: {
      en: "Selected as a Top 5 finalist in a national competition, leading a 3-member team to develop a scientific essay on functional food innovation for diabetes prevention.",
      id: "Terpilih sebagai Top 5 finalis nasional, memimpin 3 anggota tim menyusun esai ilmiah inovasi pangan fungsional untuk pencegahan diabetes.",
    },
  },
  {
    id: "decision-2026",
    rank: {
      en: "Best Presenter",
      id: "Best Presenter",
    },
    title: "DECISION 2026 Business Plan Competition",
    organizer: {
      en: "DECISION 2026 National Committee",
      id: "Kompetisi Business Plan DECISION 2026",
    },
    year: "2026",
    category: {
      en: "Business Plan & Pitching",
      id: "Rencana Bisnis & Presentasi",
    },
    description: {
      en: "Received the Best Presenter award for delivering and presenting an innovative business plan in DECISION 2026.",
      id: "Meraih penghargaan Best Presenter atas penyampaian dan presentasi rencana bisnis inovatif pada DECISION 2026.",
    },
  },
  {
    id: "rumah-disabilitas-2025",
    rank: {
      en: "1st Honorable Mention",
      id: "Juara Harapan 1 Nasional",
    },
    title: "National Essay Competition by Rumah Disabilitas",
    organizer: {
      en: "Rumah Disabilitas",
      id: "Rumah Disabilitas",
    },
    year: "2025",
    category: {
      en: "Disability & Social Inclusion",
      id: "Inovasi Isu Disabilitas",
    },
    description: {
      en: "Awarded 1st Honorable Mention in a national essay competition, recognizing an innovative contribution to disability-related issues.",
      id: "Meraih 1st Honorable Mention (Juara Harapan 1) pada kompetisi esai nasional melalui kontribusi gagasan inovatif terkait isu disabilitas.",
    },
  },
];

export const ORGANIZATIONS_DATA: OrganizationItem[] = [
  {
    id: "himatrek-ipb",
    organization: "Computer Engineering Technology Student Association, IPB University",
    role: {
      en: "Vice Head of Public Relations Division",
      id: "Wakil Kepala Divisi Hubungan Masyarakat (Humas)",
    },
    period: "Nov 2024 – May 2028",
    location: "Bogor, Indonesia",
    description: {
      en: "Student association representing students of the Computer Engineering Technology study program.",
      id: "Himpunan mahasiswa yang mewakili mahasiswa program studi Teknologi Rekayasa Komputer IPB.",
    },
    bullets: [
      {
        en: "Managed internal and external communications to strengthen the study program's public image.",
        id: "Mengelola komunikasi internal dan eksternal untuk memperkuat citra publik program studi.",
      },
      {
        en: "Coordinated partnerships, social media, and collaborative activities to support student development.",
        id: "Mengoordinasikan kemitraan, media sosial, dan kegiatan kolaboratif untuk mendukung pengembangan mahasiswa.",
      },
    ],
  },
  {
    id: "bem-sv-ipb",
    organization: "BEM Sekolah Vokasi IPB University",
    role: {
      en: "Staff, Student Welfare Department (Adkesmah)",
      id: "Staf Departemen Advokasi & Kesejahteraan Mahasiswa (Adkesmah)",
    },
    period: "Jan 2025 – Dec 2025",
    location: "Bogor, Indonesia",
    description: {
      en: "Student Executive Board representing and advocating for vocational students.",
      id: "Badan Eksekutif Mahasiswa yang mewakili dan mengadvokasi mahasiswa Sekolah Vokasi IPB.",
    },
    bullets: [
      {
        en: "Monitored student welfare and facilitated communication with university administration.",
        id: "Memantau kesejahteraan mahasiswa dan memfasilitasi komunikasi dengan pihak administrasi kampus.",
      },
      {
        en: "Managed student complaints and disseminated financial aid and scholarship information.",
        id: "Mengelola keluhan mahasiswa serta menyebarkan informasi bantuan biaya pendidikan dan beasiswa.",
      },
      {
        en: "Collected student data to identify financial and academic challenges.",
        id: "Mengumpulkan data mahasiswa untuk mengidentifikasi kendala finansial dan akademik.",
      },
    ],
  },
  {
    id: "vokasi-911",
    organization: "Vokasi 911 (V911) — IPB University",
    role: {
      en: "Head of Public Relations Division",
      id: "Kepala Divisi Hubungan Masyarakat (Humas)",
    },
    period: "Mar 2025 – Aug 2025",
    location: "Bogor, Indonesia",
    description: {
      en: "Student-led social and educational initiative focused on raising awareness of student welfare and social issues.",
      id: "Inisiatif sosial dan edukasi mahasiswa yang berfokus pada kesadaran kesejahteraan mahasiswa dan isu sosial.",
    },
    bullets: [
      {
        en: "Led a 15-member public relations team in managing event communications, publications, and promotional activities.",
        id: "Memimpin 15 anggota tim Humas dalam mengelola komunikasi acara, publikasi, dan promosi.",
      },
      {
        en: "Coordinated partnerships with 7 external organizations, media partners, and stakeholders.",
        id: "Mengoordinasikan kemitraan dengan 7 organisasi eksternal, media partner, dan pemangku kepentingan.",
      },
      {
        en: "Oversaw social media campaigns and information distribution to reach +2,000 views.",
        id: "Mengawasi kampanye media sosial dan distribusi informasi hingga mencapai +2.000 tayangan.",
      },
    ],
  },
  {
    id: "scholarship-reach-dream",
    organization: "Scholarship for Reach a Dream, IPB University",
    role: {
      en: "Vice Head of Logistics Division",
      id: "Wakil Kepala Divisi Logistik",
    },
    period: "Apr 2025 – Sep 2025",
    location: "Bogor, Indonesia",
    description: {
      en: "Campus scholarship preparation and educational event at IPB University.",
      id: "Kegiatan persiapan beasiswa dan edukasi di lingkungan IPB University.",
    },
    bullets: [
      {
        en: "Coordinated 13 logistics team members in preparing and distributing equipment for event operations.",
        id: "Mengoordinasikan 13 anggota tim logistik dalam menyiapkan dan mendistribusikan perlengkapan operasional acara.",
      },
      {
        en: "Managed inventory and procurement of +40 operational items to support event requirements.",
        id: "Mengelola inventaris dan pengadaan +40 barang operasional untuk mendukung kebutuhan acara.",
      },
      {
        en: "Monitored logistics execution and resource allocation throughout the event.",
        id: "Memantau jalannya eksekusi logistik dan alokasi sumber daya selama acara berlangsung.",
      },
    ],
  },
  {
    id: "tek-gather-2025",
    organization: "TEK Gather 2025 — IPB University",
    role: {
      en: "Head of Public Relations Division",
      id: "Kepala Divisi Hubungan Masyarakat (Humas)",
    },
    period: "Dec 2024 – Jan 2025",
    location: "Bogor, Indonesia",
    description: {
      en: "Student gathering for the Computer Engineering Technology study program.",
      id: "Kegiatan temu mahasiswa program studi Teknologi Rekayasa Komputer.",
    },
    bullets: [
      {
        en: "Led an 8-member public relations team to manage event branding, publications, and promotional campaigns.",
        id: "Memimpin 8 anggota tim Humas untuk mengelola branding acara, publikasi, dan kampanye promosi.",
      },
      {
        en: "Coordinated communication and promotional content across 5 communication channels.",
        id: "Mengoordinasikan komunikasi dan konten promosi di 5 kanal komunikasi.",
      },
      {
        en: "Supported participant engagement and information dissemination for +50 participants.",
        id: "Mendukung keterlibatan peserta dan penyebaran informasi bagi +50 peserta kegiatan.",
      },
    ],
  },
  {
    id: "pioneer-moeda-sman13",
    organization: "Pioneer Moeda BEM SV IPB & OSIS/Paskibra SMAN 13 Bekasi",
    role: {
      en: "Organizational Intern (BEM SV) & Division 7 Lead / Paskibra Secretary I",
      id: "Organizational Intern (BEM SV) & Ketua Sekbid 7 OSIS / Sekretaris I Paskibra",
    },
    period: "2021 – 2024",
    location: "Bogor & Bekasi",
    description: {
      en: "Early leadership foundation across BEM SV IPB organizational internship and high school student council.",
      id: "Fondasi organisasi melalui program Pioneer Moeda BEM SV IPB serta kepemimpinan di OSIS & Paskibra SMAN 13 Bekasi.",
    },
    bullets: [
      {
        en: "Adapted to BEM SV IPB workflow and collaborated on departmental programs (Sep – Nov 2024).",
        id: "Beradaptasi dengan alur kerja BEM SV IPB dan berkolaborasi dalam eksekusi program departemen (Sep – Nov 2024).",
      },
      {
        en: "Led 25+ OSIS members, chaired the 2023 Class Meeting (25+ committees), and represented the school at Subdistrict Purna Paskibraka Indonesia.",
        id: "Memimpin 25+ anggota OSIS, mengetuai Class Meeting 2023 (25+ panitia), dan mewakili sekolah di Purna Paskibraka Indonesia tingkat kecamatan.",
      },
    ],
  },
];
