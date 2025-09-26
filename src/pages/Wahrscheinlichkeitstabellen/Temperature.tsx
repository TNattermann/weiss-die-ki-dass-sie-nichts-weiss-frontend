import {useEffect} from "react";
import { useState } from 'react';
import SimpleRad from "../../components/simpleRad.tsx";

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

function applytemperature (wordpercentlist : [string, number][], temperature : number){
    let newlist : [string, number][];
    let newvalue : number;

    //console.log(wordpercentlist);

    if (temperature == 0){
        newlist = [];
        for (let i=0; i < wordpercentlist.length; i++){
            if (i == 0){  //muss eigentlich erst nach dem maximum suchen, aber nehme mal implizit an, dass das gegeben ist
                newvalue = wordpercentlist[i][1];
            }
            else {
                newvalue = 0;
            }
            newlist.push([wordpercentlist[i][0], newvalue]);
        }

    }
    else {
        const explist : [string, number][] = wordpercentlist.map( (wordpercent) => [wordpercent[0], Math.exp( wordpercent[1]  / temperature * 1.6)]);
        const expsum = explist.reduce((accumulator, wordexp) => accumulator + wordexp[1], 0);
        newlist = explist.map( (wordexp) => [wordexp[0], wordexp[1] / expsum]);
    }

    
        
        
    //console.log(newlist);

    return (newlist);

}

export default function Temperature() {
    const minrange = -50;
    const maxrange = 50;
    const [rangeValue, setRangeValue] = useState(0); //update this to 0 again !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const [rangeAdjustedValue, setRangeAdjustedValue] = useState(adjustRange(rangeValue, minrange, maxrange));

    const handleRangeChange = (event : any) => {
        setRangeValue(event.target.value); // Update state with the current value
        setRangeAdjustedValue(adjustRange(event.target.value, minrange, maxrange));
    };

    const [activeExample, setActiveExample] = useState("A");
    const temperatureExamples = [
        {
            id: "A",
            label: "A.",
            description: "Temperatur = 0",
        },
        {
            id: "B",
            label: "B.",
            description: "Temperatur = 1",
        },
        {
            id: "C",
            label: "C.",
            description: "Temperatur = 2",
        },
    ] as const;

    const temperaturewheels = {
        A: {
            wordratio: [["schön", 1]]
            
        },
        B: {
            
            wordratio: [["schön", 0.45], ["warm", 0.3], ["kalt", 0.25]]
        },
        C: {
            
            wordratio: [["schön", 33], ["warm", 33], ["kalt", 33]] //Wird später zu Prozent zusammengekürzt. Benutze hier ganze Zahlen um floating point error zu vermeiden.

        }
    };

    



    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-primary mb-6">Was hat das mit Temperatur zu tun?</h1>
                <div className="mb-16">
                    <div>
                        <p className="text-lg text-text-normal mb-6 leading-relaxed">

                        Wir haben jetzt schon zwei verschiedene Implementierungsmethoden gesehen, wie wir das Wort anhand der
                        Wahrscheinlichkeitstabelle auswählen. Die Methode, bei der wir einfach nur das wahrscheinlichste Wort wählen (<b>A.</b>),
                        und die, bei der wir auf unserem unveränderten Glücksrad drehen (<b>B.</b>). 
                        Zusätzlich lässt sich die Variation erhöhen, indem das Glücksrad so angepasst wird, 
                        dass die Wahrscheinlichkeiten der Wörter einander stärker angeglichen werden.
                        </p>

                        <p className="text-lg text-text-normal mb-6 leading-relaxed">
                            Diese Anpassung der Wahrscheinlichkeitsverteilung wird als Temperatur bezeichnet. 
                            Eine feste Temperatur führt bei identischer Ausgangslage stets zum gleichen Ergebnis. 
                            Mit steigender Temperatur nähern sich die Wahrscheinlichkeiten der möglichen Wörter einander an, 
                            sodass die Auswahl zunehmend gleichverteilt erfolgt.
                        </p>
                    </div>
                </div>

                <div>
                <div className="p-8 rounded-xl">
                    <div className="flex flex-wrap justify-center gap-6 mb-8">
                {temperatureExamples.map((t) => {
                        const isActive = activeExample === t.id;
                        return (
                            <button
                                key={t.id}
                                onClick={() => setActiveExample(t.id as typeof activeExample)}
                                className={`p-6 rounded-xl text-center transition-all duration-300 transform hover:scale-105
          ${isActive
                                    ? "bg-primary-container-selected text-on-primary-container-selected"
                                    : "bg-primary-container text-on-primary-container"}
        `}
                            >

                                <h3 className="font-bold text-lg mb-2">{t.label} {t.description}</h3>
                            </button>
                        );
                    })}
                    </div>
                    {Object.entries(temperaturewheels).map(([key, example]) => (
                            <div
                                key={key}
                                className={`${activeExample === key ? "block" : "hidden"}`}
                            >
                                
                                
                                
                                <SimpleRad wordpercentlist={example.wordratio}
                                />
                                    
                            
                            </div>
                        ))}
                        

                        <p className="text-lg text-text-normal mb-6 leading-relaxed">
                        Mit diesem Regler könne Sie die Temperatur auch selbst einstellen:
                        </p>

                        <div className="flex flex-col items-center">
                        <h3 className="text-primary text-xl font-semibold text-textDark mb-4">D. Temperatur = {rangeAdjustedValue}</h3> 
                        <input
                            type="range"
                            min={minrange}
                            max={maxrange}
                            value={rangeValue} // Controlled input
                            onChange={handleRangeChange} // Update state on change
                        />
                        </div>
                        <div className="flex justify-center">
                            <SimpleRad wordpercentlist={applytemperature([["schön", 0.45 ], ["warm", 0.3], ["kalt", 0.25]],  rangeAdjustedValue)}
                            />
                        </div>
                </div>    
                </div>
                

            </div>
        
    );
}