import { Award, Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A bit about who I am and what I've built
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal variant="left">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I've been building websites and web apps for over 6 years now.
                A couple of them have turned into real products with actual
                customers, like a service that compiles weekly emails into a
                printed hardcover book, and a tool that converts PDF bank
                statements into CSV files. Most of my work is in React,
                TypeScript, Node.js, MongoDB, Supabase, and Stripe.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I use AI tools like GitHub Copilot, Claude, and ChatGPT pretty
                much every day. They help me move faster and try out ideas
                quickly, but the architecture, code review, and final call on
                what ships is still on me.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I care about writing code that's easy to maintain, interfaces
                that work well for everyone, and building things that actually
                solve a problem. Right now I'm looking for a full-time role
                where I can do that with a good team.
              </p>
            </div>
            </Reveal>

            <div className="space-y-4">
              <Reveal variant="right">
              <Card className="group hover:border-primary/50 hover:translate-x-1 transition-all">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Experience</h3>
                    <p className="text-sm text-muted-foreground">
                      6+ years building and shipping production web
                      applications
                    </p>
                  </div>
                </CardContent>
              </Card>
              </Reveal>

              <Reveal variant="right" delay={0.12}>
              <Card className="group hover:border-primary/50 hover:translate-x-1 transition-all">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Education</h3>
                    <p className="text-sm text-muted-foreground">
                      B.S. in Computer Science
                    </p>
                  </div>
                </CardContent>
              </Card>
              </Reveal>

              <Reveal variant="right" delay={0.24}>
              <Card className="group hover:border-primary/50 hover:translate-x-1 transition-all">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Track Record</h3>
                    <p className="text-sm text-muted-foreground">
                      Live products with paying customers, Stripe integrations,
                      and automated backend pipelines
                    </p>
                  </div>
                </CardContent>
              </Card>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
