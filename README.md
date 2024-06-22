# <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Laptop.webp" alt="Laptop" width="35" /> &nbsp; _Particles_ &nbsp; <img src="https://skillicons.dev/icons?i=threejs" height="35" alt="threejs logo"  />

<!----------------------------------------- Description ---------------------------------------->
### <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Bubbles.png" alt="Bubbles" width="40" height="40" />&nbsp; _Description_

> To begin with, it is important to note that, this project have been sourced from an exceptional `Three.js Journey` Course. <br/>
 
### 👤 Instructed by a _proficient_ and _expert educator_, <a href="https://threejs-journey.com/" target="_blank"> _"Bruno Simon"_ </a>. 

 <br/>

### Introduction to Particles
- Particles are small, individual elements that can be used to create effects like ` smoke `, ` fire `, ` rain `, ` snow `, ` stars `, ` dust ` and other phenomena that involve many small elements interacting in a visually interesting way. <br/> 
- Particles are often used to simulate systems where it would be _impractical_ or _inefficient_ to use traditional 3D models.
- The good thing with particles is that you can have hundreds of thousands of them on screen with a reasonable frame rate. <br/> The downside is that each particle is composed of a plane (two triangles) always facing the camera. <br/><br/>

### Why Do We Need Particles?
Particles are crucial in creating realistic and dynamic effects in 3D scenes. They help in:

1. _Simulating Natural Phenomena_ :
   - Effects like rain, snow, fire, and smoke.
2. _Creating Visual Effects_ :
   - Explosions, magic spells, and other special effects.
3. _Adding Detail_ :
   - Enhancing the visual richness of a scene without heavy computational costs. <br/><br/><br/>
  
### How Particles Work in Three.js
In Three.js, particles are usually created using Points. A particle system involves:

### 1. _`Geometry:`_ 
   - Defines the positions of particles.
~~~~ html
const particlesGeometry = new THREE.BufferGeometry();
const count = 5000;

const positions = new Float32Array(count * 3);

for (let i = 0; i < count * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 10;
}

particlesGeometry.setAttribute(
  'position',
  new THREE.BufferAttribute(positions, 3)
);
~~~~
<br/>

### 2. _`Material:`_
   - Defines how particles look (color, texture, size).
~~~~ html
const particlesMaterial = new THREE.PointsMaterial({
  size: 0.01,
  sizeAttenuation: true,
  color: '#fdbc08',
});
~~~~
<br/>

### 3. _`Points:`_
   - Combines the geometry and material to create the particle system.
~~~~ html
const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);
~~~~
<br/><br/>

<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Eyes.png" alt="Eyes" width="25" height="25" /> Feel free to delve into the code as it has been written in a straightforward manner for easy understanding.
<br/> <br/> 

> [!IMPORTANT]
>> ### It is crucial to grasp that Particles:
>> - In Three.js allow you to create stunning visual effects efficiently.
>> - By understanding the basic components—geometry, material, and points — you can build complex and dynamic particle systems to enhance your 3D scenes.
>> - Experiment with different properties and techniques to achieve the desired effects and bring your scenes to life.

 
<br/><br/>

<!--------- Video --------->
<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Clapper%20Board.webp" alt="Clapper Board" width="35" /> &nbsp; Simulate 20000 Prticles in a Wave pattern

https://github.com/ShahramShakiba/Particles-Threejs-p06/assets/110089830/392eff23-2b1c-4173-af68-c248666ced0b

  <br/> 

***

<!--======================= Social Media ===========================-->
 ## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Detective%20Light%20Skin%20Tone.png" alt="Man Detective Light Skin Tone" width="65" /> Find me around the Web  
<a href="https://www.linkedin.com/in/shahramshakiba/" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/linkedin/default.svg" width="52" height="40" alt="linkedin logo"  />
  </a> &nbsp;&nbsp;&nbsp;
  <a href="https://t.me/ShahramShakibaa" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/telegram/default.svg" width="52" height="40" alt="telegram logo"  />
  </a> &nbsp;&nbsp;&nbsp;
  <a href="https://wa.me/message/LM2IMM3ABZ7ZM1" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/whatsapp/default.svg" width="52" height="40" alt="whatsapp logo"  />
  </a> &nbsp;&nbsp;&nbsp;
  <a href="https://instagram.com/shahram.shakibaa?igshid=MzNlNGNkZWQ4Mg==" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/instagram/default.svg" width="52" height="40" alt="instagram logo"  />
  </a> &nbsp;&nbsp;&nbsp;
  <a href="https://twitter.com/ShahramShakibaa" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/twitter/default.svg" width="52" height="40" alt="twitter logo"  />
  </a>
