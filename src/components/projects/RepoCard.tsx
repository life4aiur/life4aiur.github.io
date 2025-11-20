import { Card } from "primereact/card";
import type { Repo } from "../../types";

interface RepoCardProps {
  repo: Repo;
}

function RepoCard({ repo }: RepoCardProps) {
  const userHome = `https://github.com/life4aiur`;

  const cardHeader = (
    <a
      className="flex justify-content-center text-xl text-center"
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {repo.name}
    </a>
  );

  const cardFooter = (
    <div className="flex flex-wrap justify-content-center gap-3">
      <a
        href={`${repo.url}/stargazers`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="pi pi-star m-1"></i>
        {repo.stargazers}
      </a>
      {repo.language && (
        <a
          href={`${userHome}?tab=repositories&q=&language=${repo.language}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className={`inline-block devicon-${repo.language?.toLowerCase()}-plain colored m-1`}
          ></i>
          {repo.language}
        </a>
      )}
      <a
        href={`${userHome}/${repo.name}/network/members`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="inline-block devicon-git-plain colored m-1"></i>
        {repo.forks}
      </a>
    </div>
  );

  return (
    <Card title={cardHeader} className="projects__repo-card h-full m-2">
      <div className="flex flex-column h-full">
        <div className="flex-1 text-center text-color-secondary">
          {repo.description}
        </div>
        <div className="mt-3">{cardFooter}</div>
      </div>
    </Card>
  );
}

export default RepoCard;
