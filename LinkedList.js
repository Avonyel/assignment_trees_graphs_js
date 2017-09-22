class LinkedList {
	constructor(arr) {
		this.head = this.end = null;
		if (!arr || !Array.isArray(arr) || arr.length === 0) return this;

		let newNode = null;
		for (let i = 0; i < arr.length; i++) {
			if (i === 0) {
				this.head = newNode = new Node(arr[i].word, arr[i].def);
				continue;
			}
			newNode = newNode.next(new Node(arr[i].word, arr[i].def));
			if (i === arr.length - 1) {
				this.end = newNode;
			}
		}
	}

	prepend(node) {
		node.next(this.head);
		this.head = node;
	}

	append(node) {
		if (this.head === null) {
			this.head = this.end = node;
		} else {
			this.end = this.end.next(node);
		}
	}

	removeNode(index) {
		let counter = 0,
			node = this.head;
		while (counter++ < index - 1) {
			if (!node.nextNode) return null;
			node = node.nextNode;
		}

		const previousNode = node;
		const currentNode = node.nextNode;
		const nextNode = node.nextNode.nextNode;

		previousNode.nextNode = nextNode;

		return currentNode;
	}

	findWeightById(id) {
		let node = this.head;
		while (node) {
			if (node.vertex.id === id) return node.weight;
			node = node.nextNode;
		}
		return null;
	}

	listNodes() {
		let node = this.head;
		let row = "";
		while (node) {
			row += node + ", ";
			node = node.nextNode;
		}
		return row;
	}
}

function Node(vertex, weight) {
	this.vertex = vertex;
	this.weight = weight;
	this.nextNode = null;

	this.next = function(node) {
		this.nextNode = node;
		return node;
	};
}
LinkedList.Node = Node;
LinkedList.Node.prototype.toString = function() {
	return `${this.vertex.name} (${this.weight})`;
};

module.exports = LinkedList;
