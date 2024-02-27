import * as BABYLON from 'babylonjs';




const canvas = document.getElementById('renderCanvas');
const engine = new BABYLON.Engine(canvas, true);
const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3(0.5, 0.5, 0.5);
engine.setHardwareScalingLevel(0.2);


const camera = new BABYLON.ArcRotateCamera('camera', 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);
camera.setPosition(new BABYLON.Vector3(0, 0, 10));
camera.attachControl(canvas, true);

const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);
light.intensity = 0.7;

const box = BABYLON.MeshBuilder.CreateBox('box', { size: 2 }, scene);
const material = new BABYLON.StandardMaterial('material', scene);
box.material = material;

engine.runRenderLoop(() => {
    scene.render();

    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
    box.rotation.z += 0.01;
    });