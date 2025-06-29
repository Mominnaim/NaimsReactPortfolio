import { Briefcase, Code, User } from "lucide-react"

export const Aboutme = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Creator</h3>
                            <p className="text-muted-foreground">
                                I'm a Computer Science student at the University of Houston with a strong foundation in full-stack development, cloud deployment, and database design.
                            </p>
                            <p className="text-muted-foreground">
                                From building internal tools for logistics firms to launching student-centered platforms like CougBay, I enjoy turning ideas into scalable, user-friendly web apps using technologies like AngularJS, React, ASP.NET, and Django.
                            </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-priary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                    {/* Code Icon - Development Focus */}
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-left">
                            <h4 className="text-semibold text-lg">#1 Full-Stack Projects</h4>
                            <p>
                                Built dynamic apps like CougBay with user auth, media features, and payments.
                            </p>
                        </div>
                        </div>
                    </div>

                    {/* User Icon - User-Focused Design */}
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-left">
                            <h4 className="text-semibold text-lg">#2 UX-Focused Development</h4>
                            <p>
                                Crafted responsive, user-friendly interfaces with Tailwind CSS and Bootstrap.
                            </p>
                        </div>
                        </div>
                    </div>

                    {/* Briefcase Icon - Professional Work */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="text-semibold text-lg">#3 Industry Experience</h4>
                                <p>
                                    Delivered software for real clients using .NET, SQL, and REST/SOAP APIs.
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}