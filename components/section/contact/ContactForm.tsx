"use client";
import React, { MouseEventHandler, useState } from "react";
import SpotlightButton from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import Textarea from "@/components/shared/Textarea";
import useWindowWidth from "@/hooks/useWIndowWidth";
import { contactDetails } from "@/constants/nav";
import { notiType } from ".";

const INITIAL_FORM_FIELDS = {
  name: "",
  email: "",
  message: "",
};
const ContactForm = ({
  pushNotification,
}: {
  pushNotification: (text: string, type: notiType) => void;
}) => {
  const [formFields, setFormField] = useState(INITIAL_FORM_FIELDS);
  const windowWidth = useWindowWidth();

  const textAreaLabel =
    windowWidth && windowWidth <= 426
      ? "Starting a project? Need a web dev? Just say Hi!"
      : "Starting a project? Need a seasonal web developer? Just say Hi!";

  const onFieldChange =
    (
      fieldName: string
    ): React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> =>
    (event) => {
      const value = event?.target?.value;
      setFormField((prev) => ({
        ...prev,
        [fieldName]: value,
      }));
    };

  const submitForm: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    const { name, email, message } = formFields;
    if (!name || !email || !message) {
      pushNotification("Fields are empty", "error");
      return;
    }
    const formData = new FormData();

    Object.entries(formFields)?.forEach((entry) => {
      formData.append(entry[0], entry[1]);
    });
    fetch(process.env.FORM_URL as string, { method: "POST", body: formData })
      .then((res) => {
        pushNotification("Will be hearing from me soon", "success");
      })
      .catch((err) => {
        pushNotification("mailto: mimanshaswarup@gmail.com", "error");
        console.error(err);
      });
  };
  return (
    <form className="flex flex-col flex-[2_2_0%] sm:ml-9  mr-auto  sm:pr-[12%]  ">
      <h3 className="text-primary-200 font-bold text-base scale-90 sm:scale-100 pr-[20px] sm:pr-0 md:text-[1.75rem] text-right self-end">
        Get in touch with me
      </h3>

      <div className="flex flex-col my-9  gap-9  md:gap-14 pb-6 scale-90 sm:scale-100 ">
        <Input
          name="name"
          type="text"
          label="Your alias"
          value={formFields.name}
          onChange={onFieldChange("name")}
        />
        <Input
          name="email"
          type="email"
          label="your.email@inbox.com"
          value={formFields.email}
          onChange={onFieldChange("email")}
        />
        <Textarea
          name="message"
          label={textAreaLabel}
          value={formFields.message}
          onChange={onFieldChange("message")}
        />
      </div>
      <div className="flex w-full mb-3 md:mb-6 pt-3 px-[20px] ">
        <div className="flex flex-col sm:flex-row items-center flex-wrap gap-6 md:gap-9 ">
          {contactDetails?.map((contactObj) => (
            <a
              key={contactObj.href}
              href={contactObj.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex text-lg text-white-700 "
            >
              <contactObj.icon />
            </a>
          ))}
        </div>
        <SpotlightButton
          onClick={submitForm}
          className="mt-auto ml-auto"
          label="Send"
        />
      </div>
    </form>
  );
};

export default ContactForm;
