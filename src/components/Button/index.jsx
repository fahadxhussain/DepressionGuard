import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[7px]" };
const variants = {
  fill: {
    deep_orange_100_01: "bg-deep_orange-100_01 text-gray-700_01",
    lime_200: "bg-lime-200 text-black-900",
    deep_purple_100: "bg-deep_purple-100 shadow-bs text-black-900",
    deep_orange_100: "bg-deep_orange-100 shadow-bs text-pink-300",
    orange_100_02: "bg-orange-100_02 text-black-900",
    purple_100_01: "bg-purple-100_01 text-gray-700",
  },
};
const sizes = {
  xs: "p-[5px]",
  sm: "p-2",
  md: "p-3.5",
  lg: "p-[21px] sm:px-5",
  xl: "p-7 sm:px-5",
  "2xl": "pl-[35px] pr-[26px] sm:px-5 py-[35px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "deep_orange_100",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "deep_orange_100_01",
    "lime_200",
    "deep_purple_100",
    "deep_orange_100",
    "orange_100_02",
    "purple_100_01",
  ]),
};

export { Button };
