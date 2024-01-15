import { vocabulary, WordCategory } from '../../utils/vocabulary';
import { CountWordsByCategoryUseCase } from './count-words-by-category.use-case';

describe('CountWordsByCategoryUseCase', () => {
  const wordsByCategory = Object.entries(vocabulary).reduce<Record<WordCategory, string[]>>(
    (acc, [word, category]) => {
      acc[category].push(word);

      return acc;
    },
    {
      [WordCategory.NOUN]: [],
      [WordCategory.VERB]: [],
      [WordCategory.ADJECTIVE]: [],
      [WordCategory.ADVERB]: [],
      [WordCategory.PREPOSITION]: [],
      [WordCategory.CONJUNCTION]: [],
      [WordCategory.PRONOUN]: [],
      [WordCategory.INTERJECTION]: [],
      [WordCategory.DETERMINER]: [],
      [WordCategory.NUMERAL]: [],
    },
  );
  const DELIMITER = ' ';
  const countWordsByCategoryUseCase = new CountWordsByCategoryUseCase();

  it('should correctly count words of each category', () => {
    const text = [
      wordsByCategory.noun.join(DELIMITER),
      wordsByCategory.noun.join(DELIMITER),
      wordsByCategory.verb.join(DELIMITER),
      wordsByCategory.adverb.join(DELIMITER),
      wordsByCategory.preposition.join(DELIMITER),
      wordsByCategory.conjunction.join(DELIMITER),
      wordsByCategory.conjunction.join(DELIMITER),
      wordsByCategory.conjunction.join(DELIMITER),
      wordsByCategory.pronoun.join(DELIMITER),
      wordsByCategory.interjection.join(DELIMITER),
      wordsByCategory.determiner.join(DELIMITER),
      wordsByCategory.numeral.join(DELIMITER),
      wordsByCategory.adjective.join(DELIMITER),
      'abc',
      'xys',
      'asd',
      'qwe',
      'jkl',
    ].join(DELIMITER);
    console.log(text);
    const expectedResult = {
      [WordCategory.NOUN]: wordsByCategory.noun.length * 2,
      [WordCategory.VERB]: wordsByCategory.verb.length,
      [WordCategory.ADVERB]: wordsByCategory.adverb.length,
      [WordCategory.PREPOSITION]: wordsByCategory.preposition.length,
      [WordCategory.CONJUNCTION]: wordsByCategory.conjunction.length * 3,
      [WordCategory.PRONOUN]: wordsByCategory.pronoun.length,
      [WordCategory.INTERJECTION]: wordsByCategory.interjection.length,
      [WordCategory.DETERMINER]: wordsByCategory.determiner.length,
      [WordCategory.NUMERAL]: wordsByCategory.numeral.length,
      [WordCategory.ADJECTIVE]: wordsByCategory.adjective.length,
    };
    const result = countWordsByCategoryUseCase.execute({ text });

    expect(result).toEqual(expectedResult);
  });

  it('should return all zeros for text without matching words', () => {
    const inputText = 'xyz abc';
    const expectedResult = {
      adjective: 0,
      adverb: 0,
      conjunction: 0,
      determiner: 0,
      interjection: 0,
      noun: 0,
      numeral: 0,
      preposition: 0,
      pronoun: 0,
      verb: 0,
    };

    const result = countWordsByCategoryUseCase.execute({ text: inputText });

    expect(result).toEqual(expectedResult);
  });
});
