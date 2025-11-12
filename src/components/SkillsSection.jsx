export const SkillsSection = () => {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "React Native",
    "Node.js",
    "MongoDB",
    "Python",
    "Git",
    "Figma",
  ];

  return (
    <section
      id="skills"
      className="relative py-20 flex flex-col items-center justify-center text-center"
    >
      <h2 className="text-glow text-3xl md:text-4xl font-bold mb-12">Skills</h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl opacity-0 animate-fade-in-delay-1">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-5 py-2 bg-card border border-border text-foreground/90 font-medium rounded-full cursor-pointer transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_12px_hsl(var(--primary)/0.6)]"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
