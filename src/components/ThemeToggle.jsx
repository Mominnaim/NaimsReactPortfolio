import {Sun, Moon} from "lucide-react";
import {useEffect, useState} from "react"
import { cn } from "../lib/utils";

export const ThemeToggle = () => {

    const [isDarkmode,setIsdarkMode] = useState(true);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setIsdarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsdarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkmode) {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
            setIsdarkMode(false)
        } else {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark");
            setIsdarkMode(true)
        }
    }
    
    return ( 
        <button onClick={toggleTheme} className={cn(
            "fixed top-5 right-5 z-50 p-2 rounded-full transition-colors",
            "duration-300 focus:outline-hidden"
        )}> {isDarkmode ? (<Sun className="h-6 w-6 text-yellow-300"/> 
            ) : ( 
                <Moon className="h-6 w-6 text-blue-900"/> 
            )}
        </button>
    )
}