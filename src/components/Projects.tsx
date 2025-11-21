import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Memory Companion",
    description:
      "Full-stack website that sends out weekly emails that are then compiled into a hard cover book automatically.",
    image:
      "https://images.pexels.com/photos/768125/pexels-photo-768125.jpeg?w=800&h=500&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Bootstrap"],
    github: "https://github.com/AmmonWarnick/MemoryCompanion",
    live: "https://memory-companion.com",
  },
  {
    title: "Learn Free Finance",
    description:
      "A full frontend website that offers free finance eduaction and finance tools.",
    image:
      "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?w=800&h=500&fit=crop",
    tags: ["Node.js", "TypeScript", "React", "Tailwind", "Stripe"],
    github: "https://github.com/AmmonWarnick/learnfreefinance",
    live: "https://learnfreefinance.pages.dev",
  },
  {
    title: "Bank Statement Converter",
    description:
      "A full-stack website that offers to convert PDF bank statements into CSV files for easy processing.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    tags: ["React", "Supabase", "Tailwind", "Stripe", "Typescript"],
    github: "https://github.com/AmmonWarnick/transcode-spark",
    live: "/404",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work showcasing various technologies and
              solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden aspect-video">
                    {project.live === "/404" && (
                      <Badge
                        variant="default"
                        style={{
                          position: "absolute",
                          right: "5px",
                          top: "10px",
                          textAlign: "center",
                        }}
                      >
                        In Progress
                      </Badge>
                    )}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild className="flex-1">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
