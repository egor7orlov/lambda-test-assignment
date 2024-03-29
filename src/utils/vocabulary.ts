export enum WordCategory {
  NOUN = 'noun',
  VERB = 'verb',
  ADJECTIVE = 'adjective',
  ADVERB = 'adverb',
  PREPOSITION = 'preposition',
  CONJUNCTION = 'conjunction',
  PRONOUN = 'pronoun',
  INTERJECTION = 'interjection',
  DETERMINER = 'determiner',
  NUMERAL = 'numeral',
}

export type Vocabulary = Record<string, WordCategory>;

export const vocabulary: Vocabulary = {
  cat: WordCategory.NOUN,
  book: WordCategory.NOUN,
  table: WordCategory.NOUN,
  house: WordCategory.NOUN,
  dog: WordCategory.NOUN,
  car: WordCategory.NOUN,
  tree: WordCategory.NOUN,
  bird: WordCategory.NOUN,
  friend: WordCategory.NOUN,
  city: WordCategory.NOUN,
  computer: WordCategory.NOUN,
  chair: WordCategory.NOUN,
  sun: WordCategory.NOUN,
  flower: WordCategory.NOUN,
  music: WordCategory.NOUN,
  child: WordCategory.NOUN,
  parent: WordCategory.NOUN,
  food: WordCategory.NOUN,
  water: WordCategory.NOUN,
  phone: WordCategory.NOUN,
  time: WordCategory.NOUN,
  money: WordCategory.NOUN,
  job: WordCategory.NOUN,
  world: WordCategory.NOUN,
  love: WordCategory.NOUN,
  school: WordCategory.NOUN,
  student: WordCategory.NOUN,
  teacher: WordCategory.NOUN,
  doctor: WordCategory.NOUN,
  hospital: WordCategory.NOUN,
  // =================================================================
  run: WordCategory.VERB,
  eat: WordCategory.VERB,
  sleep: WordCategory.VERB,
  dance: WordCategory.VERB,
  sing: WordCategory.VERB,
  swim: WordCategory.VERB,
  write: WordCategory.VERB,
  read: WordCategory.VERB,
  play: WordCategory.VERB,
  talk: WordCategory.VERB,
  work: WordCategory.VERB,
  study: WordCategory.VERB,
  drive: WordCategory.VERB,
  think: WordCategory.VERB,
  create: WordCategory.VERB,
  listen: WordCategory.VERB,
  watch: WordCategory.VERB,
  buy: WordCategory.VERB,
  help: WordCategory.VERB,
  cook: WordCategory.VERB,
  travel: WordCategory.VERB,
  exercise: WordCategory.VERB,
  paint: WordCategory.VERB,
  draw: WordCategory.VERB,
  explore: WordCategory.VERB,
  solve: WordCategory.VERB,
  smile: WordCategory.VERB,
  laugh: WordCategory.VERB,
  dream: WordCategory.VERB,
  relax: WordCategory.VERB,
  // =================================================================
  happy: WordCategory.ADJECTIVE,
  big: WordCategory.ADJECTIVE,
  beautiful: WordCategory.ADJECTIVE,
  small: WordCategory.ADJECTIVE,
  tall: WordCategory.ADJECTIVE,
  smart: WordCategory.ADJECTIVE,
  funny: WordCategory.ADJECTIVE,
  kind: WordCategory.ADJECTIVE,
  loud: WordCategory.ADJECTIVE,
  quiet: WordCategory.ADJECTIVE,
  clever: WordCategory.ADJECTIVE,
  brave: WordCategory.ADJECTIVE,
  friendly: WordCategory.ADJECTIVE,
  patient: WordCategory.ADJECTIVE,
  colorful: WordCategory.ADJECTIVE,
  exciting: WordCategory.ADJECTIVE,
  delicious: WordCategory.ADJECTIVE,
  strong: WordCategory.ADJECTIVE,
  soft: WordCategory.ADJECTIVE,
  hard: WordCategory.ADJECTIVE,
  young: WordCategory.ADJECTIVE,
  old: WordCategory.ADJECTIVE,
  busy: WordCategory.ADJECTIVE,
  calm: WordCategory.ADJECTIVE,
  careful: WordCategory.ADJECTIVE,
  curious: WordCategory.ADJECTIVE,
  energetic: WordCategory.ADJECTIVE,
  peaceful: WordCategory.ADJECTIVE,
  // =================================================================
  quickly: WordCategory.ADVERB,
  eagerly: WordCategory.ADVERB,
  silently: WordCategory.ADVERB,
  happily: WordCategory.ADVERB,
  slowly: WordCategory.ADVERB,
  carefully: WordCategory.ADVERB,
  loudly: WordCategory.ADVERB,
  sharply: WordCategory.ADVERB,
  softly: WordCategory.ADVERB,
  quietly: WordCategory.ADVERB,
  easily: WordCategory.ADVERB,
  kindly: WordCategory.ADVERB,
  politely: WordCategory.ADVERB,
  vigorously: WordCategory.ADVERB,
  gently: WordCategory.ADVERB,
  anxiously: WordCategory.ADVERB,
  honestly: WordCategory.ADVERB,
  enthusiastically: WordCategory.ADVERB,
  generously: WordCategory.ADVERB,
  responsibly: WordCategory.ADVERB,
  boldly: WordCategory.ADVERB,
  joyfully: WordCategory.ADVERB,
  patiently: WordCategory.ADVERB,
  faithfully: WordCategory.ADVERB,
  freely: WordCategory.ADVERB,
  gracefully: WordCategory.ADVERB,
  intensely: WordCategory.ADVERB,
  safely: WordCategory.ADVERB,
  wisely: WordCategory.ADVERB,
  // =================================================================
  in: WordCategory.PREPOSITION,
  on: WordCategory.PREPOSITION,
  at: WordCategory.PREPOSITION,
  above: WordCategory.PREPOSITION,
  below: WordCategory.PREPOSITION,
  behind: WordCategory.PREPOSITION,
  beside: WordCategory.PREPOSITION,
  between: WordCategory.PREPOSITION,
  under: WordCategory.PREPOSITION,
  over: WordCategory.PREPOSITION,
  across: WordCategory.PREPOSITION,
  through: WordCategory.PREPOSITION,
  into: WordCategory.PREPOSITION,
  onto: WordCategory.PREPOSITION,
  towards: WordCategory.PREPOSITION,
  from: WordCategory.PREPOSITION,
  within: WordCategory.PREPOSITION,
  without: WordCategory.PREPOSITION,
  among: WordCategory.PREPOSITION,
  beyond: WordCategory.PREPOSITION,
  with: WordCategory.PREPOSITION,
  except: WordCategory.PREPOSITION,
  until: WordCategory.PREPOSITION,
  around: WordCategory.PREPOSITION,
  past: WordCategory.PREPOSITION,
  off: WordCategory.PREPOSITION,
  up: WordCategory.PREPOSITION,
  down: WordCategory.PREPOSITION,
  inside: WordCategory.PREPOSITION,
  // =================================================================
  and: WordCategory.CONJUNCTION,
  but: WordCategory.CONJUNCTION,
  or: WordCategory.CONJUNCTION,
  nor: WordCategory.CONJUNCTION,
  so: WordCategory.CONJUNCTION,
  yet: WordCategory.CONJUNCTION,
  for: WordCategory.CONJUNCTION,
  while: WordCategory.CONJUNCTION,
  although: WordCategory.CONJUNCTION,
  because: WordCategory.CONJUNCTION,
  if: WordCategory.CONJUNCTION,
  unless: WordCategory.CONJUNCTION,
  since: WordCategory.CONJUNCTION,
  when: WordCategory.CONJUNCTION,
  where: WordCategory.CONJUNCTION,
  as: WordCategory.CONJUNCTION,
  that: WordCategory.CONJUNCTION,
  whether: WordCategory.CONJUNCTION,
  once: WordCategory.CONJUNCTION,
  though: WordCategory.CONJUNCTION,
  even: WordCategory.CONJUNCTION,
  provided: WordCategory.CONJUNCTION,
  whereas: WordCategory.CONJUNCTION,
  thus: WordCategory.CONJUNCTION,
  therefore: WordCategory.CONJUNCTION,
  hence: WordCategory.CONJUNCTION,
  nevertheless: WordCategory.CONJUNCTION,
  // =================================================================
  he: WordCategory.PRONOUN,
  she: WordCategory.PRONOUN,
  they: WordCategory.PRONOUN,
  we: WordCategory.PRONOUN,
  it: WordCategory.PRONOUN,
  i: WordCategory.PRONOUN,
  you: WordCategory.PRONOUN,
  me: WordCategory.PRONOUN,
  him: WordCategory.PRONOUN,
  her: WordCategory.PRONOUN,
  us: WordCategory.PRONOUN,
  them: WordCategory.PRONOUN,
  myself: WordCategory.PRONOUN,
  yourself: WordCategory.PRONOUN,
  himself: WordCategory.PRONOUN,
  herself: WordCategory.PRONOUN,
  itself: WordCategory.PRONOUN,
  ourselves: WordCategory.PRONOUN,
  themselves: WordCategory.PRONOUN,
  everyone: WordCategory.PRONOUN,
  everything: WordCategory.PRONOUN,
  somebody: WordCategory.PRONOUN,
  nobody: WordCategory.PRONOUN,
  anyone: WordCategory.PRONOUN,
  // TODO: clarify the requirements because the delimiter is space (" ") and the entry also contains space
  // 'no one': WordCategory.PRONOUN,
  each: WordCategory.PRONOUN,
  both: WordCategory.PRONOUN,
  few: WordCategory.PRONOUN,
  many: WordCategory.PRONOUN,
  // =================================================================
  wow: WordCategory.INTERJECTION,
  ouch: WordCategory.INTERJECTION,
  oops: WordCategory.INTERJECTION,
  yay: WordCategory.INTERJECTION,
  hurray: WordCategory.INTERJECTION,
  bravo: WordCategory.INTERJECTION,
  oh: WordCategory.INTERJECTION,
  ah: WordCategory.INTERJECTION,
  uh: WordCategory.INTERJECTION,
  yikes: WordCategory.INTERJECTION,
  yeah: WordCategory.INTERJECTION,
  yes: WordCategory.INTERJECTION,
  no: WordCategory.INTERJECTION,
  'uh-huh': WordCategory.INTERJECTION,
  hmm: WordCategory.INTERJECTION,
  well: WordCategory.INTERJECTION,
  alas: WordCategory.INTERJECTION,
  phew: WordCategory.INTERJECTION,
  ow: WordCategory.INTERJECTION,
  // TODO: clarify the requirements because the delimiter is space (" ") and the entry also contains space
  // 'oh no': WordCategory.INTERJECTION,
  ahem: WordCategory.INTERJECTION,
  hush: WordCategory.INTERJECTION,
  hey: WordCategory.INTERJECTION,
  hello: WordCategory.INTERJECTION,
  goodbye: WordCategory.INTERJECTION,
  // TODO: clarify the requirements because the delimiter is space (" ") and the entry also contains space
  // 'oh dear': WordCategory.INTERJECTION,
  congratulations: WordCategory.INTERJECTION,
  // =================================================================
  the: WordCategory.DETERMINER,
  a: WordCategory.DETERMINER,
  this: WordCategory.DETERMINER,
  these: WordCategory.DETERMINER,
  those: WordCategory.DETERMINER,
  my: WordCategory.DETERMINER,
  your: WordCategory.DETERMINER,
  his: WordCategory.DETERMINER,
  its: WordCategory.DETERMINER,
  our: WordCategory.DETERMINER,
  their: WordCategory.DETERMINER,
  an: WordCategory.DETERMINER,
  any: WordCategory.DETERMINER,
  some: WordCategory.DETERMINER,
  all: WordCategory.DETERMINER,
  every: WordCategory.DETERMINER,
  either: WordCategory.DETERMINER,
  neither: WordCategory.DETERMINER,
  much: WordCategory.DETERMINER,
  several: WordCategory.DETERMINER,
  enough: WordCategory.DETERMINER,
  other: WordCategory.DETERMINER,
  such: WordCategory.DETERMINER,
  what: WordCategory.DETERMINER,
  which: WordCategory.DETERMINER,
  // =================================================================
  one: WordCategory.NUMERAL,
  two: WordCategory.NUMERAL,
  three: WordCategory.NUMERAL,
  four: WordCategory.NUMERAL,
  five: WordCategory.NUMERAL,
  six: WordCategory.NUMERAL,
  seven: WordCategory.NUMERAL,
  eight: WordCategory.NUMERAL,
  nine: WordCategory.NUMERAL,
  ten: WordCategory.NUMERAL,
  eleven: WordCategory.NUMERAL,
  twelve: WordCategory.NUMERAL,
  thirteen: WordCategory.NUMERAL,
  fourteen: WordCategory.NUMERAL,
  fifteen: WordCategory.NUMERAL,
  sixteen: WordCategory.NUMERAL,
  seventeen: WordCategory.NUMERAL,
  eighteen: WordCategory.NUMERAL,
  nineteen: WordCategory.NUMERAL,
  twenty: WordCategory.NUMERAL,
  thirty: WordCategory.NUMERAL,
  forty: WordCategory.NUMERAL,
  fifty: WordCategory.NUMERAL,
  sixty: WordCategory.NUMERAL,
  seventy: WordCategory.NUMERAL,
  eighty: WordCategory.NUMERAL,
  ninety: WordCategory.NUMERAL,
  hundred: WordCategory.NUMERAL,
  thousand: WordCategory.NUMERAL,
  million: WordCategory.NUMERAL,
};
