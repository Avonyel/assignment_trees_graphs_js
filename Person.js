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
}
Person.personList = new Array();

module.exports = Person;
