import LightBall from "@/components/shared/Light";
import Title from "@/components/shared/Title";
import Image from "next/image";
import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative flex flex-col min-h-screen overflow-visible"
    >
      <LightBall
        height="h-[300px] sm:h-[600px]"
        width="w-[300px] sm:w-[600px]"
        blur="blur-[200px] sm:blur-[300px] "
        positionClass="top-0 right-0  translate-x-[20%] -translate-y-[20%]"
      />
      <Title heading="Contact" />

      <div className="flex mt-auto   h-[100%]">
        <div className="relative flex-1  hidden  md:block  max-w-[511px] max-h-[751px] object-contain">
          <Image src={"/assets/contact.svg"} alt="contact image" fill={true} />
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
