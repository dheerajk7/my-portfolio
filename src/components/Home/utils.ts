import { SocialMediaLinkType } from "./types";

import LinkedInIcon from '@public/icons/linkedin.svg';
import GithubIcon from '@public/icons/github.svg';

const SOCIAL_MEDIA_LINKS: SocialMediaLinkType[] = [
  {
    id: "linkedin",
    title: "Linked In",
    icon: LinkedInIcon,
    endPoint: "https://www.linkedin.com/in/dheerajk7",
  },
  {
    id: "github",
    title: "Github",
    icon: GithubIcon,
    endPoint: "https://www.github.com/dheerajk7",
  },
];

export { SOCIAL_MEDIA_LINKS };
