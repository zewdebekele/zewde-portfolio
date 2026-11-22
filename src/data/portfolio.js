// Single source of truth — edit everything here.
const portfolio = {
  name: "Zewde Bekele Biru",
  role: "Full-Stack Developer & 4th-Year Software Engineering Student at Mekelle University",
  university: "Mekelle University",
  phone: "0991305516",
  phoneHref: "tel:+251991305516",
  email: "zewdebekele314@gmail.com",
  telegram: "@MycorownB12",
  telegramHref: "https://t.me/MycorownB12",
  photo: "/assets/profile.jpg",
  cv: "/assets/cv.pdf",
  typing: ["Full-Stack Developer", "React Enthusiast", "ML Explorer", "Problem Solver"],
  bio: "A passionate 4th-year Software Engineering student at Mekelle University. Full-stack web developer growing daily, always learning new skills, and building real-world projects.",
  stats: [
    { value: 10, suffix: "+", label: "Projects" },
    { value: 15, suffix: "+", label: "Skills" },
    { value: 2, suffix: "+", label: "Years Coding" },
  ],
  learning: ["Cloud Architecture", "AI Integration", "System Design", "TypeScript"],
  // `icon` keys map to src/icons.js
  skills: [
    { category: "Frontend", items: [
      { name: "HTML", icon: "html" }, { name: "CSS", icon: "css" }, { name: "JavaScript", icon: "js" },
      { name: "React", icon: "react" }, { name: "Vite", icon: "vite" }, { name: "Next.js", icon: "next" } ] },
    { category: "Backend", items: [
      { name: "Python", icon: "python" }, { name: "Node.js", icon: "node" },
      { name: "Django", icon: "django" }, { name: "PostgreSQL", icon: "postgres" } ] },
    { category: "CS / ML", items: [
      { name: "Data Structures", icon: "ds" }, { name: "Machine Learning", icon: "ml" } ] },
  ],
  projects: [
    { title: "E-Commerce Platform", description: "Full-stack store with auth, cart, checkout and an admin dashboard.", tags: ["React", "Node.js", "PostgreSQL"], image: "/assets/e-commerce-project.jpeg", github: "https://github.com/", live: "https://example.com", gradient: "from-purple-600 to-cyan-500" },
    { title: "ML Price Predictor", description: "Regression model served through a Flask API to estimate prices from features.", tags: ["Python", "scikit-learn", "Flask"], image: "/assets/ML Price Predictor.jpeg", github: "https://github.com/", live: "https://example.com", gradient: "from-cyan-500 to-pink-500" },
    { title: "Task Manager App", description: "Kanban-style task manager with a Django REST backend and React + Vite frontend.", tags: ["React", "Vite", "Django"], image: "/assets/task manager app.jpeg", github: "https://github.com/", live: "https://example.com", gradient: "from-pink-500 to-purple-600" },
  ],
  nav: ["Home", "About", "Skills", "Projects", "Contact"],
};
export default portfolio;
