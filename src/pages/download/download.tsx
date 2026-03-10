import { useEffect } from "react";

function Download() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const email = "aalab-buch@cs.rptu.de";
  const subject = "Anfrage: Open-Access Weiß die KI, dass sie nichts weiß?";
  const body = `Sehr geehrte Damen und Herren,

ich möchte gerne die Open-Access Buchteile des Buches "Weiß die KI, dass sie nichts weiß" für edukative Zwecke anfragen. 
Hier sind meine Angaben:
1) Name der Lehrperson: _______________________
2) Name der Lehrinstitution / ausbildenden Firma: _______________________
3) Webseite der Lehrinstitution / Ausbildungswebseite der Firma: _______________________
4) Wofür soll das Buch genutzt werden?: _______________________

Vielen Dank im Voraus.

Mit freundlichen Grüßen
_______________________`;

  const mailHref = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <section className="py-10 px-6" id="introduction">
      <div className="max-w-5xl mx-auto">

        {/* Titel */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-primary mb-8">
          Buch Download
        </h1>

        {/* Textbereich */}
        <div className="max-w-3xl mx-auto mb-10">

          <p className="text-lg text-text-normal leading-relaxed mb-4">
            Die Open-Access-Buchteile des Buchs{" "}
            <em>„Weiß die KI, dass sie nichts weiß?“</em> können für{" "}
            <strong className="text-primary">edukative Zwecke</strong> kostenlos zur
            Verfügung gestellt werden. Bitte richten Sie Ihre Anfrage per E-Mail an{" "}
            <a
              href={mailHref}
              className="text-primary underline underline-offset-2 hover:no-underline"
            >
              {email}
            </a>.
          </p>

          <p className="text-lg text-text-normal leading-relaxed mb-4">
            Damit wir Ihre Anfrage prüfen können, bitten wir Sie, in Ihrer Nachricht
            die folgenden Angaben zu machen:
          </p>

          <ol className="list-decimal pl-6 text-lg text-text-normal leading-relaxed space-y-2 mb-8">
            <li>Name der Lehrperson (Vorname, Nachname)</li>
            <li>Name der Lehrinstitution oder der ausbildenden Firma</li>
            <li>
              Webseite der Lehrinstitution oder der Ausbildungswebseite der Firma,
              damit wir nachvollziehen können, ob die Person dort tätig ist
            </li>
            <li>Geplanter Verwendungszweck des Buchs</li>
          </ol>

          {/* Button zentriert */}
          <div className="flex justify-center">
            <a
              href={mailHref}
              className="inline-flex items-center bg-primary-container text-on-primary-container hover:brightness-110 hover:shadow-lg px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg"
            >
              Anfrage per E-Mail stellen
            </a>
          </div>

        </div>

        {/* Medienbereich */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">

          {/* Buchcover */}
          <div className="w-full aspect-[9/16]">
            <img
              src="/img/Book_cover.jpg"
              alt="Cover des Buchs Weiß die KI, dass sie nichts weiß? von Katharina Zweig"
              className="w-full h-full object-contain rounded-xl shadow-lg"
            />
          </div>

          {/* Youtube Short */}
          <div className="w-full aspect-[9/16]">
            <iframe
              className="w-full h-full rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/9vU3OUuBaY0"
              title="Grußwort Katharina Zweig"
              allowFullScreen
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Download;