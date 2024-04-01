import { ProjectCard } from "../project-card";
import { ProjectCardType } from "../project-card/types";
import styles from "./project-list.module.scss";

interface ProjectListProps {
  projectItems: ProjectCardType[];
}

export const ProjectList = ({ projectItems }: ProjectListProps) => {
  return (
    <section className={styles.projectList__section}>
      <header className={styles.section__header}>
        <h1>Projetos</h1>
      </header>
      <div className={styles.projectList__container}>
        {projectItems.map((item) => (
          <ProjectCard projectItem={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};
