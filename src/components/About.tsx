import { Award, Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with a love for creating innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a full-stack developer with over 5 years of experience building
                web applications. I specialize in creating responsive, user-friendly
                interfaces and robust backend systems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My passion lies in solving complex problems and turning ideas into
                reality through clean, efficient code. I'm constantly learning new
                technologies and best practices to stay at the forefront of web
                development.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me contributing to open-source
                projects, writing technical articles, or exploring the latest in web
                technologies.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="group hover:border-primary/50 transition-all">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Experience</h3>
                    <p className="text-sm text-muted-foreground">
                      5+ years in professional web development
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:border-primary/50 transition-all">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
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

              <Card className="group hover:border-primary/50 transition-all">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Achievements</h3>
                    <p className="text-sm text-muted-foreground">
                      Multiple certifications and successful projects
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
