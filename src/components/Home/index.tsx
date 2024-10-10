import Image from "next/image";
import ProfileIcon from "@public/images/profile.png";
import { SOCIAL_MEDIA_LINKS } from "./utils";
import { SocialMediaLinkType } from "./types";
import Link from "next/link";
import Button from "@components/Button";
function Home() {
  return (
    <section className="max-w-[1200px] px-1 md:px-2 md:py-3 m-auto flex flex-col-reverse md:flex-row">
      <div className="text-center md:text-left md:pr-2 pt-0.5 md:pt-2 w-[100%] md:w-[50%]">
        <div className="pb-0.25 text-black-300">Hi&#44; I am</div>
        <div className="pb-0.25 text-2xl text-orange font-semibold">
          Dheeraj Kushwah
        </div>
        <div className="text-7xl pt-0.75 leading-none font-bold">Frontend</div>
        <div className="pb-0.75 text-7xl leading-none font-bold md:text-end">
          Developer
        </div>
        <div className="pt-0.75 pb-0.25 text-black-300">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
        <Button rounded variant="active" buttonClasses="my-1">
          Download CV
        </Button>
      </div>
      <div className="flex flex-col items-center md:items-end justify-center w-[100%] md:w-[50%]">
        <div className="relative right-[-5px] md:right-[-20px] flex justify-center flex-col items-center">
          <Image
            className=" py-1"
            src={ProfileIcon}
            height={400}
            alt={"profile image"}
          />
          <ul className="flex gap-0.5 pb-1">
            {SOCIAL_MEDIA_LINKS.map((socialLink: SocialMediaLinkType) => (
              <li key={socialLink.id}>
                <Link href={socialLink.endPoint} target="_blank">
                  <Image
                    height={32}
                    width={32}
                    src={socialLink.icon}
                    alt={socialLink.title}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Home;
