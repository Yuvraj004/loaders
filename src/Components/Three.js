import * as THREE from 'three';

import { useEffect, useRef } from "react";

function MyThree() {
  const refContainer = useRef(null);
  useEffect(() => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable scene transparency
    renderer.setSize(window.innerWidth*0.5, window.innerHeight*0.5);
    refContainer.current && refContainer.current.appendChild( renderer.domElement );
    var geometry = new THREE.BoxGeometry(1, 1, 1);

    // Create a material with partial opacity
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, opacity: 0.5 });

    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;

    renderer.setClearColor(0xcccccc, 0.3); 

    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.02;
      cube.rotation.y += 0.02;
      renderer.render(scene, camera);
    };
    animate();
  }, []);
  return (
    <div ref={refContainer}></div>

  );
}

export default MyThree;
