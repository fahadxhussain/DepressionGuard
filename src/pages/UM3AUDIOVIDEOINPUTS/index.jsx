import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const UM3AUDIOVIDEOINPUTSPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-purple-100_02 flex flex-col font-josefinslab items-start justify-start mx-auto sm:pr-5 pr-[29px] py-[29px] w-full">
        <div className="flex flex-col items-center justify-start mb-[155px] md:px-5 w-[90%] md:w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col justify-start w-full">
              <Img
                className="common-pointer h-[42px] ml-5 md:ml-[0] w-[41px]"
                src="images/img_icons_purple_800.svg"
                alt="icons"
                onClick={() => navigate("/userdashboard")}
              />
              <Text
                className="leading-[149.50%] md:ml-[0] ml-[326px] mt-[63px] md:text-5xl text-[64px] text-black-900 text-center w-[53%] sm:w-full"
                size="txtJosefinSlabRomanSemiBold64"
              >
                How would you like to express yourself?
              </Text>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[79px] w-full">
                <Img
                  className="h-[57px]"
                  src="images/img_arrowright_purple_800.svg"
                  alt="arrowright"
                />
                <div className="flex flex-col items-center justify-start md:mt-0 mt-[23px]">
                  <Button
                    className="common-pointer cursor-pointer flex items-center justify-center rounded-[18px]"
                    onClick={() => navigate("/audioinput")}
                    rightIcon={
                      <Img
                        className="ml-[-95px]"
                        src="images/img_61myjournal.svg"
                        alt="Layer_1"
                      />
                    }
                    color="deep_purple_100"
                    size="2xl"
                  >
                    <div className="leading-[normal] md:text-[34px] sm:text-[32px] text-4xl text-left">
                      <>
                        Speak Your <br />
                        Mind
                      </>
                    </div>
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-start md:mt-0 mt-[23px]">
                  <div className="bg-deep_purple-100 md:h-[149px] h-[237px] p-3.5 relative rounded-[18px] shadow-bs w-full">
                    <Text
                      className="absolute h-max inset-[0] justify-center m-auto text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                      size="txtJosefinSlabRomanSemiBold36"
                    >
                      <span className="text-black-900 font-josefinslab text-left font-normal">
                        Capture Your
                      </span>
                      <span className="text-black-900 font-josefinslab text-left font-semibold">
                        <>
                          {" "}
                          <br />
                        </>
                      </span>
                      <span className="text-black-900 font-josefinslab text-left font-bold">
                        Mood
                      </span>
                    </Text>
                    <Img
                      className="absolute h-[149px] inset-y-[0] my-auto right-[6%]"
                      src="images/img_layer1_black_900.svg"
                      alt="layerOne"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UM3AUDIOVIDEOINPUTSPage;
