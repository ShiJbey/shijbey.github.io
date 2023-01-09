(()=>{var t,e={124:(t,e,o)=>{"use strict";o.d(e,{Z:()=>s});var n=o(537),i=o.n(n),r=o(645),a=o.n(r)()(i());a.push([t.id,".canvas-container{width:100%;height:600px;position:relative}canvas{width:100%;height:100%}@media only screen and (max-width: 500px){#gui{width:100%}.canvas-container{width:100%;height:65vh;position:relative}#download-button{position:block;width:100%}}#gui{position:absolute;top:0px;left:0px}#download-button{position:absolute;bottom:10px;right:10px;height:60px;width:175px}#download-button button{background-color:gray;width:100%;height:100%;font-weight:bold;color:#fff;box-shadow:#000}#download-button button:hover{background-color:#d4d4d4}#download-button button:active{background-color:#caa2a2}","",{version:3,sources:["webpack://./src/styles/infiniforge.scss"],names:[],mappings:"AAEA,kBACI,UAAA,CACA,YAAA,CACA,iBAAA,CAGF,OACE,UAAA,CACA,WAAA,CAGF,0CACE,KACE,UAAA,CAGF,kBACE,UAAA,CACA,WAAA,CACA,iBAAA,CAGF,iBACE,cAAA,CACA,UAAA,CAAA,CAIJ,KACE,iBAAA,CACA,OAAA,CACA,QAAA,CAGF,iBACE,iBAAA,CACA,WAAA,CACA,UAAA,CACA,WAAA,CACA,WAAA,CAGF,wBACE,qBAAA,CACA,UAAA,CACA,WAAA,CACA,gBAAA,CACA,UAAA,CACA,eAAA,CAGF,8BACE,wBAAA,CAGF,+BACE,wBAAA",sourcesContent:["/* Infiniforge Stuff */\n\n.canvas-container {\n    width: 100%;\n    height: 600px;\n    position: relative;\n  }\n  \n  canvas {\n    width: 100%;\n    height: 100%;\n  }\n  \n  @media only screen and (max-width: 500px) {\n    #gui {\n      width: 100%;\n    }\n  \n    .canvas-container {\n      width: 100%;\n      height: 65vh;\n      position: relative;\n    }\n  \n    #download-button {\n      position: block;\n      width: 100%;\n    }\n  }\n  \n  #gui {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n  }\n  \n  #download-button {\n    position: absolute;\n    bottom: 10px;\n    right: 10px;\n    height: 60px;\n    width: 175px;\n  }\n  \n  #download-button button {\n    background-color: grey;\n    width: 100%;\n    height: 100%;\n    font-weight: bold;\n    color: white;\n    box-shadow: black;\n  }\n  \n  #download-button button:hover {\n    background-color: rgb(212, 212, 212);\n  }\n  \n  #download-button button:active {\n    background-color: rgb(202, 162, 162);\n  }"],sourceRoot:""}]);const s=a},297:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>w});var n=o(379),i=o.n(n),r=o(795),a=o.n(r),s=o(569),d=o.n(s),h=o(565),l=o.n(h),c=o(216),u=o.n(c),A=o(589),m=o.n(A),g=o(124),f={};f.styleTagTransform=m(),f.setAttributes=l(),f.insert=d().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=u(),i()(g.Z,f);const w=g.Z&&g.Z.locals?g.Z.locals:void 0},836:(t,e,o)=>{"use strict";const n=o(477),i=o(376),r=o(878),a=o(365),s=o(327),d=o(179);function h(t){return Math.floor(Math.random()*Math.floor(t))}function l(t=7){let e="";for(let o=0;o<t;o++){const t=Math.random();e+=t<=.33?String.fromCharCode(48+h(10)):t>.33&&t<=.66?String.fromCharCode(97+h(25)):String.fromCharCode(65+h(25))}return e}o(297);const c=new n.MeshBasicMaterial({color:328965,wireframe:!0});(new class{constructor(){this.canvas=null,this.forgeParams={},this.swordModel=null,this.enableWireframe=!1,this.gui=null,this.renderer=null,this.scene=null,this.camera=null,this.orbitControl=null,this.transformControl=null,this.raycaster=new n.Raycaster,this.pointer=new n.Vector2,this.onUpPosition=new n.Vector2,this.onDownPosition=new n.Vector2,this.init()}init(){this.initThree(),this.initForgeParams(),this.onWindowResize.bind(this),this.animate.bind(this)}initThree(){this.canvas=document.getElementById("threejs-canvas"),this.renderer=new n.WebGLRenderer({canvas:this.canvas,antialias:!0});const t=this.renderer.domElement.getBoundingClientRect();this.renderer.setSize(t.width,t.height),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0,this.scene=new n.Scene,this.scene.background=new n.Color(15790320);const e=t.width/t.height;this.camera=new n.PerspectiveCamera(75,e,.1,1e3),this.camera.position.z=2,this.camera.position.y=1,this.camera.updateProjectionMatrix(),this.scene.add(this.camera);const o=new n.PlaneGeometry(200,200);o.rotateX(-Math.PI/2);const i=new n.ShadowMaterial({opacity:.2}),r=new n.Mesh(o,i);r.position.y=-10,r.receiveShadow=!0,this.scene.add(r);const d=new n.GridHelper(200,100);d.position.y=-9.9,this.scene.add(d),this.orbitControl=new a.OrbitControls(this.camera,this.canvas),this.orbitControl.enableDamping=!0,this.orbitControl.dampingFactor=.05,this.orbitControl.minDistance=.5,this.orbitControl.enableZoom=!0,this.orbitControl.enableRotate=!0,this.orbitControl.addEventListener("change",this.render.bind(this)),this.transformControl=new s.TransformControls(this.camera,this.canvas),this.transformControl.addEventListener("change",this.render.bind(this)),this.transformControl.addEventListener("dragging-changed",(t=>{this.orbitControl.enabled=!t.value})),this.scene.add(this.transformControl);const h=new n.DirectionalLight(16777215);h.position.set(1,1,1),this.scene.add(h);const l=new n.DirectionalLight(13421772);l.position.set(-1,-1,-1),this.scene.add(l);const c=new n.AmbientLight(2236962);this.scene.add(c),window.addEventListener("resize",this.onWindowResize.bind(this),!1),document.addEventListener("pointerdown",this.onPointerDown.bind(this),!1),document.addEventListener("pointerup",this.onPointerUp.bind(this),!1)}initForgeParams(){this.forgeParams={output:"mesh",seed:"Enter a seed value",template:"random",bladeParams:{color:"#7f7f7f",crossSection:"random",tip:"random",edgeScaleTolerance:.1},guardParams:{color:"#7f5100"},handleParams:{color:"#cc5100"},pommelParams:{color:"#e5cc59"}};const t={"Random Seed":()=>{},Forge:this.forge.bind(this),"Random Forge":()=>{this.seedController.setValue(l()),this.forge()},"Toggle Wireframe":()=>{this.enableWireframe=!this.enableWireframe,this.swordModel&&(this.enableWireframe?this.swordModel.material=c:this.swordModel.material=this.importedMaterial)}};this.gui=new i.GUI({name:"Infiniforge Playground",closeOnTop:!0}),this.gui.domElement.id="gui",this.gui.add(t,"Random Forge"),this.gui.add(t,"Forge"),this.gui.add(t,"Random Seed").setValue((()=>{this.seedController.setValue(l())})),this.seedController=this.gui.add(this.forgeParams,"seed"),this.gui.add(this.forgeParams,"template",{Random:"random",Short:"short",Long:"long",Great:"great",Katana:"katana"});const e=this.gui.addFolder("Blade Options");e.add(this.forgeParams.bladeParams,"crossSection",{Random:"random",Diamond:"diamond","Hallow Ground":"hallow_ground",Hexagonal:"hexagonal","Thickened Diamond":"thickened_diamond",Lenticular:"lenticular",Fuller:"fuller","Double Fuller":"double_fuller","Broad Fuller":"broad_fuller","Single edge":"single_edge"}),e.add(this.forgeParams.bladeParams,"tip",{Random:"random",Standard:"standard",Square:"square",Rounded:"rounded",Clip:"clip"}),e.add(this.forgeParams.bladeParams,"edgeScaleTolerance",0,1),e.addColor(this.forgeParams.bladeParams,"color"),this.gui.addFolder("Guard Options").addColor(this.forgeParams.guardParams,"color"),this.gui.addFolder("Handle Options").addColor(this.forgeParams.handleParams,"color"),this.gui.addFolder("Pommel Options").addColor(this.forgeParams.pommelParams,"color"),this.gui.add(t,"Toggle Wireframe"),document.getElementById("canvas-container").appendChild(this.gui.domElement)}render(){this.renderer.render(this.scene,this.camera)}animate(){requestAnimationFrame(this.animate.bind(this)),this.orbitControl.update(),this.render()}async forge(){const t=new d.SwordGenerator;this.setGlTFDownload(!1);try{this.scene.remove(this.swordModel),this.swordModel=await t.generate({...this.forgeParams,output:"mesh"}),this.setGlTFDownload(!1),this.swordModel.rotation.y+=Math.PI/2,this.importedMaterial=this.swordModel.material,this.scene.add(this.swordModel),(new r.GLTFExporter).parse(this.swordModel,(t=>{this.swordGlTF=JSON.stringify(t),this.setGlTFDownload(!0)}),(t=>{console.error(t)}))}catch(t){console.error(t)}}run(){this.animate()}onWindowResize(){this.canvas.style.width="100%",this.canvas.style.height="100%",this.canvas.width=this.canvas.offsetWidth,this.canvas.height=this.canvas.offsetHeight,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.canvas.width,this.canvas.height)}onPointerDown(t){this.onDownPosition.x=t.offsetX,this.onDownPosition.y=t.offsetY}onPointerUp(t){if(this.onUpPosition.x=t.offsetX,this.onUpPosition.y=t.offsetY,0===this.onDownPosition.distanceTo(this.onUpPosition)&&this.transformControl.detach(),!this.swordModel)return;this.pointer.x=t.offsetX/this.canvas.offsetWidth*2-1,this.pointer.y=-t.offsetY/this.canvas.offsetHeight*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const e=this.raycaster.intersectObjects([this.swordModel]);if(e.length>0){const t=e[0].object;t!==this.transformControl.object&&this.transformControl.attach(t)}}setGlTFDownload(t){const e=document.getElementById("download-button");t&&void 0!==this.swordGlTF?(e.disabled=!1,e.parentElement.href=URL.createObjectURL(new Blob([this.swordGlTF],{type:"application/gltf;charset=utf-8"}))):e.disabled=!0}}).run()},42:()=>{}},o={};function n(t){var i=o[t];if(void 0!==i)return i.exports;var r=o[t]={id:t,loaded:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=e,n.amdD=function(){throw new Error("define cannot be used indirect")},n.amdO={},t=[],n.O=(e,o,i,r)=>{if(!o){var a=1/0;for(l=0;l<t.length;l++){for(var[o,i,r]=t[l],s=!0,d=0;d<o.length;d++)(!1&r||a>=r)&&Object.keys(n.O).every((t=>n.O[t](o[d])))?o.splice(d--,1):(s=!1,r<a&&(a=r));if(s){t.splice(l--,1);var h=i();void 0!==h&&(e=h)}}return e}r=r||0;for(var l=t.length;l>0&&t[l-1][2]>r;l--)t[l]=t[l-1];t[l]=[o,i,r]},n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),(()=>{var t={305:0};n.O.j=e=>0===t[e];var e=(e,o)=>{var i,r,[a,s,d]=o,h=0;if(a.some((e=>0!==t[e]))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(d)var l=d(n)}for(e&&e(o);h<a.length;h++)r=a[h],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(l)},o=self.webpackChunkshijbey_github_io=self.webpackChunkshijbey_github_io||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))})(),n.nc=void 0;var i=n.O(void 0,[540],(()=>n(836)));i=n.O(i)})();
//# sourceMappingURL=infiniforge.bundle.js.map