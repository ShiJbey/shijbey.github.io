import * as THREE from 'three';
import * as dat from 'dat.gui';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
import * as Infiniforge from 'infiniforge';
import './styles/infiniforge.scss';

export function randomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
}

export function randomSeed(seedLength: number = 7): string {
    let seed = '';
    const numberAsciiOffset = 48;
    const lowercaseAsciiOffset = 97;
    const uppercaseAsciiOffset = 65;
    for (let i = 0; i < seedLength; i++) {
        const randNum = Math.random();
        if (randNum <= 0.33) {
            seed += String.fromCharCode(numberAsciiOffset + randomInt(10));
        } else if (randNum > 0.33 && randNum <= 0.66) {
            seed += String.fromCharCode(lowercaseAsciiOffset + randomInt(25));
        } else {
            seed += String.fromCharCode(uppercaseAsciiOffset + randomInt(25));
        }
    }
    return seed;
}

const WIRE_FRAME_MATERIAL = new THREE.MeshBasicMaterial({
    color: 0x050505,
    wireframe: true,
});

class InfiniforgeApp {
    public canvas: HTMLCanvasElement;
    public forgeParams: Infiniforge.SwordGenerationParams;
    public swordModel: THREE.Mesh | null;
    public enableWireframe: boolean;
    public gui: dat.GUI;
    public renderer: THREE.WebGLRenderer;
    public scene: THREE.Scene;
    public camera: THREE.PerspectiveCamera;
    public orbitControl: OrbitControls;
    public transformControl: TransformControls;
    public raycaster: THREE.Raycaster;
    public pointer: THREE.Vector2;
    public onUpPosition: THREE.Vector2;
    public onDownPosition: THREE.Vector2;
    public seedController: dat.GUIController;
    public importedMaterial?: THREE.Material | THREE.Material[];
    public swordGlTF?: string;

    constructor() {
        this.canvas = null;
        this.forgeParams = {};
        this.swordModel = null;
        this.enableWireframe = false;
        this.gui = null;
        this.renderer = null;
        this.scene = null;
        this.camera = null;
        this.orbitControl = null;
        this.transformControl = null;
        this.raycaster = new THREE.Raycaster();
        this.pointer = new THREE.Vector2();
        this.onUpPosition = new THREE.Vector2();
        this.onDownPosition = new THREE.Vector2();
        this.init();
    }

    init() {
        this.initThree();
        this.initForgeParams();
        this.onWindowResize.bind(this);
        this.animate.bind(this);
    }

