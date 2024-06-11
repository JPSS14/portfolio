import { SkillsType } from "@/app/components/skill-card/types";
import { SkillStacksType } from "./projectList";

export interface CertificateList {
  title: string;
  id: number;
  image: string;
  skillStack: SkillStacksType;
  skill?: SkillsType[];
}
