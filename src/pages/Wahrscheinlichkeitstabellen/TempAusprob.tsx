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
        list: [[" schön", 0.45 ], [" warm", 0.30], [" kalt", 0.25], [".", 0.05], [" Banane", 0.00002] ]
    },
    {
        id: " schön",
        list: [[".", 0.21 ], [" und", 0.12], [" für", 0.06], [" hier", 0.009], [" aufwärts", 0.00001]]
    },
    {
        id: " warm",
        list: [[" und", 0.46], [".", 0.10 ], [" gewesen", 0.06], [" hier", 0.009], [" aufwärts", 0.00001]]
    },
    {
        id: " kalt",
        list: [[" und", 0.27], [".", 0.21 ], [" gewesen", 0.03], [" hier", 0.009], [" aufwärts", 0.00001]]
    },
    {
        id: " Banane",
        list: [[".", 0.10], [" für", 0.06 ], [" und", 0.02], [" hier", 0.009], [" aufwärts", 0.00001]]
    }, 
    {
        id: " und",
        list: [[" trocken", 0.45 ], [" sonnig", 0.3], [" windig", 0.25], [".", 0.05], [" Gardine", 0.00001]]
        //mache hier noch einen special case in MultiTestRad, der an der Probability schraubt
        //schön sollte sonnig und warm haben, warm sollte sonnig und trocken haben, kalt sollte windig, trocken und frostig haben
        //schön: replace trocken mit warm, windig mit sommerlich; warm: basecase, kalt: replace sonnig mit frostig
    },
    {
        id: " für",
        list: [[" einen", 0.24 ], [" Radfahren", 0.019], [" Menschen", 0.009], [".", 0.005], [" Gardine", 0.00001]]
    },{
        id: " hier",
        list: [[" in", 0.45 ], [".", 0.06], [" oben", 0.04], [" und", 0.007], [" Gardine", 0.00001]]
    },
    {
        id: " aufwärts",
        list: [[".", 0.17 ], [" und", 0.05], [" in", 0.04], [" gewesen", 0.019], [" Gardine", 0.00001]]
    },
    {
        id: " gewesen",
        list: [[".", 0.39 ], [" und", 0.13], [" in", 0.01], [" mit", 0.0025], [" Gardine", 0.00001]]
    },
    {
        id: " trocken",
        list: [[".", 0.36 ], [" gewesen", 0.038], [" in", 0.025], [" und", 0.017], [" Gardine", 0.00001]]
    },
    {
        id: " sonnig",
        list: [[".", 0.36 ], [" gewesen", 0.038], [" in", 0.025], [" und", 0.017], [" Gardine", 0.00001]]
    },
    {
        id: " sommerlich",
        list: [[".", 0.36 ], [" gewesen", 0.038], [" in", 0.025], [" und", 0.017], [" Gardine", 0.00001]]
    },
    {
        id: " windig",
        list: [[".", 0.45 ], [" gewesen", 0.05], [" in", 0.03], [" und", 0.02], [" Gardine", 0.00001]]
    },
    {
        id: " frostig",
        list: [[".", 0.45 ], [" gewesen", 0.05], [" in", 0.03], [" und", 0.02], [" Gardine", 0.00001]]
    },
    {   
        id: ".",
        list: [["", 1]]
    },
    {   
        id: "",
        list: [["", 1]] //redo the list so this one doesn't happen
    }

    //to potentially add: einen, Radfahren, Menschen, oben, in, mit Gardine


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
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-primary mb-6">Selbst Text generieren</h1>
                <div className=" mb-16">
                    <div className="justify-center">
                        <div>
                            <p className="text-lg text-text-normal mb-6 leading-relaxed">
                            Hier können Sie jetzt selbst ausprobieren, wie sich das Verstellen des Temperaturreglers auf des Satz auswirkt.
                            Gegeben sind immer jeweils drei normale Vorschläge, das Satzende und ein weniger wahrscheinliches Unsinnwort.
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