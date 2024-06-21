import React from "react";

interface ITextareaProps {
  label: string;
  name: string;
  value?: string | number | readonly string[];
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  className?: string;
}

const Textarea = ({
  className = "",
  label,
  name,
  value,
  onChange,
}: ITextareaProps) => {
  return (
    <div className={`relative 12 w-full min-w-[200px]${className}`}>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={3}
        placeholder=" "
        className="peer h-full w-full border-b border-primary-300 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-primary-200 outline outline-0 transition-all placeholder-shown:border-primary-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
      />
      <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-primary-200 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-primary-300 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary-100 peer-focus:after:scale-x-100 peer-focus:after:border-primary-100 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-primary-300">
        {label}
      </label>
    </div>
  );
};

export default Textarea;
