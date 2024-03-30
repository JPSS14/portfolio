import Image from "next/image";
import styles from "./skill-card.module.scss";
import { SkillCardProps } from "./types";

export const SkillCard = ({ title, skillImage }: SkillCardProps) => {
  return (
    <article className={styles.skillCard__article}>
      <Image src={skillImage} alt={title} width={34} height={34} />
      <h2 className={styles.article__title}>{title}</h2>
      <div className={styles.skillCard__stack}>Front</div>
    </article>
  );
};
