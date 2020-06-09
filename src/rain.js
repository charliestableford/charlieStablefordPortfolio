  const distance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
  }
  
  const map = (value, istart, istop, ostart, ostop) => {
    return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
  }
  
  // rgb to hex conversion
  const hexToRgbTreeJs = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  
    return result ? {
      r: parseInt(result[1], 16) / 255,
      g: parseInt(result[2], 16) / 255,
      b: parseInt(result[3], 16) / 255
    } : null;
  }
  
  class App {
    setup() {
      this.backgroundColor = '#2779be';
      // this creates the grid that is the water
      this.gutter = { size: 0 };
      // create an empty array
      this.meshes = [];
      this.waterDropPositions = [];
      this.ripples = [];
      // grid set up
      this.grid = { cols: 60, rows: 30 };
      // set up window
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      // set how the drops affect the surface
      this.velocity = -.1;

      this.amplitude = .1;
      this.radius = 1;
      this.waveLength = 200;
      this.ripple = {};
      this.interval = 0;
  
      window.addEventListener('resize', this.onResize.bind(this), { passive: true });
  
      window.addEventListener('visibilitychange', (evt) => {
        this.pause = evt.target.hidden;
      }, false);
    }
  
    createScene() {
      //declare things we need for the scene to be live
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(this.backgroundColor);
      // anti pixel
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      //trying to get rid of padding
      this.renderer.setSize(window.innerWidth, window.innerHeight);
  
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  
      document.body.appendChild(this.renderer.domElement);
    }
  
    createCamera() {
      //define camera
      const width = window.innerWidth;
      const height = window.innerHeight;
      //define camera
      // const camera = new THREE.PerspectiveCamera(70, 2, 1, 1000);
      this.camera = new THREE.PerspectiveCamera(40, width / height, 1, 1000);
      // camera view
      this.camera.position.set(-180, 45, 90);
  
      this.scene.add(this.camera);
    }
  
    addAmbientLight() {
      // ambient light for the scene
      const obj = { color: '#fff' };
      const light = new THREE.AmbientLight(obj.color, 1);
  
      this.scene.add(light);
    }
  
    addSpotLight() {
      // able to set shadow with this light
      const obj = { color: '#fff' };
      const light = new THREE.SpotLight(obj.color, 1);
  
      //create box shadow - set to define width of light
      light.position.set(0, 40, 0);
      light.castShadow = true;
  
      this.scene.add(light);
    }
  
    addPointLight(color, position) {
      const pointLight = new THREE.PointLight(color, 1, 1000, 1);
      pointLight.position.set(position.x, position.y, position.z);
  
      this.scene.add(pointLight);
    }
  
    //make water
    createGrid() {
      this.groupMesh = new THREE.Object3D();
  
      const meshParams = {
        color: '#06f3ff',
        metalness: .3,
        emissive: '#000000',
        roughness: 1,
      };
  
  
      const material = new THREE.MeshPhysicalMaterial(meshParams);
  
      for (let row = 0; row < this.grid.rows; row++) {
        this.meshes[row] = [];
  
        for (let col = 0; col < this.grid.cols; col++) {
          // box set up
          const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
          const mesh = this.getMesh(geometry, material);
          
          mesh.position.y = 0;
  
          const pivot = new THREE.Object3D();
          const x = col + (col * this.gutter.size);
          const z = row + (row * this.gutter.size);
  
          pivot.add(mesh);
          pivot.scale.set(1, 10, 1);
          pivot.position.set(x, 0, z);
  
          this.meshes[row][col] = pivot;
  
          this.groupMesh.add(pivot);
        }
      }
  
      const centerX = ((this.grid.cols) + ((this.grid.cols) * this.gutter.size)) * .4;
      const centerZ = ((this.grid.rows) + ((this.grid.rows) * this.gutter.size)) * .6;
  
      this.groupMesh.position.set(-centerX, 1, -centerZ);
  
      this.scene.add(this.groupMesh);
  
      for (let row = 0; row < this.grid.rows; row++) {
        for (let col = 0; col < this.grid.cols; col++) {
          const x = col + (col * this.gutter.size);
          const z = row + (row * this.gutter.size);
  
          this.waterDropPositions.push({ x: x + this.groupMesh.position.x, z: z + this.groupMesh.position.z });
        }
      }
    }
  
    getMesh(geometry, material) {
      const mesh = new THREE.Mesh(geometry, material);
  
      mesh.castShadow = true;
      mesh.receiveShadow = true;
  
      return mesh;
    }
  
    addCameraControls() {
      this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    }
  
    addFloor() {
      const geometry = new THREE.PlaneGeometry(100, 100);
      const material = new THREE.ShadowMaterial({ opacity: .3 });
  
      this.floor = new THREE.Mesh(geometry, material);
      this.floor.name = 'floor';
      this.floor.position.y = -1;
      this.floor.rotateX(- Math.PI / 2);
      this.floor.receiveShadow = true;
  
      this.scene.add(this.floor);
    }
  
    addWaterDrop(geometry, material) {
      const waterDrop = new THREE.Mesh(geometry, material);
  
      return waterDrop;
    }
  
    getRandomWaterDropPosition() {
      return this.waterDropPositions[Math.floor(Math.random() * Math.floor(this.waterDropPositions.length))];
    }
  
    animateWaterDrops() {
      // raindrop
      const geometry = new THREE.SphereBufferGeometry( .2, 32, 32 );
      var material = new THREE.MeshBasicMaterial( {color: 0xc3ffff} );
  
      this.interval = setInterval(() => {
        const waterDrop = this.addWaterDrop(geometry, material);
        const { x, z } = this.getRandomWaterDropPosition();
  
        waterDrop.position.set(x, 50, z);
        this.scene.add(waterDrop);
  
        if (this.pause) {
          this.scene.remove(waterDrop);
          TweenMax.killAll(true);
        } else {
          TweenMax.to(waterDrop.position, .9, {
            ease: Sine.easeIn,
            y: -2,
            onUpdate: () => {
              if (waterDrop.position.y < 1 ) {
                this.ripples.push({ x, z, velocity: -1, angle: 0, amplitude: .1, radius: 1, motion: -2});
              }
            },
            onComplete: () => {
              waterDrop.position.set(0, 50, 0);
              this.scene.remove(waterDrop);
            }
          });
        }
      }, 100);
    }
  
    draw() {
      for (let row = 0; row < this.grid.rows; row++) {
        for (let col = 0; col < this.grid.cols; col++) {
          for (let ripple = 0; ripple < this.ripples.length; ripple++) {
            const r = this.ripples[ripple];
            const dist = distance(col, row, r.x - this.groupMesh.position.x, r.z - this.groupMesh.position.z);
  
            if (dist < r.radius) {
              const offset = map(dist, 0, -this.waveLength, -100, 100);
              const angle = r.angle + offset;
              const y = map(Math.sin(angle), -1, 0, r.motion > 0 ? 0 : r.motion, 0);
  
              this.meshes[row][col].position.y = y;
            }
          }
        }
      }
  
      for (let ripple = 0; ripple < this.ripples.length; ripple++) {
        const r = this.ripples[ripple];
  
        r.angle -= this.velocity * 2;
        r.radius -= this.velocity * 1;
        r.motion -= this.velocity / 5;
  
        if (r.radius > 50) {
          this.ripples.shift();
        }
      }
    }
  
    animate() {
      this.controls.update();
  
      this.draw();
  
      this.renderer.render(this.scene, this.camera);
  
      requestAnimationFrame(this.animate.bind(this));
    }
  
    init() {
      this.setup();
      this.createScene();
      this.createCamera();
      this.addAmbientLight();
      this.addSpotLight();
      this.createGrid();
      this.addCameraControls();
      this.addFloor();
      this.animate();
      this.draw();
      this.animateWaterDrops();
    }
    
    onResize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.camera.aspect = this.width / this.height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.width, this.height);
    }
  }
  
  new App().init();