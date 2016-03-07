require('expose?$!./main.js');
import Point from './src/point.js';
import Mesh from './src/mesh.js';
import Vector from './src/vector.js';
import Utils from './src/utils.js';
//import Camera from './src/camera.js';
var canvas = document.getElementById("c").getContext('2d')
var cube = new Mesh(8)
cube.Vertices[0] = new Point(1,1,1);
cube.Vertices[1] = new Point(1,-1,1);
cube.Vertices[2] = new Point(1,-1,1);
cube.Vertices[3] = new Point(1,1,-1);
cube.Vertices[4] = new Point(-1,-1,1);
cube.Vertices[5] = new Point(-1,1,-1);
cube.Vertices[6] = new Point(-1,-1,1);
cube.Vertices[7] = new Point(-1,-1,-1);
cube.Vertices.forEach(function(point){
  let pointS = Utils.ScreenToCanvasCoordinates(point.x, point.y)
  console.log(pointS);
  canvas.fillRect(pointS[0], pointS[1], 10,10);
});
//var camera = new Camera()

//DRAW TO THE CANVAS
export {cube};
