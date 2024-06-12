export type SkillStacksType = "Front" | "Back" | "Full" | "UX";

export interface ContentContainerType {
  description?: string;
  skillImage?: string;
  type?: string;
}

export interface ProjectDetailsType {
  id: number;
  title: string;
  description: string[];
  projectMainImage: string;
  projectStack: SkillStacksType;
  skills: string[];
  repoLink: string;
  deployLink?: string;
  aboutSection?: {
    content: ContentContainerType[];
  };
  functionsSection?: {
    content: ContentContainerType[];
  };
  resultSection?: {
    content: ContentContainerType[];
  };
}

export const projectList: ProjectDetailsType[] = [
  {
    id: 1,
    title: "React Books 2",
    projectMainImage: "/react-books2.png",
    projectStack: "Front",
    skills: ["react", "material ui", "typescript", "jest", "git"],
    description: [
      `É um buscador de livros, onde o usuário pode ver as principais
    informações sobre o livro pesquisado, assim como recomendações
    baseadas no livro escolhido.`,
      `Também é possível ler uma amostra do livro ou comprá-lo caso
    esteja disponível.`,
    ],
    repoLink: "https://github.com/JPSS14/react-books-2",
    deployLink: "https://jpss14.github.io/react-books-2/",
  },
  {
    id: 2,
    title: "Cars Register",
    projectMainImage: "/cars-register-1.png",
    projectStack: "Front",
    skills: ["react", "next", "typescript", "sass", "git"],
    description: [
      `O projeto Cars Register, é uma aplicação que permite ao usuário cadastrar veículos, e dependendo dos dados o veículo cadastrado recebe estrelas como uma forma de status. `,
      `Cada veículo é representado em um formato de card.`,
    ],
    repoLink: "https://github.com/JPSS14/cars-register",
    deployLink: "",
  },
];
