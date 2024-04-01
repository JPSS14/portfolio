"use client";
import { ProjectCard } from "../project-card";
import { ProjectCardType } from "../project-card/types";
import styles from "./project-list.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { settings } from "./settings";

interface ProjectListProps {
  projectItems: ProjectCardType[];
}

export const ProjectList = ({ projectItems }: ProjectListProps) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Adiciona um event listener para o evento de redimensionamento da janela
    window.addEventListener("resize", handleResize);

    // Chama o manipulador de redimensionamento uma vez para definir o estado inicial
    handleResize();

    // Remove o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={styles.projectList__section}>
      <header className={styles.section__header}>
        <h1>Projetos</h1>
      </header>
      <div className={styles.projectList__container}>
        {windowWidth > 703 ? (
          <>
            {projectItems.map((item) => (
              <ProjectCard projectItem={item} key={item.id} />
            ))}
          </>
        ) : (
          <div className={styles.projectList__container}>
            <Slider {...settings}>
              {projectItems.map((item) => (
                <ProjectCard projectItem={item} key={item.id} />
              ))}
            </Slider>
          </div>
        )}
      </div>
    </section>
  );
};
