import {useEffect} from "react";
import { useState } from 'react';

const fullspinduration = 0.3;
const spinanimation = `spin ${fullspinduration}s linear infinite`;
const piecolours = ["blue", "red", "yellow", "green", "lightgreen", "gold", "pink"];




export default function SimpleRad({wordpercentlist}: any) {
    const [currentAnimation, setCurrentAnimation] = useState("none");
    const [currentTransform, setTransform] = useState("none");
    const [isSpinning, setisSpinning] = useState(false);
    //const [currentRotation, setcurrentRotation] = useState(0);
    //const startTime = performance.now(); //update this when you have a start button TBD
    //let startTime: number;
    const [startTime, setstartTime] = useState<number | undefined>(undefined);
    const [winnermessage, setwinnermessage] = useState("__");
    const [wordradiantlist, setwordradiantlist] = useState(turnPercenttoDegrees(wordpercentlist));
    //useState([["blue0", 172],["red", 249],["yellow",313],["green",333],["lightgreen",347],["gold",360]]);
    //the initial state here is still a test-case, should probably be replaced
    const [circlebackground, setcirclebackground] = useState(colourCircle());

    useEffect(() => {
        setwordradiantlist(turnPercenttoDegrees(wordpercentlist));
        setcirclebackground(colourCircle());
        //console.log("Redrawing circle with new wordpercentlist:", wordpercentlist);
        //console.log("does radiantlist change?", wordradiantlist);
    }, [wordpercentlist]);

    function turnPercenttoDegrees(wordpercentlist : [string, number][]){
        
        let totalpercent = 0;
        wordpercentlist.forEach(wordpercent => {
            totalpercent += wordpercent[1];  
        });
        if (totalpercent != 1){
            for (let i=0; i < wordpercentlist.length; i++){
                wordpercentlist[i][1] = wordpercentlist[i][1] / totalpercent;
            }
        }

        
        
        //we assume for now the numbers all add up to 1
        let wordradiantlist = []; 
        let lastdegree = 0;
        let currentdegree;
        for (let i=0; i < wordpercentlist.length; i++){
            currentdegree = wordpercentlist[i][1] * 360 + lastdegree;
            wordradiantlist.push([wordpercentlist[i][0], currentdegree]);
            lastdegree += currentdegree;
        }
        //const wordradiantlist = wordpercentlist.map( wordpercent => [wordpercent[0], wordpercent[1] * 360]);
        //const wordradiantlist = [["blue0", 172],["red", 249],["yellow",313],["green",333],["lightgreen",347],["gold",360]];
        //console.log(wordpercentlist);

        return(wordradiantlist);
    }
    
    function colourCircle() {
        
        const pieparticipants = wordradiantlist;
        let resultString = ``;

        
        for (let i = 0; i < Math.min(piecolours.length, pieparticipants.length); i++){
            if (i == 0){
                resultString += piecolours[i] + ` `  + `0deg ` + `${pieparticipants[i][1]}deg`;
            }
            else {
                resultString += `, ` + piecolours[i] + ` ${pieparticipants[i-1][1]}deg ${pieparticipants[i][1]}deg`;
            }
            
        }
        

        const piepieces = `conic-gradient(${resultString})`;
        
        
        return(piepieces);
        //conic-gradient(blue 0deg 172deg, red 172deg 249deg, yellow 249deg 313deg, green 313deg 333deg, lightgreen 333deg 347deg, gold 347deg 360deg, pink 360deg 360deg)
    }

    function CreateLegend(){
        const test = "blue";
        return(

            <ul className="legend">
                {wordradiantlist.map((wordradiant, index) => (
                <li className="legend-item"  key={index}>
                    <span className={`legend-circle`} style={{background: piecolours[index]}}>
                    </span>
                    {wordradiant[0]}
                </li>
                ))}
            </ul>
            
        );


    }

    function updateRotation(){
        const currentTime = performance.now();
        const elapsedTime = (currentTime - startTime) / 1000; // Calculate elapsed time in seconds
        //TBD do something about this error-case that cant happen
        const absoluteRotation = (elapsedTime * 360 / fullspinduration); // Calculate rotation based on duration seconds for a full rotation
        //setcurrentRotation( prevRotation => absoluteRotation % 360);
        const currentRotation = absoluteRotation % 360
        return (currentRotation);
    }

    function displayWinner(currentRotation: number){
        const maxdegrees = wordradiantlist; //starting with 0 or the previous degree, this is the area of each colour
        const Winner = maxdegrees.filter(([colour, num]) => num > currentRotation)[0][0];
        setwinnermessage(`${Winner}`);

    }

    function handleStartButton(){
        if(!isSpinning){
            //startTime = performance.now();
            setstartTime(performance.now());

            setCurrentAnimation(spinanimation);
            setTransform("none");
            setisSpinning(true);

            setwinnermessage("__");
        }
    }

    function handleStopButton(){
        if(isSpinning){
            const currentRotation = updateRotation();
    
            setCurrentAnimation("none"); // Stop the animation
            setTransform(`rotate(${- currentRotation}deg)`); // Freeze at the current rotation
            setisSpinning(false);

            displayWinner(currentRotation);
        }


    
    }

    return (
        
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    
                    <div className="wheel-and-legend">
                        <div className="arrow">

                            <div className="circle" id="simpleRad" style={{
                                background: circlebackground,
                                animation: currentAnimation,
                                transform: currentTransform
                            }}>
                            </div>

                        </div>

                        
                        <CreateLegend />
                        
                    </div>
                    <button id="startButton" onClick={handleStartButton} className="rounded-full px-4 py-2 text-lg font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110 hover:shadow-lg">
                        Start Spinning
                    </button>

                    <button id="stopButton" onClick={handleStopButton} className="rounded-full px-4 py-2 text-lg font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110 hover:shadow-lg">
                        Stop Spinning
                    </button>

                    <div className="p-8 rounded-xl">
                        <div className="bg-bgColor p-4 rounded-lg border border-outline mb-4">
                            <p className="text-text-normal font-mono text-textDark">"Das Wetter heute ist besonders {winnermessage}"</p>
                        </div>
                </div>
                    
                </div>

            </div>
        
    );
}