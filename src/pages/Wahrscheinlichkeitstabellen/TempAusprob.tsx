import {useEffect} from "react";
import { useState } from 'react';
import MultiTestRad from "../../components/MultiTestRad";

//right now a lot of code is copied from simpleRad. Find a better way

//find a way to import these two functions instead

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
    let newlist = [];
    let newvalue : number;

    //console.log(wordpercentlist);

    for (let i=0; i < wordpercentlist.length; i++){
        
        /*
        if (temperature == 0){
            if (wordpercentlist[i][0] == "schön"){
                newvalue = wordpercentlist[i][1];
            }
            else {
                newvalue = 0;
            }
        }
        else {
            newvalue = wordpercentlist[i][1] / temperature;
            console.log("applying temperature", wordpercentlist[i], newvalue, temperature);
        }
        */

        if (temperature == 0){
            if (wordpercentlist[i][0] == "schön"){
                newvalue = wordpercentlist[i][1];
            }
            else {
                newvalue = 0;
            }
        }
        else {
            if (wordpercentlist[i][0] == "schön" ){
                newvalue = wordpercentlist[i][1] * (1 / temperature);
            }
            else {
                newvalue = wordpercentlist[i][1];
            }
        }

        newlist.push([wordpercentlist[i][0], newvalue]);
        
    }
    //console.log(newlist);

    return (newlist);

}

export default function WahrIntroduction() {
    const minrange = -20;
    const [rangeValue, setRangeValue] = useState(-20); //update this to 0 again !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const [rangeAdjustedValue, setRangeAdjustedValue] = useState(adjustRange(rangeValue, minrange));

    const handleRangeChange = (event) => {
        setRangeValue(event.target.value); // Update state with the current value
        setRangeAdjustedValue(adjustRange(rangeValue, minrange));
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section className="py-6 px-6" id="educational-content">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold text-center text-primary mb-6">Selbst Text-generieren</h1>
                <div className="text-center mb-16">
                    <div>
                        <p className="text-lg text-text-normal mb-6 leading-relaxed">

                        Hier können Sie jetzt selbst ein bisschen ausprobieren, was das verstellen, des Temperatur-reglers bewirkt
                        und einen Satz generieren.
                        </p>

                        <p className="text-lg text-text-normal mb-6 leading-relaxed">

                        <input
                            type="range"
                            min={minrange}
                            max="99"
                            value={rangeValue} // Controlled input
                            onChange={handleRangeChange} // Update state on change
                        />

                        <MultiTestRad wordpercentlist={applytemperature([["schön", 0.45 ], ["warm", 0.3], ["kalt", 0.25]],  rangeAdjustedValue)}
                        />
                        </p>
                    </div>
                </div>

                
                

            </div>
        </section>
    );
}