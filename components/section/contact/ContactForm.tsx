import React from "react";
import SpotlightButton from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import Textarea from "@/components/shared/Textarea";

const ContactForm = () => {
  return (
    <div className="flex flex-col flex-[2_2_0%] sm:ml-9  mr-auto  sm:pr-[12%]  ">
      <h3 className="text-primary-200 font-bold text-[1.75rem] text-right self-end">
        Get in touch with me
      </h3>

      <div className="flex flex-col my-9  gap-9 pb-6">
        <Input label="Your alias" value="" />
        <Input label="your.email@inbox.com" value="" />
        <Textarea
          label="Starting a project? Need a seasonal web developer? Just say Hi!"
          value=""
        />
      </div>
      <SpotlightButton className="mt-auto ml-auto mb-3" label="Send" />
    </div>
  );
};

export default ContactForm;
