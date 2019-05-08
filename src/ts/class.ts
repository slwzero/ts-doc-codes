export class Greeter {
  greeting: string;
  constructor(msg: string) {
    this.greeting = msg;
  };
  greet() {
    return 'hello---' + this.greeting;
  }
}


export class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  };
  move(distance: number = 0) {
    console.log(`${this.name} 移动了${distance}`);
  }
}

export class Dog extends Animal {
  constructor(name: string) {
    super(name); // 意思是调用父类的constructor
  }
  move(distance = 45) {
    console.log('跳跃');
    // document.write(`移动了${distance}`);
    super.move(distance);
    return `移动了${distance}`;
  }
}
