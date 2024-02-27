import * as BABYLON from 'babylonjs';


if (BABYLON.Engine.isSupported()) {
    // Initialisation de l'engine Babylon.js
} else {
    alert('Babylon.js is not supported on this browser.');
}

var canvas = document.getElementById('renderCanvas');
var engine = new BABYLON.Engine(canvas, true);

engine.setHardwareScalingLevel(0.5); // Diminue la résolution pour de meilleures performances
engine.antialiasing = true; // Active l'antialiasing pour un rendu plus lisse
engine.enableOfflineSupport = false; // Désactive le support hors ligne
engine.doNotHandleContextLost = true; // Gestion manuelle de la perte de contexte WebGL


window.addEventListener('resize', function(){
    engine.resize();
});
window.addEventListener('blur', function(){
    engine.stopRenderLoop(); // Arrête le rendu lorsque la fenêtre perd le focus
});
window.addEventListener('focus', function(){
    engine.runRenderLoop(function(){ scene.render(); }); // Relance le rendu quand la fenêtre est de nouveau active
});


const scene = new BABYLON.Scene(engine);

const camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 4, 5, new BABYLON.Vector3(0, 0, 0), scene);
camera.attachControl(canvas, true);

camera.lowerRadiusLimit = 2;
camera.upperRadiusLimit = 10;

camera.wheelPrecision = 50;

var light = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(-1, -2, -1), scene);
light.intensity = 0.5;
var pointLight = new BABYLON.PointLight("point01", new BABYLON.Vector3(0, 1, 0), scene);
pointLight.intensity = 0.8;

var spotLight = new BABYLON.SpotLight("spot01", new BABYLON.Vector3(0, 10, 0), new BABYLON.Vector3(0, -1, 0), Math.PI / 3, 2, scene);
spotLight.intensity = 0.7;
var hemiLight = new BABYLON.HemisphericLight("hemi01", new BABYLON.Vector3(0, 1, 0), scene);
hemiLight.intensity = 0.6;


var shadowGenerator = new BABYLON.ShadowGenerator(1024, light);
var box = BABYLON.Mesh.CreateBox("box", 2.0, scene);
shadowGenerator.getShadowMap().renderList.push(box);
box.receiveShadows = true;

var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 2}, scene);


engine.runRenderLoop(function () {
    scene.render();
});