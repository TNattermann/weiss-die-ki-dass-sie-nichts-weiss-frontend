import { useEffect } from "react";

export default function AboutUsText() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-6 text-center">
      <div className="items-center mb-4">
        <p className="text-lg text-text-normal mb-6 leading-relaxed">
          Wir sind eine Gruppe von Studierenden, die ihren Master in
          Sozioinformatik an der RPTU in Kaiserslautern machen. Diese Webseite
          ist im Rahmen unseres Master-Projekts entstanden und ergänzt das Buch
          "Weiß die KI, dass sie nichts weiß?" von Prof. Dr. Katharina A. Zweig.
          Unser Ziel ist es, allen Menschen ein grundlegendes Verständnis von
          Sprachmodellen zu vermitteln, unabhängig von technischen
          Vorkenntnissen.
        </p>
      </div>
    </div>
  );
}
