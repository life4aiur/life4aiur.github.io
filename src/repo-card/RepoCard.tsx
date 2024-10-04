import { Repo } from "../Interfaces";
import "./RepoCard.scss";

interface RepoCardProps {
  repo: Repo;
}

function RepoCard(props: RepoCardProps) {
  const userHome = `https://github.com/life4aiur`;

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
    <div
      role="listitem"
      className="flex flex-1 flex-column bg-primary h-full py-3 px-5 m-3 border-round shadow-8"
    >
      {cardHeader(props.repo)}
      <div className="flex flex-1 flex-column py-3 text-center">
        {props.repo.description}
      </div>
      {cardFooter(props.repo)}
    </div>
  );
}

export default RepoCard;
