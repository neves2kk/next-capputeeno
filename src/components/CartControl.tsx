'use client'

import { useCart } from '@/hooks/useCart'
import Carrinho from '../assets/carrinho.svg'

export function CartControl(){

    const {storedItem, updateLocalStorage} = useCart("cart-items", []);

    return(
        <div>
            <img src={Carrinho.src} alt="Carrinho" className="pr-2 cursor-pointer h-auto w-9" />
            { storedItem.length > 0 && (
                <span className="absolute top-10  right-40 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">
                    {storedItem.length}
                </span>
            )}
        </div>
    )
}