import { useFilter } from "@/hooks/useFilter";
import { PriorityType } from "@/types/PriorityType";

export function FilterPopUp(){

    const {setPriority} = useFilter();

    return(
        <div className="bg-white rounded-md shadow-md p-4 flex flex-col items-start gap-3 absolute top-35 right-50 z-10">
            <button onClick={()=>{ setPriority(PriorityType.NewestArrivals)}}>
                <span className="text-(--text-dark)">Novidades</span>
            </button>

            <button onClick={()=>{ setPriority(PriorityType.PriceHighToLow)}}>
                <span className="text-(--text-dark)">Preço: Maior - menor</span>
            </button>

            <button onClick={()=>{ setPriority(PriorityType.PriceLowToHigh)}}>
                <span className="text-(--text-dark)">Preço: Menor - maior</span>
            </button>

            <button onClick={()=>{ setPriority(PriorityType.Popularity)}}   >
                <span className="text-(--text-dark)">Mais vendidos</span>
            </button>
        </div>
    )
}