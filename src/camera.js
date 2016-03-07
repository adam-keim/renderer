import Utils from './utils.js';
export default class Camera {
  constructor(position, target, rotation, distance) {
    this.postion = position;
    this.target = target;
    this.rotation = rotation;
    this.distance = distance;
    this.RightUnitVector = Utils.CrossProduct(this.target, this.rotation);
  }

}
