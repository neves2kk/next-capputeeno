import { Saira_Stencil_One } from "next/font/google";
import Lupa from "../assets/lupa.svg";
import { CartControl } from "./CartControl";

const sairaStencil = Saira_Stencil_One({
  subsets: ["latin"],
  weight: "400",
});

export function Header() {
  return (
    <header className="flex items-center justify-between py-5 px-40 bg-white">
      <div>
        <a
          className={`${sairaStencil.className} font-bold text-4xl text-(--logo-color) cursor-pointer`}
        >
          capputeeno
        </a>
      </div>

      <div className="flex gap-4 items-center">
        <div className="flex  bg-[#F3F5F6]">

            <input
            className="outline-none  w-80 px-2.5 py-2 rounded text-(--text-dark)"
            placeholder="Procurando por algo específico?"
            />
            <img src={Lupa.src} alt="Lupa" className="pr-2 cursor-pointer, h-auto w-10" />

        </div>
        
        <CartControl/>
      </div>

    </header>
  );
}
