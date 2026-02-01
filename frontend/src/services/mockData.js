export const mockProjects = [
  {
    id: 101,
    title: "Smart Attendance System (Face + QR)",
    description:
      "A hybrid attendance system for lectures using face recognition and fallback QR scanning, with admin dashboard and reports.",
    status: "IN_PROGRESS",
    tags: ["AI", "Computer Vision", "Spring Boot", "React"],
    membersCount: 4
  },
  {
    id: 102,
    title: "Campus Lost & Found Tracker",
    description:
      "University-wide lost & found system with posts, categories, claim verification, and moderation for mentors/admins.",
    status: "IN_PROGRESS",
    tags: ["MySQL", "CRUD", "Moderation", "Web App"],
    membersCount: 6
  },
  {
    id: 103,
    title: "Robotics Exhibition Management Portal",
    description:
      "Manage teams, booths, schedules, judges, announcements, and live leaderboard for a university robotics exhibition.",
    status: "COMPLETED",
    tags: ["Events", "Dashboard", "Role Based", "Analytics"],
    membersCount: 8
  },
  {
    id: 104,
    title: "Student Research Paper Hub",
    description:
      "Upload, tag, and search student research papers. Mentor review + approval workflow included.",
    status: "IN_PROGRESS",
    tags: ["Search", "Review", "PDF", "Workflow"],
    membersCount: 3
  },
  {
    id: 105,
    title: "Hostel Maintenance Request System",
    description:
      "Submit maintenance requests, track status, assign tasks, and notify students. Simple, fast, and mobile-friendly.",
    status: "COMPLETED",
    tags: ["Tickets", "Notifications", "UX"],
    membersCount: 5
  }
];

export const mockQuestions = [
  {
    id: 201,
    title: "How should we structure JWT roles in Spring Boot?",
    body:
      "We have STUDENT and MENTOR roles. What’s the cleanest way to implement route-level authorization and mentor moderation endpoints?",
    answersCount: 5,
    createdAt: "2026-01-28"
  },
  {
    id: 202,
    title: "Best way to paginate projects in React + Spring Page?",
    body:
      "Should we keep pagination logic on server only? What response format is easiest for frontend components?",
    answersCount: 3,
    createdAt: "2026-01-27"
  },
  {
    id: 203,
    title: "How to store tags efficiently in MySQL?",
    body:
      "Should tags be a separate table with many-to-many relation, or store as JSON? What’s best for searching?",
    answersCount: 7,
    createdAt: "2026-01-24"
  }
];

export const mockResources = [
  {
    id: 301,
    type: "ARTICLE",
    title: "REST API Design Guidelines (Simple & Practical)",
    description: "A short checklist to keep your API consistent: naming, status codes, pagination, errors.",
    url: "https://example.com/rest-guidelines",
    tags: ["API", "REST", "Backend"]
  },
  {
    id: 302,
    type: "VIDEO",
    title: "React Router v6 Crash Course",
    description: "Routes, nested routes, protected routes, and layouts.",
    url: "https://example.com/react-router",
    tags: ["React", "Routing"]
  },
  {
    id: 303,
    type: "TOOL",
    title: "Postman Collection Template",
    description: "A starter Postman collection for testing auth + CRUD endpoints quickly.",
    url: "https://example.com/postman-template",
    tags: ["Testing", "API"]
  }
];

export const mockShowcase = [
  {
    id: 401,
    category: "Robotics",
    title: "Line-Following Robot With PID Control",
    description: "Stable tracking, tuned PID, and clean sensor calibration. Built for competition performance.",
    likesCount: 42
  },
  {
    id: 402,
    category: "AI",
    title: "Student Helpdesk Chatbot",
    description: "A chatbot trained on university FAQ with intent detection and escalation to mentor/admin.",
    likesCount: 28
  },
  {
    id: 403,
    category: "Web",
    title: "ProjectHub UI Kit (Modern University Theme)",
    description: "Reusable components + consistent spacing, with accessibility-friendly colors and layouts.",
    likesCount: 35
  }
];
