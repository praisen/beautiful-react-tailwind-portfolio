import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Network Performance Monitoring",
    description:
      "Monitored LAN/WAN network performance and implemented proactive incident response strategies to minimize downtime.",
    image: "/projects/project1.png", // Replace with real image
    tags: ["LAN", "WAN", "Troubleshooting"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "System Configuration & Automation",
    description:
      "Configured desktops, laptops, printers, and scanners, integrating tools like SCCM and ManageEngine to streamline deployments.",
    image: "/projects/project2.png", // Replace with real image
    tags: ["SCCM", "ManageEngine", "Windows"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Cisco certification",
    description:
      "Certified by Cisco for foundational networking knowledge, with hands-on skills in configuring routers, switches, and securing network infrastructures.",
    image: "/projects/project3.jpg", // Replace with real image
    tags: ["CCNA", "CID: 1700NL3HKYK00WJ2"],
    demoUrl: "#",
    githubUrl: "https://github.com/raj1997vijay",
  },

];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some key technical initiatives and project contributions from
          my professional experience in technical support and network
          engineering.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://cp.certmetrics.com/cisco/en/public/verify/credential/1700NL3HKYK00WJ2"
          >
            My Certificate <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
