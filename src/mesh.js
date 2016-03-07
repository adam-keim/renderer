import Vector from './vector.js';
export default class Mesh {
  constructor(vertexCnt) {
    this.Vertices = new Array(vertexCnt);
    this.Rotation = new Vector(0,0,0);
    this.Position = new Vector(0,0,0);
  }
}
