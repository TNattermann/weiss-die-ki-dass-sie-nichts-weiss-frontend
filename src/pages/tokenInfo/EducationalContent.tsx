import {Link} from "react-router-dom";
import {useEffect} from "react";

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
              Damit ein LLM mit Sprache arbeiten kann, braucht es eine einheitliche und maschinenlesbare Darstellung des Textes. 
              Reiner Text besteht aus Zeichen und Wörtern, mit denen alleine ein neuronales Netz erstmal nichts anfangen kann.
            </p>
            <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
              <p className="text-gray-800 font-medium">
                Ein <strong className="text-primary">Token</strong> kann ein Wort, ein Satzzeichen oder sogar ein einzelnes Zeichen sein – je nach verwendetem Tokenizer.
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
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
            <div className="w-14 h-14 flex items-center justify-center bg-secondary/10 rounded-xl mb-6">
              <i className="ri-brain-line text-secondary text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Tokenisierung & Algorithmen</h3>
            <p className="text-gray-700 font-semibold mb-6 leading-relaxed flex-grow">
              Um Texte effizient zu tokenisieren, verwenden moderne Sprachmodelle verschiedene Algorithmen wie
              <span className="text-secondary font-semibold"> Byte Pair Encoding (BPE)</span>. Dieser fasst häufig vorkommende Zeichenfolgen zu neuen Tokens zusammen
              und reduziert so die Sequenzlänge.
            </p>
            <Link
                to="/tokeninfo/algorithms"
                className="text-secondary font-medium flex items-center hover:text-secondary transition-colors mt-auto"
            >
              Mehr erfahren
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
            <div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-xl mb-6">
              <i className="ri-split-cells-horizontal text-primary text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Vokabular & Encoding</h3>
            <p className="text-gray-700 font-semibold mb-6 leading-relaxed flex-grow">
              Für jedes Token im Vokabular gibt es eine eindeutige ID. Diese IDs dienen als Schlüssel zu
              sogenannten Embedding-Vektoren – numerische Repräsentationen.
            </p>
            <button className="text-primary font-medium flex items-center hover:text-primary/80 transition-colors mt-auto">
              Mehr erfahren
              <i className="ri-arrow-right-line ml-2"></i>
            </button>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
            <div className="w-14 h-14 flex items-center justify-center bg-orange-100 rounded-xl mb-6">
              <i className="ri-settings-3-line text-orange-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Notwendigkeit von Tokens</h3>
            <p className="text-gray-700 font-semibold mb-6 leading-relaxed flex-grow">
              Das LLM selbst arbeitet nicht mit reinem Text – es verarbeitet nur numerische Token-IDs.
              Die eigentliche Sprachverarbeitung beginnt erst nach der Tokenisierung.
            </p>
            <Link
                to="/tokeninfo/algorithms"
                className="text-orange-600 font-medium flex items-center hover:text-orange-500 transition-colors mt-auto"
            >
              Mehr erfahren
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
