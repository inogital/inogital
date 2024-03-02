export type ProjectsDemosTypes = {
  url: string;
  img: string;
  project: string;
  catergory: string;
};

export type TrainingType = {
  id: string;
  img: string;
  title: string;
  duration: number;
  for: string[];
  todo: string[];
  description: string;
};


export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter?: string
    github?: string
    linkedIn?: string
  }
}