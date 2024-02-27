var canvas = document.getElementById("gameCanvas");
var engine = new BABYLON.Engine(canvas, true);
var scene = new BABYLON.Scene(engine);


// Caméra
var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 4, 10, BABYLON.Vector3.Zero(), scene);
camera.attachControl(canvas, true);

// Lumière
var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);

// Cube simple
var box = BABYLON.MeshBuilder.CreateBox("box", {size: 2}, scene);

scene.onBeforeRenderObservable.add(() => {
    box.rotation.y += 0.01;

});

engine.runRenderLoop(() => {
    scene.render();
});

window.addEventListener("resize", function () {
    engine.resize();
});