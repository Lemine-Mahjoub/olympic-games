export const athletisme = () => {
    const canvas = document.getElementById("renderCanvas");
    const engine = new BABYLON.Engine(canvas, true);
    const scene = new BABYLON.Scene(engine);
    
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);
    
    const cube = BABYLON.MeshBuilder.CreateBox("cube", {size: 1}, scene);
    cube.position.y = 0.5; // Position the cube slightly above the ground
    cube.material = new BABYLON.StandardMaterial("mat", scene);
    cube.material.diffuseColor = new BABYLON.Color3(1, 0, 0); // Red

    const ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 50, height: 50}, scene);
    ground.material = new BABYLON.StandardMaterial("mat", scene);
    ground.material.diffuseColor = new BABYLON.Color3(0, 1, 0); // Green

    const camera = new BABYLON.FollowCamera("followCam", new BABYLON.Vector3(0, 10, -10), scene);
    camera.lockedTarget = cube;
    camera.cameraAcceleration = 0.05;
    camera.maxCameraSpeed = 10;
    camera.heightOffset = 4;
    camera.radius = 8;
    
    const moveCube = (direction) => {
        const speed = 1;
        const steps = 10;
        const interval = 50;
    
        for (let step = 0; step < steps; step++) {
            setTimeout(() => {
                switch (direction) {
                    case "jump":
                        if (step < steps / 2) {
                            cube.position.y += (speed / steps) * 2;
                        } else {
                            cube.position.y -= (speed / steps) * 2;
                        }
                        break; 
                }
            }, interval * step);
        }
    };
    
    window.addEventListener("keydown", (e) => {
        switch (e.key) {
            case " ":
                moveCube("jump");
                break;
        }
    });
    
    engine.runRenderLoop(() => {
        scene.render();
        cube.position.z -= 0.05;
    });
    
    window.addEventListener("resize", () => {
        engine.resize();
    });
}