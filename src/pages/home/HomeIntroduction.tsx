import { useEffect } from "react";

export default function HomeIntroduction() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-6 text-center">
      <h1 className="text-5xl font-bold text-center text-primary mb-6">
        Wozu könnt ihr Sprachmodelle verwenden?
      </h1>
      <h1 className="text-text-normal">Fragt ihr euch immer wieder, wozu ihr Sprachmodelle wie ChatGPT nutzen könnt? Wo es euch helfen kann, sei es bei der Arbeit bei einem Förderantrag oder Zuhause bei einem Kochrezept? Und wo solltet ihr es aber lieber lassen, weil Fehler nicht gedultet werden können? 
          Auf dieser Seite helfen wir auch diese Fragen für euch bentworten zu können.</h1>
    </div>
  );
}