import { PrimeReactContext } from "primereact/api";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { Menubar } from "primereact/menubar";
import { useContext, useRef, useState } from "react";
import About from "../about/About";
import "./App.scss";
import Education from "../education/Education";
import Experience from "../experience/Experience";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";

function App() {
  const menuRef = useRef<Menu>(null);
  const { changeTheme } = useContext(PrimeReactContext);
  const [currentTheme, setCurrentTheme] = useState("lara-dark-indigo");

  const handleThemeSelection = (newTheme: string) => {
    if (newTheme === currentTheme) return;
    changeTheme?.(currentTheme, newTheme, "theme-link");
    setCurrentTheme(newTheme);
  };

  const themeItems = [
    { label: "Blues", command: () => handleThemeSelection("vela-blue") },
    { label: "Busy bee", command: () => handleThemeSelection("arya-orange") },
    {
      label: "Cotton candy",
      command: () => handleThemeSelection("lara-light-pink"),
    },
    { label: "Dark", command: () => handleThemeSelection("lara-dark-indigo") },
    { label: "Fluent", command: () => handleThemeSelection("fluent-light") },
    { label: "Natural", command: () => handleThemeSelection("arya-green") },
  ];

  const handleThemeToggle = (event: React.MouseEvent) => {
    menuRef.current?.toggle(event);
  };

  const menuItems = [
    {
      label: "About",
      command: () =>
        document
          .getElementById("about")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      label: "Education",
      command: () =>
        document
          .getElementById("education")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      label: "Experience",
      command: () =>
        document
          .getElementById("experience")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      label: "Skills",
      command: () =>
        document
          .getElementById("skills")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      label: "Projects",
      command: () =>
        document
          .getElementById("projects")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
  ];

  return (
    <div className="resume-app">
      <link
        id="theme-link"
        rel="stylesheet"
        href="/themes/lara-dark-indigo/theme.css"
      ></link>
      <header className="header">
        <Menubar
          model={menuItems}
          className="border-none border-noround py-3 px-5 shadow-5"
        />
        <Button
          icon="pi pi-palette"
          rounded
          raised
          aria-label="Change theme"
          className="theme-toggle"
          onClick={handleThemeToggle}
        />
        <Menu ref={menuRef} model={themeItems} popup />
      </header>
      <Hero theme={currentTheme} />
      <About id="about" />
      <Education id="education" />
      <Experience id="experience" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Footer />
    </div>
  );
}

export default App;
