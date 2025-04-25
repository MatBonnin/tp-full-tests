import { calculHeure } from '../src/cadran';
import { describe } from 'node:test';
import { expect } from 'vitest';

const mortin = 'mortin';
const aprenoon = 'aprenoon';
const soirning = 'soirning';
const nuight = 'nuight';

describe('Test des cas impossible', () => {
  test('test de nombre autre que 1 et 2', () => {
    const tabsCadran = [0, 3, 5];
    expect(calculHeure(tabsCadran)).toThrow();
  });
  test('test de string', () => {
    const tabsCadran = ['0', '3', '5'];
    expect(calculHeure(tabsCadran)).toThrow();
  });
});

describe('Test des cadrans', () => {
  describe('Test des pouvoir du cadran soleil', () => {
    describe('Annulation du cadran de terre', () => {
      test('Annulation de l ajout de 2', () => {
        const tabsCadran = [1, 1, 1];
        expect(calculHeure(tabsCadran)).toBe(mortin);
      });
      test('Annulation resultat total = 6', () => {
        const tabsCadran = [1, 1, 2];
        expect(calculHeure(tabsCadran)).toBe(mortin);
      });
    });

    describe('Double la valeur du cadran de terre', () => {
      test('TEST 1', () => {
        const tabsCadran = [1, 2, 1];
        expect(calculHeure(tabsCadran)).toBe(mortin);
      });
      test('test 2', () => {
        const tabsCadran = [1, 2, 2];
        expect(calculHeure(tabsCadran)).toBe(nuight);
      });
    });
  });

  describe('test du cadran de terre', () => {
    test('6 plus fort que tout - 1 ', () => {
      const tabsCadran = [1, 2, 2];
      expect(calculHeure(tabsCadran)).toBe(nuight);
    });
    test('6 plus fort que tout - 2', () => {
      const tabsCadran = [2, 2, 2];
      expect(calculHeure(tabsCadran)).toBe(nuight);
    });
  });

  describe('test du cadran de lune', () => {
    test('Divise par 2 le total et arrondi ', () => {
      const tabsCadran = [2, 1, 1];
      expect(calculHeure(tabsCadran)).toBe(mortin);
    });
    test('6 plus fort que tout - 2', () => {
      const tabsCadran = [2, 2, 2];
      expect(calculHeure(tabsCadran)).toBe(nuight);
    });
  });
});
