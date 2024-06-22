import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import GUI from 'lil-gui';
import * as THREE from 'three';

const canvas = document.querySelector('canvas.webgl');
const scene = new THREE.Scene();
const gui = new GUI().title('Particles');

//======================= Textures =====================
const textureLoader = new THREE.TextureLoader();
const particlesTexture = textureLoader.load('./textures/particles/2.png');

//===================== Particles ======================
const particlesGeometry = new THREE.BufferGeometry();
const count = 20000;

const positions = new Float32Array(count * 3);
const colors = new Float32Array(count * 3);

for (let i = 0; i < count * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 10;

  colors[i] = Math.random();
}

particlesGeometry.setAttribute(
  'position',
  new THREE.BufferAttribute(positions, 3)
);
particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

const particlesMaterial = new THREE.PointsMaterial({
  size: 0.1,
  sizeAttenuation: true,
  // color: '#fdbc08',
  alphaMap: particlesTexture,
  transparent: true,
  // alphaTest: 0.001,  // Explain below ↓
  // depthTest: false,
  depthWrite: false,
  blending: THREE.AdditiveBlending, // will impact the performances

  vertexColors: true, // enable colorizing
});

//=== Points
const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

//====================== Camera =======================
let width = window.innerWidth;
let height = window.innerHeight;

const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
camera.position.z = 3;
scene.add(camera);

//=================== Orbit Controls ==================
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

//===================== Renderer ======================
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});

renderer.setSize(width, height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//==================== Resize Listener ================
window.addEventListener('resize', () => {
  width = window.innerWidth;
  height = window.innerHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

//==================== Animate ========================
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  for (let i = 0; i < count; i++) {
    const i3 = i * 3; // each vertex contains "x, y, z"

    const x = particlesGeometry.attributes.position.array[i3];

    // Simulate a wave-pattern on "Y" axises - creating an offset on "X" axises
    particlesGeometry.attributes.position.array[i3 + 1] = Math.sin(
      elapsedTime + x
    );
  }

  // Update Particles
  particlesGeometry.attributes.position.needsUpdate = true;

  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();

/*
1. depthWrite
  - Functionality: 
    The depthWrite property determines whether or not the material writes its depth information to the depth buffer.

  - Default Value: true

  - Explanation: 
    When depthWrite is set to false, the material does not write to the depth buffer. 
    This means that objects using this material "will not affect the depth of the scene", and thus, they won't occlude other objects rendered after them. 

    This is useful for rendering transparent or semi-transparent objects where depth sorting is manually handled or where you don't want these objects to obscure others.



2. depthTest
  - Functionality: 
    The depthTest property determines whether or not the material is tested against the depth buffer when rendering.

  - Default Value: true


  - Explanation: 
    When depthTest is set to false, the material "bypasses the depth test". 
    
    This means that the objects with this material "will always be rendered regardless of their depth values compared to other objects". 
    This can be useful for HUDs, overlays, or other scenarios where you need certain objects to render on top of everything else without being occluded by other objects.



3. alphaTest
  - Functionality: 
    The alphaTest property sets a threshold for discarding pixels based on their alpha value.

  - Default Value: 0

  - Explanation: 
    When a pixel's alpha value is less than the alphaTest threshold, the pixel is discarded (i.e., not rendered). 
    
    This is useful for creating materials with transparency where you want to "discard fully transparent parts" and "keep the rest". 
    
    For example, if you have a texture with some transparent areas and you want to avoid rendering those areas, you set a small alphaTest value. 
    In this case, alphaTest: 0.001 means any pixel with an alpha value less than 0.001 will be discarded.
*/
