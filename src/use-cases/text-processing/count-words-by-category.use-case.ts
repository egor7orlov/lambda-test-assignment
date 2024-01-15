import { UseCase } from '../../utils/use-case.interface';
import { vocabulary } from '../../utils/vocabulary';

type CountWordsByCategoryInput = {
  text: string;
};

type CountWordsByCategoryResult = {
  noun: number;
  verb: number;
  adjective: number;
  adverb: number;
  preposition: number;
  conjunction: number;
  pronoun: number;
  interjection: number;
  determiner: number;
  numeral: number;
};

export class CountWordsByCategoryUseCase implements UseCase<CountWordsByCategoryInput, CountWordsByCategoryResult> {
  public execute({ text }: CountWordsByCategoryInput): CountWordsByCategoryResult {
    const words = text.toLowerCase().split(/\s+/);
    const counts: CountWordsByCategoryResult = {
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

    for (const word of words) {
      const category = vocabulary[word];
      if (category) {
        counts[category]++;
      }
    }

    return counts;
  }
}
