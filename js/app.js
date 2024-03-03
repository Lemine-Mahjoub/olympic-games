window.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('renderCanvas');
    var engine = new BABYLON.Engine(canvas, true);

    var createScene = function() {
        var scene = new BABYLON.Scene(engine);
        var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), scene);
        camera.attachControl(canvas, true);

        var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);

        // Simple sphere to represent something in the scene
        var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 2}, scene);

        return scene;
    };

    var scene = createScene();

    engine.runRenderLoop(function() {
        scene.render();
    });

    window.addEventListener('resize', function() {
        engine.resize();
    });

    // Event listeners for menu buttons


    // Implement similar listeners for 'options' and 'exit' buttons
});
