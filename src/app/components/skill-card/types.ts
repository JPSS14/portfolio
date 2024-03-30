export interface SkillCardProps {
  title: string;
  skillImage: string;
  skillStackTitle: "Front" | "Back" | "Full" | "UX";
  content?: string;
}
