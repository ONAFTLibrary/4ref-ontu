import { TRANSLATIONS_LETTERS } from '../constatants';

export const transliterate = (value: string) => {
  let result = '';
  let curentSymbol = '';
  let currentValue: string;
  let transLetter: string;
  for (let i = 0, li = value.length; i < li; i++) {
    currentValue = value[i];
    transLetter = TRANSLATIONS_LETTERS[currentValue];
    if (transLetter) {
      result += transLetter;
      curentSymbol = transLetter;
    } else {
      result += currentValue;
      curentSymbol = currentValue;
    }
  }
  return result;
};
