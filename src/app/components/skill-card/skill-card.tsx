import Image from "next/image";
import { LozengeIcon } from "../lozenge-icon";
import styles from "./skill-card.module.scss";
import { AiFillStar } from "react-icons/Ai";
import { SkillCardProps } from "./types";

export const SkillCard = ({ title, skillImage, content }: SkillCardProps) => {
  return (
    <article className={styles.skillCard__article}>
      <header className={styles.skillCard__header}>
        <LozengeIcon image={skillImage} />
        <h2>{title}</h2>
      </header>
      <div className={styles.skillCard__content}>
        <p>{content}</p>
      </div>
      <div className={styles.skillCard__professionalXP}>
        <AiFillStar className={styles.star} />
        <p>Exp. Profissional: </p>
        <Image
          src={"/riachuelo_logo.png"}
          alt="Exp profissional"
          width={114}
          height={18}
        />
      </div>
    </article>
  );
};
