import Image from "next/image";
import styles from "./lozenge-icon.module.scss";

interface LozengeIconProps {
  small?: boolean;
  image: string;
}

export const LozengeIcon = ({ small, image }: LozengeIconProps) => {
  return (
    <div className={`${styles.avatar__lozenge}${small ? styles.small : ""}`}>
      <div className={styles.lozenge__internal}>
        <div className={styles.image__container}>
          <Image
            src={image}
            alt="SKill Image"
            className={styles.lozenge__image}
            width={64}
            height={64}
          />
        </div>
      </div>
    </div>
  );
};
