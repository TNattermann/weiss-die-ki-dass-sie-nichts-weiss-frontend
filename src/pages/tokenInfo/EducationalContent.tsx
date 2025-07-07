import {useEffect} from "react";
import InfoCard from "../../components/LearnMoreCard.tsx";

export default function TokenInfoAlgorithms() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section className="py-16 px-6 bg-white" id="educational-content">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Was sind Tokens?</h2>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Damit ein LLM mit Sprache arbeiten kann, braucht es eine einheitliche und maschinenlesbare
                            Darstellung des Textes.
                            Reiner Text besteht aus Zeichen und Wörtern, mit denen alleine ein neuronales Netz erstmal
                            nichts anfangen kann.
                        </p>
                        <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
                            <p className="text-gray-800 font-medium">
                                Ein <strong className="text-primary">Token</strong> kann ein Wort, ein Satzzeichen oder
                                sogar ein einzelnes Zeichen sein – je nach verwendetem Tokenizer.
                            </p>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Einfaches Beispiel</h3>
                        <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                            <p className="text-sm text-gray-600 mb-2">Input:</p>
                            <p className="font-mono text-gray-900">"Heute wird es sonnig!"</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <p className="text-sm text-gray-600 mb-3">Tokens:</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="token token-word">Heute</span>
                                <span className="token token-word">wird</span>
                                <span className="token token-word">es</span>
                                <span className="token token-word">sonnig</span>
                                <span className="token token-special">!</span>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Wichtige Konzepte</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

                    <InfoCard
                        icon="ri-brain-line"
                        iconColor="text-primary"
                        bgColor="bg-primary/10"
                        title="Tokenisierung & Algorithmen"
                        description={
                            <>
                                Um Texte effizient zu tokenisieren, verwenden moderne Sprachmodelle verschiedene
                                Algorithmen wie{" "}
                                <span className="text-primary font-semibold">Byte Pair Encoding (BPE)</span>. Dieser
                                fasst häufig vorkommende Zeichenfolgen zu neuen Tokens zusammen
                                und reduziert so die Sequenzlänge.
                            </>
                        }
                        linkText="Mehr erfahren"
                        linkTo="/tokeninfo/algorithms"
                    />

                    <InfoCard
                        icon="ri-split-cells-horizontal"
                        iconColor="text-secondary"
                        bgColor="bg-secondary/10"
                        title="Vokabular & Encoding"
                        description="Für jedes Token im Vokabular gibt es eine eindeutige ID. Diese IDs dienen als Schlüssel zu sogenannten Embedding-Vektoren – numerische Repräsentationen."
                        linkText="Mehr erfahren"
                        linkTo="/tokeninfo/algorithms"
                    />

                    <InfoCard
                        icon="ri-settings-3-line"
                        iconColor="text-orange-600"
                        bgColor="bg-orange-100"
                        title="Notwendigkeit von Tokens"
                        description="Das LLM selbst arbeitet nicht mit reinem Text – es verarbeitet nur numerische Token-IDs. Die eigentliche Sprachverarbeitung beginnt erst nach der Tokenisierung."
                        linkText="Mehr erfahren"
                        linkTo="/tokeninfo/algorithms"
                    />

                </div>
            </div>
        </section>
    );
}
