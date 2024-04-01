import Image from "next/image";
import styles from "./project-card.module.scss";
import { Button } from "../button";
import Link from "next/link";
import { ProjectCardType } from "./types";

interface ProjectCardProps {
  projectItem: ProjectCardType;
}

export const ProjectCard = ({ projectItem }: ProjectCardProps) => {
  return (
    <div>
      <article className={styles.projectCard__article}>
        <header className={styles.article__header}>
          <h2>{projectItem.title}</h2>
        </header>
        <div className={styles.article__image__container}>
          <Image
            src={projectItem.projectImage}
            alt={projectItem.title}
            width={1912}
            height={912}
          />
        </div>
        <div className={styles.article__content__container}>
          <div className={styles.content__aside__stack}>
            {projectItem.projectStack.map((item, index) => (
              <Image
                src={item.image}
                width={32}
                height={32}
                alt={`${item.name} logo`}
                key={index}
              />
            ))}
          </div>
          <div className={styles.content__description}>
            <div className={styles.description__title}>Descrição</div>
            {projectItem.description.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </article>
      <div className={styles.projectCard__cta}>
        <Link href={projectItem.repoLink} passHref target="_blank">
          <Button fullWidth>Repositório Git</Button>
        </Link>
        {projectItem.deployLink && (
          <Link href={projectItem.deployLink} passHref target="_blank">
            <Button color="success" fullWidth>
              Testar
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
