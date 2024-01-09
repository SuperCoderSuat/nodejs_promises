function generiereZufallszahl() {
  return new Promise((resolve, reject) => {
    const zufallszahl = Math.floor(Math.random() * 10) + 1;

    if (zufallszahl < 6) {
      reject(`${zufallszahl} ist kleiner als 6.`);
    } else {
      resolve(`${zufallszahl} ist größer oder gleich.`);
    }
  });
}

generiereZufallszahl()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
