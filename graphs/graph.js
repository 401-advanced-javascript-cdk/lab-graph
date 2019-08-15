'use strict';

const List = require('./linked-list/singly-linked-list.js');

module.exports = class Graph{
  constructor(){
    this._adjacencyList = new Map();
  }

  addVertex(vertex) {
    this._adjacencyList.set(vertex, new List);
  }

  addEdge(startVertex, endVertex, weight = 0) {
    if(!this._adjacencyList.has(startVertex) ||
    !this._adjacencyList.has(endVertex)) {
      throw new Error('_INVALID_VERTEX_');
    }

    const edgeData = {
      vertex: endVertex,
      weight,
    };

    this._adjacencyList.get(startVertex).insert(edgeData);
  }

  getNeighbors(vertex){
    if(!this._adjacencyList.has(vertex)){
      throw new Error('_INVALID_VERTEX_');
    }
    return this._adjacencyList.get(vertex).print();
  }
};