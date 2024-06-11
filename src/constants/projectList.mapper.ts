import {
  ContentContainerType,
  ProjectDetailsType,
  SkillStacksType,
  projectList,
} from "./projectList";
import { mainSkills } from "./skillList";

export interface ProjectDetailsMapperType {
  id: number;
  title: string;
  description: string[];
  projectMainImage: string;
  projectStack: SkillStacksType;
  skills: {
    title: string;
    image: string;
  }[];
  repoLink: string;
  deployLink?: string;
  aboutSection?: {
    content: ContentContainerType[];
  };
  functionsSection?: {
    content: ContentContainerType[];
  };
  resultSection?: {
    content: ContentContainerType[];
  };
}

const handleSearchSkillImage = (projectItem: ProjectDetailsType) => {
  const skillImages = projectItem.skills.map((skillTitle) => {
    const foundSkillImage = mainSkills.find(
      (skill) =>
        skill.title.toLocaleLowerCase() === skillTitle.toLocaleLowerCase()
    );
    return {
      title: foundSkillImage ? foundSkillImage.title : "",
      image: foundSkillImage ? foundSkillImage.skillImage : "",
    };
  });
  return skillImages;
};

export const projectListMapper = (): ProjectDetailsMapperType[] => {
  const resultMapper = projectList.map((item) => {
    return {
      id: item.id,
      title: item.title,
      description: item.description,
      projectMainImage: item.projectMainImage,
      projectStack: item.projectStack,
      repoLink: item.repoLink,
      deployLink: item.deployLink,
      aboutSection: item.aboutSection,
      functionsSection: item.functionsSection,
      resultSection: item.resultSection,
      skills: handleSearchSkillImage(item),
    };
  });
  return resultMapper;
};
