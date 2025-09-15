import Tilde from "../../components/Tilde.tsx";

function WordEmbeddingsIntroduction() {

    return (
        <section className="py-6 px-6" id="educational-content">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-6xl font-bold text-center text-primary mb-6">
                    Wieso sind die Texte von ChatGPT so gut?
                </h1>
                <p className="text-lg text-text-normal mb-6 leading-relaxed">
                    Um zu verstehen, wieso Texte von ChatGPT so gut sind, sollten Sie zunächst verstehen, wie ChatGPT mit Wörtern umgeht, bzw. wie es Wörter <Tilde />versteht.
                    Damit nämlich ein Sprachmodell wie ChatGPT ein Text erzeugen kann, muss es zuerst menschliche Sprache in Computersprache übersetzen. 
                    Dazu werden die sogenannten Worteinbettungen (Word Embeddings) benutzt.
                </p>
            </div>
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold text-center text-primary mb-6">Was sind Worteinbettungen?</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <p className="text-lg text-text-normal mb-6 leading-relaxed">
                            Da ein Computer nur mit Zahlen arbeiten kann, müssen Wörter zunächst in eine für ihn verständliche Form „übersetzt“ werden. 
                            Bei dieser Übersetzung soll die Bedeutung der Wörter möglichst erhalten bleiben.
                            Moderne Sprachmodelle, wie ChatGPT nutzen hierfür sogenannte Worteinbettungen (Word Embeddings). 
                        </p>
                        <p className="text-lg text-text-normal mb-6 leading-relaxed">
                            Stellen Sie sich vor, Sie sitzen in einem Planetarium. 
                            Über Ihnen spannt sich eine große schwarze Kuppel, und jedes Wort, das wir kennen, wird mit jeweils einem Lichtstrahler an die Kuppel projiziert. 
                            Manche Wörter erscheinen nah beieinander – etwa „Sonne“ und „Schnee“ – andere sind weit voneinander entfernt, wie „Sonne“ und „Steuererklärung“.
                        </p>
                        <p className="text-lg text-text-normal mb-6 leading-relaxed">
                            Genau das machen Computer, wenn sie Sprache verarbeiten: 
                            Sie „übersetzen“ Wörter in Zahlen, sogenannte Vektoren. 
                            Diese Vektoren sind nichts anderes als Koordinaten in einem unsichtbaren Raum. 
                            Die Nähe zwischen zwei Wörtern im Raum bedeutet, dass diese Wörter auch inhaltlich ähnlich sind. 
                        </p>
                    </div>
                    <div>
                        <div className="mb-8">
                            <img 
                                src="/Sonne.png" 
                                alt="Description of image" 
                                className="w-100 h-auto mx-auto"
                                />
                        </div> 
                        <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
                            <p className="text-textMedium font-medium">
                                Das Entscheidende: Der Computer weiß nicht, was die „Sonne“ wirklich ist. 
                                Er <Tilde />versteht keine Helligkeit und keine Wärme. 
                                Aber er <Tilde />erkennt, dass „Sonne“ in ähnlichen Textumgebungen vorkommt wie „Schnee“ – 
                                und legt die beiden daher nah beieinander in seinem Raum ab.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WordEmbeddingsIntroduction;
