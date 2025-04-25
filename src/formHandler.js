import { calculHeure } from './cadran.js';

document.getElementById('calculateButton').addEventListener('click', () => {
  const lune = parseInt(document.getElementById('lune').value, 10);
  const soleil = parseInt(document.getElementById('soleil').value, 10);
  const terre = parseInt(document.getElementById('terre').value, 10);

  const tabCadrans = [lune, soleil, terre];
  const result = calculHeure(tabCadrans);

  document.getElementById('result').textContent = result;
});

document.addEventListener('DOMContentLoaded', () => {
  const luneInput = document.getElementById('lune');
  const soleilInput = document.getElementById('soleil');
  const terreInput = document.getElementById('terre');
  const calculateButton = document.getElementById('calculateButton');

  function checkInputs() {
    const isLuneRempli = luneInput.value.trim() !== '';
    const isSoleilRempli = soleilInput.value.trim() !== '';
    const isTerreRempli = terreInput.value.trim() !== '';

    calculateButton.disabled = !(
      isLuneRempli &&
      isSoleilRempli &&
      isTerreRempli
    );
  }

  luneInput.addEventListener('input', checkInputs);
  soleilInput.addEventListener('input', checkInputs);
  terreInput.addEventListener('input', checkInputs);

  calculateButton.disabled = true;
});

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('#lune, #soleil, #terre');

  inputs.forEach((input) => {
    input.addEventListener('input', (event) => {
      const value = parseInt(event.target.value, 10);

      if (value < 1) {
        event.target.value = 1;
      } else if (value > 2) {
        event.target.value = 2;
      }
    });
  });
});
