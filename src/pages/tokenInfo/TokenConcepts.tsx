import InfoCard from "../../components/LearnMoreCard.tsx";
import {useEffect} from "react";

export default function TokenConcepts() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section className="py-16 px-6" id="token-concepts">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-textDark mb-12 text-center">Wichtige Konzepte</h2>
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
                        iconColor="text-tertiary"
                        bgColor="bg-tertiary/10"
                        title="Notwendigkeit von Tokens"
                        description="Das Sprachmodell selbst arbeitet nicht mit reinem Text – es verarbeitet nur numerische Token-IDs. Die eigentliche Sprachverarbeitung beginnt erst nach der Tokenisierung."
                        linkText="Mehr erfahren"
                        linkTo="/tokeninfo/algorithms"
                    />

                </div>
            </div>
        </section>
    );
}