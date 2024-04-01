import { ProjectCardType } from "@/app/components/project-card/types";

export const projectList: ProjectCardType[] = [
  {
    id: 1,
    title: "React Books 2",
    projectImage: "/react-books2.png",
    projectStack: [
      {
        name: "react",
        image: "/react_logo.svg",
      },
      {
        name: "material ui",
        image: "/material-ui_logo-2.svg",
      },
      {
        name: "typescript",
        image: "/typescript_logo.svg",
      },
      {
        name: "jest",
        image: "/jest_logo.svg",
      },
      {
        name: "git",
        image: "/git_logo.svg",
      },
    ],
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
    projectImage: "/cars-register-1.png",
    projectStack: [
      {
        name: "react",
        image: "/react_logo.svg",
      },
      {
        name: "next",
        image: "/next_logo-2.svg",
      },
      {
        name: "typescript",
        image: "/typescript_logo.svg",
      },
      {
        name: "sass",
        image: "/sass_logo.svg",
      },
      {
        name: "git",
        image: "/git_logo.svg",
      },
    ],
    description: [
      `O projeto Cars Register, é uma aplicação que permite ao usuário cadastrar veículos, e dependendo dos dados o veículo cadastrado recebe estrelas como uma forma de status. `,
      `Cada veículo é representado em um formato de card.`,
    ],
    repoLink: "https://github.com/JPSS14/react-books-2",
    deployLink: "",
  },
];
