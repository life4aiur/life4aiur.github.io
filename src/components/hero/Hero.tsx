import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Chip } from "primereact/chip";
import { useState, useEffect } from "react";
import "./Hero.scss";
import desertImage from "../../assets/hero-banner/desert.png";
import forestImage from "../../assets/hero-banner/forest.png";
import iceImage from "../../assets/hero-banner/ice.png";
import kaminoanImage from "../../assets/hero-banner/kaminoan.png";
import spaceImage from "../../assets/hero-banner/space.png";
import sunsetImage from "../../assets/hero-banner/sunset.png";
import resumePDF from "../../assets/Andrew_St_Jean_SSE_Resume_Public.pdf";

function Hero({ theme }: { theme: string }) {
  const [currentBg, setCurrentBg] = useState({ image: "", overlay: "" });
  const [nextBg, setNextBg] = useState({ image: "", overlay: "" });
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Andrew_St_Jean_SSE_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getThemeBackground = (themeName: string) => {
    switch (themeName) {
      case "vela-blue":
        return { image: iceImage, overlay: "rgba(51, 59, 87, 0.6)" };
      case "arya-orange":
        return { image: desertImage, overlay: "rgba(87, 76, 51, 0.6)" };
      case "lara-light-pink":
        return { image: sunsetImage, overlay: "rgba(82, 65, 80, 0.6)" };
      case "lara-dark-indigo":
        return { image: spaceImage, overlay: "rgba(36, 36, 39, 0.6)" };
      case "fluent-light":
        return { image: kaminoanImage, overlay: "rgba(127, 139, 158, 0.6)" };
      case "arya-green":
        return { image: forestImage, overlay: "rgba(51, 87, 51, 0.6)" };
      default:
        return {
          image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop",
          overlay: "rgba(51, 87, 51, 0.6)",
        };
    }
  };

  // Handle theme transitions with crossfade
  useEffect(() => {
    const newBg = getThemeBackground(theme);

    if (currentBg.image && currentBg.image !== newBg.image) {
      // Start transition
      setNextBg(newBg);
      setIsTransitioning(true);

      // Complete transition after fade duration
      const timer = setTimeout(() => {
        setCurrentBg(newBg);
        setIsTransitioning(false);
      }, 800); // Match CSS transition duration

      return () => clearTimeout(timer);
    } else {
      // Initial load or same background
      setCurrentBg(newBg);
    }
  }, [theme, currentBg.image]);

  return (
    <section className="hero">
      {/* Current background layer */}
      <div
        className="hero__bg-layer hero__bg-layer--current"
        style={{
          backgroundImage: `linear-gradient(${currentBg.overlay}, ${currentBg.overlay}), url(${currentBg.image})`,
        }}
      />

      {/* Transitioning background layer */}
      {isTransitioning && (
        <div
          className="hero__bg-layer hero__bg-layer--next"
          style={{
            backgroundImage: `linear-gradient(${nextBg.overlay}, ${nextBg.overlay}), url(${nextBg.image})`,
          }}
        />
      )}
      <div className="hero__content">
        <div className="text-white">
          <p className="hero__greeting">HELLO THERE, I'M</p>
          <h1 className="hero__name">Andrew St. Jean</h1>
          <p className="hero__subtitle">
            Passionate about building scalable frontend solutions and leading
            engineering teams to deliver exceptional user experiences
          </p>
        </div>
        <div className="hero__profile">
          <Avatar
            image="https://avatars.githubusercontent.com/u/17767531"
            shape="circle"
            className="w-9rem h-9rem border-solid border-white border-3"
          />
          <p className="text-lg font-semibold mb-2">
            Senior Staff Software Engineer at{" "}
            <a
              href="https://www.symplr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-0 underline hover:text-100 transition-colors"
            >
              symplr
            </a>
          </p>
          <p className="text-sm mb-3">Wisconsin, United States</p>
          <div className="flex flex-wrap gap-2 justify-content-center mb-3">
            <Chip label="Front-End" />
            <Chip label="Design Systems" />
            <Chip label="Mobile" />
          </div>
          <div className="hero__social-links">
            <Button
              link
              aria-label="Go to my LinkedIn page"
              icon="pi pi-linkedin"
              className="p-button-rounded p-button-text border-white"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/andrew-st-jean-6984b112/",
                  "_blank"
                )
              }
            />
            <Button
              link
              aria-label="Go to my GitHub page"
              icon="pi pi-github"
              className="p-button-rounded p-button-text border-white"
              onClick={() =>
                window.open("https://github.com/life4aiur", "_blank")
              }
            />
          </div>
          <Button
            label="Download Resume"
            className="hero__resume-btn"
            onClick={handleDownloadResume}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
