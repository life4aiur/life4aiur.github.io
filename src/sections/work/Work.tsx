import { useEffect, useState } from "react";
import { Repo } from "../../Interfaces";
import RepoCard from "./repo-card/RepoCard";
import "./Work.scss";

function Work() {
  const isDevMode = process.env.NODE_ENV === "development";
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
            name: "storybook-theme-toggle",
            description:
              "This repository provides an easy-to-implement theme toggle for Storybook, allowing you to switch between light, dark, and user-defined modes seamlessly.",
            stargazers: 0,
            language: "TypeScript",
            forks: 0,
            url: "https://github.com/life4aiur/storybook-theme-toggle",
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
  }, []);

  return (
    <ul role="list" className="flex flex-wrap justify-content-center gap-5">
      <div className="grid">
        {repoList.map((x: Repo, i: number) => (
          <div className="col-12 md:col-6 lg:col-4 xl:col-3" key={i}>
            <RepoCard repo={x} />
          </div>
        ))}
      </div>
    </ul>
  );
}

export default Work;
