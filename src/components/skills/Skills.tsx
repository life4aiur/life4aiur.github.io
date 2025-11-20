import "./Skills.scss";
import type { SectionProps } from "../../types";

function Skills({ id }: SectionProps) {
  const languages = ["TypeScript", "JavaScript", "C#", "SQL", "HTML", "CSS"];

  const frameworksAndLibraries = [
    "Angular",
    "React",
    "Ionic",
    "Stencil",
    ".NET",
    "RxJS",
  ];

  const toolsAndPlatforms = [
    "Git",
    "CI/CD",
    "AWS",
    "Azure (DevOps & Cloud Services)",
    "Figma",
    "Storybook",
    "Style Dictionary",
  ];

  const testingTools = [
    "Cypress",
    "Jasmine",
    "Jest",
    "Playwright",
    "Puppeteer",
  ];

  const aiAndMethodologies = [
    "GitHub Copilot",
    "Amazon Q",
    "Model Context Protocol (MCP)",
    "Agile (Scrum, Kanban, SAFe)",
    "Certified Scrum Developer",
    "Accessibility",
    "Design Systems",
    "Responsive Design",
  ];

  return (
    <section id={id} className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-three-column-grid">
          <div className="skills-column">
            <h2>Languages</h2>

            <ul className="skills__list">
              {languages.map((language, index) => (
                <li key={index} className="skills__item">
                  {language}
                </li>
              ))}
            </ul>

            <h2 className="mt-5">Frameworks & Libraries</h2>

            <ul className="skills__list">
              {frameworksAndLibraries.map((framework, index) => (
                <li key={index} className="skills__item">
                  {framework}
                </li>
              ))}
            </ul>
          </div>

          <div className="impact-column">
            <h2>Tools & Platforms</h2>

            <ul className="skills__list">
              {toolsAndPlatforms.map((tool, index) => (
                <li key={index} className="skills__item">
                  {tool}
                </li>
              ))}
            </ul>

            <h2 className="mt-5">Testing</h2>

            <ul className="skills__list">
              {testingTools.map((tool, index) => (
                <li key={index} className="skills__item">
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          <div className="technologies-column">
            <h2>AI & Methodologies</h2>

            <ul className="skills__list">
              {aiAndMethodologies.map((item, index) => (
                <li key={index} className="skills__item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
