import { FaLocationArrow } from "react-icons/fa6";
import GlobeDemo from "./ui/GridGlobeFooter";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      <div className="flex flex-col md:flex-row justify-between items-start pb-40">
        <div className="flex flex-col items-start w-full md:w-1/2 z-10">
          <h1 className="heading lg:max-w-[45vw] text-left !text-start">
            Ready to take <span className="text-purple">your</span> digital
            presence to the next level?
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-left !text-start w-full">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
          <a href="mailto:kanishkazoysa1234@gmail.com" className="self-start">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>

        <div className="md:w-1/2 h-[500px] absolute right-0 top-0 bottom-0">
          <GlobeDemo />
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center relative z-10">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Adrian Hajdin
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;