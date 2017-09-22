const Person = require('./Person');
const EDGE_LIST = require('./edgeList');

class AgencyMatrix {
	constructor(data) {
		console.log(Person.personList);
		this.data = data;
		this.matrix = [];
		data.forEach(([left, right, weight]) => {
			this.matrix[left.id] = this.matrix[left.id] || [];
			this.matrix[left.id][right.id] = weight;
			this.matrix[right.id] = this.matrix[right.id] || [];
			this.matrix[right.id][left.id] = weight;
		});
	}
}

class Node {}

class UndirectedGraph {
	static create() {}
}

new AgencyMatrix(EDGE_LIST);
