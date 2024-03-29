'use strict';

const Queue = require('queue-fifo');

module.exports = (graph, startVertex, goalVertex) => {
  const queue = new Queue();
  const visitedVertices = new Set();

  const paths = new Map();

  queue.enqueue(startVertex);
  visitedVertices.add(startVertex);

  while(queue.size() > 0) {
    const currentVertex = queue.dequeue();
    if(currentVertex === goalVertex) {
      return paths;
    }

    for (let neighbor of graph.getNeighbors(currentVertex)){
      if(visitedVertices.has(neighbor.vertex)) {
        continue;
      } else {
        visitedVertices.add(neighbor.vertex);
      }
      paths.set(neighbor.vertex, currentVertex);
      queue.enqueue(neighbor.vertex);
    }
  }
  return null;
};