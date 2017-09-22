// Person struct
class Person {
	constructor(id, name) {
		this.id = id;
		this.name = name;
	}

	static create(id, name) {
		const person = new Person(id, name);
		if (!Person.personList.some(person => id === person.id)) {
			Person.personList.push(person);
		}
		return person;
	}

	static get(id) {
		return Person.personList.find(person => id === person.id);
	}

	static longestName() {
		return Person.personList.reduce((longest, person) => {
			return person.name.length > longest ? person.name.length : longest;
		}, 0);
	}
}
Person.personList = new Array();

module.exports = Person;