    initThree() {
        this.canvas = document.getElementById(
            'threejs-canvas'
        ) as HTMLCanvasElement;

        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
        });
        const rendererRect = this.renderer.domElement.getBoundingClientRect();
        this.renderer.setSize(rendererRect.width, rendererRect.height);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.shadowMap.enabled = true;

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xf0f0f0);

        const aspect = rendererRect.width / rendererRect.height;
        this.camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
        this.camera.position.z = 2;
        this.camera.position.y = 1;
        this.camera.updateProjectionMatrix();
        this.scene.add(this.camera);

        const planeGeometry = new THREE.PlaneGeometry(200, 200);
        planeGeometry.rotateX(-Math.PI / 2);
        const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.2 });
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.position.y = -10;
        plane.receiveShadow = true;
        this.scene.add(plane);

        const helper = new THREE.GridHelper(200, 100);
        helper.position.y = -9.9;
        // helper.material.opacity = 0.25;
        // helper.material.transparent = true;
        this.scene.add(helper);

        // controls
        this.orbitControl = new OrbitControls(this.camera, this.canvas);
        // this.orbitControl.damping = 0.3;
        this.orbitControl.enableDamping = true;
        this.orbitControl.dampingFactor = 0.05;
        // orbitControl.screenSpacePanning = false;
        this.orbitControl.minDistance = 0.5;
        // orbitControl.maxDistance = 3;
        this.orbitControl.enableZoom = true;
        // orbitControl.autoRotate = true;
        // orbitControl.autoRotateSpeed = 1.0;
        this.orbitControl.enableRotate = true;
        // this.orbitControl.enableKeys = true;
        this.orbitControl.addEventListener('change', this.render.bind(this));

        this.transformControl = new TransformControls(this.camera, this.canvas);
        this.transformControl.addEventListener(
            'change',
            this.render.bind(this)
        );
        this.transformControl.addEventListener('dragging-changed', (event) => {
            this.orbitControl.enabled = !event.value;
        });
        this.scene.add(this.transformControl);

        const light1 = new THREE.DirectionalLight(0xffffff);
        light1.position.set(1, 1, 1);
        this.scene.add(light1);

        const light2 = new THREE.DirectionalLight(0xcccccc);
        light2.position.set(-1, -1, -1);
        this.scene.add(light2);

        const light3 = new THREE.AmbientLight(0x222222);
        this.scene.add(light3);

        window.addEventListener(
            'resize',
            this.onWindowResize.bind(this),
            false
        );
        document.addEventListener(
            'pointerdown',
            this.onPointerDown.bind(this),
            false
        );
        document.addEventListener(
            'pointerup',
            this.onPointerUp.bind(this),
            false
        );
    }

    initForgeParams() {
        this.forgeParams = {
            output: 'mesh',
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
            Forge: this.forge.bind(this),
            'Random Forge': () => {
                this.seedController.setValue(randomSeed());
                this.forge();
            },
            'Toggle Wireframe': () => {
                this.enableWireframe = !this.enableWireframe;
                if (this.swordModel) {
                    if (this.enableWireframe) {
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
            'Double Fuller': 'double_fuller',
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
            closeOnTop: true,
        });

        this.gui.domElement.id = 'gui';
        this.gui.add(guiFunctions, 'Random Forge');
        this.gui.add(guiFunctions, 'Forge');

        this.gui.add(guiFunctions, 'Random Seed').setValue(() => {
            this.seedController.setValue(randomSeed());
        });

        this.seedController = this.gui.add(this.forgeParams, 'seed');

        this.gui.add(this.forgeParams, 'template', supportedTemplates);

        const bladeOptions = this.gui.addFolder('Blade Options');
        bladeOptions.add(
            this.forgeParams.bladeParams,
            'crossSection',
            supportedCrossSections
        );
        bladeOptions.add(
            this.forgeParams.bladeParams,
            'tip',
            supportedBladeTips
        );
        bladeOptions.add(
            this.forgeParams.bladeParams,
            'edgeScaleTolerance',
            0,
            1
        );
        bladeOptions.addColor(this.forgeParams.bladeParams, 'color');

        const guardOptions = this.gui.addFolder('Guard Options');
        guardOptions.addColor(this.forgeParams.guardParams, 'color');

        const handleOptions = this.gui.addFolder('Handle Options');
        handleOptions.addColor(this.forgeParams.handleParams, 'color');

        const pommelOptions = this.gui.addFolder('Pommel Options');
        pommelOptions.addColor(this.forgeParams.pommelParams, 'color');

        this.gui.add(guiFunctions, 'Toggle Wireframe');

        document
            .getElementById('canvas-container')
            .appendChild(this.gui.domElement);
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.orbitControl.update();
        this.render();
    }

    async forge() {
        const swordGenerator = new Infiniforge.SwordGenerator();
        this.setGlTFDownload(false);
        try {
            this.scene.remove(this.swordModel);
            this.swordModel = (await swordGenerator.generate({
                ...this.forgeParams,
                output: 'mesh',
            })) as THREE.Mesh;

            this.setGlTFDownload(false);
            this.swordModel.rotation.y += Math.PI / 2;
            this.importedMaterial = this.swordModel.material;
            this.scene.add(this.swordModel);
            const exporter = new GLTFExporter();
            exporter.parse(
                this.swordModel,
                (gltf) => {
                    this.swordGlTF = JSON.stringify(gltf);
                    this.setGlTFDownload(true);
                },
                (error) => {
                    console.error(error);
                }
            );
        } catch (error) {
            // Catch generation errors
            console.error(error);
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

    onPointerDown(event: MouseEvent) {
        this.onDownPosition.x = event.offsetX;
        this.onDownPosition.y = event.offsetY;
    }

    onPointerUp(event: MouseEvent) {
        this.onUpPosition.x = event.offsetX;
        this.onUpPosition.y = event.offsetY;

        if (this.onDownPosition.distanceTo(this.onUpPosition) === 0)
            this.transformControl.detach();

        if (!this.swordModel) {
            return;
        }

        this.pointer.x = (event.offsetX / this.canvas.offsetWidth) * 2 - 1;
        this.pointer.y = -(event.offsetY / this.canvas.offsetHeight) * 2 + 1;

        this.raycaster.setFromCamera(this.pointer, this.camera);

        const intersects = this.raycaster.intersectObjects([this.swordModel]);

        if (intersects.length > 0) {
            const obj = intersects[0].object;
            if (obj !== this.transformControl.object) {
                this.transformControl.attach(obj);
            }
        }
    }

    setGlTFDownload(enable: boolean): void {
        const downloadButton = document.getElementById(
            'download-button'
        ) as HTMLButtonElement;
        if (enable && this.swordGlTF !== undefined) {
            downloadButton.disabled = false;
            (downloadButton.parentElement as HTMLAnchorElement).href =
                URL.createObjectURL(
                    new Blob([this.swordGlTF], {
                        type: 'application/gltf;charset=utf-8',
                    })
                );
        } else {
            downloadButton.disabled = true;
        }
    }
}

(() => {
    const app = new InfiniforgeApp();
    app.run();
})();
