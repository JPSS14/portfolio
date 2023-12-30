import Link from "next/link";
import styles from "./page.module.scss";
import { SkillList } from "./components";

export default function Home() {
  return (
    <main className={styles.main}>
      <SkillList />
      <Link href="/projects">Projects</Link>
    </main>
  );
}
