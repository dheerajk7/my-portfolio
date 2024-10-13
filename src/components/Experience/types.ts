interface SkillType {
    title: string;
    icon?: string;
    skillLevel?: number;
  }
  
  interface ExperienceDetailType {
    jobTitle: string;
    startDate: Date;
    endDate: Date | null;
    isPresent: boolean;
    description: string;
    jobType: "Full-time" | "Part-time" | "Internship" 
  }
  
  interface ExperienceDataType {
    title: string;
    topSkills: SkillType[];
    location: string;
    icon: string;
    startDate: Date;
    endDate?: Date | null;
    isPresent: boolean;
    details: ExperienceDetailType[],
  }

  export type {
    SkillType,
    ExperienceDataType,
    ExperienceDetailType
  }