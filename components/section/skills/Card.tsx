import React from "react";

interface ICardProps {
  title: string;
  Icon: any;
}
const Card = ({ title, Icon }: ICardProps) => {
  return (
    <div className="w-full flex items-end max-w-[188px] h-[146px] overflow-hidden hover:overflow-visible p-4 rounded border-[1px] border-primary-200 relative group bg-dark-500">
      <Icon className="absolute  z-10 -top-12 -right-12 text-9xl text-primary-200 opacity-30 group-hover:opacity-50 group-hover:rotate-12 transition-transform duration-300" />
      {/* <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" /> */}
      <div>
        <h3 className="font-medium opacity-80 text-lg mt-auto text-white-500 group-hover:text-white relative z-10 duration-300">
          {title}
        </h3>
        <p className="title-underline  absolute bottom-0  text-lg">
          ..................................
        </p>
      </div>
    </div>
  );
};

export default Card;
