export class Pokemon {
    public name: string;
    public attackSpeed: number;
    public power: number;
    public life: number;

    constructor(name: string, attackSpeed: number, power: number, life: number) {
        this.name = name;
        this.attackSpeed = attackSpeed;
        this.power = power;
        this.life = life;
    }
}

export function firstAttacker(poke1: Pokemon, poke2: Pokemon) {
    return poke1.attackSpeed > poke2.attackSpeed ? poke1 : poke2;
}

export function fight(poke1: Pokemon, poke2: Pokemon) {
    let poke: Pokemon;
    poke = attack(poke1, poke2);
    return poke.name + " => VICTORY";
}

export function attack(poke1: Pokemon, poke2: Pokemon) {
    console.log(poke1.name + " possède " + poke1.life + " pv");
    console.log(poke2.name + " possède " + poke2.life + " pv");
    do {
        if (poke1.life > 0 && poke2.life > 0) {
            console.log(poke1.name + " attaque avec " + poke1.power + " de dégât");
            poke2.life = poke2.life - poke1.power;
            console.log("Il reste " + poke2.life + " pv à " + poke2.name);
            if (poke2.life > 0) {
                console.log(poke2.name + " attaque avec " + poke2.power + " de dégât");
                poke1.life = poke1.life - poke2.power;
                console.log("Il reste " + poke1.life + " pv à " + poke1.name);
            }
        }
    } while (poke1.life > 0 && poke2.life > 0);
    return poke1.life >= poke2.life ? poke1 : poke2;
}

export function battle(poke1: Pokemon, poke2: Pokemon) {
    const first: Pokemon = firstAttacker(poke1, poke2);
    const second: Pokemon = first === poke1 ? poke2 : poke1;
    console.log(first.name + " attaquera en 1er !");
    return fight(first, second);
}

/*let urlApiPoke = "https://pokeapi.co/api/v2/pokemon/"; /* suivi d'un chiffre, ça va jusqu'a 20 */
/*pokemonData: any;
function getPokemon(query) {
    return this.http
        .get(urlApiPoke)// , {search: searchParams})
        .map((res) => res.json().main)
        .subscribe((res) => this.pokemonData = res); )
}*/

const bulbi = new Pokemon("Bulbizare", 90, 25, 100);
const cara = new Pokemon("Carapuce", 100, 20, 130);

console.log(battle(bulbi, cara));
