import {useBit} from "./BitProvider.tsx";

export default function SingleWissensBit({title, description} : any){
    
    return(

        <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
            <h3> <strong className="text-primary">{title} </strong> </h3>
                <p className="text-textMedium font-medium">
                    {description}
                </p>
        </div>
        
    );


}