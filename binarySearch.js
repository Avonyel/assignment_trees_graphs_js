class Node {
	constructor(data, left = null, right = null) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

function direction(node, data) {
	return data < node.data ? "left" : "right";
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
		const node = this.traverseTree(this.head, data);
		node[direction(node, data)] = new Node(data);
	}

	traverseTree(node, data) {
		if (direction(node, data) === "left") {
			if (node.left !== null) return this.traverseTree(node.left, data);
		} else {
			if (node.right !== null) return this.traverseTree(node.right, data);
		}
		return node;
	}

	traverseAndPrint(node) {
		node = node || this.head;
		console.log(node.data);
		if (node.left) {
			this.traverseAndPrint(node.left);
		}
		if (node.right) {
			this.traverseAndPrint(node.right);
		}
	}

	prettyPrint(node) {
		node = node || this.head;
		console.log(node.data);
		if (node.left) {
			this.traverseAndPrint(node.left);
		}
		if (node.right) {
			this.traverseAndPrint(node.right);
		}
	}
}

const arr = [];

const widest = (node, depth = 0, width, min = 0, max) => {
	if (!arr[depth]) arr[depth] = new Array(width).fill(" ");
	arr[depth][min + (max - min) / 2];
	if (node.left) {
		widest(node.left, depth + 1);
	}
	if (node.right) {
		widest(node.right, depth + 1);
	}
	if (depth === 0)
		return arr.reduce((max, el) => {
			return el.length > max ? el.length : max;
		});
};

const tree = BinaryTree.create([8, 10, 3, 1, 6, 14, 4, 7, 13]);

//console.log(JSON.stringify(tree, null, 2));
tree.traverseAndPrint();
