import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import { NavBar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection"
import { Aboutme } from "../components/AboutMe"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectSection } from "../components/ProjectSection"
import { ContactMe } from "../components/Contact"
import { Footer } from "../components/Footer"

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Background Effect */}
        <StarBackground />

        {/* Navbar */}
        <NavBar />

        
        {/* Main content */}
        <main>
            <HeroSection />
            <Aboutme />
            <SkillsSection />
            <ProjectSection />
            <ContactMe />
        </main>

        {/* footer */}
        <Footer />


        </div>
    )
}