

class Pokemon {
  constructor(pokemonName, pokemonHealth, pokemonMagic) {
    this.pokemonName = pokemonName;
    this.pokemonHealth = pokemonHealth;
    this.pokemonMagic = pokemonMagic;
    this.pokemonSkills = [];
  }

  learnAttackSkill(attackSkillName) {
    this.pokemonSkills.push(attackSkillName);
  }

  showStatus() {
    console.log(`Health ${this.pokemonHealth}\nMagic ${this.pokemonMagic}`);
  }

  attack(skillIndex, pokemon) {
    if(this.pokemonHeath <= 0 || pokemon.pokemonHealth <= 0) {
      console.log("Pokemon's are ded");
      throw Error("ded");
    } else if (
        this.pokemonMagic >= this.pokemonSkills[skillIndex].attackSkillMagic
    ) {
        this.pokemonMagic =
        this.pokemonMagic - this.pokemonSkills[skillIndex].attackSkillMagic;
        pokemon.pokemonHealth = pokemon.pokemonHealth -this.pokemonSkills[skillIndex].attackSkillDamage;

        console.log(`${this.pokemonName} launched skill "${this.pokemonSkills[skillIndex].attackSkillName}" successfully!`);
        console.log(`${pokemon.pokemonName} got ${this.pokemonSkills[skillIndex].attackSkillDamage} damage.`);
    } else 
    {
      console.log("not enough magic, cannot launch attack not started");
    }

    if (pokemon.pokemonHealth <= 0) {
      throw Error(console.log(`${pokemon.pokemonName} is killed `));
    }
  }

  getMagic(magic) {
    this.magic = magic;
    this.pokemonMagic += magic;
    console.log(`${this.pokemonName} got ${this.magic} back`);
  }
}

class AttackSkill {
  constructor(attackSkillName, attackSkillDamage, attackSkillMagic) {
    this.attackSkillName = attackSkillName;
    this.attackSkillDamage = attackSkillDamage;
    this.attackSkillMagic = attackSkillMagic;
  }
}

//_______________________________________________________________________________________________________

let pikachu = new Pokemon("pikachu", 120, 40);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);
let charmander = new Pokemon("charmander", 130, 120);
let squirtle = new Pokemon("squirtle", 110, 90);



let lightning = new AttackSkill("lightning", 40, 30);
let poisonSeed = new AttackSkill("poison seed", 40, 20);
let explosion = new AttackSkill("explosion", 250, 50);
let catastropika = new AttackSkill("catastropika", 210, 40);


pikachu.learnAttackSkill(lightning);
pikachu.learnAttackSkill(poisonSeed);
pikachu.learnAttackSkill(explosion);
pikachu.learnAttackSkill(catastropika);
bulbasaur.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(poisonSeed);
bulbasaur.learnAttackSkill(explosion);
bulbasaur.learnAttackSkill(catastropika);
charmander.learnAttackSkill(lightning);
charmander.learnAttackSkill(poisonSeed);
charmander.learnAttackSkill(explosion);
charmander.learnAttackSkill(catastropika);
squirtle.learnAttackSkill(lightning);
squirtle.learnAttackSkill(poisonSeed);
squirtle.learnAttackSkill(explosion);
squirtle.learnAttackSkill(catastropika);



// pikachu.attack(0, bulbasaur);
// bulbasaur.attack(0, pikachu);

// console.log("Pikachu status:");
// pikachu.showStatus();
// console.log("Bulbasaur status:");
// bulbasaur.showStatus();

// pikachu.attack(0, bulbasaur);
// pikachu.attack(0, bulbasaur);
// pikachu.getMagic(30);
// pikachu.attack(0, bulbasaur);
// bulbasaur.attack(0, pikachu);

// console.log("Pikachu status:");
// pikachu.showStatus();

// console.log("Bulbasaur status:");
// bulbasaur.showStatus();

// pikachu.attack(0, bulbasaur);
// pikachu.getMagic(30);
// pikachu.attack(0, bulbasaur);

charmander.attack(1, squirtle);
squirtle.attack(1, charmander);

console.log("charmnder status:");
charmander.showStatus();
console.log("squirtle status:");
squirtle.showStatus();

charmander.attack(0, squirtle);
squirtle.attack(0, charmander);

console.log("charmnder status:");
charmander.showStatus();
console.log("squirtle status:");
squirtle.showStatus();

// charmander.attack(0, squirtle);
// squirtle.attack(0, charmander);

// console.log("charmnder status:");
// charmander.showStatus();
// console.log("squirtle status:");
// squirtle.showStatus();
