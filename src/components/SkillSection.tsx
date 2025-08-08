import { Card, CardContent } from "@/components/ui/card";
import { Palette, Smartphone, Code, Users, Lightbulb, Target } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Palette,
      title: "Design Tools",
      skills: [
        { name: "Figma", level: 95 },
        { name: "Adobe Creative Suite", level: 90 },
        { name: "Sketch", level: 85 },
        { name: "Framer", level: 80 }
      ]
    },
    {
      icon: Smartphone,
      title: "Design Disciplines",
      skills: [
        { name: "UI/UX Design", level: 95 },
        { name: "Mobile Design", level: 90 },
        { name: "Web Design", level: 92 },
        { name: "Brand Identity", level: 85 }
      ]
    },
    {
      icon: Code,
      title: "Technical Skills",
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 70 },
        { name: "React", level: 75 },
        { name: "Design Systems", level: 90 }
      ]
    },
    {
      icon: Users,
      title: "Research & Testing",
      skills: [
        { name: "User Research", level: 88 },
        { name: "Usability Testing", level: 85 },
        { name: "A/B Testing", level: 80 },
        { name: "Analytics", level: 75 }
      ]
    },
    {
      icon: Lightbulb,
      title: "Methodology",
      skills: [
        { name: "Design Thinking", level: 92 },
        { name: "Agile/Scrum", level: 85 },
        { name: "Wireframing", level: 95 },
        { name: "Prototyping", level: 90 }
      ]
    },
    {
      icon: Target,
      title: "Soft Skills",
      skills: [
        { name: "Communication", level: 95 },
        { name: "Collaboration", level: 90 },
        { name: "Problem Solving", level: 92 },
        { name: "Leadership", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of experience and continuous learning
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-700 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
