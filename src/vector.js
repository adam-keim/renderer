export default class Vector {
  constructor(x,y,z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  static AddVectorToVector(Vector1, Vector2) {
    if(Vector.constructor.name != "Vector" || Point.constructor.name != "Vector") {
      throw "TypeError: Expected Inputs to be vectors";
    }
    let Vx = Vector1.x + Vector2.x;
    let Vy = Vector1.y + Vector2.y;
    let Vz = Vector1.z + Vector2.z;
    return new Vector(Vx,Vy,Vz)
  }
  static SubtractVectorFromVector(Vector1, Vector2) {
    if(Vector.constructor.name != "Vector" || Point.constructor.name != "Vector") {
      throw "TypeError: Expected Inputs to be vectors";
    }
    let Vx = Vector1.x - Vector2.x;
    let Vy = Vector1.y - Vector2.y;
    let Vz = Vector1.z - Vector2.z;
    return new Vector(Vx,Vy,Vz)
  }
}
