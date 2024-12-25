import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

import starsTexture from '../img/stars.jpg';
import sunTexture from '../img/sun.jpg';
import mercuryTexture from '../img/mercury.jpg';
import venusTexture from '../img/venus.jpg';
import earthTexture from '../img/earth.jpg';
import marsTexture from '../img/mars.jpg';
import jupiterTexture from '../img/jupiter.jpg';
import saturnTexture from '../img/saturn.jpg';
import saturnRingTexture from '../img/saturn ring.png';
import uranusTexture from '../img/uranus.jpg';
import uranusRingTexture from '../img/uranus ring.png';
import neptuneTexture from '../img/neptune.jpg';
import plutoTexture from '../img/pluto.jpg';

const canvas = document.getElementById('output_canvas');
const renderer = new THREE.WebGLRRenderer({
    canvas:canvas,
    antialias:true,
});

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
renderer.setSize(canvas.clientWidth , canvas.clientHeight);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    45,
    canvasWidth / canvasHeight,
    1,
    1000
);

camera.position.set(0,0,5);
camera.lookAt(0,0,0); 
renderer.render(scene,camera);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
const pointLight = new THREE.PointLight(0xffffff, 0.5);
pointLight.position.set(0,0,5);
scene.add(ambientLight);
scene.add(pointLight);

const geometry = new THREE.SphereGeometry(5,5,5);
const material = new THREE.MeshPhongMaterial({
    map: new THREE.TextureLoader().load(sunTexture);
});
const sun = new THREE.Mesh(geometry,material);
sun.position.set(0,0,5);
scene.add(sun);