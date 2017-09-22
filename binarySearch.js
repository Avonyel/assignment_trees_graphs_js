class Node {
	constructor(data, left = null, right = null) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

class BinaryTree {
	static create(array) {
		const tree = new BinaryTree();
		tree.head = new Node(array.shift());

		array.forEach(el => {
			tree.insert(el);
		});

		return tree;
	}

	insert(data) {
		const node = traverseTree(this.head, data);
		node[direction(node, data)] = new Node(data);
	}

	direction(node, data) {
		return node.data < data ? "left" : "right";
	}

	traverseTree(node, data) {
		if (direction(node, data) === "left") {
			if (node.left !== null) return traverseTree(node.left, data);
		} else {
			if (node.right !== null) return traverseTree(node.left, data);
		}

		return node;
	}
}

const tree = BinaryTree.create([8, 10, 3, 1, 6, 14, 4, 7, 13]);
