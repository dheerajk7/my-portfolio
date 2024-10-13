import FlightIcon from "@public/icons/flight.svg";
import Image from "next/image";
import { EXPERIENCE_DATA } from "./data";
import { ExperienceDataType } from "./types";
import ExperienceItem from "./ExperienceItem";

function Experience() {
  return (
    <section className="max-w-[1150px] mt-2 md:mt-0 px-1 md:pb-3 m-auto">
      <div className="text-center text-4xl font-semibold pb-1">Work Experience</div>
      <div className="relative justify-between my-3">
        <ul className="ml-3">
          {EXPERIENCE_DATA.map((experiance: ExperienceDataType) => (
            <ExperienceItem key={experiance.title} {...experiance} />
          ))}
        </ul>
        <div className="absolute left-[3%] md:left-[50%] top-0 translate-x-[-50%] h-[100%]">
          <div className="border-2 border-black-300 translate-x-[-50%] border-dashed h-[100%] width-fit absolute left-[50%]" />
          <Image
            className="sticky top-5 rotate-[135deg]"
            src={FlightIcon}
            height={36}
            width={36}
            alt="flight-icon"
          />
        </div>
      </div>
    </section>
  );
}

export default Experience;
