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
          Webseite übersichtlich dargestelt. Wissenshäppchen - perfekt zum
          nachschlagen.
        </p>

        {/* Attention Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Attention</h2>
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

        {/* Temperature Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Temperature</h2>
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
          <h2 className="text-2xl font-bold text-primary mb-4">Tokens</h2>
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
          <h2 className="text-2xl font-bold text-primary mb-4">Embeddings</h2>
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
          <Link to="/wordembeddings#embeddings3">
            <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
              {bits
                .filter((c) => c.id === "embeddings3")
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
          <h2 className="text-2xl font-bold text-primary mb-4">Decisions</h2>
          <Link to="/attention#decisions1">
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
          <Link to="/attention#decisions2">
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
          <Link to="/attention#decisions3">
            <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
              {bits
                .filter((c) => c.id === "decisions3")
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
          <h2 className="text-2xl font-bold text-primary mb-4">Training</h2>
          <Link to="/learning#training1">
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
          <Link to="/learning#training2">
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
          <Link to="/learning#training3">
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
