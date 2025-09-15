

export default function Tilde(){

    const tildetext = `Short Version: Die Tilde-Notation (~) wird benutz  für Wörter,
    die menschliches Verhalten suggerieren, obwohl dies so nicht auf Modelle zutrifft.
    
    Long Version: Wir verwenden die Tilde-Notation (~) für Verhalten des Computers
    (also Sprachmodelle, aber auch KI im allgemeinen), die menschliches Verhalten suggerieren,
    aber diese Tätigkeit im eigentlichen Sinne nicht wiederspiegeln.
    "Der Computer ~versteht mich, ~fasst Texte ~zusammen und
     schreibt ~Bewertungen. 
    Nichts davon ist leistungsgleich zu dem, was der Mensch tut", Zweig, Weiß die KI, dass sie nichts weiß? 2025
    Dennoch ist die Tätigkeit, die der Computer ausübt, im Äußeren ähnlich zu dem, 
    was ein Mensch darunter erwarten würde.`;
    
    return(

        <span data-tooltip={tildetext}>~<sup>i</sup></span>
        
        
    );


}