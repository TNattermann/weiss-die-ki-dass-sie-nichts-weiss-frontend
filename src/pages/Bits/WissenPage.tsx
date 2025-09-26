import { Link } from "react-router-dom";
import { bits } from "../../components/Wissensbit";

function WissenPage() {
  return (
    <section className="py-6 px-6" id="educational-content">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-primary mb-4">
          Wissenshäppchen
        </h1>
        <p className="text-lg text-text-normal mb-6 leading-relaxed">
          Hier werden die wichtigsten Erkenntnisse und Informationen von der
          Webseite zusammengefasst. Wissenshäppchen - perfekt zum Nachschlagen.
        </p>

        {/* Temperature Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Was passiert, wenn ich ChatGPT benutze?
          </h2>
          <Link to="/temperature#temperature1">
            <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
              {bits
                .filter((c) => c.id === "temperature1")
                .map((c) => (
                  <section key={c.id}>
                    <h2>{c.title}</h2>
                    <p>{c.text}</p>
                  </section>
                ))}
            </div>
          </Link>
          <Link to="/temperature#temperature2">
            <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
              {bits
                .filter((c) => c.id === "temperature2")
                .map((c) => (
                  <section key={c.id}>
                    <h2>{c.title}</h2>
                    <p>{c.text}</p>
                  </section>
                ))}
            </div>
          </Link>
          <Link to="/temperature#temperature3">
            <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
              {bits
                .filter((c) => c.id === "temperature3")
                .map((c) => (
                  <section key={c.id}>
                    <h2>{c.title}</h2>
                    <p>{c.text}</p>
                  </section>
                ))}
            </div>
          </Link>
        </div>

        {/* Tokens Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Weiß ChatGPT, was eine Brombeere ist?
          </h2>
          <Link to="/tokeninfo#tokens1">
            <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
              {bits
                .filter((c) => c.id === "tokens1")
                .map((c) => (
                  <section key={c.id}>
                    <h2>{c.title}</h2>
                    <p>{c.text}</p>
                  </section>
                ))}
            </div>
          </Link>
          <Link to="/tokeninfo#tokens2">
            <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
              {bits
                .filter((c) => c.id === "tokens2")
                .map((c) => (
                  <section key={c.id}>
                    <h2>{c.title}</h2>
                    <p>{c.text}</p>
                  </section>
                ))}
            </div>
          </Link>
          <Link to="/tokeninfo#tokens3">
            <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
              {bits
                .filter((c) => c.id === "tokens3")
                .map((c) => (
                  <section key={c.id}>
                    <h2>{c.title}</h2>
                    <p>{c.text}</p>
                  </section>
                ))}
            </div>
          </Link>
        </div>

        {/* Embeddings Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Wieso sind die Texte von ChatGPT so gut?
          </h2>
          <Link to="/wordembeddings#embeddings1">
            <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
              {bits
                .filter((c) => c.id === "embeddings1")
                .map((c) => (
                  <section key={c.id}>
                    <h2>{c.title}</h2>
                    <p>{c.text}</p>
                  </section>
                ))}
            </div>
          </Link>
          <Link to="/wordembeddings#embeddings2">
            <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
              {bits
                .filter((c) => c.id === "embeddings2")
                .map((c) => (
                  <section key={c.id}>
                    <h2>{c.title}</h2>
                    <p>{c.text}</p>
                  </section>
                ))}
            </div>
          </Link>
        </div>

        {/* Attention Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Versteht ChatGPT mich?
          </h2>
          <Link to="/attention#attention1">
            <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
              {bits
                .filter((c) => c.id === "attention1")
                .map((c) => (
                  <section key={c.id}>
                    <h2>{c.title}</h2>
                    <p>{c.text}</p>
                  </section>
                ))}
            </div>
          </Link>
          <Link to="/attention#attention2">
            <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
              {bits
                .filter((c) => c.id === "attention2")
                .map((c) => (
                  <section key={c.id}>
                    <h2>{c.title}</h2>
                    <p>{c.text}</p>
                  </section>
                ))}
            </div>
          </Link>
        </div>

        {/* Decisions Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Wie funktioniert das mit diesem Neuronalen Netzwerk?
          </h2>
          <Link to="/modellgleichung#decisions1">
            <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
              {bits
                .filter((c) => c.id === "decisions1")
                .map((c) => (
                  <section key={c.id}>
                    <h2>{c.title}</h2>
                    <p>{c.text}</p>
                  </section>
                ))}
            </div>
          </Link>
          <Link to="/modellgleichung#decisions2">
            <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
              {bits
                .filter((c) => c.id === "decisions2")
                .map((c) => (
                  <section key={c.id}>
                    <h2>{c.title}</h2>
                    <p>{c.text}</p>
                  </section>
                ))}
            </div>
          </Link>
        </div>

        {/* Training Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Wie wurde ChatGPT gebaut?
          </h2>
          <Link to="/networkLearning#training1">
            <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
              {bits
                .filter((c) => c.id === "training1")
                .map((c) => (
                  <section key={c.id}>
                    <h2>{c.title}</h2>
                    <p>{c.text}</p>
                  </section>
                ))}
            </div>
          </Link>
          <Link to="/networkLearning#training2">
            <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
              {bits
                .filter((c) => c.id === "training2")
                .map((c) => (
                  <section key={c.id}>
                    <h2>{c.title}</h2>
                    <p>{c.text}</p>
                  </section>
                ))}
            </div>
          </Link>
          <Link to="/networkLearning#training3">
            <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
              {bits
                .filter((c) => c.id === "training3")
                .map((c) => (
                  <section key={c.id}>
                    <h2>{c.title}</h2>
                    <p>{c.text}</p>
                  </section>
                ))}
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WissenPage;
