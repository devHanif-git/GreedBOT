import Image from "next/image";
import { Cardo, Source_Code_Pro, Space_Mono } from "next/font/google";

const cardo = Cardo({ subsets: ["latin"], weight: ["400", "700"] });
const codepro = Source_Code_Pro({ subsets: ["latin"], weight: ["400", "700"] });
const mono = Space_Mono({ subsets: ["latin"], weight: ["700"] });

const Navbar = ({ batch }) => {
  return (
    <>
      {/* Desktop Size */}
      <div className="hidden xl:flex items-center justify-between mt-8">
        <div className="flex items-center gap-8">
          <Image src="/CIA-Logo.png" alt="C.I.A Logo" width={90} height={90} />
          <div>
            <h1
              className={`text-6xl font-thin ${cardo.className} cursor-default`}
            >
              C.I.A
            </h1>
            <p
              className={`text-sm px-[3px] ${codepro.className} cursor-default`}
            >
              Crypto Investors Alliance
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mr-[190px]">
          <a
            href="/"
            className="cursor-pointer text-7xl font-semibold flex text-[#0cc0df]"
          >
            Greed<span className="text-[#ffde59]">BOT</span>
          </a>
          <a href="/" className="cursor-pointer text-[20px]">
            STRATEGY-OPTIMIZED GRID BOT
          </a>
        </div>

        <button
          className={`${mono.className} cursor-default p-3 px-10 bg-gradient-to-r from-[rgba(12,192,223,1)] to-[rgba(255,222,89,1)] rounded-lg text-black transition-all
        duration-100 ease-in-out hover:translate-x-[-3px] hover:shadow-lg`}
        >
          {batch}
        </button>
      </div>

      {/* Mobile Size */}
      <div className="xl:hidden flex flex-col items-center mt-10 mx-5">
        <div className="flex justify-between items-center w-full">
          <div className=" flex gap-3 sm:gap-4 md:gap-6 sm:items-center">
            <Image
              src="/CIA-Logo.png"
              alt="C.I.A Logo"
              width={60}
              height={60}
              className="sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px]"
            />
            <div>
              <h1
                className={`text-4xl sm:text-[40px] md:text-5xl font-thin ${cardo.className} cursor-default`}
              >
                C.I.A
              </h1>
              <p
                className={`text-[8px] sm:text-[10px] md:text-[12px] px-[3px] ${codepro.className} cursor-default`}
              >
                Crypto Investors Alliance
              </p>
            </div>
          </div>
          <button
            className={`${mono.className} text-[12px] sm:text-[14px] sm:px-5 lg:px-6 cursor-default py-2 px-4 bg-gradient-to-r from-[rgba(12,192,223,1)] to-[rgba(255,222,89,1)] rounded-lg text-black transition-all
        duration-100 ease-in-out hover:translate-x-[-3px] hover:shadow-lg`}
          >
            {batch}
          </button>
        </div>

        <a
          href="/"
          className="cursor-pointer mt-8 md:mt-4 text-6xl md:text-[68px] font-semibold flex text-[#0cc0df]"
        >
          Greed<span className="text-[#ffde59]">BOT</span>
        </a>
        <a href="/" className="cursor-pointer text-[16px] md:text-[18px]">
          STRATEGY-OPTIMIZED GRID BOT
        </a>
      </div>
    </>
  );
};

export default Navbar;
