"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="header-animation w-full bg-white  font-nunitosans sticky pb-[10px] z-50 top-0 ">
            <div className="hidden md:block top-header-area py-[7px] ">
                <div className="container mx-auto">
                    <div className="float-right text-[#fff] xl:text-[14px] 2xl:text-[14px]">
                        <span>
                            <strong>SALES :</strong>
                            <a href="#">+91 9512 247 247</a>
                            <span className="relative top-[-2px] px-[14px]">|</span>
                        </span>
                        <span>
                            <strong>SUPPORT :</strong>
                            <a href="#">+91 8000 263 450</a>
                            <span className="relative top-[-2px] px-[14px]">|</span>
                        </span>
                        <span className="pl-[5px]">
                            <strong>BIDDING SOLUTION :</strong>
                            <a href="#">+91 9811 400 654</a>
                        </span>
                        <button className="ml-[10px] bg-[#2775ab] px-[10px] py-[2px] rounded-[50px] text-[#fff] font-bold uppercase">Pay Online</button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="justify-between px-4 w-full md:items-center md:flex md:px-0">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-0 md:block p-[20px] md:pr-[10px] md:p-[0px] lg:p-[0px] xl:p-[0px] 2xl:p-[0px] xl:py-[15px] 2xl:py-[15px]">
                            <a href="/">
                                <h2 className="text-2xl font-bold w-[90%] md:w-auto lg:w-auto xl:w-auto 2xl:w-auto">
                                    <Image
                                        src="/images/logo.svg"
                                        alt="Logo"
                                        width={200}
                                        height={100}
                                        title="Tender247"
                                        className="w-auto h-auto"
                                    />
                                </h2>
                            </a>
                            {/* <div onClick={() => setIsOpen(isOpen)} className="md:hidden absolute left-[0px] md:static lg:static xl:static 2xl:static">
                  <button className="p-2 text-gray-700 rounded-md outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className ="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </button>
                </div> */}
                            <div className="md:hidden absolute left-[0px] md:static lg:static xl:static 2xl:static">
                                <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-700 rounded-md outline-none">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="float-left">
                            <div className={`${isOpen ? 'block' : 'hidden'
                                } md:block transition ease-in-out delay-150 absolute bg-white shadow-md z-[10] w-full left-0 md:static md:shadow-none`}>
                                <ul className="pb-[10px] pt-[10px] md:pb-[0px] items-center mb-0 justify-center space-y-4 md:flex md:space-x-6 xl:space-x-4 md:space-y-0 pl-[15px] md:pl-[0px] lg:pl-[0px] xl:pl-[0px] 2xl:pl-[0px]">
                                    <li className="text-gray-600 hover:text-blue-600">
                                        <a href="#" className="capitalize xl:text-[14px] 2xl:text-[15px] font-bold text-[#5C5C5C] hover:text-[#2775AB]">
                                            BOQ Based Supply Leads
                                        </a>
                                    </li>
                                    <li className="text-gray-600 hover:text-blue-600">
                                        <a href="#" className="capitalize xl:text-[14px] 2xl:text-[15px] font-bold text-[#5C5C5C] hover:text-[#2775AB]">
                                            Competitors Analytics
                                        </a>
                                    </li>
                                    <li className="text-gray-600 hover:text-blue-600">
                                        <a href="#" className="capitalize xl:text-[14px] 2xl:text-[15px] font-bold text-[#5C5C5C] hover:text-[#2775AB]">
                                            GeM/Biddingbu
                                        </a>
                                    </li>
                                    <li className="text-gray-600 hover:text-blue-600">
                                        <a href="#" className="capitalize xl:text-[14px] 2xl:text-[15px] font-bold text-[#5C5C5C] hover:text-[#2775AB]">
                                            Bid Management System
                                        </a>
                                    </li>
                                    <li className="text-gray-600 hover:text-blue-600">
                                        <button type="button" className="cursor-pointer capitalize xl:text-[14px] 2xl:text-[15px] font-bold text-[#5C5C5C] hover:text-[#2775AB]">Sign Up/log in</button>
                                    </li>
                                    <li className="hidden lg:block">
                                        <div className=" md:static lg:relative xl:relative 2xl:relative ">
                                            <a href="#">
                                                <Image
                                                    src="/images/heart-icon.svg"
                                                    alt="Favourite Tenders"
                                                    width={20}
                                                    height={20}
                                                    title="Favourite Tenders"
                                                    className="h-[20px]"
                                                />
                                            </a>
                                        </div>
                                    </li>
                                    <li className="hidden lg:block">
                                        <a href="#" target="_blank" className="bg-[#b73173c9] hover:bg-[#2775ab] w-[36px] h-[36px] rounded-full flex justify-center items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#fff" className="w-[24px] h-[24px]"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"></path></svg>
                                        </a>
                                    </li>
                                </ul>
                                <div className="border-t-2 md:hidden block top-header-area-mobile py-[10px] border-t-[#e5e7eb]">
                                    <div className="container mx-auto">
                                        <ul className="text-[#5C5C5C] text-center text-[14px]">
                                            <li className="my-2">
                                                <strong>SALES :</strong>
                                                <a href="#">+91 9512 247 247</a>
                                            </li>
                                            <li className="my-2">
                                                <strong>SUPPORT :</strong>
                                                <a href="#">+91 8000 263 450</a>
                                            </li>
                                            <li className="my-2">
                                                <strong>BIDDING SOLUTION :</strong>
                                                <a href="#">+91 9811 400 654</a>
                                            </li>
                                            <li>
                                                <button className="ml-[10px] bg-[#2775ab] px-[10px] py-[2px] rounded-[50px] text-[#fff] font-bold uppercase">
                                                    Pay Online
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="show-mobile float-left ml-[20px] absolute top-[22px] sm:top-[20px] right-[65px] md:static lg:relative xl:relative 2xl:relative md:top-[2px] md:right-[0px] lg:top-[2px] lg:right-[0px] xl:top-[10px] xl:right-[10px] 2xl:top-[10px] 2xl:right-[0px]">
                            <a href="#" className="capitalize xl:text-[14px] 2xl:text-[15px] font-extrabold text-[#5C5C5C] hover:text-[#2775AB]">
                                <Image
                                    src="/images/heart-icon.svg"
                                    alt="Favourite Tenders"
                                    width={20}
                                    height={20}
                                    title="Favourite Tenders"
                                    className="h-[20px]"
                                />
                            </a>
                        </div>
                        <div className="show-mobile float-left ml-[20px] absolute top-[15px] sm:top-[20px] right-[10px] md:static lg:relative xl:relative 2xl:relative md:top-[2px] md:right-[0px] lg:top-[2px] lg:right-[0px] xl:top-[10px] xl:right-[10px] 2xl:top-[10px] 2xl:right-[0px]">
                            <a href="#" className="bg-[#b73173c9] hover:bg-[#2775ab] w-[36px] h-[36px] rounded-full flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#fff" className="w-[24px] h-[24px]"><path strokeLinejoin="round" strokeLinecap="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}