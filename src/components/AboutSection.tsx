import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Passionate about creating meaningful experiences
              </h3>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  With over 5 years of experience in UI/UX design, I specialize in creating 
                  intuitive and visually compelling digital experiences. My approach combines 
                  user-centered design principles with modern aesthetics to deliver solutions 
                  that both users and businesses love.
                </p>
                
                <p>
                  I believe great design is invisible – it should feel effortless and natural 
                  to the user while solving real problems. My work spans across web applications, 
                  mobile apps, and brand identity, always with a focus on accessibility and 
                  inclusive design.
                </p>
                
                <p>
                  When I'm not designing, you can find me exploring photography, reading about 
                  design psychology, or experimenting with new creative tools and technologies.
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-elegant">
                  {<img
                    src={profilePhoto}
                    alt="Raymond Wairegi"
                    // className="w-full h-full object-center"
                    className="w-full h-full object-cover object-top"                    
                  /> }
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-2xl -z-10"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
