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
  homepage: string;
}

function App() {
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
      let res;
      for (let i = 1; i <= 5; i++) {
        res = await fetch(
          `https://api.github.com/users/life4aiur/repos?&sort=pushed&per_page=100&page=${i}`
          // {
          //     headers: {
          //         Accept: 'application/vnd.github+json',
          //         Authorization:
          //             'token your-personal-access-token-here'
          //     }
          // }
        );
        const data = await res.json();
        repos = repos.concat(data);
      }
      repos.sort((a, b) => b.forks_count - a.forks_count);
      repos.sort((a, b) => b.stargazers_count - a.stargazers_count);

      //const userHome = `https://github.com/life4aiur`;
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
          homepage: repo.homepage,
        };

        listItems.push(listItem);
      }

      setRepoList(listItems);
    }

    getRepos();
    console.log(repoList);
  }, []);

  return (
    <div className="app">
      <section className="app-content">
        <Sidebar></Sidebar>
        <div className="app__content">
          <Header />
          <main>
            <section>
              <div className="surface-0 p-4 shadow-2 border-round">
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
              <div className="surface-0 p-4 shadow-2 border-round">
                <div className="text-3xl font-medium text-900 mb-3">Work</div>
                <div className="font-medium text-500 mb-3">
                  {repoList.map((x: Repo, i: number) => (
                    <ul key={i}>
                      <li>{x.name}</li>
                      <li>{x.description}</li>
                      <li>{x.forks}</li>
                      <li>{x.homepage}</li>
                      <li>{x.language}</li>
                      <li>{x.stargazers}</li>
                    </ul>
                  ))}
                </div>
                <div
                  style={{ height: "150px" }}
                  className="border-2 border-dashed border-300"
                ></div>
              </div>
            </section>
            <section>
              <div className="surface-0 p-4 shadow-2 border-round">
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
