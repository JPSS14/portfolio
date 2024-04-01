export interface ProjectCardType {
  id: number;
  title: string;
  projectImage: string;
  projectStack: {
    name: string;
    image: string;
  }[];
  description: string[];
  repoLink: string;
  deployLink?: string;
}
