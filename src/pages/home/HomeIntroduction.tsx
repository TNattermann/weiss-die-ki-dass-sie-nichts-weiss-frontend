import { useEffect } from "react";
import { Link } from "react-router-dom";

type Question = {
  icon: string; // Remix Icon class
  text: string; // sichtbarer Fragentext
  href: string; // Ziel-Unterseite
};

export default function HomeIntroduction() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const questions: Question[] = [
    {
      icon: "ri-file-edit-line",
      text: "Was passiert, wenn ich ChatGPT benutze?",
      href: "/temperature",
    },
    {
      icon: "ri-brain-line",
      text: "Weiß ChatGPT, was eine Brombeere ist?",
      href: "/tokeninfo",
    },
    {
      icon: "ri-thumb-up-line",
      text: "Wieso sind die Texte von ChatGPT so gut?",
      href: "/wordembeddings",
    },
    {
      icon: "ri-question-line",
      text: "Versteht ChatGPT mich?",
      href: "/attention",
    },
    {
      icon: "ri-lightbulb-flash-line",
      text: "Wie funktioniert das mit diesem Neuronalen Netzwerk?",
      href: "/modellgleichung",
    },
    {
      icon: "ri-box-3-line",
      text: "Wie wurde ChatGPT gebaut?",
      href: "/networkLearning",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-3 text-center">
      <h1 className="text-5xl font-bold text-center text-primary mb-6">
        Wozu können Sprachmodelle verwendet werden?
      </h1>
      <h1 className="text-text-normal">
        Fragen Sie sich immer wieder, wozu Sprachmodelle wie ChatGPT genutzt
        werden können? Wo sie helfen können, sei es bei der Arbeit bei einem
        Schreiben an eine Behörde oder Zuhause bei einem Kochrezept? Und wo
        sollten Sie es lieber lassen, weil Fehler nicht geduldet werden können?
        Auf dieser Seite vermitteln wir das grundlegende Wissen, um diese Fragen
        beantworten zu können. Dazu können Sie entweder direkt auf eine der unten stehenden Fragen klicken, um mehr über ein spezielles
        Thema zu erfahren, das Sie besonders interessiert oder einem der beiden
        Lernpfade folgen, um einen umfassenden Überblick über Sprachmodelle wie ChatGPT zu erhalten.
      </h1>

      <div className="max-w-3xl mx-auto px-6 py-6 text-center">
        <ul className="mt-8 space-y-4 text-left">
          {questions.map(({ icon, text, href }, i) => (
            <li key={i}>
              <Link
                to={href}
                className="group flex items-center gap-4 rounded-xl border border-outline bg-bgColor p-4 transition
                          hover:shadow-md hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                <span
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10"
                  aria-hidden="true"
                >
                  <i className={`${icon} text-primary text-xl`} />
                </span>
                <span className="text-text-normal group-hover:text-primary">
                  {text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
