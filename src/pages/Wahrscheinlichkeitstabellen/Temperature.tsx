import {useEffect} from "react";
import { useState } from 'react';
import SimpleRad from "../../components/simpleRad.tsx";
import SingleWissensBit from "../../components/SingleWissensBit.tsx";

function adjustRange (range: number, minimrange : number){
    let adjustedRange: number;
    /*if (range == 0){
        adjustedRange = 1;
    }
    else*/ if(range <= 0){
        adjustedRange = (range - minimrange) / Math.abs(minimrange); //a range of 0 results in an adjustedRange of 1
    }
    else {
        adjustedRange = Number(range) + Number(1); //no idea why this is necessary
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
        const explist : [string, number][] = wordpercentlist.map( (wordpercent) => [wordpercent[0], Math.exp( wordpercent[1] * 50 / temperature)]);
        const expsum = explist.reduce((accumulator, wordexp) => accumulator + wordexp[1], 0);
        newlist = explist.map( (wordexp) => [wordexp[0], wordexp[1] / expsum]);
    }

    
        
        
    //console.log(newlist);

    return (newlist);

}

export default function Temperature() {
    const minrange = -20;
    const [rangeValue, setRangeValue] = useState(0); //update this to 0 again !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const [rangeAdjustedValue, setRangeAdjustedValue] = useState(adjustRange(rangeValue, minrange));

    const handleRangeChange = (event : any) => {
        setRangeValue(event.target.value); // Update state with the current value
        setRangeAdjustedValue(adjustRange(event.target.value, minrange));
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
            description: "Temperatur = 100",
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
                <h1 className="text-5xl font-bold text-center text-primary mb-6">Temperature</h1>
                <div className="text-center mb-16">
                    <div>
                        <p className="text-lg text-text-normal mb-6 leading-relaxed">

                        Sie haben jetzt schon zwei verschiedene Implementierungsmethoden gesehen, wie das Wort anhand der
                        Wahrscheinlichkeitstabelle ausgewählt werden kann. Die Methode, bei der einfach nur das wahrscheinlichste Wort gewählt wird (<b>A.</b>),
                        und die, bei der Sie das unveränderte Glücksrad drehen (<b>B.</b>). Wir können aber noch mehr Variation rein-bringen,
                        in dem wir das Glücksrad etwas verändern, sodass alle Wörter etwas mehr gleich-wahrscheinlich sind.
                        </p>

                        <p className="text-lg text-text-normal mb-6 leading-relaxed">

                        Diese Anpassung der Wahrscheinlichkeiten wird Temperatur genannt. Wobei eine Temperatur für immer dasselbe Ergebnis
                        sorgt und je höher die Temperatur ist, desto gleich-wahrscheinlicher werden die Worte.
                        </p>
                    </div>
                </div>

                <div className="p-8 rounded-xl">

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
                                <div
                                    className={`w-16 h-16 flex items-center justify-center rounded-xl mx-auto mb-4
            ${isActive
                                        ? "bg-on-primary-container-selected/10"
                                        : "bg-on-primary-container/10"}`}
                                >
                                   
                                </div>
                                <h3 className="font-bold text-lg mb-2">{t.label}</h3>
                                <p className="text-sm">{t.description}</p>
                            </button>
                        );
                    })}

                    {Object.entries(temperaturewheels).map(([key, example]) => (
                            <div
                                key={key}
                                className={`${activeExample === key ? "block" : "hidden"}`}
                            >
                                
                                
                                
                                <SimpleRad wordpercentlist={example.wordratio}
                                />
                                    
                            
                            </div>
                        ))}

                        <SingleWissensBit title="Scheinbare Intelligenz" isList={false} description="ChatGPT ist nicht intelligent, aber mit der richtig gewählten Temperatur kann es intelligente Sätze bilden."/>

                        <p className="text-lg text-text-normal mb-6 leading-relaxed">

                        Mit diesem Regler lässt sich die Temperatur auch separat umstellen:

                        </p>

                        <h3 className="text-primary text-xl font-semibold text-textDark mb-4">D. Temperatur = {rangeAdjustedValue}</h3>

                        
                        <input
                            type="range"
                            min={minrange}
                            max="99"
                            value={rangeValue} // Controlled input
                            onChange={handleRangeChange} // Update state on change
                        />

                        <SimpleRad wordpercentlist={applytemperature([["schön", 0.45 ], ["warm", 0.3], ["kalt", 0.25]],  rangeAdjustedValue)}
                        />
                        
                </div>
                

            </div>
        
    );
}