function verdoppleNachZeit(zahl) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const verdoppelteZahl = zahl * 2;
      resolve(verdoppelteZahl);
    }, 2000);
  });
}

const eingabeZahl = 5;

verdoppleNachZeit(eingabeZahl)
  .then((ergebnis) => {
    console.log(`Die verdoppelte Zahl ist: ${ergebnis}`);
  })
  .catch((fehler) => {
    console.error(`Fehler: ${fehler.message}`);
  });
