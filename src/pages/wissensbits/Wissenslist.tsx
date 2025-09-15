import SingleWissensBit from "../../components/SingleWissensBit.tsx";
import {useBit} from "../../components/WissensContext.tsx"
import {useEffect} from "react";

export default function Wissenslist() {

    const { wissensbits } = useBit();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="min-h-screen">

            {wissensbits.map((bit : any, index : number) => 
            <div key={index}>
                <SingleWissensBit title={bit.title} description={bit.description} isList={true} />
            </div>
            ) }

        </div>
        
    );


}