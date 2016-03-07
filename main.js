require('expose?$!./main.js');
import Point from './src/point.js';
import Mesh from './src/mesh.js';
import Vector from './src/vector.js';
import Utils from './src/utils.js'; 
import Camera from './src/camera.js'
function ScreenToCanvasCoordinates(ScreenX, ScreenY)
{
    return { "X": 400 + PixelsPerUnitLength * ScreenX, "Y": 225 - PixelsPerUnitLength * ScreenY };
}
var cube = new Mesh(8)
cube.Vertices[0] = new Point(1,1,1);
cube.Vertices[1] = new Point(1,-1,1);
cube.Vertices[2] = new Point(1,-1,1);
cube.Vertices[3] = new Point(1,1,-1);
cube.Vertices[4] = new Point(-1,-1,1);
cube.Vertices[5] = new Point(-1,1,-1);
cube.Vertices[6] = new Point(-1,-1,1);
cube.Vertices[7] = new Point(-1,-1,-1);
var v1 = new Vector(16,13,2);
var v2 = new Vector(5,12,3);
console.log(Utils.CrossProduct(v1,v2))
//var camera = new Camera()

//DRAW TO THE CANVAS
var canvas = document.getElementById("c").getContext('2d')
canvas.rect(0,0,100,100);
canvas.fill()
export {cube};
