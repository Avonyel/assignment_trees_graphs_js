# assignment_graphs_trees
Rise over run.

[A Data Structures and Algorithms Ruby Assignment from the Viking Code School using Trees and Graphs](http://www.vikingcodeschool.com)

Andrew and Stephanie

################################
FINAL THOUGHT QUESTIONS
################################

1.

Q: What are the advantages and disadvantages of using an Adjacency Matrix vs an Adjacency List relative to size and speed of common operations?

----------------------------------------------------------------------------

A: Adjacency Matrix size is going to be O(n^2) with a lot of wasted space, but lookup is very fast (O(1)). Adjacency list gets rid of all the wasted space, so its complexity is O(2n) and still relatively quick lookup (O(d), where d is the degree of the vertex, meaning how many edges it's connected to).



2.

Q: What would the Big O be of inserting a new EDGE to:
An Edge List?
An Adjacency Matrix?
An Adjacency List?

-----------------------------------------------------------------------------

A: Edge List: O(1) with dynamic arrays, O(n) with low-level arrays
Adjacency Matrix: O(1)
Adjacency List: O(1) (assuming we keep a reference to the tail of the linked list)



3.

Q: What would the Big O be of inserting a new VERTEX to:
An Edge List?
An Adjacency Matrix?
An Adjacency List?

----------------------------------------------------------------------------

Edge List: O(d)
Adjacency Matrix: O(n)