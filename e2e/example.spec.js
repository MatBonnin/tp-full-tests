import { expect, test } from '@playwright/test';

const APP_URL = 'http://localhost:5173/';

test.describe('test e2e', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(APP_URL);
  });

  test('bouton de calcul désactiver si input vide', async ({ page }) => {
    const calculateButton = page.locator('#calculateButton');

    await expect(calculateButton).toBeDisabled();

    await page.fill('#lune', '1');
    await expect(calculateButton).toBeDisabled();
    await page.fill('#soleil', '1');
    await expect(calculateButton).toBeDisabled();

    await page.fill('#terre', '1');

    await expect(calculateButton).toBeEnabled();
  });

  test('les champs de saisie doivent être entre 1 et 2', async ({ page }) => {
    await page.fill('#lune', '0');
    await expect(page.locator('#lune')).toHaveValue('1');

    await page.fill('#soleil', '0');
    await expect(page.locator('#soleil')).toHaveValue('1');
    await page.fill('#terre', '0');
    await expect(page.locator('#terre')).toHaveValue('1');

    await page.fill('#lune', '3');
    await expect(page.locator('#lune')).toHaveValue('2');
    await page.fill('#soleil', '3');
    await expect(page.locator('#soleil')).toHaveValue('2');
    await page.fill('#terre', '3');
    await expect(page.locator('#terre')).toHaveValue('2');
  });

  test('le text de résultat doit être vide tant que le bouton de calcul est déasctivé', async ({
    page,
  }) => {
    const calculateButton = page.locator('#calculateButton');
    const resultText = page.locator('#result');

    await expect(calculateButton).toBeDisabled();
    await expect(resultText).toHaveText('');

    await page.fill('#lune', '1');
    await expect(calculateButton).toBeDisabled();
    await expect(resultText).toHaveText('');

    await page.fill('#soleil', '1');
    await expect(calculateButton).toBeDisabled();
    await expect(resultText).toHaveText('');

    await page.fill('#terre', '1');
    await expect(calculateButton).toBeEnabled();
    await expect(resultText).toHaveText('');
  });

  test('le texte de résultat apparaît lorsque le bouton de calcul est cliqué', async ({
    page,
  }) => {
    const calculateButton = page.locator('#calculateButton');
    const resultText = page.locator('#result');

    await page.fill('#lune', '1');
    await page.fill('#soleil', '1');
    await page.fill('#terre', '1');

    await page.screenshot({ path: 'screenshots/screenshotClick.png' });

    await expect(calculateButton).toBeEnabled();
    await expect(resultText).toHaveText('');

    await calculateButton.click();

    await page.screenshot({ path: 'screenshots/screenshotClick.png' });
    await expect(resultText).not.toHaveText('');
  });
});
