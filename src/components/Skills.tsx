import {
  Code2,
  Database,
  Globe,
  Layout,
  Server,
  Smartphone,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, TypeScript, Next.js, Bootstrap, Tailwind CSS",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Node.js, Express, REST APIs",
  },
  {
    icon: Database,
    title: "Databases",
    description: "MongoDB, SQL, Supabase",
  },
  {
    icon: Globe,
    title: "Web Technologies",
    description: "HTML5, CSS, SCSS, JavaScript, WebSockets, NPM",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Figma, Responsive Design, Accessibility",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native, Progressive Web Apps",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive full-stack development capabilities with modern
              technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={skill.title}
                className="group hover:shadow-lg hover:border-primary/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
