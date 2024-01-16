import { Poppins } from "next/font/google";
import "./globals.css";
import Favicon from "/public/favicon.ico";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "400", "700"] });

export const metadata = {
  title: "GreedBOT - C.I.A",
  description:
    "GreedBOT - At CIA, I take care of offering the best quality consultancy, research, analytics, and development solutions due to the process to achieve the best quality results I created.",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-img-bg bg-fixed text-white`}>
        <div className="container mx-auto">{children}</div>
      </body>
    </html>
  );
}
