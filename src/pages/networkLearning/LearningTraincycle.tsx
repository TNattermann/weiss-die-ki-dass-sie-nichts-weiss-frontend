export default function LearningTraincycle() {
  
    return (
      <section className="py-16" id="fullTrain">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-12">
            <h1 className="text-5xl font-bold text-center text-primary mb-6 break-words">... und jetzt alles zusammen!</h1>

            <p className="text-lg text-text-normal mb-6 leading-r>elaxed">
              Jetzt haben wir die drei wichtigen Konzepte des Lernens einer KI kennengelernt. Abschließend können wir alle Teile 
              zusammenführen und uns einen vollständigen Trainingsdurchlauf anschauen. 
            </p>
            <video 
                src="/videos/FullTrainingCycleScene.mp4" 
                controls 
                className="w-full max-w-none rounded-xl shadow-lg object-contain"
                >
                Dein Browser unterstützt das Video-Tag nicht.
            </video>
          </div>
        </div>
      </section>
  );
}