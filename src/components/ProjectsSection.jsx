import React from "react";

const projects = [
  {
    id: 1,
    title: "SaaS Landing Page",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "https://saas-landing-demo.vercel.app",
    githubUrl: "https://github.com/username/saas-landing-page",
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    description: "An admin dashboard for managing orders, products, and users.",
    image: "/projects/project2.png",
    tags: ["React", "Redux", "Chart.js"],
    demoUrl: "https://ecommerce-dashboard.vercel.app",
    githubUrl: "https://github.com/username/ecommerce-dashboard",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js and TailwindCSS.",
    image: "/projects/project3.png",
    tags: ["Next.js", "TailwindCSS", "Framer Motion"],
    demoUrl: "https://myportfolio.dev",
    githubUrl: "https://github.com/username/portfolio-site",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-glow text-3xl md:text-4xl font-bold mb-4 text-center">
          some things I’ve built
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden border border-[color:var(--color-border)] shadow-xs transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(167,139,250,0.2)]"
            >
              
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[var(--color-foreground)] mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

               
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-[rgba(167,139,250,0.1)] text-[var(--color-foreground)] border border-[rgba(167,139,250,0.3)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 text-sm font-medium">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Live Demo ↗
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
