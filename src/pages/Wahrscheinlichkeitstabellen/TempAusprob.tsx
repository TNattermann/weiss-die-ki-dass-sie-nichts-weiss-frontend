import {useEffect} from "react";
import { useState } from 'react';
import MultiTestRad from "../../components/MultiTestRad.tsx";

//right now a lot of code is copied from simpleRad. Find a better way

//find a way to import these two functions instead

function adjustRange (range: number, minimrange : number, maximrange: number){
    let adjustedRange: number;
    /*if (range == 0){
        adjustedRange = 1;
    }
    else*/ if(range <= 0){
        adjustedRange = (range - minimrange) / Math.abs(minimrange); //a range of 0 results in an adjustedRange of 1
    }
    else {
        adjustedRange = (Number(range) + Number(maximrange)) / Math.abs(maximrange); //no idea why this is necessary
    }

    return(adjustedRange);
}


const wordlibrary = [
    {
        id: "0",
        list: [["schön", 0.45 ], ["warm", 0.3], ["kalt", 0.25]]
    },
    {
        id: "schön",
        list: [[" s1", 0.7 ], [" s2", 0.3], [" s3", 0.25]]
    },
    {
        id: "warm",
        list: [[" w1", 0.7 ], [" w2", 0.3], [" w3", 0.25]]
    },
    {
        id: "kalt",
        list: [[" k1", 0.7 ], [" k2", 0.3], [" k3", 0.25]]
    },
    {
        id: " s1",
        list: [[" s11", 0.45 ], [" s12", 0.3], [" s13", 0.25]]
    },
    {
        id: " s2",
        list: [[" s21", 0.45 ], [" s22", 0.3], [" s23", 0.25]]
    },{
        id: " s3",
        list: [[" s31", 0.45 ], [" s32", 0.3], [" s33", 0.25]]
    },
    {
        id: " w1",
        list: [[" w11", 0.45 ], [" w12", 0.3], [" w13", 0.25]]
    },
    {
        id: " w2",
        list: [[" w21", 0.45 ], [" w22", 0.3], [" w23", 0.25]]
    },
    {
        id: " w3",
        list: [[" w31", 0.45 ], [" w32", 0.3], [" w33", 0.25]]
    },
    {
        id: " k1",
        list: [[" k11", 0.45 ], [" k12", 0.3], [" k13", 0.25]]
    },
    {
        id: " k2",
        list: [[" k21", 0.45 ], [" k22", 0.3], [" k23", 0.25]]
    },
    {
        id: " k3",
        list: [[" k31", 0.45 ], [" k32", 0.3], [" k33", 0.25]]
    }

];



export default function TempAusprob() {
    const minrange = -50;
    const maxrange = 50;
    const [rangeValue, setRangeValue] = useState(0); //update this to 0 again !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const [rangeAdjustedValue, setRangeAdjustedValue] = useState(adjustRange(rangeValue, minrange, maxrange));

    const handleRangeChange = (event : any) => {
        setRangeValue(event.target.value); // Update state with the current value
        setRangeAdjustedValue(adjustRange(event.target.value, minrange, maxrange));
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold text-center text-primary mb-6">Selbst Text generieren</h1>
                <div className=" mb-16">
                    <div className="flex justify-center">
                        <div>
                            <p className="text-lg text-text-normal mb-6 leading-relaxed">
                            Hier können Sie jetzt selbst ausprobieren, wie sich das Verstellen des Temperaturreglers auf des Satz auswirkt.
                            </p>
                            <h3 className="text-primary text-xl font-semibold text-textDark mb-4">Temperatur = {rangeAdjustedValue}</h3>
                            <input
                                type="range"
                                min={minrange}
                                max={maxrange}
                                value={rangeValue} // Controlled input
                                onChange={handleRangeChange} // Update state on change
                            />
                        </div>

                        <MultiTestRad wordlibrary={wordlibrary} temperature={rangeAdjustedValue} isVideo={false}
                        />
                        
                    </div>
                </div>

                
                

            </div>
       
    );
}