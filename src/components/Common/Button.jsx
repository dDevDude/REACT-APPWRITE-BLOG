import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-[var(--sky-blue)]",
  textColor = "text-white",
  buttonClass = "",
  spanClass = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`"flex cursor-pointer items-center justify-center overflow-hidden rounded-md px-4 py-2 text-base font-bold leading-normal tracking-wide hover:bg-opacity-90 transition-colors" ${bgColor} ${textColor} ${buttonClass}`}
      {...props}
    >
      <span className={`truncate font-serif text-lg font-thin ${spanClass}`}>
        {children}
      </span>
    </button>
  );
}

export default Button;
