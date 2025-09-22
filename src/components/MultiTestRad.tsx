import {useEffect} from "react";
import { useState } from 'react';

const fullspinduration = 0.3;
const spinanimation = `spin ${fullspinduration}s linear infinite`;
const piecolours = ["oklch(28.2% 0.091 267.935)", "oklch(81.1% 0.111 293.571)", "oklch(41% 0.159 10.272)", "green", "lightgreen", "gold", "pink"];

const maximumnumberofcircles = 3;


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
        //100 ist weil darauf die ganzen terme gerade geeisht sind. 1.6 ist ein Faktor, damit Temp = 1 ansatzweise die "echte" Version ist
        const expsum = explist.reduce((accumulator, wordexp) => accumulator + wordexp[1], 0);
        newlist = explist.map( (wordexp) => [wordexp[0], wordexp[1] / expsum]);
    }

    
        
        
    //console.log(newlist);

    return (newlist);

}






export default function MultiTestRad({wordlibrary, temperature, isVideo}: any) {
    //const [totalnumberofcircles, settotalnumberofcircles] = useState(maximumnumberofcircles);
    const totalnumberofcircles = maximumnumberofcircles;
    const [circlecounter, setcirclecounter] = useState(0); 
    const [wordpercentlist, setwordpercentlist] = useState(wordlibrary[0].list);
    const [wordradiantlist, setwordradiantlist] = useState(turnPercenttoDegrees(applytemperature(wordpercentlist, temperature)));
    //States that need to be declared early, because the others rely on it

    const [currentAnimation, setCurrentAnimation] = useState(createfilledArray("none", totalnumberofcircles));
    const [currentTransform, setTransform] = useState(createfilledArray("none", totalnumberofcircles));
    const [circlebackground, setcirclebackground] = useState(createCircleParade(wordradiantlist));
    //states that determine the states of the circles

    const [legendsets, setlegendsets] = useState(createLegendSet(wordradiantlist));

    const [isSpinning, setisSpinning] = useState(false);
    const [isLastCircle, setisLastCircle] = useState(false); 
    //const [currentRotation, setcurrentRotation] = useState(0);
    //const startTime = performance.now(); //update this when you have a start button TBD
    //let startTime: number;
    const [startTime, setstartTime] = useState<number>(performance.now());
    const [winnermessage, setwinnermessage] = useState("__"); //changing this string also makes a winnermessage manipulation later not work.
    
    const [isVideoStarted, setisVideoStarted] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(0);
    const [eventDate, setEventDate] = useState(new Date());
    //constants important for the Video-version


    let clickdisplay : string;
    let videodisplay: string;
    if (isVideo) {
        clickdisplay = "none";
        videodisplay = "";
    }
    else {
        clickdisplay = "";
        videodisplay = "none";
    }
    
    //useState([["blue0", 172],["red", 249],["yellow",313],["green",333],["lightgreen",347],["gold",360]]);
    //the initial state here is still a test-case, should probably be replaced

    useEffect(() => {
        const tempradiantlist = turnPercenttoDegrees(applytemperature(wordpercentlist, temperature));
        setwordradiantlist(tempradiantlist);
        
        setcirclebackground(colourCircleParade(tempradiantlist, circlecounter));

        
        
        
       
    }, [temperature]); //delete the latter two maybe

    useEffect(() => {
        if (isVideoStarted && !isLastCircle) {
            const countdownInterval = setInterval(() => {
              const currentTime = new Date().getTime();
              const eventTime = new Date(eventDate).getTime();
              let remainingTime = eventTime - currentTime;
      
              if (remainingTime <= 0) {
                remainingTime = 0;
                clearInterval(countdownInterval);
                
                if (isSpinning){
                    handleStopButton();
                }
                else {
                    handleStartButton();
                }

                if (!isLastCircle){
                const newEventDate = new Date(eventDate);
                newEventDate.setSeconds(newEventDate.getSeconds() + 2);
                setEventDate(newEventDate);
                }
              }
      
              setTimeRemaining(remainingTime);
            }, 1000);
      
            return () => clearInterval(countdownInterval);
          }
          else if (isVideoStarted) {
              //ensure after the last circle has been spun (when isLastCircle has been updated) to "end" the video.
            setisVideoStarted(false);
        }


    }, [isVideoStarted, timeRemaining]);

    function createfilledArray(content: any, length: number){
        let newlist = [];
        for (let i=0; i < length; i++){
            newlist.push(content);
        }
        return (newlist);
    }

    function createCircleParade( wordlist : (string | number)[][]){
        let newlist = [];
        const background = "rgba(128, 128, 128, 0.1)"; //grey and 80% opacity
        
        for (let i=0; i < totalnumberofcircles; i++){
            if (i == 0){
                newlist.push(colourCircle(wordlist));
            }
            else {
                newlist.push(background);
            }
        }
        
        return (newlist);
    }
    
    function colourCircleParade( wordlist : (string | number)[][], counter: number){
        let newlist = [];
        const background = "rgba(128, 128, 128, 0.1)"; //grey and 80% opacity
        
        for (let i=0; i < circlebackground.length; i++){
            if (i < counter){

                newlist.push(circlebackground[i]);
            }
            else if (i == counter){
                newlist.push(colourCircle(wordlist));
            }
            else {
                newlist.push(background);
            }
        }
        
        return (newlist);
    }

    function createLegendSet( wordlist : (string | number)[][]){
        let legendset= [];
        const keyword = ""; 
        const keycircle = "rgba(128, 128, 128, 0.1)"; //grey and 80% opacity
        
        for (let i=0; i < totalnumberofcircles; i++){
            if (i == 0){
                legendset.push(
                    {keywordlist: wordlist.map((word) => (word[0])),
                    beforecircle: wordlist.map((_, wordindex) => (piecolours[wordindex]))}
                );
            }
            else {
                legendset.push({keywordlist: createfilledArray(keyword, wordlist.length), 
                    beforecircle: createfilledArray(keycircle, wordlist.length)});
            }
        }
        
        return (legendset);
    }

    function writeLegendSet( wordlist : (string | number)[][], counter: number){
        let legendset= [];
        const keyword = ""; 
        const keycircle = "rgba(128, 128, 128, 0.1)"; //grey and 80% opacity
        
        for (let i=0; i < legendsets.length; i++){
            if (i < counter){

                legendset.push(legendsets[i]);
            }
            else if (i == counter){
                legendset.push({keywordlist: wordlist.map((word) => (word[0])),
                    beforecircle: wordlist.map((_, wordindex) => (piecolours[wordindex]))});
            }
            else {
                legendset.push({keywordlist: createfilledArray(keyword, wordlist.length), 
                    beforecircle: createfilledArray(keycircle, wordlist.length)});
            }
        }
        
        return (legendset);
    }

    function turnPercenttoDegrees(wordpercentlist : [string, number][]){
        
        let totalpercent = 0;
        wordpercentlist.forEach(wordpercent => {
            totalpercent += wordpercent[1];  
        });
        if (totalpercent != 100){
            for (let i=0; i < wordpercentlist.length; i++){
                wordpercentlist[i][1] = 100 * wordpercentlist[i][1] / totalpercent;
            }
        }

        
        
        //we assume for now the numbers all add up to 1
        let wordradiantlist : [string, number][] = []; 
        let lastdegree = 0;
        for (let i=0; i < wordpercentlist.length; i++){
            const currentdegree = wordpercentlist[i][1] * 3.6;
            wordradiantlist.push([wordpercentlist[i][0], lastdegree + currentdegree]);
            lastdegree += currentdegree;
        }
        
        //const wordradiantlist = [["blue0", 172],["red", 249],["yellow",313],["green",333],["lightgreen",347],["gold",360]];
        

        return(wordradiantlist);
    }
    
    function colourCircle( wordradiantlist : (string | number)[][]) {
        
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

    function CreateLegend({legendindex} : any){
        
        return(

            //TBD make this take the correct index

            <ul className="legend">
                {/*wordradiantlist.map((wordradiant, index) => (
                <li className="legend-item"  key={index}>
                    <span className={`legend-circle`} style={{background: piecolours[index]}}>
                    </span>
                    {wordradiant[0]}
                </li>
                ))*/}
                
                {legendsets[legendindex].keywordlist.map((keyword, index) => (
                <li className="legend-item text-text-normal"  key={index}>
                    <span className={`legend-circle`} style={{background: legendsets[legendindex].beforecircle[index]}}>
                    </span>
                    {keyword}
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

    function displayWinner(currentRotation: number, counter : number){
        const maxdegrees = wordradiantlist; //starting with 0 or the previous degree, this is the area of each colour
        
        const Winner = maxdegrees.filter(([, num]) => num > currentRotation)[0]?.[0];
        
        let winnerstring = winnermessage;
        if (counter === 0){//(winnerstring == "__" || !isNotLastCircle){
            winnerstring = "";
        }
        const newWinner = `${Winner}`;
        winnerstring += newWinner;
        setwinnermessage(winnerstring);

        return ([Winner, winnerstring]);

    }

    function modifyNextWordChoice(temppercentlist : [string, number][], Winnerstring : string){
        const words = Winnerstring.trim().split(" ");
        const lastWord = words.length > 0 ? words[words.length - 2] : "";

        let newlist;

        if (lastWord === "schön"){
            newlist = [[" warm", 0.45 ], [" sonnig", 0.3], [" sommerlich", 0.25], [".", 0.05], [" Gardine", 0.00001]];
        }
        else if (lastWord === "kalt"){
            newlist =[[" trocken", 0.45 ], [" frostig", 0.3], [" windig", 0.25], [".", 0.05], [" Gardine", 0.00001]]          
        }
        else {
            newlist = [[" trocken", 0.45 ], [" sonnig", 0.3], [" windig", 0.25], [".", 0.05], [" Gardine", 0.00001]];
        }

        console.log(words, lastWord);
        console.log(temppercentlist);
        console.log(newlist);
        

        return (newlist);
    }

    function updateNextCircle(Winner : string, winnerstring: string, isNotLastCircle : boolean){
        let temppercentlist = wordlibrary.find((word : {
            id: string;
            list: (string | number)[][];
        }) => word.id === Winner).list;

        if (Winner === " und"){
            temppercentlist = modifyNextWordChoice(temppercentlist, winnerstring);
        }
        
        const tempradiantlist = turnPercenttoDegrees(applytemperature(temppercentlist, temperature));
        setwordpercentlist(temppercentlist);
        
        setwordradiantlist(tempradiantlist);
        if (isNotLastCircle){
            setcirclebackground(colourCircleParade(tempradiantlist, circlecounter+1));
            setlegendsets(writeLegendSet(tempradiantlist, circlecounter + 1));
        }

        

    }

    function inputcorrectindex (oldlist: any[], newinput : any, index : number) {
        let newlist = [];
        for (let i=0; i < oldlist.length; i++){
            if (i == index) {
                newlist.push(newinput);
            }
            else {
                newlist.push(oldlist[i]);
            }
        }
        return (newlist);
    }

    function handleStartButton(){
        if(!isSpinning){
            //startTime = performance.now();
            setstartTime(performance.now());

            

            if (isLastCircle){
                setcirclebackground(createCircleParade(wordradiantlist));
                setlegendsets(createLegendSet(wordradiantlist));
            }


            setCurrentAnimation(inputcorrectindex(currentAnimation, spinanimation, circlecounter));
            setTransform(inputcorrectindex(currentTransform, "none", circlecounter));
            setisSpinning(true);

            //setwinnermessage("__");
        }
    }

    function handleStopButton(){
        if(isSpinning){
            const currentRotation = updateRotation();

            setCurrentAnimation(inputcorrectindex(currentAnimation, "none", circlecounter)); // Stop the animation
            setTransform(inputcorrectindex(currentTransform, `rotate(${- currentRotation}deg)`, circlecounter)); // Freeze at the current rotation
            setisSpinning(false);

             

            let isNotLastCircle = (circlecounter < totalnumberofcircles - 1);

            const [Winner, winnerstring] = displayWinner(currentRotation, circlecounter);

            if (isNotLastCircle && Winner.slice(-1) === "."){
                //end early if fullstop
                
                isNotLastCircle = false;
            }
            
            setisLastCircle(!isNotLastCircle);
            
            


            if (isNotLastCircle){
                setcirclecounter(circlecounter + 1);
                updateNextCircle(Winner, winnerstring, isNotLastCircle);
                
                

            }
            else {
                
                setcirclecounter(0);
                updateNextCircle("0", winnerstring, isNotLastCircle);
            }
            
        }


    
    }

    function handleVideoButton(){
        if (!isVideoStarted){

        

        handleStartButton();
        setisLastCircle(false);
        
        const newEventDate = new Date();
        newEventDate.setSeconds(newEventDate.getSeconds() + 2);
        setEventDate(newEventDate);
        setisVideoStarted(true);
        }
    }

    return (
        
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">

                    <button id="VideoButton" onClick={handleVideoButton} className=" text-text-normal mb-6 rounded-full px-4 py-2 text-lg font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110 hover:shadow-lg"
                    style={{ display: videodisplay}}>
                        Abspielen
                    </button>


                    <div className="circle-parade">

                        {Array.from(Array(totalnumberofcircles).keys()).map( (circleindex) => 
                            <div className="wheel-and-legend" key={circleindex}>
                            <div className="arrow">

                                <div className="circle" id="Rad1" style={{
                                    background: circlebackground[circleindex],
                                    animation: currentAnimation[circleindex],
                                    transform: currentTransform[circleindex]
                                }}>
                                </div>

                            </div>

                            
                            <CreateLegend legendindex={circleindex} />
                            
                        </div>
                        )}
                    
                        

                    </div>

                    

                    <button id="startButton" onClick={handleStartButton} className="text-text-normal rounded-full px-4 py-2 text-lg font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110 hover:shadow-lg"
                    style={{ display: clickdisplay}}>
                        Start Spinning
                    </button>

                    <button id="stopButton" onClick={handleStopButton} className="text-text-normal rounded-full px-4 py-2 text-lg font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110 hover:shadow-lg"
                    style={{ display: clickdisplay}}>
                        Stop Spinning
                    </button>

                    <div className="p-8 rounded-xl">
                        <div className="bg-bgColor p-4 rounded-lg border border-outline mb-4">
                            <p className="text-text-normal font-mono text-textDark">"Das Wetter heute ist besonders{winnermessage}"</p>
                        </div>
                </div>
                    
                </div>

            </div>
        
    );
}