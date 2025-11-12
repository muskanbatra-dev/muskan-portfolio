import PharmEasyLogo from "../logo/Pharmeasy.png";
import BlackBuckLogo from "../logo/Blackbuck.png";
import SprouterLogo from "../logo/Sprouter.jpeg";

const experiences = [
  {
    company: "PharmEasy",
    role: "Associate Software Engineer (React Native / React.js)",
    date: "November 2024 – July 2025",
    logo: PharmEasyLogo,
    alt: "PharmEasy logo",
    link: "https://pharmeasy.in",
  },
  {
    company: "BlackBuck",
    role: "Software Engineer (React.js / React Native)",
    date: "July 2024 – October 2024",
    logo: BlackBuckLogo,
    alt: "BlackBuck logo",
    link: "https://blackbuck.com",
  },
  {
    company: "Sprouter LLC",
    role: "Software Engineer (React Native & Node.js)",
    date: "December 2022 – March 2024",
    logo: SprouterLogo,
    alt: "Sprouter logo",
    link: "https://sprouter.com",
  },
];

export const WorkExperienceSection = () => {
  return (
    <>
      {/* ===== Desktop View ===== */}

      <section id="experience" className="hidden md:block py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-glow text-3xl md:text-4xl font-bold mb-12">
            cool places I worked at
          </h2>

          <ul className="space-y-8">
            {experiences.map((exp, idx) => (
              <a href={exp.link} target="_blank" rel="noopener noreferrer">
                <li
                  key={exp.company + idx}
                  className="grid grid-cols-1 md:grid-cols-2 items-center gap-4"
                >
                 
                  <div className="flex items-center gap-4 mb-10">
                   
                    <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center border border-[color:var(--color-border)]">
                     
                      <img
                        src={exp.logo}
                        alt={exp.alt}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>

                    
                    <div>
                      <div className="flex items-baseline gap-3">
                        <h3 className="text-lg md:text-xl font-semibold text-[var(--color-foreground)]">
                          {exp.company}
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground">
                        {exp.role}
                      </p>
                    </div>
                  </div>

                  
                  <div className="text-right">
                    <span className="text-sm md:text-base text-muted-foreground">
                      {exp.date}
                    </span>
                  </div>
                </li>
              </a>
            ))}
          </ul>
        </div>
      </section>

     
      <section id="experience" className="py-24 px-4 relative md:hidden">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-glow text-3xl md:text-4xl font-bold mb-12 text-center">
            cool places I worked at
          </h2>

          <ul className="flex flex-col space-y-6 md:hidden mt-6">
            {experiences.map((exp, idx) => (
              <li
                key={`${exp.company}-${idx}`}
                className="p-4 rounded-xl border border-[color:var(--color-border)] hover:shadow-md transition-all"
              >
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-muted-foreground">{exp.role}</p>
                    <span className="text-sm text-muted-foreground block mt-2">
                      {exp.date}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default WorkExperienceSection;
