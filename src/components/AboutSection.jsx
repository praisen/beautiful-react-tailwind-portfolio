import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Network Engineer & IT Support Specialist
            </h3>

            <p className="text-muted-foreground">
              I am a dedicated Network Engineer with over 3 years of experience in network configuration and technical support. I specialize in resolving complex networking issues and optimizing infrastructure for maximum uptime and performance.
            </p>

            <p className="text-muted-foreground">
              With a strong foundation in CCNA technologies and AWS Cloud, I’ve successfully managed large-scale network environments, reduced downtime, and streamlined support processes. I'm always expanding my skillset to stay up-to-date with the latest in networking and IT solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="public\Rajakumar_Sekar_CV.pdf.pdf.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Network Configuration</h4>
                  <p className="text-muted-foreground">
                    Expert setup and maintenance of routers, switches, and firewalls to ensure optimal performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Network Troubleshooting</h4>
                  <p className="text-muted-foreground">
                    Diagnosing and resolving complex network issues to minimize downtime and improve efficiency.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cloud & Security</h4>
                  <p className="text-muted-foreground">
                    Working knowledge of AWS Cloud and network security principles to support scalable, secure IT infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
