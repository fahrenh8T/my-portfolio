import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
// import project3 from "@/assets/project-3.jpg";

const WorkSection = () => {
  const projects = [
    {
      title: "Précieux",
      description: "Crafted a distinctive logo for a fashion & accessories brand, capturing its unique style to resonate with its target audience.",
      image: project1,
      tags: ["Logo Design", "Branding", "Product Design"],
      link: "https://www.behance.net/gallery/220024059/Prcieux-Logo",
      // github: "#"
    },
    {
      title: "Launchpro",
      description: "Modern banking app with emphasis on security, accessibility, and seamless money management experience.",
      image: project2,
      tags: ["Logo Design", "FinTech", "User Research"],
      link: "#",
      // github: "#"
    },
    {
      title: "Modimbo Supplies",
      description: "Complete brand identity design for a tech startup, including logo, guidelines, and marketing materials.",
      // image: project3,
      tags: ["Logo Design", "Web Design", "UI/UX Design"],
      link: "https://modimbo.vercel.app",
      // github: "#"
    }
  ];

  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            A selection of projects that showcase my design process and problem-solving approach
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                    {<img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    /> }
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="flex-1" onClick={() => window.open(project.link, "_blank")}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </Button>
                      {/* <Button variant="outline" size="sm" className="flex-1">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button> */}
                    </div>
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

export default WorkSection;
