import React from "react";

import { Button, Img, Text } from "components";

const MoodtrackerPage = () => {
  return (
    <>
      <div className="bg-lime-200 flex flex-col font-josefinslab items-center justify-end mx-auto pt-[17px] w-full">
        <div className="flex flex-col gap-[27px] items-start justify-end w-full">
          <div className="flex flex-col gap-[58px] justify-start md:px-5 w-[85%] md:w-full">
            <Img
              className="h-[42px] ml-5 md:ml-[0] w-[41px]"
              src="images/img_icons_light_green_400.svg"
              alt="icons"
            />
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <Img
                className="h-[57px] md:mt-0 mt-[271px]"
                src="images/img_arrowright_light_green_400.svg"
                alt="arrowright"
              />
              <div className="md:h-[204px] h-[314px] mb-3.5 relative w-[83%] md:w-full">
                <Text
                  className="absolute inset-x-[0] leading-[149.50%] mx-auto md:text-5xl text-[64px] text-black-900 text-center top-[0] w-[73%] sm:w-full"
                  size="txtJosefinSlabRomanSemiBold64"
                >
                  How are you feeling today?
                </Text>
                <Img
                  className="absolute bottom-[0] h-[190px] inset-x-[0] mx-auto"
                  src="images/img_group1.svg"
                  alt="groupOne"
                />
              </div>
            </div>
          </div>
          <div className="bg-light_green-400_51 flex flex-col items-center justify-start p-8 sm:px-5 rounded-[28px] w-full">
            <div className="flex flex-col md:gap-10 gap-[165px] justify-start max-w-[1187px] mb-[210px] mx-auto md:px-5 w-full">
              <div className="flex flex-col items-start justify-start mr-[872px]">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtJosefinSlabRomanSemiBold32Black900"
                >
                  Tell us about your day
                </Text>
                <Text
                  className="ml-0.5 md:ml-[0] mt-0.5 text-2xl md:text-[22px] text-black-900_3f sm:text-xl"
                  size="txtJosefinSlabRomanSemiBold24Black9003f"
                >
                  Type here...
                </Text>
              </div>
              <Button
                className="cursor-pointer font-semibold min-w-[127px] md:ml-[0] ml-[1060px] rounded-[13px] text-2xl md:text-[22px] text-center sm:text-xl"
                color="lime_200"
                size="md"
              >
                done
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoodtrackerPage;
