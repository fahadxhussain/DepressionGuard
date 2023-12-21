import React from "react";

import { Img, Text } from "components";

const UM6MOODTRACKERJOURNALPage = () => {
  return (
    <>
      <div className="bg-blue-100 flex flex-col font-josefinslab items-start justify-start mx-auto sm:pr-5 pr-[29px] py-[29px] w-full">
        <div className="flex flex-col justify-start mb-[146px] md:px-5 w-[89%] md:w-full">
          <Img
            className="h-[42px] md:ml-[0] ml-[23px] w-[41px]"
            src="images/img_icons.svg"
            alt="icons"
          />
          <Text
            className="leading-[149.50%] md:ml-[0] ml-[318px] mt-[46px] md:text-5xl text-[64px] text-black-900 text-center w-[58%] sm:w-full"
            size="txtJosefinSlabRomanSemiBold64"
          >
            How would you like to lighten your mood?
          </Text>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-24 w-full">
            <Img
              className="h-[57px]"
              src="images/img_arrowright.svg"
              alt="arrowright"
            />
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between md:mt-0 mt-6 w-[85%] md:w-full">
              <div className="h-[237px] relative w-[45%] md:w-full">
                <div className="h-[237px] m-auto w-full">
                  <div className="absolute bg-teal-100 h-[237px] inset-[0] justify-center m-auto rounded-[18px] shadow-bs w-full"></div>
                  <Text
                    className="absolute bottom-[9%] leading-[99.50%] right-[0] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                    size="txtJosefinSlabRomanRegular36"
                  >
                    <>
                      My
                      <br />
                      Journal
                    </>
                  </Text>
                </div>
                <Img
                  className="absolute h-[147px] inset-y-[0] my-auto right-[7%]"
                  src="images/img_frame_black_900.svg"
                  alt="frame"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-[45%] md:w-full">
                <div className="md:h-[237px] h-[245px] relative w-full">
                  <div className="md:h-[237px] h-[245px] m-auto w-full">
                    <div className="absolute bg-teal-100_01 h-[237px] inset-[0] justify-center m-auto rounded-[18px] shadow-bs w-full"></div>
                    <Img
                      className="absolute h-[173px] right-[7%] top-[0]"
                      src="images/img_layer1.svg"
                      alt="layerOne"
                    />
                  </div>
                  <Text
                    className="absolute bottom-[6%] leading-[99.50%] right-[1%] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                    size="txtJosefinSlabRomanRegular36"
                  >
                    <span className="text-black-900 font-josefinslab text-left font-normal">
                      Mood
                    </span>
                    <span className="text-black-900 font-josefinslab text-left font-normal">
                      <>
                        {" "}
                        <br />
                      </>
                    </span>
                    <span className="text-black-900 font-josefinslab text-left font-normal">
                      Tracker
                    </span>
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

export default UM6MOODTRACKERJOURNALPage;
