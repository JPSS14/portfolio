import Image from "next/image";
import styles from "./intro.module.scss";

export const Intro = () => {
  return (
    <div className={styles.intro}>
      <Image
        src="/space3.jpg"
        alt="Space"
        className={styles.background__image}
        width={1920}
        height={1280}
      />
      <div className={styles.intro__content}>
        <div className={styles.lozenge__external}>
          <div className={styles.lozenge__internal}>
            <Image
              src="/jp.png"
              alt="Space"
              className={styles.lozenge__image}
              width={1914}
              height={1914}
            />
          </div>
        </div>
        <div className={styles.content__text}>
          <span className={styles.text__dev}>DEV</span>
          <span className={styles.text__name}>João Pedro Scarabelli Silva</span>
          <span className={styles.text__skills}>
            Front-end | React | Typescript | Material UI
          </span>
        </div>
      </div>
    </div>
  );
};
