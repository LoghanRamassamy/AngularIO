// https://www.dragonflycave.com/mechanics/battle#turnorder

import {firstAttacker, Pokemon} from "./pokemon";

describe("pokemon", () => {
    it("Le 1er a attaqué", () => {
        const bulbi = new Pokemon("Bulbizare", 90, 25, 100);
        const cara = new Pokemon("Carapuce", 100, 20, 130);
        expect(firstAttacker(bulbi, cara)).toBe(cara);
    });

    it("should be faster thant the other", () => {
        const bulbi = new Pokemon("Bulbizare", 90, 25, 100);
        const cara = new Pokemon("Carapuce", 100, 20, 130);
        expect(firstAttacker(bulbi, cara)).toBe(cara);
    });

    it("should be faster thant the other", () => {
        const bulbi = new Pokemon("Bulbizare", 90, 25, 100);
        const cara = new Pokemon("Carapuce", 100, 20, 130);
        expect(firstAttacker(bulbi, cara)).toBe(cara);
    });

    it("should be faster thant the other", () => {
        const bulbi = new Pokemon("Bulbizare", 90, 25, 100);
        const cara = new Pokemon("Carapuce", 100, 20, 130);
        expect(firstAttacker(bulbi, cara)).toBe(cara);
    });
});
