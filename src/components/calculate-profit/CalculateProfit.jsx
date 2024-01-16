"use client";

import { Roboto, Space_Mono } from "next/font/google";
import Image from "next/image";
import SelectCustom from "../select-button/Select";
import { useEffect, useState } from "react";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700", "900"] });
const space = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const CalculateProfit = ({ totalProfit }) => {
  const options = ["AGENT", "OFFICER", "DIRECTORS"];
  const [myProfit, setMyProfit] = useState(totalProfit * 0.5);

  useEffect(() => {
    if (totalProfit) {
      // If totalProfit is truthy, calculate and set myProfit
      const perc = 0.5; // Default percentage, change as needed
      const newProfit = totalProfit * perc;
      setMyProfit(newProfit.toFixed(2));
      console.log(newProfit);
    }
  }, [totalProfit]);

  const handleSelectChange = (selectedOption) => {
    let perc;
    if (selectedOption === "AGENT") {
      perc = 0.5;
    } else if (selectedOption === "OFFICER") {
      perc = 0.55;
    } else {
      perc = 0.6;
    }

    const newProfit = totalProfit * perc;
    setMyProfit(newProfit.toFixed(2));
    console.log(newProfit);
  };

  return (
    <div
      className={`bg-black/75 w-[350px] h-[350px] mt-8 rounded-[20px] flex flex-col items-center ${space.className}`}
    >
      <div className="mt-5">
        <Image
          src={"/GreedBOT.png"}
          alt="GreedBOT Logo"
          width={170}
          height={170}
        />
      </div>
      <h1 className="font-bold text-[18px] mt-4 text-white">
        CALCULATE YOUR PROFIT SHARE
      </h1>
      <div className="flex mt-2 items-center justify-center">
        <h1 className=" text-white text-xs mx-1">SELECT YOUR PACKAGE:</h1>
        <SelectCustom options={options} onSelectChange={handleSelectChange} />
      </div>
      <div className="mt-3 flex gap-5">
        <h1 className="font-bold text-[#ffce56] text-2xl">MY PROFIT:</h1>
        <h1 className="font-bold text-[#52ed41] text-2xl">
          {myProfit !== null ? `${myProfit} %` : "Loading..."}
        </h1>
      </div>
    </div>
  );
};
