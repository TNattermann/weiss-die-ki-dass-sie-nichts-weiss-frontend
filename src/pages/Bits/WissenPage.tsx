import { Link } from "react-router-dom";
import { bits } from "../../components/Wissensbit";

function WissenPage() {
  return (
    <div>
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
  );
}

export default WissenPage;
