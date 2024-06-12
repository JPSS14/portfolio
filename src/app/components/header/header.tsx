import Link from "next/link";
import styles from "./header.module.scss";
import { AiFillGithub, AiFillLinkedin } from "react-icons/Ai";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <h1>
          <Link href="/">
            My<span className={styles.feature__text}>Portfolio</span>
          </Link>
        </h1>
        <ul>
          <li>
            <Link href="https://github.com/JPSS14">
              <AiFillGithub className={styles.icon} />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/jo%C3%A3o-pedro-s-silva/">
              <AiFillLinkedin className={styles.icon} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
