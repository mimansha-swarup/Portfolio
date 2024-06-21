"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { notification } from "../section/contact/index";

const NOTIFICATION_TTL = 5000;
const NOTI_TYPE = {
  success: "bg-green-600",
  error: "bg-red-700",
  default: "bg-primary-400",
};
interface notificationProp extends notification {
  removeNotif: (id: string) => void;
}

const Notification = ({
  text,
  id,
  removeNotif,
  type = "default",
}: notificationProp) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif(id);
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, []);

  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`p-2 flex items-start rounded gap-2 text-xs font-medium  shadow-lg text-white  ${NOTI_TYPE[type]} pointer-events-auto`}
    >
      <span>{text}</span>
      <button onClick={() => removeNotif(id)} className="ml-auto mt-0.5">
        <FiX />
      </button>
    </motion.div>
  );
};

export default Notification;
