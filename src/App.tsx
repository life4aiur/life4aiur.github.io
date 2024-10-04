/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./App.scss";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

interface Repo {
  name: string;
  description: string;
  stargazers: number;
  language: string;
  forks: number;
  url: string;
}

function App() {
  const isDevMode = process.env.NODE_ENV === "development";
  const userHome = `https://github.com/life4aiur`;
  const [repoList, setRepoList] = useState<Repo[]>([]);

  // const getRepos = async () => {
  //   let repos: any[] = [];
  //   let res;
  //   for (let i = 1; i <= 1; i++) {
  //     res = await fetch(
  //       `https://api.github.com/users/life4aiur/repos?&sort=pushed&per_page=100&page=${i}`
  //       // {
  //       //     headers: {
  //       //         Accept: 'application/vnd.github+json',
  //       //         Authorization:
  //       //             'token your-personal-access-token-here'
  //       //     }
  //       // }
  //     );
  //     const data = await res.json();
  //     repos = repos.concat(data);
  //   }
  //   repos.sort((a, b) => b.forks_count - a.forks_count);
  //   repos.sort((a, b) => b.stargazers_count - a.stargazers_count);

  //   //const userHome = `https://github.com/life4aiur`;
  //   for (const repo of repos) {
  //     if (repo.fork) {
  //       continue;
  //     }

  //     // const langUrl = `${userHome}?tab=repositories&q=&language=${repo.language}`;
  //     // const starsUrl = `${userHome}/${repo.name}/stargazers`;
  //     // const forksUrl = `${userHome}/${repo.name}/network/members`;

  //     const listItem = {
  //       name: repo.name,
  //       description: repo.description,
  //       stargazers: repo.stargazers_count,
  //     };

  //     // if (repo.language) {
  //     //   listItem.innerHTML += `<a href="${langUrl}">
  //     //       <span>${devicons[repo.language]}</span></a>`;
  //     // }

  //     // if (repo.forks_count > 0) {
  //     //   listItem.innerHTML += `<a href="${forksUrl}">
  //     //       <span>${devicons["Git"]} ${repo.forks_count}</span></a>`;
  //     // }

  //     // if (repo.homepage && repo.homepage !== "") {
  //     //   listItem.innerHTML += `<br />
  //     //       <a class="link-btn" href=${repo.html_url}>${devicons["Github"]} Code</a>
  //     //       <a class="link-btn" href=${repo.homepage}>${devicons["Chrome"]} Live</a>
  //     //       <br />`;
  //     // } else {
  //     //   listItem.innerHTML += `<br />
  //     //       <a class="link-btn" href=${repo.html_url}>${devicons["Github"]} Code</a>
  //     //       <br />`;
  //     // }

  //     repoList.push(listItem);
  //   }
  // };

  // const displayRepos = (repos: any[]) => {
  //   //const userHome = `https://github.com/life4aiur`;
  //   for (const repo of repos) {
  //     if (repo.fork) {
  //       continue;
  //     }

  //     // const langUrl = `${userHome}?tab=repositories&q=&language=${repo.language}`;
  //     // const starsUrl = `${userHome}/${repo.name}/stargazers`;
  //     // const forksUrl = `${userHome}/${repo.name}/network/members`;

  //     const listItem = {
  //       name: repo.name,
  //       description: repo.description,
  //       stargazers: repo.stargazers_count,
  //     };

  //     console.log(listItem);

  //     // if (repo.language) {
  //     //   listItem.innerHTML += `<a href="${langUrl}">
  //     //       <span>${devicons[repo.language]}</span></a>`;
  //     // }

  //     // if (repo.forks_count > 0) {
  //     //   listItem.innerHTML += `<a href="${forksUrl}">
  //     //       <span>${devicons["Git"]} ${repo.forks_count}</span></a>`;
  //     // }

  //     // if (repo.homepage && repo.homepage !== "") {
  //     //   listItem.innerHTML += `<br />
  //     //       <a class="link-btn" href=${repo.html_url}>${devicons["Github"]} Code</a>
  //     //       <a class="link-btn" href=${repo.homepage}>${devicons["Chrome"]} Live</a>
  //     //       <br />`;
  //     // } else {
  //     //   listItem.innerHTML += `<br />
  //     //       <a class="link-btn" href=${repo.html_url}>${devicons["Github"]} Code</a>
  //     //       <br />`;
  //     // }

  //     repoList.push(listItem);
  //   }
  // };

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

          // const langUrl = `${userHome}?tab=repositories&q=&language=${repo.language}`;
          // const starsUrl = `${userHome}/${repo.name}/stargazers`;
          // const forksUrl = `${userHome}/${repo.name}/network/members`;

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

  const cardHeader = (repo: Repo) => (
    <a
      className="flex justify-content-center text-xl text-indigo-800"
      href={repo.url}
    >
      {repo.name}
    </a>
  );

  const cardFooter = (repo: Repo) => (
    <div className="flex flex-wrap justify-content-center gap-3">
      <a className="text-indigo-400" href={`${repo.url}/stargazers`}>
        <i className="pi pi-star m-1"></i>
        {repo.stargazers}
      </a>
      <a
        className="text-indigo-400"
        href={`${userHome}?tab=repositories&q=&language=${repo.language}`}
      >
        <i
          className={`inline-block devicon-${repo.language.toLowerCase()}-plain colored m-1`}
        ></i>
        {repo.language}
      </a>
      <a
        className="text-indigo-400"
        href={`${userHome}/${repo.name}/network/members`}
      >
        <i className="inline-block devicon-git-plain colored m-1"></i>
        {repo.forks}
      </a>
    </div>
  );

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
                      <div className="col-12 md:col-6 lg:col-4 xl:col-3">
                        <div
                          role="listitem"
                          className="flex flex-1 flex-column bg-primary h-full py-3 px-5 m-3 border-round shadow-8"
                          key={i}
                        >
                          {cardHeader(x)}
                          <div className="flex flex-1 flex-column py-3 text-center">
                            {x.description}
                          </div>
                          {cardFooter(x)}
                        </div>
                      </div>
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
        {/* <div className="grid">
          <div className="col-12 md:col-6 lg:col-3">
            <Card>A</Card>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <Card>A</Card>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <Card>A</Card>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <Card>A</Card>
          </div>
        </div> */}
      </section>
    </div>
  );
}

export default App;
