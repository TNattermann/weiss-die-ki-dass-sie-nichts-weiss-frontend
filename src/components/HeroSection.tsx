export default function HeroSection() {
  const scrollToNext = () => {
    const element = document.getElementById('educational-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="neural-bg py-20 px-6" id="tokenizer">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Tokens in <span className="text-secondary">Sprachmodellen</span>
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
          Bevor ein Large Language Model (LLM) wie ChatGPT Texte generieren kann,
          muss der Inputtext zunächst in sogenannte <span className="font-semibold text-secondary">Tokens</span> umgewandelt werden.
          Diese Tokenisierung ist ein essenzieller Verarbeitungsschritt.
        </p>
        <div className="flex items-center justify-center space-x-4 mb-12">
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
            <i className="ri-lightbulb-line text-primary"></i>
            <span className="text-sm font-medium text-gray-700">Lernen</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
            <i className="ri-cpu-line text-secondary"></i>
            <span className="text-sm font-medium text-gray-700">Live-Visualisierung</span>
          </div>
        </div>
        <button 
          onClick={scrollToNext}
          className="w-8 h-8 mx-auto flex items-center justify-center rounded-full border-2 border-gray-400 animate-bounce hover:border-primary transition-colors cursor-pointer"
        >
          <i className="ri-arrow-down-s-line text-gray-500"></i>
        </button>
      </div>
    </section>
  );
}
