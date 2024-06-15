import { contactDetails } from "@/constants/nav";
import { FiLinkedin, FiTwitter, FiGithub } from "react-icons/fi";

const FloatDetails = () => {
  return (
    <div className="fixed bottom-[4.5rem] text-xl left-0 z-10 text-primary-100 w-fit  hidden  sm:block">
      <div className="flex flex-col">
        {contactDetails.map((contactObj) => (
          <a
            href={contactObj.href}
            target="_blank"
            rel="noopener noreferrer"
            className="-translate-y-[5rem] translate-x-[4.5rem] my-6 "
          >
            <contactObj.icon />
          </a>
        ))}
      </div>
      <hr className="rotate-90 w-[10rem] h-[2px] border-none bg-primary-100" />
    </div>
  );
};

export default FloatDetails;
