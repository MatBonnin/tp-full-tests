export function calculHeure(tabCadrans) {
  let total = 0;

  let heure = 'mortin';

  let [lune, soleil, terre] = tabCadrans;

  if (
    typeof lune !== 'number' ||
    typeof soleil !== 'number' ||
    typeof terre !== 'number' ||
    lune < 1 ||
    lune > 2 ||
    soleil < 1 ||
    soleil > 2 ||
    terre < 1 ||
    terre > 2
  ) {
    return 'Les valeurs de lune, soleil et terre doivent être des nombres entre 1 et 2.';
  }

  let diviserPar2 = lune === 2 ? true : false;
  let moins2 = lune === 1 ? true : false;
  let pasCadranTerre = soleil === 1 ? true : false;
  let doubleValeurTerre = soleil === 2 ? true : false;
  let totalPlus2 = !pasCadranTerre && terre === 1 ? true : false;
  let totalEgal6 = !pasCadranTerre && terre === 2 ? true : false;

  if (totalEgal6) {
    return 'nuight';
  }

  if (doubleValeurTerre) {
    terre = terre * 2;
  }

  if (!pasCadranTerre) {
    total = lune + soleil + terre;

    if (totalPlus2) {
      total = total + 2;
    }
  } else {
    total = lune + soleil;
  }

  if (moins2) {
    total = total - 2;
  }

  if (diviserPar2) {
    total = Math.floor(total / 2);
  }

  if (total <= 2) {
    return 'mortin';
  } else if (total <= 4) {
    return 'aprenoon';
  } else if (total <= 5) {
    return 'soirning';
  } else {
    return 'nuight';
  }
}
