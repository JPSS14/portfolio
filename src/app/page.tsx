"use client";
import styles from "./page.module.scss";
import { Intro, ProfessionalXP, ProjectList, SkillList } from "./components";
import {
  ProjectDetailsMapperType,
  projectListMapper,
} from "@/constants/projectList.mapper";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [projectList, setProjectList] = useState<ProjectDetailsMapperType[]>();

  useEffect(() => {
    setProjectList(projectListMapper());
  }, []);

  return (
    <main className={styles.main}>
      <Intro />
      <SkillList />
      {projectList && <ProjectList projectList={projectList} />}
      <Link href="/projects">Projects</Link>
      <ProfessionalXP />
    </main>
  );
}
