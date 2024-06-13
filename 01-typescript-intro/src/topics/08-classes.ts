export class Person {
	// public name: String;
	// private address: String;

	constructor(public name: string, private address: string = "No address") {}

	returnAddress(): String {
		return this.address;
	}
}

/*

export class Hero extends Person {
	constructor(
		public alterEgo: string,
		public age: number,
		public realName: string
	) {
		// Constructor de la clase padre
		super("Pedro", "New York");
	}
}

*/
export class Hero {
    
    constructor(
        public alterEgo: string,
		public age: number,
		public realName: string,
        public person: Person
	) {
	}
}

const tonyStark = new Person("Tony Stark",'Tampico');
// Inyección de dependencias
// De esta forma se favorece la composición, sobre la herencia
const ironMan = new Hero("Iron Man",45, 'Tony', tonyStark);

console.log(ironMan.person.name);
console.log(ironMan.person.returnAddress());

console.log(ironMan.alterEgo);
console.log(ironMan.age);
console.log(ironMan.realName);
