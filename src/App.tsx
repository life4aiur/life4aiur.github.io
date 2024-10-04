/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./App.scss";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { Repo } from "./Interfaces";
import RepoCard from "./repo-card/RepoCard";
import Sidebar from "./sidebar/Sidebar";

function App() {
  const isDevMode = process.env.NODE_ENV === "development";
  const [repoList, setRepoList] = useState<Repo[]>([]);

  useEffect(() => {
    // https://github.com/2KAbhishek/projects/blob/main/script.js
    async function getRepos() {
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
    <div className="app">
      <section className="app-content">
        <Sidebar></Sidebar>
        <div className="app__content">
          <Header />
          <main>
            <section>
              <div className="p-4">
                <div className="text-3xl font-medium text-900 mb-3">About</div>
                <div className="font-medium text-500 mb-3">
                  Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.
                </div>
                <div
                  style={{ height: "150px" }}
                  className="border-2 border-dashed border-300"
                ></div>
              </div>
            </section>
            <section>
              <div className="p-4">
                <div className="text-3xl font-medium text-900 mb-3">Work</div>
                <ul
                  role="list"
                  className="flex flex-wrap justify-content-center gap-5"
                >
                  <div className="grid">
                    {repoList.map((x: Repo, i: number) => (
                      <RepoCard repo={x} key={i} />
                    ))}
                  </div>
                </ul>
              </div>
            </section>
            <section>
              <div className="p-4">
                <div className="text-3xl font-medium text-900 mb-3">
                  Contact
                </div>
                <div className="font-medium text-500 mb-3">
                  Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.
                </div>
                <div
                  style={{ height: "150px" }}
                  className="border-2 border-dashed border-300"
                ></div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default App;
