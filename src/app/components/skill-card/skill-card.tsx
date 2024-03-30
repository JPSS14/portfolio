import Image from "next/image";
import styles from "./skill-card.module.scss";
import { SkillCardProps } from "./types";
import { SkillStack } from "./skill-stack";

export const SkillCard = ({
  title,
  skillImage,
  skillStackTitle,
}: SkillCardProps) => {
  console.log("skillStackTitle: ", skillStackTitle);
  return (
    <article className={styles.skillCard__article}>
      <Image src={skillImage} alt={title} width={34} height={34} />
      <h2 className={styles.article__title}>{title}</h2>
      <SkillStack skillStackTitle={skillStackTitle} />
    </article>
  );
};
