// Funktion, die ein Promise mit einer zufälligen Zahl nach einer Verzögerung zurückgibt
function zufallszahlMitVerzögerung(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const zufallszahl = Math.floor(Math.random() * 1000) + 1;
      resolve(zufallszahl);
    }, delay);
  });
}

// Verwende Promise.all() um die Funktion mindestens 2 mal aufzurufen und die Ergebnisse auszugeben
const verzögerungen = [2000, 3000]; // Beispielverzögerungen in Millisekunden

Promise.all(verzögerungen.map((delay) => zufallszahlMitVerzögerung(delay)))
  .then((ergebnisse) => {
    console.log("Ergebnisse:", ergebnisse);
  })
  .catch((fehler) => {
    console.error(`Fehler: ${fehler.message}`);
  });
