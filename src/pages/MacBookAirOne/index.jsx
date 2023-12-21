import React from "react";

import { Button } from "components";

const MacBookAirOnePage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-atma h-[832px] items-end justify-end mx-auto p-[169px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_macbookairone.png')" }}
      >
        <Button
          className="cursor-pointer font-semibold min-w-[184px] mr-[41px] mt-[451px] rounded-[21px] text-center text-xl"
          color="deep_orange_100_01"
        >
          Let’s Begin!
        </Button>
      </div>
    </>
  );
};

export default MacBookAirOnePage;
