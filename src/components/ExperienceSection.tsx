import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Graphic Designer | Junior Software Engineer",
      company: "Olive Tree Media",
      duration: "2023 - Present",
      description: "Led visual direction for digital campaigns bringing in brand visibility and engagement.",
      achievements: [
        "Created compelling visual assets for multi-platform campaigns",
        "Developed content calendars and visual campaigns",
        "Introduced motion graphics that brought static designs to life and increased viewer retention",
        "Designed marketing materials that enhanced brand recognition"
      ]
    },
    {
      role: "Interior Designer",
      company: "Caykal Interiors",
      duration: "2022 - 2023",
      description: "Design & Concept Development",
      achievements: [
        "Designed social media content that boosted engagement and followers",
        "Developed interior concepts from ideation to execution",
        "Coordinated with contractors and suppliers to ensure timely execution"
      ]
    },
    {
      role: "Intern Graphic Designer",
      company: "ADN Cottage Industries",
      duration: "2021 - 2022",
      description: "Led the development of the company’s digital brand identity, from logo creation to visual direction.",
      achievements: [
        "Delivered high-quality visual assets across print and digital platforms",
        "Created design documentation and guidelines",
        "Contributed to 3 successful product launches"
      ]
    }
  ];

  const education = [
    {
      degree: "Software Engineering",
      school: "alx Africa Program",
      duration: "Feb 2023 - Jun 2024",
      description: "Specialized in Front-end Development"
    },
    {
      degree: "Bachelor of Science: Clothing, Textiles and Interior Design",
      school: "Egerton University",
      duration: "Aug 2016 - Nov 2020",
      description: "Graduated Egerton with focus on Interior and Fashion Design"
    }
  ];

  return (
    <section id="experience" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Experience & Education
          </h2>
          
          {/* Work Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-primary">Work Experience</h3>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="shadow-soft hover:shadow-elegant transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h4 className="text-xl font-semibold mb-1">{exp.role}</h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground mt-1 md:mt-0">
                        {exp.duration}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-primary">Education</h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h4 className="text-xl font-semibold mb-1">{edu.degree}</h4>
                        <p className="text-primary font-medium mb-2">{edu.school}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground mt-2 md:mt-0">
                        {edu.duration}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
