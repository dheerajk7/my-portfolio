import Image from "next/image";
import ProfileIcon from "@public/icons/profile_main_image.svg";
import ArrowIcon from "@public/icons/arrowTopRight.svg";
import CallIcon from "@public/icons/call_dark.svg";
import EmailIcon from "@public/icons/email.svg";

export default function Home() {
  return (
    <div className="lg:flex gap-2 justify-center items-center h-auto lg:h-screen p-2 lg:p-4 w-full">
      <div className="relative block lg:hidden mb-2 lg:mb-0">
        <Image className="relative z-10" src={ProfileIcon} alt="profile" />
        <div className="rounded-tl-[100%] rounded-tr-[150%] w-[100%] h-[120px] bottom-[1px] absolute bg-gradient-to-r from-gradient-start from-0% via-gradient-mid via-52% to-gradient-end to-100%" />
      </div>
      <div className="mb-2">
        <div className="leading-[3rem] lg:leading-[5rem] text-3xl lg:text-6xl">
          My Name <span className="inline lg:hidden">is</span>
        </div>
        <div className="text-3xl lg:text-6xl">
          <span className="hidden lg:inline">is</span>{" "}
          <span className="font-bold leading-[3rem] lg:leading-[5rem]">
            DHEERAJ
          </span>
        </div>
        <div className="font-bold leading-[3rem] lg:leading-[5rem] text-3xl lg:text-6xl">
          KUSHWAH...
        </div>
        <div className="text-base lg:text-2xl my-1">
          <span className="font-semibold">Frontend developer</span> based in
          <span className="font-semibold"> India</span>
        </div>
        <button className="bg-black text-white py-0.5 lg:py-0.75 mt-1 font-medium px-2">
          Let&apos;s talk with me
          <Image
            className="inline-block bg-gradient-to-r from-gradient-start from-0% via-gradient-mid via-52% to-gradient-end to-100% ml-0.5"
            src={ArrowIcon}
            alt="Contact"
          />
        </button>
        <div className="mt-2 flex flex-col gap-1 lg:flex-row lg:gap-2">
          <div className="flex gap-0.75 items-center">
            <Image
              className="p-0.25 bg-icon-light-background rounded-2xl"
              height={32}
              width={32}
              src={CallIcon}
              alt={"Call"}
            />
            +91 7067777253
          </div>
          <div className="flex gap-0.75 items-center">
            <Image
              className="p-0.25 bg-icon-light-background rounded-2xl"
              height={32}
              width={32}
              src={EmailIcon}
              alt="Email"
            />
            dheeraj77253@gmail.com
          </div>
        </div>
      </div>
      <div className="relative hidden lg:block">
        <Image className="relative z-10" src={ProfileIcon} alt="profile" />
        <div className="rounded-tl-[100%] rounded-tr-[150%] w-[100%] h-[120px] bottom-[1px] absolute bg-gradient-to-r from-gradient-start from-0% via-gradient-mid via-52% to-gradient-end to-100%" />
      </div>
    </div>
  );
}
