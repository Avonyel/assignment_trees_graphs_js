const Person = require('./Person');

// An edge list of connections between people in the format
// [ORIGIN_PERSON, DESTINATION_PERSON, WEIGHT]
// Remember: This is an *undirected* graph.

const EDGE_LIST = [
	[Person.create(1, 'Harry'), Person.create(10, 'Alice'), 2],
	[Person.create(1, 'Harry'), Person.create(0, 'Bob'), 9],
	[Person.create(1, 'Harry'), Person.create(4, 'Michael'), 11],
	[Person.create(1, 'Harry'), Person.create(16, 'Peter'), 12],
	[Person.create(2, 'Sally'), Person.create(7, 'Dan'), 16],
	[Person.create(2, 'Sally'), Person.create(14, 'Mike'), 1],
	[Person.create(2, 'Sally'), Person.create(10, 'Alice'), 7],
	[Person.create(3, 'Sam'), Person.create(19, 'Boris'), 16],
	[Person.create(4, 'Michael'), Person.create(7, 'Dan'), 19],
	[Person.create(4, 'Michael'), Person.create(2, 'Sally'), 8],
	[Person.create(4, 'Michael'), Person.create(17, 'Andur'), 11],
	[Person.create(4, 'Michael'), Person.create(14, 'Mike'), 11],
	[Person.create(5, 'Michelle'), Person.create(3, 'Sam'), 9],
	[Person.create(5, 'Michelle'), Person.create(10, 'Alice'), 12],
	[Person.create(5, 'Michelle'), Person.create(6, 'Alok'), 12],
	[Person.create(7, 'Dan'), Person.create(19, 'Boris'), 13],
	[Person.create(7, 'Dan'), Person.create(10, 'Alice'), 11],
	[Person.create(7, 'Dan'), Person.create(5, 'Michelle'), 1],
	[Person.create(8, 'Nick'), Person.create(15, 'Adam'), 1],
	[Person.create(8, 'Nick'), Person.create(16, 'Peter'), 20],
	[Person.create(8, 'Nick'), Person.create(7, 'Dan'), 9],
	[Person.create(8, 'Nick'), Person.create(0, 'Bob'), 9],
	[Person.create(9, 'Olga'), Person.create(6, 'Alok'), 11],
	[Person.create(9, 'Olga'), Person.create(14, 'Mike'), 20],
	[Person.create(9, 'Olga'), Person.create(19, 'Boris'), 12],
	[Person.create(10, 'Alice'), Person.create(3, 'Sam'), 19],
	[Person.create(11, 'Donald'), Person.create(7, 'Dan'), 19],
	[Person.create(12, 'Garrett'), Person.create(10, 'Alice'), 15],
	[Person.create(12, 'Garrett'), Person.create(16, 'Peter'), 7],
	[Person.create(12, 'Garrett'), Person.create(17, 'Andur'), 16],
	[Person.create(12, 'Garrett'), Person.create(18, 'Tom'), 4],
	[Person.create(13, 'Xin'), Person.create(8, 'Nick'), 5],
	[Person.create(13, 'Xin'), Person.create(5, 'Michelle'), 3],
	[Person.create(13, 'Xin'), Person.create(18, 'Tom'), 12],
	[Person.create(13, 'Xin'), Person.create(15, 'Adam'), 17],
	[Person.create(14, 'Mike'), Person.create(12, 'Garrett'), 10],
	[Person.create(15, 'Adam'), Person.create(0, 'Bob'), 18],
	[Person.create(15, 'Adam'), Person.create(17, 'Andur'), 8],
	[Person.create(16, 'Peter'), Person.create(4, 'Michael'), 12],
	[Person.create(16, 'Peter'), Person.create(11, 'Donald'), 10],
	[Person.create(16, 'Peter'), Person.create(2, 'Sally'), 1],
	[Person.create(17, 'Andur'), Person.create(14, 'Mike'), 9],
	[Person.create(17, 'Andur'), Person.create(5, 'Michelle'), 17],
	[Person.create(18, 'Tom'), Person.create(14, 'Mike'), 9],
	[Person.create(18, 'Tom'), Person.create(16, 'Peter'), 14],
	[Person.create(19, 'Boris'), Person.create(2, 'Sally'), 5],
	[Person.create(19, 'Boris'), Person.create(18, 'Tom'), 3],
	[Person.create(19, 'Boris'), Person.create(12, 'Garrett'), 5],
	[Person.create(19, 'Boris'), Person.create(13, 'Xin'), 7]
];

// Helper function to view the edge list
const printEdgeList = () => {
	let lines = [' -- Edge List -- '];
	EDGE_LIST.forEach(e => {
		lines.push(`${e[0].name} <-${e[2]}-> ${e[1].name}`);
	});
	console.log(lines.join('\n'));
};

// Uncomment the fillowing to display your edge list
//printEdgeList();

module.exports = EDGE_LIST;
