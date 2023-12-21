import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Text } from "components";

const UserDashboardPage = () => {
  return (
    <>
      <div className="bg-purple-100 flex sm:flex-col md:flex-col flex-row font-josefinslab sm:gap-10 md:gap-10 gap-[133px] items-start mx-auto md:pr-10 sm:pr-5 pr-[136px] w-full">
        <Sidebar className="!sticky !w-[348px] bg-purple-100_01 flex h-screen md:hidden justify-start overflow-auto md:px-5 rounded-[30px] top-[0]">
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[52px] mr-[119px] mt-11 w-[177px]">
            <Text
              className="leading-[149.50%] sm:text-[37px] md:text-[43px] text-[51px] text-pink-300 w-full"
              size="txtJosefinSlabRomanBold51"
            >
              Akbar Ali
            </Text>
            <Text
              className="mt-1 text-gray-700 text-xl"
              size="txtJosefinSlabRomanSemiBold20"
            >
              @akbar_ali
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start mb-[189px] mt-[70px] w-full">
            <Button
              className="border border-gray-400_02 border-solid cursor-pointer font-semibold min-w-[348px] md:text-3xl sm:text-[28px] text-[32px] text-center"
              shape="round"
              color="purple_100_01"
              size="lg"
            >
              Gallery
            </Button>
            <Button
              className="border border-gray-400_02 border-solid cursor-pointer font-semibold min-w-[348px] md:text-3xl sm:text-[28px] text-[32px] text-center"
              shape="round"
              color="purple_100_01"
              size="xl"
            >
              Profile
            </Button>
            <Text
              className="bg-purple-100_01 border border-gray-400_02 border-solid h-[88px] justify-center pb-[31px] pt-6 sm:px-5 px-[35px] rounded-[7px] md:text-3xl sm:text-[28px] text-[32px] text-gray-700 w-[348px]"
              size="txtJosefinSlabRomanSemiBold32"
            >
              Account
            </Text>
            <Button
              className="border border-gray-400_02 border-solid cursor-pointer font-semibold min-w-[348px] md:text-3xl sm:text-[28px] text-[32px] text-center"
              shape="round"
              color="purple_100_01"
              size="xl"
            >
              Settings
            </Button>
          </div>
        </Sidebar>
        <div
          className="bg-cover bg-no-repeat flex flex-1 flex-col h-[711px] items-center justify-start p-[25px] md:px-5 w-full"
          style={{ backgroundImage: "url('images/img_group6.svg')" }}
        >
          <div className="flex flex-col items-start justify-start mt-3 w-full">
            <div className="flex flex-col justify-start md:ml-[0] ml-[23px] w-[95%] md:w-full">
              <div className="flex flex-row items-start justify-between md:ml-[0] ml-[7px] mr-[53px] w-[90%] md:w-full">
                <Text
                  className="mt-[27px] sm:text-[25px] md:text-[27px] text-[29px] text-black-900 text-center"
                  size="txtJosefinSlabRomanRegular29"
                >
                  <>
                    Mood Tracking <br />& Journaling
                  </>
                </Text>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                  size="txtJosefinSlabRomanRegular28"
                >
                  Progress
                </Text>
              </div>
              <Text
                className="md:ml-[0] ml-[379px] mt-[55px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                size="txtJosefinSlabRomanRegular28"
              >
                Recent Diagnoses
              </Text>
              <Text
                className="mt-[23px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                size="txtJosefinSlabRomanRegular28"
              >
                Depression Tests
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[70px] w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                size="txtJosefinSlabRomanRegular28"
              >
                Depression Tackling
              </Text>
              <Text
                className="sm:mt-0 mt-8 sm:text-[25px] md:text-[27px] text-[29px] text-black-900 text-center"
                size="txtJosefinSlabRomanRegular29"
              >
                <>
                  Personalized <br />
                  Recommendations
                </>
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[27px] mt-[52px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
              size="txtJosefinSlabRomanRegular30"
            >
              Appointments
            </Text>
            <Text
              className="md:ml-[0] ml-[426px] mt-[38px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
              size="txtJosefinSlabRomanRegular28"
            >
              Severity Level
            </Text>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[21px] mt-[54px] w-[97%] md:w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                size="txtJosefinSlabRomanRegular28"
              >
                Audio & Video
              </Text>
              <Text
                className="sm:mt-0 mt-[11px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                size="txtJosefinSlabRomanRegular28"
              >
                Profile Summary
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboardPage;
