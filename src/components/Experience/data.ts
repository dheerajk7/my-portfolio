import { ExperienceDataType } from "./types";
import SprinkleDataLogo from "@public/images/sprinkledata_logo.jpeg";
import ValuelabsLogo from "@public/images/valuelabs_logo.jpeg";
import WalkoverLogo from "@public/images/walkover_logo.jpeg";
import CoditationLogo from "@public/images/coditation_systems_logo.jpeg";
import CodingNinjasLogo from "@public/images/codingninjas_logo.jpeg";

const EXPERIENCE_DATA: ExperienceDataType[] = [
  {
    title: "Valuelabs",
    topSkills: [
      {
        title: "React",
      },
    ],
    location: "Indore, Madhya Pradesh",
    icon: ValuelabsLogo.src,
    startDate: new Date(),
    isPresent: true,
    details: [
      {
        jobTitle: "Senior Software Engineer",
        startDate: new Date(),
        endDate: null,
        isPresent: true,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
    since the 1500s, when an unknown printer took a galley of type and
    scrambled it to make a type specimen book. It has survived not only
    five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged.`,
        jobType: "Full-time",
      },
    ],
  },
  {
    title: "Sprinkle Data",
    topSkills: [
      {
        title: "React",
      },
    ],
    location: "Bengaluru, Karnataka India",
    icon: SprinkleDataLogo.src,
    startDate: new Date(),
    isPresent: true,
    details: [
      {
        jobTitle: "Senior Software Engineer",
        startDate: new Date(),
        endDate: new Date(),
        isPresent: false,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
    since the 1500s, when an unknown printer took a galley of type and
    scrambled it to make a type specimen book. It has survived not only
    five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged.`,
        jobType: "Full-time",
      },
    ],
  },
  {
    title: "Walkover",
    topSkills: [
      {
        title: "React",
      },
    ],
    location: "Indore, Madhya Pradesh",
    icon: WalkoverLogo.src,
    startDate: new Date(),
    isPresent: true,
    details: [
      {
        jobTitle: "Software Developer",
        startDate: new Date(),
        endDate: new Date(),
        isPresent: false,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
    since the 1500s, when an unknown printer took a galley of type and
    scrambled it to make a type specimen book. It has survived not only
    five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged.`,
        jobType: "Full-time",
      },
    ],
  },
  {
    title: "Coditation Systems",
    topSkills: [
      {
        title: "React",
      },
    ],
    location: "Pune, Maharashtra India",
    icon: CoditationLogo.src,
    startDate: new Date(),
    isPresent: true,
    details: [
      {
        jobTitle: "Software Developer",
        startDate: new Date(),
        endDate: new Date(),
        isPresent: false,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
    since the 1500s, when an unknown printer took a galley of type and
    scrambled it to make a type specimen book. It has survived not only
    five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged.`,
        jobType: "Full-time",
      },
      {
        jobTitle: "Associate Software Developer",
        startDate: new Date(),
        endDate: new Date(),
        isPresent: false,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
    since the 1500s, when an unknown printer took a galley of type and
    scrambled it to make a type specimen book. It has survived not only
    five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged.`,
        jobType: "Full-time",
      },
      {
        jobTitle: "Software Development Intern",
        startDate: new Date(),
        endDate: new Date(),
        isPresent: false,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
    since the 1500s, when an unknown printer took a galley of type and
    scrambled it to make a type specimen book. It has survived not only
    five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged.`,
        jobType: "Internship",
      },
    ],
  },
  {
    title: "Coding Ninjas",
    topSkills: [
      {
        title: "React",
      },
    ],
    location: "Indore, Madhya Pradesh",
    icon: CodingNinjasLogo.src,
    startDate: new Date(),
    isPresent: true,
    details: [
      {
        jobTitle: "Teaching Assistant",
        startDate: new Date(),
        endDate: new Date(),
        isPresent: false,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
    since the 1500s, when an unknown printer took a galley of type and
    scrambled it to make a type specimen book. It has survived not only
    five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged.`,
        jobType: "Internship",
      },
    ],
  },
];

export { EXPERIENCE_DATA };
