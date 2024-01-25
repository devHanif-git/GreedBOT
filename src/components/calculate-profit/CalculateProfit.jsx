"use client";

import { Space_Mono } from "next/font/google";
import Image from "next/image";
import SelectCustom from "../select-button/Select";
import { useEffect, useState } from "react";

const space = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const CalculateProfit = ({ totalPool, totalProfit }) => {
  const options = ["AGENT", "OFFICER", "DIRECTORS"];
  const [placeholderUsdt, setPlaceholderUsdt] = useState("250");
  const [maxUsdt, setMaxUsdt] = useState("4999");
  const [inputValue, setInputValue] = useState("250");
  const [isValid, setIsValid] = useState(true);
  const [netProfit, setNetProfit] = useState(0);
  const [profitPercentage, setProfitPercentage] = useState(0);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value); // Update the input value state
  };

  useEffect(() => {
    // First validate the input
    const isValidInput =
      (!maxUsdt || +inputValue <= +maxUsdt) && +inputValue >= +placeholderUsdt;
    setIsValid(isValidInput);
  }, [inputValue, placeholderUsdt]);

  useEffect(() => {
    if (!isValid) {
      setNetProfit(0);
      setProfitPercentage(0);
      return;
    }

    if (totalPool && inputValue && totalProfit && isValid) {
      const userContribution = parseFloat(inputValue); //if 1k
      const userShare = userContribution / totalPool; // 0.2 or 20% dari pool 5k
      const userProfit = userShare * totalProfit; //0.407 or 40.7(x100) ni core profit. kene split 50 or 55 or 60 base pangkat

      let packageMultiplier = 0.5; // Default for AGENT,
      if (placeholderUsdt === "5000") {
        packageMultiplier = 0.55; // For OFFICER
      } else if (placeholderUsdt === "20000") {
        packageMultiplier = 0.6; // For DIRECTORS
      } else {
        packageMultiplier = 0.5;
      }

      const netProfitValue = userProfit * packageMultiplier * 100; // 0.407 x 0.5 = 0.2035 x 100 = 20.35
      const profitPercentageValue = netProfitValue / userContribution;

      setNetProfit(netProfitValue.toFixed(2));
      setProfitPercentage(profitPercentageValue.toFixed(2));
    }
  }, [inputValue, isValid, []]);

  //TODO: set invest state by change onchange
  const handleSelectChange = (selectedOption) => {
    if (selectedOption === "AGENT") {
      setPlaceholderUsdt("250");
      setMaxUsdt("4999");
    } else if (selectedOption === "OFFICER") {
      setPlaceholderUsdt("5000");
      setMaxUsdt("19999");
    } else {
      setPlaceholderUsdt("20000");
      setMaxUsdt("");
    }
  };

  return (
    <div
      className={`bg-black/75 w-[350px] h-[465px] mt-8 mb-10 rounded-[20px] flex flex-col items-center ${space.className}`}
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
      <div className="flex mt-2 items-center justify-center relative">
        <h1 className="text-white text-xs mx-1">YOUR INVESTMENT AMOUNT:</h1>
        <input
          className={`text-white relative bg-transparent tracking-wider rounded-full h-10 w-[160px] text-center pr-12
                      ${
                        isValid
                          ? "border border-gray-300"
                          : "border border-red-500"
                      }`} // Conditional styling based on validity
          type="number"
          name="usdt"
          id="usdt"
          min={placeholderUsdt}
          placeholder={placeholderUsdt}
          value={inputValue} // Controlled input
          onChange={handleInputChange} // Handle input changes
          {...(maxUsdt && { max: maxUsdt })}
        />
        <label htmlFor="usdt" className="absolute right-6">
          USDT
        </label>
      </div>
      <div className="mt-3 flex flex-col justify-center items-center">
        <h1 className="font-bold text-[#ffce56] text-2xl">NET PROFIT</h1>
        <h1 className="font-bold text-[#52ed41] text-2xl">
          {isValid && netProfit !== null
            ? `USDT ${netProfit}`
            : "Enter Valid Amount"}
        </h1>
        <h1 className="font-bold text-[#52ed41] text-2xl">
          {isValid && profitPercentage !== null
            ? `(${profitPercentage} %)`
            : ""}
        </h1>
      </div>

      {/* <div className="mt-3 flex gap-5">
        <h1 className="font-bold text-[#ffce56] text-2xl">MY PROFIT:</h1>
        <h1 className="font-bold text-[#52ed41] text-2xl">
          {myProfit !== null ? `${myProfit} %` : "Loading..."}
        </h1>
      </div> */}
    </div>
  );
};
