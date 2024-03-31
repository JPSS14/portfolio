import styles from "./skill-stack.module.scss";

interface SkillStackProps {
  skillStackTitle: "Front" | "Back" | "Full" | "UX";
}

export const SkillStack = ({ skillStackTitle }: SkillStackProps) => {
  let classNames = styles.skillCard__stack;

  switch (skillStackTitle) {
    case "Front":
      classNames += ` ${styles.skillCard__stack__front}`;
      break;
    case "Back":
      classNames += ` ${styles.skillCard__stack__back}`;
      break;
    case "Full":
      classNames += ` ${styles.skillCard__stack__full}`;
      break;
    case "UX":
      classNames += ` ${styles.skillCard__stack__ux}`;
      break;
    default:
      break;
  }

  return <div className={classNames}>{skillStackTitle}</div>;
};
