import Vector from './vector.js';
export default class Point {
  constructor(x,y,z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  static AddVectorToPoint(Vector, Point1) {
    if(Vector.constructor.name != "Vector" || Point1.constructor.name != "Point") {
      throw "TypeError: Expected Input to be vector and point";
    }
    let Px = Point1.x + Vector.x
    let Py = Point1.y + Vector.y
    let Pz = Point1.z + Vector.z
    return new Point(Px,Py,Pz);
  }
  static SubtractVectorFromPoint(Vector, Point1) {
    if(Vector.constructor.name != "Point" || Point1.constructor.name != "Point") {
      throw "TypeError: Expected Input to be vector and point";
    }
    let Px = Point1.x - Vector.x
    let Py = Point1.y - Vector.y
    let Pz = Point1.z - Vector.z
    return new this.constructor(Px,Py,Pz);
  }
  static SubtractPointFromPoint(Point1, Point2) {
    if(Point1.constructor.name != "Point" || Point2.constructor.name != "Point") {
      throw "TypeError: Expected Point";
    }
    let Vx = Point1.x - Point2.x
    let Vy = Point1.y - Point2.y
    let Vz = Point1.z - Point2.z
    return new Vector(Vx,Vy,Vz);
  }
}
