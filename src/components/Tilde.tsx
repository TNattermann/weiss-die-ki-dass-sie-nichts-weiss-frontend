export default function Tilde() {
  return (
    <span className="hover">
      <span className="border-l-4 bg-primary-container-selected text-on-primary-container-selected p-6 rounded-r-lg rounded-l-lg mb-6 text-textMedium font-medium">
        Wir verwenden die Tilde-Notation (~) für Verhalten eines Computers (bzw.
        eines Sprachmodells, aber auch KI im allgemeinen), das menschliches
        Verhalten suggeriert, aber sie im eigentlichen Sinne nicht
        widerspiegelt. "Der Computer ~versteht mich, ~fasst Texte ~zusammen und
        schreibt ~Bewertungen. Nichts davon ist leistungsgleich zu dem, was der
        Mensch tut" - Katharina Zweig, Weiß die KI, dass sie nichts weiß?
      </span>
      ~<sup>i</sup>
    </span>
  );
}
