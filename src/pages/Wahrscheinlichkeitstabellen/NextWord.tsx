import {useEffect} from "react";
import MultiTestRad from "../../components/MultiTestRad";


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

export default function NextWord() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold text-center text-primary mb-6">Und das nächste Wort?</h1>
                <div className="text-center mb-16">
                    <div>
                        <p className="text-lg text-text-normal mb-6 leading-relaxed">

                        Der jetzt noch fehlende Schritt ist, was das Modell macht, nachdem ein Wort hinzugefügt wurde. 
                        Das Modell nimmt einfach den Satz, der das neue Wort enthält, und macht das gleiche nochmal,
                        bis der Satz beendet wird. Schließlich hat es ja für jeden Satz zugriff auf die Wahrscheinlichkeitstabellen.
                        </p>

                        <p className="text-lg text-text-normal mb-6 leading-relaxed">
                        
                        <MultiTestRad wordlibrary={wordlibrary} temperature={10} isVideo={true}
                        />
                        </p>
                    </div>
                </div>

            </div>
        
    );
}