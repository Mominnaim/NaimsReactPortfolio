import { useState } from "react"
import { cn } from "../lib/utils"

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "AngularJS", level: 85, category: "Frontend" },
  { name: "Bootstrap", level: 80, category: "Frontend" },
  { name: "React", level: 80, category: "Frontend" },
  { name: "NextJs", level: 95, category: "Frontend" },
  
  // Backend
  { name: "Express", level: 95, category: "Backend" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Django", level: 85, category: "Backend" },
  { name: "C#", level: 50, category: "Backend" },

  // Database
  { name: "MongoDB", level: 70, category: "Database" },
  { name: "SQL Server", level: 85, category: "Database" },
  { name: "Postgres", level: 50, category: "Database" },
  { name: "MySQL", level: 80, category: "Database" }, 
  { name: "Prisma", level: 80, category: "Database" },

  // DevOps / Tools
  { name: "Git", level: 95, category: "Tools" },
  { name: "GitHub", level: 90, category: "Tools" },
  { name: "Docker", level: 70, category: "Tools" },
  { name: "CI/CD", level: 70, category: "Tools" },
  { name: "Visual Studio Code", level: 80, category: "Tools" },

  // APIs & Architecture
  { name: "REST APIs", level: 85, category: "Backend" },
  { name: "SOAP Services", level: 70, category: "Backend" },
  { name: "MVT Architecture", level: 70, category: "Backend" },

  // Cloud
  { name: "AWS EC2", level: 50, category: "Cloud" },
  { name: "AWS S3", level: 50, category: "Cloud" },
  { name: "AWS Lambda", level: 50, category: "Cloud" },

  // Misc
  { name: "Stripe", level: 75, category: "Tools" },
  { name: "Auth0", level: 70, category: "Tools" },
  { name: "Resend", level: 60, category: "Tools" },
  { name: "Markdown", level: 50, category: "Tools" },
];

const categories = ["all", "Frontend", "Backend", "Tools"]

export const SkillsSection = () => {
    const [activeCategory,setActiveCategory] = useState("all");

    const filterSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button key={key} onClick={()=> setActiveCategory(category)} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                        )}>
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filterSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div>
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-grow_1.5s_ease-out"
                                style={{width: `skill.level +  "%" `}}/>
                            </div>
                            <div className="text- mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}