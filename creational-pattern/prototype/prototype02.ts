class Dog {
  name;

  constructor(name: string) {
    this.name = name;
  }

  bark() {
    return `Woof!`;
  }
}

const dog1 = new Dog('Daisy');
const dog2 = new Dog('Max');
const dog3 = new Dog('Spot');

// @ts-ignore
Dog.prototype.play = () => console.log('Playing now!');

// @ts-ignore
dog1.play();
