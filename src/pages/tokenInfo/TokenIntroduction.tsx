import {useEffect} from "react";

export default function TokenInfoAlgorithms() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section className="py-6 px-6" id="educational-content">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold text-center text-primary mb-6">Was sind Tokens?</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <p className="text-lg text-text-normal mb-6 leading-relaxed">
                            Damit ein Sprachmodell mit Sprache ~arbeiten kann, braucht es eine einheitliche und maschinenlesbare
                            Darstellung des Textes.
                            Reiner Text besteht aus Zeichen und Wörtern, mit denen alleine ein neuronales Netz erstmal
                            nichts anfangen kann.
                        </p>
                        <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
                            <p className="text-textMedium font-medium">
                                Ein <strong className="text-primary">Token</strong> kann ein Wort, ein Satzzeichen oder
                                sogar ein einzelnes Zeichen sein – je nach verwendetem Tokenizer.
                            </p>
                        </div>
                    </div>
                    <div className="p-8 rounded-xl">
                        <h3 className="text-primary text-xl font-semibold text-textDark mb-4">Einfaches Beispiel</h3>
                        <div className="bg-bgColor p-4 rounded-lg border border-outline mb-4">
                            <p className="text-text-normal font-semibold text-sm text-textNormal mb-2">Input:</p>
                            <p className="text-text-normal font-mono text-textDark">"Das Wetter heute ist besonders schön."</p>
                        </div>
                        <div className="bg-bgColor p-4 rounded-lg border border-outline">
                            <p className="text-text-normal font-semibold text-sm text-textNormal mb-3">Tokens:</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="token token-word">Das</span>
                                <span className="token token-word">Wetter</span>
                                <span className="token token-word">heute</span>
                                <span className="token token-word">ist</span>
                                <span className="token token-word">besonders</span>
                                <span className="token token-word">schön</span>
                                <span className="token token-special">.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
