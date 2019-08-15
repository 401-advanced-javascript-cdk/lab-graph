# Graph Search Optimizations

### Graph Class
A hashmap contains each vertex as a key, and each key has a linked list that holds the neighbors for that vertex. 

### Breadth First Search (BFS)

A queue is implemented to check all neighbors of the current vertex for the search value before moving on the next vertex.

### Depth First Search (DFS)

A stack is implemented to check the first neighbor for each vertex for the search value.  If the search value is not found, it will go back up until a new neighbor to check is found, and will move down again.

### Dijkstra

A priority queue is used to add weight to each neighbor's edges.  A neighbor vertex is only checked if its edge's weight is less than any other neighbor's edge's weight.

### A Star

Functions similarly to Dijkstra, but adds a heuristic function to manipulate the weight of the neighbor verticie's edges.  This implementation reduces the weight of each edge based on the vertex's value, and results in a different path than Dijkstra despite the graph being the same.

## Results

```
{ bfsPaths:
   Map {
     Vertex { value: 45 } => Vertex { value: 5 },
     Vertex { value: 35 } => Vertex { value: 5 },
     Vertex { value: 30 } => Vertex { value: 5 },
     Vertex { value: 20 } => Vertex { value: 5 },
     Vertex { value: 10 } => Vertex { value: 5 },
     Vertex { value: 40 } => Vertex { value: 30 },
     Vertex { value: 25 } => Vertex { value: 20 },
     Vertex { value: 15 } => Vertex { value: 10 },
     Vertex { value: 50 } => Vertex { value: 40 } } }
{ dfsPaths:
   Map {
     Vertex { value: 45 } => Vertex { value: 5 },
     Vertex { value: 35 } => Vertex { value: 5 },
     Vertex { value: 30 } => Vertex { value: 5 },
     Vertex { value: 20 } => Vertex { value: 5 },
     Vertex { value: 10 } => Vertex { value: 5 },
     Vertex { value: 15 } => Vertex { value: 10 },
     Vertex { value: 25 } => Vertex { value: 20 } } }
{ dijkstraPaths:
   Map {
     Vertex { value: 45 } => Vertex { value: 5 },
     Vertex { value: 35 } => Vertex { value: 5 },
     Vertex { value: 30 } => Vertex { value: 5 },
     Vertex { value: 20 } => Vertex { value: 10 },
     Vertex { value: 10 } => Vertex { value: 5 },
     Vertex { value: 15 } => Vertex { value: 10 },
     Vertex { value: 25 } => Vertex { value: 20 },
     Vertex { value: 40 } => Vertex { value: 30 },
     Vertex { value: 50 } => Vertex { value: 40 } } }
{ astarPaths:
   Map {
     Vertex { value: 45 } => Vertex { value: 5 },
     Vertex { value: 35 } => Vertex { value: 5 },
     Vertex { value: 30 } => Vertex { value: 5 },
     Vertex { value: 20 } => Vertex { value: 30 },
     Vertex { value: 10 } => Vertex { value: 5 },
     Vertex { value: 40 } => Vertex { value: 30 },
     Vertex { value: 50 } => Vertex { value: 40 },
     Vertex { value: 25 } => Vertex { value: 20 } } }
```
