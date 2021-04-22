import * as THREE from 'three';
import * as dat from 'three/examples/jsm/libs/dat.gui.module';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as Infiniforge from 'infiniforge';
import { randomSeed } from './utils';

const WIRE_FRAME_MATERIAL = new THREE.MeshBasicMaterial({
  color: 0x050505,
  wireframe: true,
});

class InfiniforgeApp {
  constructor() {
    this.canvas = null;
    this.forgeParams = {};
    this.swordModel = null;
    this.enableWireFrame = false;
    this.gui = null;
    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.controls = null;
    this.init();
  }

  init() {
    this.initThree();
    this.initForgeParams();
    this.onWindowResize.bind(this);
    this.onKeyDown.bind(this);
    this.animate.bind(this);
  }

  initThree() {
    this.canvas = document.getElementById('threejs-canvas');

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });
    const rendererRect = this.renderer.domElement.getBoundingClientRect();
    this.renderer.setSize(rendererRect.width, rendererRect.height);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    const aspect = rendererRect.width / rendererRect.height;
    this.camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    this.camera.position.z = 2;
    this.camera.position.y = 1;
    this.camera.updateProjectionMatrix();

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x5884a6);

    // controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.screenSpacePanning = false;
    this.controls.minDistance = 0.5;
    this.controls.maxDistance = 3;
    this.controls.enableZoom = true;
    this.controls.autoRotate = true;
    this.controls.enableRotate = true;
    this.controls.enableKeys = false;

    // Lights
    const light1 = new THREE.DirectionalLight(0xffffff);
    light1.position.set(1, 1, 1);
    this.scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xcccccc);
    light2.position.set(-1, -1, -1);
    this.scene.add(light2);

    const light3 = new THREE.AmbientLight(0x222222);
    this.scene.add(light3);

    window.addEventListener('resize', this.onWindowResize.bind(this), false);
    this.canvas.addEventListener('keydown', this.onKeyDown, false);
  }

  initForgeParams() {
    const forgeParams = {
      output: 'gltf',
      seed: 'Enter a seed value',
      template: 'random',
      bladeParams: {
        color: '#7f7f7f',
        crossSection: 'random',
        tip: 'random',
        edgeScaleTolerance: 0.1,
      },
      guardParams: {
        color: '#7f5100',
      },
      handleParams: {
        color: '#cc5100',
      },
      pommelParams: {
        color: '#e5cc59',
      },
    };

    const guiFunctions = {
      'Random Seed': () => {},
      Forge: this.forge,
      'Random Forge': () => {
        this.seedController.setValue(randomSeed());
        this.forge();
      },
      'Toggle Wireframe': () => {
        this.wireFrameEnabled = !this.wireFrameEnabled;
        if (this.swordModel) {
          if (this.wireFrameEnabled) {
            this.swordModel.material = WIRE_FRAME_MATERIAL;
          } else {
            this.swordModel.material = this.importedMaterial;
          }
        }
      },
    };

    const supportedCrossSections = {
      Random: 'random',
      Diamond: 'diamond',
      'Hallow Ground': 'hallow_ground',
      Hexagonal: 'hexagonal',
      'Thickened Diamond': 'thickened_diamond',
      Lenticular: 'lenticular',
      Fuller: 'fuller',
      'Doule Fuller': 'doule_fuller',
      'Broad Fuller': 'broad_fuller',
      'Single edge': 'single_edge',
    };

    const supportedTemplates = {
      Random: 'random',
      Short: 'short',
      Long: 'long',
      Great: 'great',
      Katana: 'katana',
    };

    const supportedBladeTips = {
      Random: 'random',
      Standard: 'standard',
      Square: 'square',
      Rounded: 'rounded',
      Clip: 'clip',
    };

    this.gui = new dat.GUI({
      name: 'Infiniforge Playground',
      closeOnTop: 'true',
    });

    this.gui.domElement.id = 'gui';
    this.gui.add(guiFunctions, 'Random Forge');
    this.gui.add(guiFunctions, 'Forge');

    this.gui.add(guiFunctions, 'Random Seed').setValue(() => {
      this.seedController.setValue(randomSeed());
    });

    this.seedController = this.gui.add(forgeParams, 'seed');

    this.gui.add(forgeParams, 'template', supportedTemplates);

    const bladeOptions = this.gui.addFolder('Blade Options');
    bladeOptions.add(
      forgeParams.bladeParams,
      'crossSection',
      supportedCrossSections,
    );
    bladeOptions.add(forgeParams.bladeParams, 'tip', supportedBladeTips);
    bladeOptions.add(forgeParams.bladeParams, 'edgeScaleTolerance', 0, 0.5);
    bladeOptions.addColor(forgeParams.bladeParams, 'color');

    const guardOptions = this.gui.addFolder('Guard Options');
    guardOptions.addColor(forgeParams.guardParams, 'color');

    const handleOptions = this.gui.addFolder('Handle Options');
    handleOptions.addColor(forgeParams.handleParams, 'color');

    const pommelOptions = this.gui.addFolder('Pommel Options');
    pommelOptions.addColor(forgeParams.pommelParams, 'color');

    this.gui.add(guiFunctions, 'Toggle Wireframe');

    document.getElementById('canvas-container').appendChild(this.gui.domElement);
    this.gui.domElement.style.position = 'absolute';
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.controls.update();
    this.render();
  }

  async forge() {
    const swordGenerator = new Infiniforge.SwordGenerator();
    this.setGlTFDownload(false);
    try {
      this.scene.remove(this.swordModel);
      this.swordModel = await swordGenerator
        .generate({ ...this.forgeParams, output: 'mesh' });

      this.setGlTFDownload(false);
      this.swordModel.rotation.y += Math.PI / 2;
      this.importedMaterial = this.swordModel.material;
      this.scene.add(this.swordModel);
      const exporter = new GLTFExporter();
      exporter.parse(this.swordModel, (gltf) => {
        this.swordglTF = JSON.stringify(gltf);
        this.setGlTFDownload(true);
      });
    } catch (error) {
      alert(error);
    }
  }

  run() {
    this.animate();
  }

  onWindowResize() {
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;

    this.camera.aspect = this.canvas.width / this.canvas.height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(this.canvas.width, this.canvas.height);
  }

  onKeyDown(e) {
    e.preventDefault();

    if (e.key === 'ArrowUp' && this.swordModel) {
      this.swordModel.position.y += 0.015;
    }

    if (e.key === 'ArrowDown' && this.swordModel) {
      this.swordModel.position.y -= 0.015;
    }
  }

  setGlTFDownload(enable) {
    const downloadButton = document.getElementById('download-button');
    if (enable) {
      downloadButton.disabled = false;
      downloadButton.parentElement.href = `data:application/json,${encodeURIComponent(this.swordglTF)}`;
    } else {
      downloadButton.disabled = true;
    }
  }
}

(() => {
  const app = new InfiniforgeApp();
  app.run();
})();
