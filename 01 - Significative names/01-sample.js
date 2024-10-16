function filtrarNumeroPar(numeros) {
  let filtrados = [];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      filtrados.push(numeros[i]);
    }
  }

  return filtrados;
}

let seqNumNaturais = [1, 2, 3, 4, 5, 6];
let numPares = filtrarNumeroPar(seqNumNaturais);

console.log(numPares);
