import { calculHeure } from './cadran.js';

document.getElementById('calculateButton').addEventListener('click', () => {
  const lune = parseInt(document.getElementById('lune').value, 10);
  const soleil = parseInt(document.getElementById('soleil').value, 10);
  const terre = parseInt(document.getElementById('terre').value, 10);

  const tabCadrans = [lune, soleil, terre];
  const result = calculHeure(tabCadrans);

  document.getElementById('result').textContent = result;
});
