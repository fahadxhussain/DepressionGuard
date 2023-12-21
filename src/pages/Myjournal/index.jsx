import React from "react";

import { Button, Img, Line, Text } from "components";

const MyjournalPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-lime-100 bg-no-repeat flex sm:flex-col md:flex-col flex-row font-josefinslab gap-[37px] h-[832px] items-start mx-auto sm:pr-5 pr-7 py-7 w-full"
        style={{ backgroundImage: "url('images/img_61myjournal.svg')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[309px] justify-start md:mt-0 mt-1 md:px-5 w-[6%] md:w-full">
          <Img
            className="h-[42px] md:ml-[0] ml-[23px] w-[41px]"
            src="images/img_icons_orange_100.svg"
            alt="icons"
          />
          <Img
            className="h-[62px] mr-[17px]"
            src="images/img_arrowright_orange_100_01.svg"
            alt="arrowright"
          />
        </div>
        <div className="md:h-[693px] sm:h-[737px] h-[748px] mr-[73px] md:mt-0 mt-[27px] md:px-5 relative w-[87%] md:w-full">
          <div className="absolute flex flex-col md:gap-10 gap-[84px] h-max inset-[0] items-center justify-center m-auto w-full">
            <Text
              className="md:text-5xl text-[64px] text-black-900"
              size="txtJosefinSlabRomanSemiBold64"
            >
              Script Your Soul
            </Text>
            <div className="flex flex-col items-center justify-start w-full">
              <Line className="bg-black-900 h-px w-full" />
              <Line className="bg-black-900 h-px mt-20 w-full" />
              <Line className="bg-black-900 h-px mt-20 w-full" />
              <Line className="bg-black-900 h-px mt-20 w-full" />
              <Line className="bg-black-900 h-px mt-20 w-full" />
              <Line className="bg-black-900 h-px mt-20 w-full" />
              <Line className="bg-black-900 h-px mt-20 w-full" />
              <Text
                className="mt-[41px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                size="txtJosefinSlabRomanSemiBold36"
              >
                9
              </Text>
            </div>
          </div>
          <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] rounded-[13px] shadow-bs w-[12%]">
            <div className="bg-orange-100_02 flex flex-col items-center justify-end p-[11px] rounded-[13px] w-full">
              <Text
                className="mt-1 text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                size="txtJosefinSlabRomanSemiBold24"
              >
                previous
              </Text>
            </div>
          </div>
          <div className="absolute bottom-[0] flex flex-row gap-[22px] items-center justify-between right-[0] rounded-[13px] shadow-bs w-[26%]">
            <Button
              className="cursor-pointer font-semibold min-w-[127px] rounded-[13px] text-2xl md:text-[22px] text-center sm:text-xl"
              color="orange_100_02"
              size="md"
            >
              next
            </Button>
            <Button
              className="cursor-pointer font-semibold min-w-[127px] rounded-[13px] text-2xl md:text-[22px] text-center sm:text-xl"
              color="orange_100_02"
              size="md"
            >
              done
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyjournalPage;
