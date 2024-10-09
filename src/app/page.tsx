import Image from "next/image";
import ProfileIcon from "@public/icons/profile_main_image.svg";
import ArrowIcon from "@public/icons/arrowTopRight.svg";
import CallIcon from "@public/icons/call_dark.svg";
import EmailIcon from "@public/icons/email.svg";

export default function Home() {
  return (
    <div className="flex gap-2 justify-center items-center h-screen p-4 w-full">
      <div className="">
        <div className="leading-[5rem] text-6xl">My Name</div>
        <div className="text-6xl">
          is <span className="font-bold leading-[5rem]">DHEERAJ</span>
        </div>
        <div className="font-bold leading-[5rem] text-6xl">KUSHWAH...</div>
        <div className="text-2xl my-1">
          <span className="font-semibold">Frontend developer</span> based in
          <span className="font-semibold"> India</span>
        </div>
        <button className="bg-black text-white py-0.75 mt-1 font-medium px-2">
          Let&apos;s talk with me
          <Image
            className="inline-block bg-gradient-to-r from-gradient-start from-0% via-gradient-mid via-52% to-gradient-end to-100% ml-0.5"
            src={ArrowIcon}
            alt="Contact"
          />
        </button>
        <div className="mt-2 flex gap-2">
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
      <div>
        <Image className="relative z-10" src={ProfileIcon} alt="profile" />
        <div className="rounded-tl-[100%] rounded-tr-[150%] h-[120px] relative top-[-121px] bg-gradient-to-r from-gradient-start from-0% via-gradient-mid via-52% to-gradient-end to-100%" />
      </div>
    </div>
  );
}
