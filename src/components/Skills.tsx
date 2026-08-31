import {
  Code2,
  CreditCard,
  Database,
  Globe,
  Layout,
  Server,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, TypeScript, Next.js, Vite, Bootstrap, Tailwind CSS",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Node.js, Express, REST APIs, WebSockets, automation pipelines",
  },
  {
    icon: Database,
    title: "Databases",
    description: "MongoDB, PostgreSQL, SQL, Supabase",
  },
  {
    icon: CreditCard,
    title: "Payments & SaaS",
    description: "Stripe subscriptions, checkout flows, SaaS product architecture",
  },
  {
    icon: Sparkles,
    title: "AI-Assisted Development",
    description: "GitHub Copilot, Claude, ChatGPT, prompt engineering",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Figma, Responsive Design, Accessibility, shadcn/ui",
  },
  {
    icon: Globe,
    title: "Web Technologies",
    description: "HTML5, CSS, SCSS, JavaScript, Git, NPM, Cloudflare Pages, Vercel",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Skills & Expertise
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The tools and technologies I work with day to day
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Reveal key={skill.title} delay={(index % 3) * 0.1}>
                <Card className="group h-full hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <skill.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
