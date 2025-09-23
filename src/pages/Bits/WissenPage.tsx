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
        <Link to="/attention#attention1">
          <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
            {bits.slice(0, 1).map((c) => (
              <section key={c.id}>
                <h2>{c.title}</h2>
                <p>{c.text}</p>
              </section>
            ))}
          </div>
        </Link>
        <Link to="/attention#attention2">
          <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
            {bits.slice(1, 2).map((c) => (
              <section key={c.id}>
                <h2>{c.title}</h2>
                <p>{c.text}</p>
              </section>
            ))}
          </div>
        </Link>
      </div>
    </section>
  );
}

export default WissenPage;
