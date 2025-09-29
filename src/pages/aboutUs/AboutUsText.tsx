import { useEffect } from "react";

export default function AboutUsText() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-6 ">
      <div className="items-center mb-4">
        <p className="text-lg text-text-normal mb-6 leading-relaxed">
          Wir sind eine Gruppe von Studierenden, die ihren Master in Sozioinformatik an der RPTU Kaiserslautern machen. 
          Diese Webseite ist im Rahmen unseres Masterprojekts entstanden und ergänzt 
          das Buch „Weiß die KI, dass sie nichts weiß?“ von Prof. Dr. Katharina A. Zweig.

          Unser Ziel ist es, allen Menschen – unabhängig von ihren technischen Vorkenntnissen – ein grundlegendes Verständnis 
          von Sprachmodellen zu vermitteln. Uns ist wichtig, dass mehr Menschen, insbesondere Personen 
          in Entscheidungspositionen (z. B. in der Verwaltung) sowie Multiplikator*innen wie Lehrer*innen, 
          besser nachvollziehen können, wie Sprachmodelle wie ChatGPT funktionieren. 
          Nur so können sie die Chancen dieser Technologie gezielt nutzen und zugleich die potenziellen Risiken und 
          gesellschaftlichen Auswirkungen kritisch einschätzen.
        </p>
        <p>
          </p>
      </div>
      <div className="bg-primary/5 border-l-4 text-primary p-4 sm:p-6 rounded-r-lg mb-6">
            <p className="text-text-normal font-medium break-words">
              <strong className="text-primary">
                Was ist Sozioinformatik?{" "} <br></br>
              </strong>{" "}
              Die Sozioinformatik beschäftigt sich mit soziotechnischen Systemen, also mit Systemen, 
              in denen menschliche Akteure mit mindestens einer Softwarekomponente interagieren. 
              Dabei untersucht das Fach insbesondere die Wechselwirkungen zwischen neuen Technologien und der Gesellschaft – etwa, 
              wie technologische Innovationen soziale Strukturen, Entscheidungsprozesse und ethische Fragen beeinflussen. </p>
          </div>
    </div>
  );
}
