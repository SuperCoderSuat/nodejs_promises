function multPromise(num) {
  return new Promise((resolve, reject) => {
    if (isNaN(num)) {
      reject(new Error("Ungültige Eingabe. Bitte geben Sie eine Zahl ein."));
    } else {
      const result = num * num;
      resolve(result);
    }
  });
}

function dreiMalMultUndAusgabe(startNum) {
  multPromise(startNum)
    .then((result1) => {
      console.log(`Erster Aufruf: ${result1}`);
      return multPromise(result1);
    })
    .then((result2) => {
      console.log(`Zweiter Aufruf: ${result2}`);
      return multPromise(result2);
    })
    .then((result3) => {
      console.log(`Dritter Aufruf: ${result3}`);
    })
    .catch((error) => {
      console.error(`Fehler: ${error.message}`);
    });
}

const startNum = 2;
dreiMalMultUndAusgabe(startNum);
