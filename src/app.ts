

// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from "./hero";
import { TransformerHero } from './transformer';


/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
    new HumanHero(1, "Eszter", "man", 23, 5, "portre"),
    new HumanHero(2, "Huba", "man", 66, 6),
    new HumanHero(3, "Feri", "man", 55, 3)

];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
    new TransformerHero(1, "Róbert", 4, 5),
    new TransformerHero(2, "Superman", 3, 6, "portre"),
    new TransformerHero(3, "Wonderwoman", 5, 8)


];
