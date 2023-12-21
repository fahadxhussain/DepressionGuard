import React from "react";

import { Img, Text } from "components";

const UM5TACKLINGDEPRESSIONPage = () => {
  return (
    <>
      <div className="bg-cyan-100 flex flex-col font-josefinslab items-start justify-start mx-auto sm:pr-5 pr-[29px] py-[29px] w-full">
        <div className="flex flex-col justify-start mb-[76px] md:px-5 w-[82%] md:w-full">
          <Img
            className="h-[42px] ml-5 md:ml-[0] w-[41px]"
            src="images/img_icons_cyan_200.svg"
            alt="icons"
          />
          <Text
            className="md:ml-[0] ml-[284px] mt-[9px] md:text-5xl text-[64px] text-black-900 text-center"
            size="txtJosefinSlabRomanSemiBold64"
          >
            Nurture Your Well-being
          </Text>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-10 w-full">
            <Img
              className="h-[57px] md:mt-0 mt-[178px]"
              src="images/img_arrowright_cyan_200_01.svg"
              alt="arrowright"
            />
            <div className="flex flex-col items-center justify-start">
              <div className="flex flex-col gap-[38px] items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="gap-14 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    <div className="h-[147px] relative w-full">
                      <div className="absolute bg-teal-100_02 h-[147px] inset-[0] justify-center m-auto rounded-[18px] shadow-bs w-full"></div>
                      <Text
                        className="absolute bottom-[0] inset-x-[0] leading-[149.50%] mx-auto md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-3/4 sm:w-full"
                        size="txtJosefinSlabRomanSemiBold32Black900"
                      >
                        Relaxation Exercises
                      </Text>
                    </div>
                    <div className="h-[147px] relative w-full">
                      <div className="absolute bg-teal-100_02 h-[147px] inset-[0] justify-center m-auto rounded-[18px] shadow-bs w-full"></div>
                      <Text
                        className="absolute bottom-[0] inset-x-[0] leading-[149.50%] mx-auto md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-[88%] sm:w-full"
                        size="txtJosefinSlabRomanSemiBold32Black900"
                      >
                        Self-esteem Improvement
                      </Text>
                    </div>
                    <div className="h-[147px] relative w-full">
                      <div className="absolute bg-teal-100_02 h-[147px] inset-[0] justify-center m-auto rounded-[18px] shadow-bs w-full"></div>
                      <Text
                        className="absolute bottom-[0] inset-x-[0] leading-[149.50%] mx-auto md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-[88%] sm:w-full"
                        size="txtJosefinSlabRomanSemiBold32Black900"
                      >
                        Self-care Enhancement
                      </Text>
                    </div>
                    <div className="h-[147px] relative w-full">
                      <div className="absolute bg-teal-100_02 h-[147px] inset-[0] justify-center m-auto rounded-[18px] shadow-bs w-full"></div>
                      <Text
                        className="absolute bottom-[0] inset-x-[0] leading-[149.50%] mx-auto md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-3/4 sm:w-full"
                        size="txtJosefinSlabRomanSemiBold32Black900"
                      >
                        Mindfulness Training
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-teal-100_02 flex flex-col items-center justify-end p-[46px] md:px-10 sm:px-5 rounded-[18px] shadow-bs w-full">
                  <Text
                    className="mt-[9px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                    size="txtJosefinSlabRomanSemiBold32Black900"
                  >
                    Eliminate Negative Thought Process
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UM5TACKLINGDEPRESSIONPage;
