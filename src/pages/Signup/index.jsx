import React from "react";

import { Button, Input, Line, Text } from "components";

const SignupPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-deep_orange-50 bg-no-repeat flex flex-col font-atma h-[832px] items-end justify-end mx-auto p-[53px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_1login.png')" }}
      >
        <div className="flex flex-col items-center justify-start mr-[66px] mt-[274px] w-[30%] md:w-full">
          <div className="flex flex-col gap-8 items-center justify-start w-full">
            <div className="bg-red-100 flex flex-row gap-[54px] items-center justify-end p-[5px] rounded-[33px] shadow-bs1 w-full">
              <a
                href="javascript:"
                className="text-2xl md:text-[22px] text-center text-gray-400 sm:text-xl"
              >
                <Text size="txtAtmaSemiBold24">Log in</Text>
              </a>
              <Button
                className="cursor-pointer font-semibold min-w-[163px] rounded-[28px] text-2xl md:text-[22px] text-center sm:text-xl"
                size="sm"
              >
                Sign up
              </Button>
            </div>
            <div className="flex flex-col justify-start w-[97%] md:w-full">
              <Text
                className="md:ml-[0] ml-[7px] text-center text-gray-400_01 text-xl"
                size="txtAssistantRomanRegular20"
              >
                Full Name
              </Text>
              <Line className="bg-gray-400_01 h-0.5 mr-[5px] mt-[7px] w-[99%]" />
              <Input
                name="username"
                placeholder="Username"
                className="font-assistant p-0 placeholder:text-gray-400_01 sm:pr-5 text-center text-xl w-full"
                wrapClassName="mt-[26px] pl-[7px] pr-[35px] w-[99%]"
                type="text"
              ></Input>
              <Input
                name="emailaddress"
                placeholder="Email Address"
                className="font-assistant p-0 placeholder:text-gray-400_01 sm:pr-5 text-center text-xl w-full"
                wrapClassName="mt-[23px] pl-[7px] pr-[35px] w-[99%]"
                type="email"
                size="sm"
              ></Input>
              <Input
                name="password"
                placeholder="Password"
                className="font-assistant p-0 placeholder:text-gray-400_01 sm:pr-5 text-center text-xl w-full"
                wrapClassName="mt-[25px] pl-[7px] pr-[35px] w-[99%]"
                type="password"
              ></Input>
              <div className="flex flex-row font-assistant gap-2.5 items-start justify-start md:ml-[0] ml-[3px] mt-[13px] w-full">
                <div className="bg-blue_gray-100 h-[18px] mb-9 mt-[5px] shadow-bs2 w-[18px]"></div>
                <Text
                  className="sm:flex-1 leading-[149.50%] text-base text-gray-700 w-[92%] sm:w-full"
                  size="txtAssistantRomanRegular16"
                >
                  <span className="text-gray-700 font-assistant text-left font-normal">
                    Creating an account means you’re okay with our{" "}
                  </span>
                  <span className="text-indigo-200 font-assistant text-left font-semibold">
                    Terms of Service
                  </span>
                  <span className="text-gray-700 font-assistant text-left font-normal">
                    {" "}
                    and{" "}
                  </span>
                  <span className="text-deep_purple-200 font-assistant text-left font-semibold">
                    Privacy Policy.
                  </span>
                </Text>
              </div>
              <Button className="cursor-pointer font-atma font-semibold min-w-[191px] md:ml-[0] ml-[72px] mr-[69px] mt-[22px] rounded-[21px] text-center text-xl">
                Create Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
