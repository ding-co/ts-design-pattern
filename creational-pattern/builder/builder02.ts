// pagres-org/react-design-pattern
// users.ts

class User {
  name: string;
  age?: number;
  phone?: number | string;
  address?: string;

  constructor(name: string) {
    this.name = name;
  }

  print() {
    return `[USER]: name=${this.name}, age=${this.age}, phone=${this.phone}, address=${this.address}`;
  }
}

export class UserBuilder {
  user: User;

  constructor(name: string) {
    this.user = new User(name);
  }

  setAge(age: number) {
    this.user.age = age;
    return this;
  }

  setPhone(phone: number | string) {
    this.user.phone = phone;
    return this;
  }

  setAddress(address: string) {
    this.user.address = address;
    return this;
  }

  build() {
    return this.user;
  }
}

const user = new UserBuilder('ding-co')
  .setAddress('Seoul')
  .setPhone('010-0000-0000')
  .setAge(29)
  .build();

console.log(user);
