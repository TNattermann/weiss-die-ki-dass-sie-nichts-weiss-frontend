import {useBit} from "./WissensContext.tsx";
import { useEffect } from "react";

export default function SingleWissensBit({title, description, isList} : any){

    const { wissensbits, setWissensbits } = useBit();

    useEffect(() => {
        if (!isList){
            const newbit = { title: title, description: description };
            //console.log(wissensbits, newbit);
            if (!wissensbits.includes(newbit)){
                //console.log("I am inside the second if");
                setWissensbits((prev : any) => [
                ...prev,
                newbit
                ]);
            }
        }
        //console.log(isList, wissensbits)
    }, [setWissensbits]);
    
    return(

        <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
            <h3> <strong className="text-primary">{title} </strong> </h3>
                <p className="text-textMedium font-medium">
                    {description}
                </p>
        </div>
        
    );


}