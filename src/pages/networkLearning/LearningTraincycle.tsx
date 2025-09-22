export default function LearningTraincycle() {
  return (
    <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 overflow-x-hidden" id="fullTrain">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-primary mb-4 sm:mb-6 break-words">
            ... und jetzt alles zusammen!
          </h1>

          <p className="text-base sm:text-lg text-text-normal mb-6 leading-relaxed break-words">
            Jetzt haben wir die drei wichtigen Konzepte des Lernens einer KI kennengelernt. Abschließend können wir alle Teile
            zusammenführen und uns einen vollständigen Trainingszyklus anschauen.
          </p>

          <video
            src="/videos/FullTrainingCycleScene.mp4"
            controls
            playsInline
            aria-label="Vollständiger Trainingszyklus: Loss → Backpropagation → Gradientenabstieg"
            className="block w-full max-w-full h-auto rounded-xl shadow-lg object-contain"
          >
            Dein Browser unterstützt das Video-Tag nicht.
          </video>
        </div>
      </div>
    </section>
  );
}
