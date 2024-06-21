"use client";
import LightBall from "@/components/shared/Light";
import Title from "@/components/shared/Title";
import Image from "next/image";
import React, { useState } from "react";
import ContactForm from "./ContactForm";
import { AnimatePresence } from "framer-motion";
import Notification from "@/components/shared/Notification";
import { v4 as uuid4 } from 'uuid';

// Todo: clean ts use ENum 
export type notiType = "success" | "error" | "default"; 
export interface notification {
  id: string;
  text: string;
  type:  notiType
}
const Contact = () => {
  const [notifications, setNotifications] = useState<notification[]>([]);

  const removeNotif = (id: string) => {
    setNotifications((pv) => pv.filter((n) => n.id !== id));
  };

  const pushNotification = (text: string, type: notiType ) =>{
    const notiObj = {
      id: uuid4(),
      text,
      type,
    }

    setNotifications((pv) => [notiObj, ...pv]);
  }

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
        <ContactForm pushNotification={pushNotification} />
      </div>
      <div className="flex flex-col gap-1 w-72 fixed top-2 right-2 z-50 pointer-events-none">
        <AnimatePresence>
          {notifications.map((n) => (
            <Notification removeNotif={removeNotif} {...n} key={n.id} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;
