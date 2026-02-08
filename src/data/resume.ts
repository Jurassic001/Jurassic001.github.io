import type { ResumeData } from "../types/resume";

/**
 * ╔════════════════════════════════════════════════════════════╗
 * ║  SINGLE SOURCE OF TRUTH — Edit this file to update the   ║
 * ║  entire portfolio. All sections read from this object.    ║
 * ╚════════════════════════════════════════════════════════════╝
 *
 * Data extracted from resume LaTeX source (authoritative).
 */

const resumeData: ResumeData = {
  basics: {
    name: "Max Haberer",
    label: "Computer Engineering Student",
    email: "mhaberer25@gmail.com",
    website: "https://jurassic001.github.io",
    location: "College Station, TX",
    image: "/img/mh_headshot.jpg",
    avatarUrl: "https://avatars.githubusercontent.com/u/119370602?v=4",
    profiles: [
      {
        network: "GitHub",
        username: "Jurassic001",
        url: "https://github.com/Jurassic001",
      },
      {
        network: "LinkedIn",
        username: "Maxwell Haberer",
        url: "https://www.linkedin.com/in/maxwell-haberer-280a0a368/",
      },
    ],
  },

  summary:
    "Computer engineering student with hands-on experience in systems engineering, software development, aerial vehicles, and robotics. Experienced with design and implementation of integrated control systems and software, applying requirements analysis, verification, and validation processes. Passionate about aerospace innovation, control system modeling, and computer architecture.",

  experience: [
    {
      id: "tamu-rocketry",
      company: "Texas A&M Sounding Rocketry Team",
      role: "Avionics Engineer",
      startDate: "2025",
      endDate: "Present",
      bullets: [
        "Developed, tested, and deployed embedded systems for telemetry, onboard logic, and radar systems on high-powered rockets",
      ],
      tags: ["Embedded Systems", "Telemetry", "Radar", "C", "STM32"],
      category: "leadership",
    },
    {
      id: "bell-avr",
      company: "Bell Advanced Vertical Robotics Competition",
      role: "AVR Drone Lead",
      startDate: "2023",
      endDate: "2024",
      bullets: [
        "Spearheaded software development enabling autonomous drone flight using timing, inertial-based, and visual-based tracking mechanisms",
        "Developed, integrated and tested independent unmanned vehicle subsystems, including thermal detection & processing and electromagnet control firmware",
        "Modeled rotor downwash using CFD analysis and component strength in Fusion 360 to determine optimal designs for 3D-printed mechanisms",
        "Redefined system architecture, eliminating dependencies on 5 GHz WiFi and an external ground control station, improving vehicle performance in unpermissive RF environments",
        "Conducted verification testing of drone systems in a recreated competition field, executing full mission tests that simulated competition conditions",
      ],
      tags: [
        "Python",
        "C++",
        "PX4",
        "MavLink",
        "Fusion 360",
        "Jetson Nano",
        "Systems Engineering",
      ],
      link: "https://github.com/Jurassic001/AVR-2024",
      category: "leadership",
    },
    {
      id: "helm-tamuhack",
      company: "TAMUhack '26",
      role: "Helm — Hackathon Winner",
      startDate: "2026",
      endDate: "2026",
      bullets: [
        "Built a C++ backend integrating Presage SmartSpectra SDK for real-time physiological sensing via live camera input",
        "Designed a Python GUI + WSL2 C++ pipeline with FFmpeg/TCP streaming and JSON messaging for low-latency data flow",
        "Supported team execution by delegating tasks, managing source control, and contributing systems engineering plus frontend tweaks",
      ],
      tags: ["C++", "Python", "FFmpeg", "WSL2", "TCP", "Systems Engineering"],
      link: "https://github.com/Jurassic001/helm",
      category: "leadership",
    },
    {
      id: "eagle-scout",
      company: "Boy Scouts of America",
      role: "Eagle Scout Project Lead",
      startDate: "2024",
      endDate: "2024",
      bullets: [
        "Organized and led a team of Boy Scouts to restore a community garden at an elderly living facility, guiding them through problem-solving and project delivery",
        "Planned project phases, coordinated resources, and managed timelines while communicating with facility staff and volunteers",
      ],
      tags: ["Leadership", "Project Management"],
      category: "leadership",
    },
    {
      id: "holmes-aquatic",
      company: "Holmes Aquatic Center",
      role: "Guest Services Manager",
      startDate: "May 2023",
      endDate: "Aug 2025",
      bullets: [
        "Managed guest check-ins, concessions, party events, and maintenance tasks while ensuring safety and a positive experience for all patrons",
        "Strengthened customer service skills through frequent interaction with guests and attention to both safety and hospitality",
      ],
      tags: ["Customer Service", "Operations"],
      category: "work",
    },
    {
      id: "mathnasium",
      company: "Mathnasium",
      role: "Mathematics Tutor",
      startDate: "Oct 2023",
      endDate: "May 2025",
      bullets: [
        "Taught small-group math classes for students ages eight to 14, delivering customized lessons, monitoring progress, and encouraging independent learning",
        "Strengthened teaching and communication skills by adapting instruction to student needs and collaborating with colleagues on daily operations",
      ],
      tags: ["Teaching", "Communication", "Mathematics"],
      category: "work",
    },
  ],

  projects: [
    {
      id: "avr-2024",
      name: "AVR-2024",
      description:
        "Jetson Nano software, PCC/PX4 flight-controller firmware, and a high-level testing/data-collection GUI for the Bell AVR competition drone. Led the full software, electrical, and mechanical integration for Team Zephyrus (Highland Park Scots), placing 4th nationally and winning the Judge's Choice Award for autonomous flight.",
      techStack: [
        "Python",
        "C++",
        "PX4",
        "MavLink",
        "QGroundControl",
        "Jetson Nano",
        "Docker",
      ],
      githubUrl: "https://github.com/Jurassic001/AVR-2024",
      outcomes: [
        "4th place nationally",
        "Judge's Choice Award for autonomous flight",
      ],
      featured: true,
    },
    {
      id: "helm",
      name: "Helm",
      description:
        "A real-time physiological sensing application built at TAMUhack '26. Integrates a C++ backend with the Presage SmartSpectra SDK for live camera-based health monitoring, paired with a Python GUI for visualization and a WSL2 pipeline with FFmpeg/TCP streaming for low-latency data flow.",
      techStack: ["C++", "Python", "FFmpeg", "WSL2", "TCP", "JSON"],
      githubUrl: "https://github.com/Jurassic001/helm",
      outcomes: ["TAMUhack '26 Winner"],
      featured: true,
    },
    {
      id: "simple-ytdl",
      name: "simple_ytdl",
      description:
        "An easy-to-use, text-based program for downloading YouTube videos at high quality, utilizing industry-standard binaries (yt-dlp and FFmpeg) to download, process, and convert video and audio files.",
      techStack: ["Python", "yt-dlp", "FFmpeg"],
      githubUrl: "https://github.com/Jurassic001/simple_ytdl",
      outcomes: [
        "Cross-platform releases distributed on GitHub",
        "Self-developed CI/CD workflows",
      ],
      featured: false,
    },
  ],

  education: [
    {
      id: "tamu",
      institution: "Texas A&M University — College of Engineering",
      degree: "B.S.",
      field: "Computer Engineering (CPEN)",
      startDate: "Aug 2025",
      endDate: "Present",
      honors: [],
    },
    {
      id: "hphs",
      institution: "Highland Park High School",
      degree: "High School Diploma",
      startDate: "Sep 2021",
      endDate: "May 2025",
      honors: [
        "Boy Scouts of America — Eagle Scout",
        "National Honors Society",
        "Young Men's Service League",
      ],
    },
  ],

  skills: [
    {
      name: "Programming & Software",
      skills: [
        "Python",
        "Rust",
        "Embedded C",
        "C++",
        "Docker",
        "Git / GitHub",
        "CubeIDE",
        "VS Code",
      ],
      highlighted: ["Python", "C++", "Rust", "Docker"],
    },
    {
      name: "Hardware & Equipment",
      skills: [
        "3D Printing",
        "STM32 Microcontrollers",
        "Soldering",
        "Multimeters",
        "Standard Tools",
      ],
      highlighted: ["STM32 Microcontrollers", "3D Printing"],
    },
    {
      name: "Engineering & Design",
      skills: [
        "Systems Engineering",
        "CI/CD",
        "DevOps",
        "Autodesk Fusion 360",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe Premiere Pro",
      ],
      highlighted: ["Systems Engineering", "CI/CD"],
    },
  ],

  awards: [
    {
      title: "TAMUhack '26 Winner",
      issuer: "TAMUhack",
      date: "2026",
      description: "Won TAMUhack '26 with Helm — a real-time physiological sensing application.",
    },
    {
      title: "Judge's Choice Award — Autonomous Flight",
      issuer: "Bell Advanced Vertical Robotics",
      date: "2024",
      description:
        "Awarded for demonstrating fully autonomous drone flight at the Bell AVR competition. Team Zephyrus placed 4th nationally.",
    },
    {
      title: "Eagle Scout",
      issuer: "Boy Scouts of America",
      date: "2024",
      description:
        "Highest rank in the BSA. Led a service project to restore a community garden at an elderly living facility.",
    },
  ],
};

export default resumeData;
