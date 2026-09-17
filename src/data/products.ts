export type Product = {
  id: string;
  slug: string;
  appUrl: string;
  name: string;
  shortName: string;
  category: string;
  eyebrow: string;
  description: string;
  hero: string;
  overview: string;
  problem: string;
  solution: string;
  modules: string[];
  workflow: string[];
  roles: { name: string; focus: string }[];
  features: { title: string; description: string }[];
  screens: { name: string; label: string; description: string }[];
  status: "active" | "planned";
  accent: "academy" | "legal" | "study";
};

export const products: Product[] = [
  {
    id: "training-institute",
    slug: "training-institute-crm",
    appUrl: "https://traning.aureleen.uk/login",
    name: "Training Institute CRM",
    shortName: "Training Institute",
    category: "Training Institute Management",
    eyebrow: "Education operations / 01",
    description:
      "A centralized platform for courses, trainers, trainees, batches, attendance, assessments, finance and institutional operations.",
    hero: "A complete operating system for modern training institutes.",
    overview:
      "Training Institute CRM brings academic delivery and institutional administration into one structured environment. Teams can coordinate people, programs, learning activity, finance and reporting without splitting operations across disconnected tools.",
    problem:
      "Training institutes often manage admissions, classes, attendance, assessments and payments in separate systems. That fragmentation makes everyday coordination harder and limits operational visibility.",
    solution:
      "The system creates a shared operating model across academic and administrative teams, connecting each learner journey to the course, batch, trainer, assessment and financial records around it.",
    modules: [
      "Dashboard",
      "Users",
      "Trainers",
      "Trainees",
      "Courses",
      "Batches",
      "Enrollments",
      "Attendance",
      "Curriculum",
      "Assignments",
      "Quizzes",
      "Exams",
      "Results",
      "Finance",
      "Payments",
      "Invoices",
      "Expenses",
      "Payroll",
      "Certificates",
      "Announcements",
      "Reports",
      "Audit Logs",
      "Settings",
    ],
    workflow: [
      "Student",
      "Enrollment",
      "Course",
      "Batch",
      "Trainer",
      "Classes",
      "Attendance",
      "Assessment",
      "Result",
      "Certificate",
    ],
    roles: [
      { name: "Institute Admin", focus: "Programs, people, finance and oversight" },
      { name: "Trainer", focus: "Classes, attendance and assessments" },
      { name: "Trainee", focus: "Learning activity, results and certificates" },
      { name: "Accountant", focus: "Payments, invoices and expenses" },
    ],
    features: [
      {
        title: "Connected academic records",
        description:
          "Keep courses, batches, trainers and learners aligned through a consistent data structure.",
      },
      {
        title: "Operational visibility",
        description: "Review academic and administrative activity from one controlled workspace.",
      },
      {
        title: "Role-specific workspaces",
        description: "Give each team the information and actions relevant to its responsibilities.",
      },
    ],
    screens: [
      {
        name: "Overview",
        label: "Institution dashboard",
        description:
          "A consolidated view of enrollment, active batches, attendance and financial activity.",
      },
      {
        name: "Batches",
        label: "Batch operations",
        description:
          "Coordinate schedules, trainers, learners and attendance from one operational record.",
      },
      {
        name: "Results",
        label: "Assessment record",
        description:
          "Track evaluation activity and outcomes through a structured academic workflow.",
      },
    ],
    status: "active",
    accent: "academy",
  },
  {
    id: "law-firm",
    slug: "law-firm-crm",
    appUrl: "https://law.aureleen.uk/",
    name: "Law Firm CRM",
    shortName: "Law Firm",
    category: "Legal Practice Management",
    eyebrow: "Legal operations / 02",
    description:
      "A specialized system for organizing clients, cases, legal workflows, documents, activities, billing and firm operations.",
    hero: "Structured case operations for modern legal practices.",
    overview:
      "Law Firm CRM organizes matter activity around a complete client and case record. It gives legal teams a consistent place to coordinate documents, hearings, tasks, communications and commercial administration.",
    problem:
      "Legal work moves across correspondence, documents, deadlines, hearings and billing. When those records are fragmented, teams lose context and administrative work becomes difficult to control.",
    solution:
      "The system connects the lifecycle of a matter—from client intake and case activity to documentation and billing—without forcing legal teams into a generic sales pipeline.",
    modules: [
      "Clients",
      "Cases",
      "Matters",
      "Case Activities",
      "Documents",
      "Tasks",
      "Hearings",
      "Deadlines",
      "Communications",
      "Billing",
      "Invoices",
      "Payments",
      "Team Management",
      "Reports",
      "Notifications",
      "Audit Logs",
      "Settings",
    ],
    workflow: [
      "Client",
      "Matter",
      "Case Team",
      "Activities",
      "Documents",
      "Hearings",
      "Deadlines",
      "Billing",
      "Resolution",
    ],
    roles: [
      { name: "Firm Admin", focus: "Practice controls, teams and oversight" },
      { name: "Lawyer", focus: "Matters, documents, activities and hearings" },
      { name: "Case Coordinator", focus: "Deadlines, tasks and communication" },
      { name: "Accounts", focus: "Billing, invoices and payments" },
    ],
    features: [
      {
        title: "Matter-centered records",
        description:
          "Keep client, case, document and activity context together throughout the legal workflow.",
      },
      {
        title: "Deadline control",
        description: "Coordinate hearings, tasks and critical dates across the responsible team.",
      },
      {
        title: "Administrative continuity",
        description:
          "Connect legal work with billing and operational reporting in the same system.",
      },
    ],
    screens: [
      {
        name: "Cases",
        label: "Matter control",
        description:
          "A structured view of active matters, ownership, stage, dates and recent activity.",
      },
      {
        name: "Documents",
        label: "Document register",
        description: "Keep case files organized against the correct client and matter context.",
      },
      {
        name: "Billing",
        label: "Commercial activity",
        description: "Bring invoices, payments and matter-level billing into operational view.",
      },
    ],
    status: "active",
    accent: "legal",
  },
  {
    id: "higher-study",
    slug: "higher-study-crm",
    appUrl: "https://app.fly8.study/login",
    name: "Higher Study CRM",
    shortName: "Higher Study",
    category: "Study Abroad Management",
    eyebrow: "International education / 03",
    description:
      "A centralized platform for students, applications, universities, programs, counselors, representatives, visa workflows and study-abroad operations.",
    hero: "One operating system for the complete study-abroad journey.",
    overview:
      "Higher Study CRM connects student advisory, program selection, applications and post-offer support. It helps education organizations coordinate complex, multi-party journeys with a clear operational record.",
    problem:
      "Study-abroad operations span students, counselors, representatives, universities, applications and documentation. Generic CRMs rarely reflect the sequence or detail of that work.",
    solution:
      "The system maps each student journey from profile and counseling through application, visa and travel support, keeping teams and representatives aligned around the same current record.",
    modules: [
      "Students",
      "Profiles",
      "Representatives",
      "Counselors",
      "Universities",
      "Programs",
      "Applications",
      "Service Requests",
      "Visa Support",
      "Interview Support",
      "Accommodation",
      "Education Loans",
      "Travel",
      "Jobs Abroad",
      "Tasks",
      "Communication",
      "Reports",
      "Administration",
    ],
    workflow: [
      "Student",
      "Profile",
      "Counselor",
      "University / Program",
      "Application",
      "Documentation",
      "Visa",
      "Travel",
    ],
    roles: [
      { name: "Super Admin", focus: "Organization, teams and operational control" },
      { name: "Counselor", focus: "Profiles, programs and student progress" },
      { name: "Representative", focus: "Referrals, applications and updates" },
      { name: "Student", focus: "Requirements, progress and communication" },
    ],
    features: [
      {
        title: "Journey-level visibility",
        description:
          "Follow each student from first profile through applications and post-offer services.",
      },
      {
        title: "Institutional structure",
        description:
          "Organize universities, programs, requirements and applications in connected records.",
      },
      {
        title: "Coordinated service delivery",
        description: "Keep counselors, representatives and students aligned as cases move forward.",
      },
    ],
    screens: [
      {
        name: "Students",
        label: "Student pipeline",
        description:
          "See profile readiness, assigned counselor and current journey stage at a glance.",
      },
      {
        name: "Applications",
        label: "Application workspace",
        description: "Coordinate programs, documents, status and institutional communication.",
      },
      {
        name: "Services",
        label: "Post-offer support",
        description:
          "Track visa, interview, accommodation and travel services around one student record.",
      },
    ],
    status: "active",
    accent: "study",
  },
];

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
