import Link from "next/link";
import styles from "./page.module.scss";
import { ProfessionalXP, ProjectList, SkillList } from "./components";
import { projectList } from "@/constants/projectList";

export default function Home() {
  return (
    <main className={styles.main}>
      <SkillList />
      <ProjectList projectItems={projectList} />
      {/* <Link href="/projects">Projects</Link> */}
      <ProfessionalXP />
    </main>
  );
}
