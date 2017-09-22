const Person = require("./Person");
const EDGE_LIST = require("./edgeList");

class AgencyMatrix {
	constructor(data) {
		this.data = data;
		this.matrix = [];
		data.forEach(([left, right, weight]) => {
			this.matrix[left.id] = this.matrix[left.id] || [];
			this.matrix[left.id][right.id] = weight;
			this.matrix[right.id] = this.matrix[right.id] || [];
			this.matrix[right.id][left.id] = weight;
		});
	}

	print() {
		const columnWidth = Person.longestName() + 1;
		let row = "".padEnd(columnWidth);
		for (let i = 0; i < this.matrix.length; i++) {
			row += padName(columnWidth, Person.get(i).name);
		}

		row += "\n";

		for (let i = 0; i < this.matrix.length; i++) {
			row += padName(columnWidth, Person.get(i).name);
			for (let j = 0; j < this.matrix[i].length; j++) {
				row += padName(columnWidth, `${this.matrix[i][j]}`);
			}
			row += "\n";
		}

		console.log(row);
	}
}

const padName = (columnWidth, name) => {
	const padding = columnWidth - name.length;
	return name.padEnd(padding);
};

class Node {}

class UndirectedGraph {
	static create() {}
}

const matrix = new AgencyMatrix(EDGE_LIST);

matrix.print();
