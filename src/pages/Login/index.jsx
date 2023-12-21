import React from "react";

import { Button, Img, Line, Text } from "components";

const LoginPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-deep_orange-50 bg-no-repeat flex flex-col font-atma h-[832px] items-end justify-end mx-auto p-[119px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_1login.png')" }}
      >
        <div className="flex flex-col items-center justify-start mb-[109px] mt-[205px] w-[34%] md:w-full">
          <div className="flex flex-col gap-9 items-center justify-start w-full">
            <div className="bg-red-100 flex flex-row items-center justify-between p-1.5 rounded-[33px] shadow-bs1 w-full">
              <Button
                className="cursor-pointer font-semibold min-w-[163px] ml-[3px] rounded-[28px] text-2xl md:text-[22px] text-center sm:text-xl"
                size="sm"
              >
                Log in
              </Button>
              <a
                href="javascript:"
                className="mr-[38px] text-2xl md:text-[22px] text-center text-gray-400 sm:text-xl"
              >
                <Text size="txtAtmaSemiBold24">Sign up</Text>
              </a>
            </div>
            <div className="flex flex-col font-assistant gap-[30px] items-center justify-start w-[97%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[7px] justify-start w-full">
                      <div className="flex flex-row gap-[19px] items-start justify-start ml-4 md:ml-[0] w-[32%] md:w-full">
                        <Img
                          className="h-[30px]"
                          src="images/img_frame.svg"
                          alt="frame"
                        />
                        <Text
                          className="mt-0.5 text-2xl md:text-[22px] text-center text-gray-400_01 sm:text-xl"
                          size="txtAssistantRomanRegular24"
                        >
                          Email
                        </Text>
                      </div>
                      <Line className="bg-gray-400_01 h-0.5 w-full" />
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 items-start justify-start md:ml-[0] ml-[17px] mt-[22px] w-[44%] md:w-full">
                    <Img
                      className="h-[30px]"
                      src="images/img_frame_gray_400_01.svg"
                      alt="frame_One"
                    />
                    <Text
                      className="mt-[3px] text-2xl md:text-[22px] text-center text-gray-400_01 sm:text-xl"
                      size="txtAssistantRomanRegular24"
                    >
                      Password
                    </Text>
                  </div>
                  <Line className="bg-gray-400_01 h-0.5 w-full" />
                </div>
              </div>
              <div className="flex flex-row font-atma items-center justify-between w-full">
                <a
                  href="javascript:"
                  className="text-base text-center text-pink-300"
                >
                  <Text size="txtAtmaSemiBold16">Forgot Password?</Text>
                </a>
                <Button className="cursor-pointer font-semibold min-w-[110px] rounded-[21px] text-center text-xl">
                  Log in
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
