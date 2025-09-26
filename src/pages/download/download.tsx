import {useEffect} from "react";

function Download() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  const email = "Bald verfügbar"; // TO DO: Replace with the correct email
  const subject = "Anfrage: Buchteile I und II";
  const body = `Sehr geehrte Damen und Herren,

ich möchte gerne die Buchteile I und II für edukative Zwecke anfragen. 
Mein Verwendungszweck ist: _______________________

Vielen Dank im Voraus.

Mit freundlichen Grüßen
_______________________`;

  // Build a properly encoded mailto link
  const mailHref = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <section className="py-6 px-6" id="introduction">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-primary mb-6">
          Buch Download
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-6">
          {/* Text content */}
          <div>
            <p className="text-lg text-text-normal leading-relaxed mb-4">
              Die Buchteile I und II können für{" "}
              <strong className="text-primary"> edukative Zwecke</strong>{" "}
              kostenlos zur Verfügung gestellt werden. Stellen Sie hierzu eine
              Anfrage an{" "}
              <a
                href={mailHref}
                className="text-primary underline underline-offset-2 hover:no-underline"
              >
                {email}
              </a>
              , in der Sie Ihr Anliegen und Ihren Verwendungszweck der
              Buchinhalte darlegen. Nach Prüfung werden Ihnen anschließend die
              Inhalte zur Verfügung gestellt.
            </p>

            {/* Email Button */}
            <a
              href={mailHref}
              className="inline-flex items-center bg-primary-container text-on-primary-container hover:brightness-110 hover:shadow-lg px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg"
            >
              Anfrage per E-Mail stellen
            </a>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/img/Book_cover.jpg"
              alt="Cover des Buchs Weiß die KI, dass sie nichts weiß? von Katharina Zweig"
              className="w-full max-w-sm rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Download;
