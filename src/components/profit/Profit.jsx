import Image from "next/image";
import { Roboto, Space_Mono } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700", "900"] });
const space = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const Profit = ({ profitData }) => {
  return (
    <div className="relative flex flex-col justify-center items-center w-[300px] h-[300px] ">
      <Image
        src={"/Percentage.png"}
        alt="Percantage"
        fill
        className=" absolute z-0 object-contain"
      />
      <div
        className={`flex flex-col items-center gap-3 font-bold ${space.className} z-40`}
      >
        <h1>POOL PROFIT</h1>
        <h1 className={`${roboto.className} text-4xl text-[#f7d02c]`}>
          {profitData.percentage}%
        </h1>
        <h1 className=" ">USDT {profitData.usdt}</h1>
      </div>
    </div>
  );
};
