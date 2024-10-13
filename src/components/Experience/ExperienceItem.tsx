import Image from "next/image";
import { ExperienceDataType, ExperienceDetailType, SkillType } from "./types";

function ExperienceItem({
  title,
  icon,
  startDate,
  endDate,
  location,
  details,
  topSkills,
  isPresent,
}: ExperienceDataType) {
  return (
    <li className="md:flex justify-evenly mb-2">
      <div className="flex md:pr-3 mb-0.75 items-start md:w-[48%]">
        <div className="flex items-start gap-1 ">
          <Image height={42} width={80} className="rounded-md" src={icon} alt={title} />
          <div className="text-black-300 ml-0.25">
            <div className="text-2xl text-black font-semibold">{title}</div>
            <div>
              {`
            ${startDate.toLocaleDateString()} - ${
                isPresent ? "Present" : endDate?.toLocaleDateString()
              }`}
            </div>
            <div>{location}</div>
            <div className="flex gap-0.5">
              <span>Top skills :-</span>
              <ul>
                {topSkills?.map((skill: SkillType) => (
                  <li key={skill.title}>{skill.title}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-[48%] mb-4 pt-1 md:pt-0 md:mb-0 pl-1 md:pl-3">
        <ul>
          {details?.map((detail: ExperienceDetailType) => (
            <li className="mb-2" key={detail.jobTitle}>
              <div className="font-semibold text-2xl">{detail.jobTitle}</div>
              <div>{`
            ${detail.startDate.toLocaleDateString()} - ${
                detail.isPresent
                  ? "Present"
                  : detail.endDate?.toLocaleDateString()
              }, ${detail.jobType}`}</div>
              <div className="mt-0.75 text-md text-black-300">{detail.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default ExperienceItem;
