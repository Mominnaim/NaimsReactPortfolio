import { Instagram, Mail, MapPin, Phone, Linkedin, Send } from "lucide-react"
import { cn } from "../lib/utils"
import { useToast } from "../hooks/use-toast"
import { useState } from "react";

export const ContactMe = () => {

    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setTimeout(() => {
            toast({
                title: "Message Sent!",
                description: "Thank you for your message, will get back to you shortly",
            })
            setIsSubmitting(false);
        }, 1500)

        
    }
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Why to contact me, write a sentence down 
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>    
                                    <a href="mailto:mominnaim11@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">Mominnaim11@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>    
                                    <a className="text-muted-foreground hover:text-primary transition-colors">+1 (832)-455-9834</a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>    
                                    <a className="text-muted-foreground hover:text-primary transition-colors">Sugar Land, Texas</a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center"> 
                                <a href="#" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="#" target="_blank">
                                    <Instagram />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium"> Your Name</label>
                                <input 
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Naim Momin"/>
                            </div>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium"> Your Email</label>
                                <input 
                                    type="text"
                                    id="Email"
                                    name="Email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Example123@gmail.com"/>
                            </div>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium"> Your Message</label>
                                <textarea 
                                    type="text"
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello there..."/>
                            </div> 
                            <button type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                            )}>
                                {isSubmitting ? "Sending message..." : "Send A Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}