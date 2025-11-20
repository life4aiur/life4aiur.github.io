export interface SectionProps {
  id?: string;
}

export interface Repo {
  name: string;
  description: string;
  stargazers: number;
  language: string | null;
  forks: number;
  url: string;
}
