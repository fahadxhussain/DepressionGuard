import React from "react";

const sizeClasses = {
  txtAssistantRomanRegular24: "font-assistant font-normal",
  txtAtmaSemiBold16: "font-atma font-semibold",
  txtAssistantRomanRegular20: "font-assistant font-normal",
  txtJosefinSlabRomanRegular30: "font-josefinslab font-normal",
  txtAtmaSemiBold24: "font-atma font-semibold",
  txtJosefinSlabRomanSemiBold24: "font-josefinslab font-semibold",
  txtJosefinSlabRomanSemiBold36: "font-josefinslab font-semibold",
  txtJosefinSlabRomanSemiBold20: "font-josefinslab font-semibold",
  txtJosefinSlabRomanSemiBold64: "font-josefinslab font-semibold",
  txtJosefinSlabRomanSemiBold32: "font-josefinslab font-semibold",
  txtJosefinSlabRomanSemiBold32Black900: "font-josefinslab font-semibold",
  txtJosefinSlabRomanBold24: "font-bold font-josefinslab",
  txtJosefinSlabRomanRegular29: "font-josefinslab font-normal",
  txtAssistantRomanRegular16: "font-assistant font-normal",
  txtJosefinSlabRomanBold51: "font-bold font-josefinslab",
  txtJosefinSlabRomanRegular28: "font-josefinslab font-normal",
  txtJosefinSlabRomanRegular36: "font-josefinslab font-normal",
  txtJosefinSlabRomanSemiBold24Black9003f: "font-josefinslab font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
