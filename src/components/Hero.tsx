import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl animate-pulse pointer-events-none" style={{ animationDuration: "6s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Ammon Warnick</span>
            </h1>
          </div>

          <div className="animate-slide-up animate-delay-100">
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Full Stack Developer · React · TypeScript · Node.js
            </p>
          </div>

          <div className="animate-slide-up animate-delay-200">
            <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
              I've spent the last 6+ years building web apps that real people
              use, from a service that turns weekly emails into printed books
              to a tool that converts bank statement PDFs into spreadsheets.
              I'm comfortable across the stack with React, TypeScript, Node.js,
              and Supabase, and I use AI tools in my daily workflow to move
              faster without cutting corners.
            </p>
            <p className="text-base font-medium text-primary mb-8">
              Based in Glendale, AZ · Open to full-time opportunities (remote
              or on-site)
            </p>
          </div>

          <div className="animate-slide-up animate-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="group" asChild>
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <div className="animate-fade-in animate-delay-400 flex items-center justify-center gap-4">
            <a
              href="https://github.com/AmmonWarnick"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/ammon-warnick/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:warnick.ammon@gmail.com"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
