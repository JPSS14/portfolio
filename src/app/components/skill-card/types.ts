import { SkillStacksType } from "@/constants/projectList";

export interface SkillsType {
  title: string;
  skillImage: string;
  skillStackTitle: SkillStacksType;
  content?: string;
}
