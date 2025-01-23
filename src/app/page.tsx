import { NextPage } from "next";
import { avatar_airline, avatar_vote, icon_dropdown } from "./component/avatar";
import { avatar_hotels } from "./component/avatar";

const Calculate: NextPage = () => {
  return (
    <div className="bg-[#E0F6FF66] pt-[90px] px-[12%] pb-[185px]">
      <div className="flex flex-col items-center">
        <hr className="w-[54px] h-[6px] bg-[#86D6F5] rounded-[12px]" />
        <p className="text-[44px] text-[#010100] font-[400]">
          The <span className="font-[600]">Cash Vs Points</span> Calculator
        </p>
        <p className="text-[16px] mt-[16px] w-[50%] text-center">
          If you’re wondering if a deal is good, check here first. We’ll help
          you compare the cost in points or miles to cash to see which option is
          best.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex gap-[30px] items-center mt-[30px] w-[85%]">
          <button className="flex gap-1 items-center">
            {avatar_airline}
            <p className="text-[19px] font-[500]">Airlines</p>
          </button>
          <button className="flex gap-1 items-center">
            {avatar_hotels}
            <p className="text-[19px] font-[500]">Hotels</p>
          </button>
        </div>
        <div className="w-[85%]">
          <hr className="rounded-[12px] mt-[7px] w-[95px] h-[5px] bg-[#86D6F5]" />
        </div>
        <div className="w-[85%] bg-white rounded-[16px] mt-[25px] p-[34px] drop-shadow-[0_0px_14px_#11111124]">
          <p className="text-[25px] font-[600]">Points or miles</p>
          <div className="px-[3px] py-[25px] flex gap-[16px] justify-center">
            <div className="w-[50%] relative">
              <p>Air Canada Aeroplan</p>
              <select className="mt-[14px] w-full border-[1px] rounded-[12px] h-[55px] px-[15px] appearance-none" />
              <div className="absolute top-[55px] right-0 flex items-center px-2 pointer-events-none">
                {icon_dropdown}
              </div>
            </div>
            <div className="w-[50%] relative">
              <p>Cost in points or miles</p>
              <select className="mt-[14px] w-full border-[1px] rounded-[12px] h-[55px] px-[15px] appearance-none" />
              <div className="absolute top-[55px] right-0 flex items-center px-2 pointer-events-none">
                {icon_dropdown}
              </div>
            </div>
          </div>
          <div className="mt-[20px]">
            <p className="text-[15px] font-[500]">Fees (if any)</p>
            <input
              type="text"
              className="h-[55px] w-full mt-[14px] border-[1px] rounded-[12px] px-[15px]"
              placeholder="$"
            />
          </div>
          <hr className="w-full mt-[50px]" />
          <p className="font-[600] mt-[30px] text-[25px]">Compare to</p>
          <p className="mt-[20px] text-[15px] font-[500]">
            Cost in cash{" "}
            <span className="text-[14px] font-[300] text-[#5E5F66]">
              (not required)
            </span>
          </p>
          <input
            type="text"
            className="h-[55px] w-full mt-[14px] border-[1px] rounded-[12px] px-[15px]"
            placeholder="$"
          />
          <div className="flex justify-center items-center gap-[36px] mt-[37px]">
            <button className="bg-[#01AAEB] text-white text-[17px] font-[600] px-[125px] py-[18px] border-[1px] rounded-[7px]">
              Calculate
            </button>
            <button className="bg-gradient-to-r from-[#00DFEF] to-[#0099CC] text-white text-[17px] font-[600] px-[125px] py-[18px] border-[1px] rounded-[7px]">
              Start over
            </button>
          </div>
        </div>
        <button className="mt-[60px] flex gap-[10px] w-[85%]">
          <p className="text-[15px] font-[500]">Was this helpful?</p>
          {avatar_vote}
        </button>
      </div>
    </div>
  );
};

export default Calculate;
