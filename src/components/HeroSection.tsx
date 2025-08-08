import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import resumeFile from "@/assets/resume.pdf"; // ✅ Import the PDF

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = "Raymond-Wairegi-Resume.pdf"; // Name for downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{ background: "var(--hero-gradient)" }}
      />

      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-gradient">Raymond Wairegi</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            UI/UX Designer crafting beautiful digital experiences that bridge
            the gap between user needs and business goals
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              onClick={() => scrollToSection("work")}
              className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-elegant"
            >
              View My Work
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleDownloadResume} // ✅ Click triggers download
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
