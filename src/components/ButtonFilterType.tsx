import { ButtonHTMLAttributes } from "react";

interface ButtonFilterTypeProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    name: string;
    isActive?: boolean;
}

export function ButtonFilterType({name, isActive, ...props}: ButtonFilterTypeProps){
    return(
        <button className={`${isActive ? "font-semibold border-b-[#FFA585] border-b-3" : "font-normal"} cursor-pointer`} {...props}>
            <span className="text-(--text-dark) text-lg">{name}</span>
        </button>
    )
}