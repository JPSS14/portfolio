"use client";
import styles from "./page.module.scss";
import { ProfessionalXP, ProjectList, SkillList } from "./components";
import {
  ProjectDetailsMapperType,
  projectListMapper,
} from "@/constants/projectList.mapper";
import { useEffect, useState } from "react";

export default function Home() {
  const [projectList, setProjectList] = useState<ProjectDetailsMapperType[]>();

  useEffect(() => {
    setProjectList(projectListMapper());
  }, []);

  return (
    <main className={styles.main}>
      <SkillList />
      {projectList && <ProjectList projectList={projectList} />}
      {/* <Link href="/projects">Projects</Link> */}
      <ProfessionalXP />
    </main>
  );
}
