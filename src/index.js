import * as BABYLON from 'babylonjs';




const canvas = document.getElementById('renderCanvas');
const engine = new BABYLON.Engine(canvas, true);
const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3(0.5, 0.5, 0.5);
engine.setHardwareScalingLevel(0.2);
engine.antialiasing = true;


const camera = new BABYLON.ArcRotateCamera('camera', 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);
camera.setPosition(new BABYLON.Vector3(0, 0, 10));
camera.attachControl(canvas, true);

const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);
light.intensity = 0.7;

var spotLight = new BABYLON.SpotLight("spot01", new BABYLON.Vector3(0, 10, 0), new BABYLON.Vector3(0, -1, 0), Math.PI / 3, 2, scene);
spotLight.intensity = 0.7;

const ground = BABYLON.MeshBuilder.CreateGround('ground', { width: 30, height: 30 }, scene);
ground.position.y = -1;
ground.receiveShadows = true;
ground.checkCollisions = true;


const box = BABYLON.MeshBuilder.CreateBox('box', { size: 2 }, scene);
const material = new BABYLON.StandardMaterial('material', scene);
box.material = material;
// collision
box.checkCollisions = true;
box.ellipsoid = new BABYLON.Vector3(1, 1, 1);
box.ellipsoidOffset = new BABYLON.Vector3(0, 1, 0);
// shadow
box.receiveShadows = true;
box.castShadows = true;
// position
box.position.y = 0;
box.ground = ground;

engine.runRenderLoop(() => {
    scene.render();

    box.rotation.y += 0.01;
    box.position.x += 0.01;
    });