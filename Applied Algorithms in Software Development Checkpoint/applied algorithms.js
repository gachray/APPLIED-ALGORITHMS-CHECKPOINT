//Implementing Dijkstra's Algorithm in JavaScript

function dijkstra(graph, start) {
    const distances = {};
    const queue = [];
    const visited = new Set();
  
    // Initialize distances and queue
    for (const vertex in graph) {
      distances[vertex] = Infinity;
      queue.push(vertex);
    }
    distances[start] = 0;
  
    while (queue.length > 0) {
      // Extract vertex with minimum distance
      let minDistance = Infinity;
      let minVertex;
      for (const vertex of queue) {
        if (distances[vertex] < minDistance) {
          minDistance = distances[vertex];
          minVertex = vertex;
        }
      }
      // Mark vertex as visited
      visited.add(minVertex);
      queue = queue.filter(vertex => vertex!== minVertex);
  
      // Update distances of adjacent vertices
      for (const adjacentVertex in graph[minVertex]) {
        const weight = graph[minVertex][adjacentVertex];
        const newDistance = distances[minVertex] + weight;
        if (newDistance < distances[adjacentVertex]) {
          distances[adjacentVertex] = newDistance;
        }
      }
    }
  
    return distances;
  }