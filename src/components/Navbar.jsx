import { useEffect, useState } from "react"
import { cn } from "../lib/utils"
import {X, Menu} from "lucide-react"

const NavItems = [
    {name: "Home", href:"#hero"},
    {name: "About", href:"#about"},
    {name: "Skills", href:"#skills"},
    {name: "Project", href:"#projects"},
    {name: "Contact", href:"#contact"},
];

export const NavBar = () => {
    const [isScrolled, setScrolled] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 10) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMenuOpen]);


    return (
        <nav className={cn("fixed top-0 w-full z-40 transition-all duration-300",
            isVisible ? "translate-y-0" : "-translate-y-full",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className="container flex items-center justify-between">
                <a href="#hero" className="text-xl font-bold text-primary flex items-center">
                    <span className="relative z-10"> 
                        <span className="text-glow text-foreground">
                            Naim's 
                        </span>
                        {" "}Portfolio
                    </span>
                </a>

                {/* Desktop */}
                <div className="hidden md:flex space-x-8">
                {NavItems.map((item, key) => (
                    <a key={key} href={item.href}  className="text-foreground/80 hover:text-primary transition-colors duration-300">
                        {item.name}
                    </a>
                ))}
                </div>

                {/* Mobile */}

                <button onClick={() => setMenuOpen((prev)=> !prev)} className="md:hidden p-2 text-foreground z-50 mr-14"
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
                     {isMenuOpen? <X size={24} /> : <Menu size={24} />}</button>
                <div className={cn(
                    "fixed inset-0 bg-white/80 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden", 
                    isMenuOpen 
                    ? "opacity-100 pointer-events-auto" 
                    : "opacity-0 pointer-events-none "
                )}>
                    <div className="flex flex-col space-y-8 text-xl">
                        {NavItems.map((item, key) => (
                            <a key={key} 
                                href={item.href}  
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setMenuOpen(false)}>
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}