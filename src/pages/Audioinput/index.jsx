import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Text } from "components";

const AudioinputPage = () => {
  return (
    <>
      <div className="bg-purple-100_03 flex sm:flex-col md:flex-col flex-row font-josefinslab sm:gap-5 md:gap-5 items-start mx-auto sm:pr-5 pr-[23px] py-[23px] w-full">
        <Sidebar className="!sticky !w-[61px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <Img
            className="h-[42px] ml-5 md:ml-[0] w-[41px]"
            src="images/img_icons_pink_200.svg"
            alt="icons"
          />
          <Img
            className="h-[70px] mr-[11px] mt-[310px]"
            src="images/img_arrowright_pink_200.svg"
            alt="arrowright"
          />
        </Sidebar>
        <Text
          className="leading-[149.50%] md:ml-[0] ml-[35px] md:mt-0 mt-[303px] md:text-5xl text-[64px] text-black-900 text-center w-[39%] sm:w-full"
          size="txtJosefinSlabRomanSemiBold64"
        >
          Speak your heart out!
        </Text>
        <div className="flex flex-1 h-[644px] md:h-[718px] justify-end mb-[76px] md:ml-[0] ml-[92px] mr-[53px] md:mt-0 mt-[66px] md:px-5 relative w-full">
          <div className="flex flex-col gap-[51px] h-full items-center justify-start mb-[100px] mt-auto mx-auto w-[97%]">
            <Img
              className="h-[118px]"
              src="images/img_group34.svg"
              alt="groupThirtyFour"
            />
            <Img
              className="h-[207px]"
              src="images/img_group38.svg"
              alt="groupThirtyEight"
            />
          </div>
          <div className="absolute bg-pink-200_60 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[71px] md:px-10 sm:px-5 rounded-[67px] shadow-bs w-full">
            <Text
              className="mt-[476px] text-2xl md:text-[22px] text-center text-gray-700 sm:text-xl"
              size="txtJosefinSlabRomanBold24"
            >
              03:47
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioinputPage;
