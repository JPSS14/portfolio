import Link from "next/link";
import styles from "./page.module.scss";
import { ProfessionalXP, SkillList } from "./components";

export default function Home() {
  return (
    <main className={styles.main}>
      <SkillList />
      {/* <Link href="/projects">Projects</Link> */}
      <ProfessionalXP />
    </main>
  );
}
