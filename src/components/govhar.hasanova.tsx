// components/govhar.hasanova.tsx

import './Portfolio.css';

interface Project {
    id: number;
    title: string;
    type: string;
}

interface UserData {
    name: string;
    role: string;
    bio: string;
    img: string;
    skills: string[];
    projects: Project[];
}

export default function Portfolio() {
    const user: UserData = {
  name: "Govhar Hasanova",

  role:
    "Customer Service Specialist | Frontend Developer | Agile Enthusiast",

  bio:
    "I am currently working at ABB as a Customer Service Specialist with over 3 years of professional experience in the banking sector. Alongside my banking career, I am actively developing my frontend programming skills through practical projects and continuous learning. I have experience working with React, JavaScript, Tailwind CSS, and modern web technologies. Additionally, I am interested in Agile methodologies and hold both PSM I and Agile Playbook certifications. My goal is to grow as an IT professional by building responsive, user-friendly, and modern web applications.",

      img:"../assets/govhar img.jpg",
    skills: [
    "HTML5",
    "CSS3",
    "JavaScript ES6",
    "React",
    "Tailwind CSS",
    "Git & GitHub",
    "Vite",
    "Responsive Design",
    "Agile Fundamentals",
    "Scrum Basics"
  ],

      
      projects:[
    {id: 1,title: "personal-portfolio",type: "Frontend"},

    {id: 2, title: "bank-dashboard-ui", type: "Frontend"},

    {id: 3, title: "react-task-manager", type: "Frontend" },

    {id: 4, title: "digital-bank-landing-page",type: "Frontend"},

    {id: 5,title: "responsive-ecommerce-ui",type: "Frontend"},

    {id: 6, title: "weather-app-react",type: "Frontend"},

    {id: 7,title: "notes-app", type: "Frontend"},

    {id: 8, title: "form-validation-project",type: "Frontend"},

    {id: 9,title: "agile-team-dashboard", type: "Frontend"}
  ]

};

    return (
        <div className="portfolio-container">
            <nav className='glass-nav'>
                <div className='logo'>{user.name[0]}P.</div>
                <button className='contact-btn'>Let's Talk</button>
            </nav>

            <main className='hero-section'>
                <div className='hero-content'>
                    <div className='badge'>Vite + TS Powered</div>
                    <h1>Building <span className='gradient-text'>Scalable</span> Future</h1>
                    <p>{user.bio}</p>
                    <div className='hero-actions'>
                        <button className='btn-primary'>Ishlerim</button>
                        <button className='btn-secondary'>Elaqe</button>
                    </div>
                </div>
                
                <div className='profile-card-premiuim'>
                    <img src = {user.img} alt="Govhar Hasanova" />
                    <h2>{user.name}</h2>
                    <p>{user.role}</p>
                    <div className='skills-grid'>
                        {user.skills.map(s => <span key={s}>{s}</span>)}
                    </div>
                </div>
            </main>
        </div>
    );
}