const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
function Pet(name) {
    this.name = name;
    this.age = 0;
    this.fitness =  MAXIMUM_FITNESS;
    this.hunger = MINIMUM_HUNGER;
};

Pet.prototype = { get isAlive() {
    return this.fitness > 0 && this.hunger < 10 && this.age < 30;}
};

Pet.prototype.walk = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(')
    }
    if ((this.fitness + 4) <=MAXIMUM_FITNESS) {
        this.fitness += 4;
    } else {this.fitness = MAXIMUM_FITNESS;}
};

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3; 
};

Pet.prototype.feed = function() {
    if(!this.isAlive) {
        throw new Error ('Your pet is no longer alive :(');
    }
if ((this.hunger -3) >= MINIMUM_HUNGER) {this.hunger -=3;} else {this.hunger = MINIMUM_HUNGER;}
};

Pet.prototype.checkup = function() {
    if(!this.isAlive) {
        throw new Error ('Your pet is no longer alive :(');
    }
    if (this.fitness <= 3 && this.hunger < 5) { return 'I need a walk' }
    if (this.fitness > 3 && this.hunger >= 5) { return 'I am hungry' }
    if (this.fitness <= 3 && this.hunger >= 5) { return 'I am hungry and I need a walk' } else { return 'I feel great!' }
};

module.exports = Pet;