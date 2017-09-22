const Person = require("./Person");
const EDGE_LIST = require("./edgeList");
const LinkedList = require("./LinkedList");

class AgencyList {
	constructor(data) {
		this.list = [];
		data.forEach(([left, right, weight]) => {
			this.list[left.id] = this.list[left.id] || new LinkedList();
			this.list[left.id].append(new LinkedList.Node(right, weight));
			this.list[right.id] = this.list[right.id] || new LinkedList();
			this.list[right.id].append(new LinkedList.Node(left, weight));
		});
	}

	print() {
		const columnWidth = Person.longestName() + 2;
		let row = "";

		this.list.forEach((el, i) => {
			row += Person.get(i).name.padEnd(columnWidth);
			row += el.listNodes() + "\n";
		});

		console.log(row);
	}

	getEdgeWeight(from, to) {
		return this.list[from].findWeightById(to) || "None";
	}
}

const list = new AgencyList(EDGE_LIST);
list.print();
console.log(list.getEdgeWeight(1, 4));

class AgencyMatrix {
	constructor(data) {
		this.matrix = [];
		data.forEach(([left, right, weight]) => {
			this.matrix[left.id] = this.matrix[left.id] || [];
			this.matrix[left.id][right.id] = weight;
			this.matrix[right.id] = this.matrix[right.id] || [];
			this.matrix[right.id][left.id] = weight;
		});
	}

	getEdgeWeight(from, to) {
		return this.matrix[from][to] || "None";
	}

	print() {
		const columnWidth = Person.longestName() + 2;
		let row = "".padEnd(columnWidth);
		for (let i = 0; i < this.matrix.length; i++) {
			row += Person.get(i).name.padEnd(columnWidth);
		}

		row += "\n";

		for (let i = 0; i < this.matrix.length; i++) {
			row += Person.get(i).name.padEnd(columnWidth);
			for (let j = 0; j < this.matrix.length; j++) {
				const node = this.matrix[i][j];
				if (node) {
					row += `${this.matrix[i][j]}`.padEnd(columnWidth);
				} else {
					row += "X".padEnd(columnWidth);
				}
			}
			row += "\n";
		}
		console.log(row);
	}
}

class Node {}

class UndirectedGraph {
	static create() {}
}

const matrix = new AgencyMatrix(EDGE_LIST);

//matrix.print();
// Hooorayyy! This was the hardest one to implement.
//console.log(matrix.getEdgeWeight(1, 4));
