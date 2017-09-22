class Node {
	constructor(data, left = null, right = null) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

function direction(node, data) {
	return data < node.data ? 'left' : 'right';
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
		if (direction(node, data) === 'left') {
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
}

const tree = BinaryTree.create([8, 10, 3, 1, 6, 14, 4, 7, 13]);

//console.log(JSON.stringify(tree, null, 2));
tree.traverseAndPrint();
