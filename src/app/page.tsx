"use client";

import Header from "@/components/Header";
import PricingTable from "@/components/PricingTable";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Header />
      <div className="w-full float-left ">
        <div className="container mx-auto">
          <div className="float-left w-full flex items-center justify-center">
            <div className="w-full text-center">
              <h2 className="text-center text-[#2775AB] text-[22px] md:text-[36px] lg:text-[48px] xl:text-[48px] 2xl:text-[54px] font-extrabold uppercase align-middle xl:mb-[5px] 2xl:mb-[5px] pt-[50px] lg:pt-[50px] md:pt-[0px]">
                Have a hassle free bidding
              </h2>
              <span className="text-center text-[#343434] text-[14px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[38px] font-bold align-middle relative sx:bottom-[0px] xl:bottom-[15px]">
                Experience with our end to end management system
              </span>
              <PricingTable/>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
