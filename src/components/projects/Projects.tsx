import { Carousel } from "primereact/carousel";
import { useEffect, useState } from "react";
import "./Projects.scss";
import RepoCard from "./RepoCard";
import type { Repo, SectionProps } from "../../types";

function Projects({ id }: SectionProps) {
  const isDevMode = import.meta.env.DEV;
  const [repoList, setRepoList] = useState<Repo[]>([]);

  useEffect(() => {
    // https://github.com/2KAbhishek/projects/blob/main/script.js
    async function getRepos() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let repos: any[] = [];

      if (isDevMode) {
        setRepoList([
          {
            name: "life4aiur.github.io",
            description: "My basic GitHub page and general playground.",
            stargazers: 0,
            language: "TypeScript",
            forks: 0,
            url: "https://github.com/life4aiur/life4aiur.github.io",
          },
          {
            name: "code-editor",
            description:
              "A React-based embeddable code editor with live HTML/CSS/JS preview.",
            stargazers: 0,
            language: "TypeScript",
            forks: 0,
            url: "https://github.com/life4aiur/code-editor",
          },
          {
            name: "stencil-framework-integration",
            description:
              "This repository serves as a comprehensive guide and demonstration of how to integrate Stencil components into various frontend frameworks.",
            stargazers: 0,
            language: "TypeScript",
            forks: 0,
            url: "https://github.com/life4aiur/stencil-framework-integration",
          },
          {
            name: "storybook-theme-toggle",
            description:
              "This repository provides an easy-to-implement theme toggle for Storybook, allowing you to switch between light, dark, and user-defined modes seamlessly.",
            stargazers: 0,
            language: "TypeScript",
            forks: 0,
            url: "https://github.com/life4aiur/storybook-theme-toggle",
          },
          {
            name: "resumes",
            description:
              "A modern resume website built with React and TypeScript, featuring PrimeReact components and responsive design.",
            stargazers: 1,
            language: "TypeScript",
            forks: 0,
            url: "https://github.com/life4aiur/resumes",
          },
          {
            name: "design-system-components",
            description:
              "Scalable design system library with reusable components for enterprise applications.",
            stargazers: 5,
            language: "TypeScript",
            forks: 2,
            url: "https://github.com/life4aiur/design-system-components",
          },
          {
            name: "hybrid-mobile-framework",
            description:
              "Cross-platform mobile framework combining React Native with native capabilities for enterprise solutions.",
            stargazers: 8,
            language: "JavaScript",
            forks: 3,
            url: "https://github.com/life4aiur/hybrid-mobile-framework",
          },
        ]);
      } else {
        const res = await fetch(
          `https://api.github.com/users/life4aiur/repos?&sort=pushed&per_page=100&page=1`
        );
        const data = await res.json();
        repos = repos.concat(data);
        repos.sort((a, b) => b.forks_count - a.forks_count);
        repos.sort((a, b) => b.stargazers_count - a.stargazers_count);

        const listItems = [];

        for (const repo of repos) {
          if (repo.fork) {
            continue;
          }

          const listItem = {
            name: repo.name,
            description: repo.description,
            stargazers: repo.stargazers_count,
            language: repo.language,
            forks: repo.forks_count,
            url: repo.html_url,
          };

          listItems.push(listItem);
        }

        setRepoList(listItems);
      }
    }

    getRepos();
  }, [isDevMode]);

  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1200px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const repoTemplate = (repo: Repo) => {
    return <RepoCard repo={repo} />;
  };

  return (
    <section id={id} className="projects">
      <div className="container">
        <h2>Projects</h2>
        {repoList.length > 0 ? (
          <Carousel
            className="-mx-8 md:-mx-5 sm:mx-0"
            value={repoList}
            numVisible={2}
            numScroll={1}
            responsiveOptions={responsiveOptions}
            itemTemplate={repoTemplate}
            circular
          />
        ) : (
          <div className="flex justify-content-center">
            <i
              className="pi pi-spin pi-spinner"
              style={{ fontSize: "2rem" }}
            ></i>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
