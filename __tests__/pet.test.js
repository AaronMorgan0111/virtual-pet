const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      const pet = new Pet('Fido');
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
      const pet = new Pet('Fido');
    
      expect(pet.name).toEqual('Fido');
    });

    it('has a initial age of 0', () => {
      const pet = new Pet('Fido');

      expect(pet.age).toEqual(0);
    });
  });

describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      expect(pet.age).toEqual(1);
    });
  });

describe('pet.hunger', () =>{
    it('increases hunger when age increases by 1', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      expect(pet.hunger).toEqual(5);
    });
  });

describe('pet.fitness', () =>{
    it('decreases fitness when age increases by 1', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      expect(pet.fitness).toEqual(7);
    });
  });

describe('walk', () => {
    it('increases fitness by 4', () => {
      const pet = new Pet('Fido');
      pet.fitness = 4;
      pet.walk();
      expect(pet.fitness).toEqual(8);
    });

    it('increases fitness by a maximum of 10', () => {
      const pet = new Pet('Fido');
      pet.fitness = 8;
      pet.walk();
      expect(pet.fitness).toEqual(10);
    });

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');
    pet.age = 30;
    expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
  });
});

describe('feed', () => {
    it('decreases hunger by 3', () => {
      const pet = new Pet('Fido');
      pet.hunger = 6;
      pet.feed();
      expect(pet.hunger).toEqual(3);
    });

    it('decrease hunger by to a minimum of 0', () => {
      const pet = new Pet('Fido');
      pet.hunger = 2;
      pet.feed();
      expect(pet.hunger).toEqual(0);
    });

    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Fido');
      pet.age = 30;
      expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
  });

describe('checkup', () => {
    it('returns "I need a walk" if fitness is <= 3 and hunger is < 5', () => {
      const pet = new Pet('Fido');
      pet.fitness = 3;
      pet.hunger = 4;
      expect(pet.checkup()).toEqual('I need a walk');
    });

    it('returns "I am hungry" if fitness is > 3 and hunger is >= 5', () => {
      const pet = new Pet('Fido');
      pet.fitness = 4;
      pet.hunger = 5;
      expect(pet.checkup()).toEqual('I am hungry');
    });

    it('returns "I am hungry and I need a walk" if fitness is <= 3 and hunger <= 5', () => {
      const pet = new Pet('Fido');
      pet.fitness = 3;
      pet.hunger = 5;
      expect(pet.checkup()).toEqual('I am hungry and I need a walk');
    });

    it('returns "I feel great!" if fitness is <= 10 and hunger is >= 0', () => {
      const pet = new Pet('Fido');
      pet.fitness = 10;
      pet.hunger = 0;
      expect(pet.checkup()).toEqual('I feel great!');
    });

    it ('throws an error if the pet is not alive',() => {
      const pet = new Pet ('Fido');
      pet.age = 30;
      expect(() => pet.checkup()).toThrow ('Your pet is no longer alive :(');
    });
  });

describe('isAlive', () => {
    it('returns true if fitness is >= 0 && hunger is < 10 && age is < 30', () => {  
      const pet = new Pet('Fido');
      expect(pet.isAlive).toEqual(true);
    });

    it('returns false if fitness is <= 0 && hunger is >= 10 && age is >= 30', () => {
      const pet = new Pet('Fido');
      pet.hunger = 10;
      expect(pet.isAlive).toEqual(false);
    });
  });