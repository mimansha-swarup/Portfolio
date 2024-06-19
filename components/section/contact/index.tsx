import SpotlightButton from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import LightBall from "@/components/shared/Light";
import Textarea from "@/components/shared/Textarea";
import Title from "@/components/shared/Title";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section className="relative min-h-screen overflow-visible">
      <LightBall
        height="h-[300px] sm:h-[600px]"
        width="w-[300px] sm:w-[600px]"
        blur="blur-[200px] sm:blur-[300px] "
        positionClass="top-0 right-0  translate-x-[20%] -translate-y-[20%]"
      />
      <Title heading="Contact" />

      <div className="flex mt-[5%] pb-[2.5%] h-[100%]">
        <div className="flex-1 max-w-[511px] max-h-[751px] object-contain">
          <Image
            src={"/assets/contact.svg"}
            height={511 / 2}
            width={751 / 2}
            alt="contact image"
            // fill={true}
            objectFit="object-contain"
          />
        </div>
        {/* flex-[2_2_0%] */}
        <div className="flex flex-col flex-1 mr-auto pr-[10%]  ">
          <h3 className="text-primary-200 font-bold text-[1.75rem] text-right self-end">
            Get in touch with me
          </h3>

          <div className="flex flex-col mt-9 gap-9">
            <Input label="Your alias" value="" />
            <Input label="your.email@inbox.com" value="" />
            <Textarea
              label="Starting a project? Looking for a seasonal web developer? Just say Hi!"
              value=""
            />
          </div>
          <SpotlightButton className="mt-auto ml-auto" label="Send" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
