import { SkillCard } from "../skill-card";
import styles from "./skill-list.module.scss";
import { mainSkills } from "@/constants/skillList";

export const SkillList = () => {
  return (
    <section className={styles.skillList}>
      <header>
        <h1>Skills</h1>
      </header>
      <div className={styles.skillList__container}>
        {mainSkills.map((item, index) => (
          <SkillCard
            content={item.content}
            skillImage={item.skillImage}
            title={item.title}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};
