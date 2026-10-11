import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import './styles.css';
gsap.registerPlugin(ScrollTrigger);
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const mount=document.getElementById('scene'),loading=document.getElementById('model-loading'),line=loading.querySelector('i'),pct=loading.querySelector('em');
const scene=new THREE.Scene();scene.background=new THREE.Color(0x060A35);scene.fog=new THREE.Fog(0x060A35,55,140);
const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio,innerWidth<700?1.25:1.75));renderer.setSize(innerWidth,innerHeight);renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.1;renderer.localClippingEnabled=true;mount.appendChild(renderer.domElement);
const camera=new THREE.PerspectiveCamera(25,innerWidth/innerHeight,.1,300);camera.position.set(24,22,28);const cameraTarget=new THREE.Vector3(-4,14,0);camera.lookAt(cameraTarget);
scene.add(new THREE.HemisphereLight(0xb9c7d8,0x060A35,1.15));const key=new THREE.DirectionalLight(0xf5f4f1,3.1);key.position.set(25,45,30);scene.add(key);const rim=new THREE.SpotLight(0xff0099,2.2,100,Math.PI/5,.5);rim.position.set(-32,30,-24);rim.target.position.set(0,14,0);scene.add(rim,rim.target);
const ground=new THREE.Mesh(new THREE.PlaneGeometry(140,140),new THREE.MeshStandardMaterial({color:0x090D32,roughness:.82,metalness:.02}));ground.rotation.x=-Math.PI/2;ground.position.y=-.12;scene.add(ground);
const grid=new THREE.GridHelper(110,44,0x33406a,0x1a214d);grid.position.y=-.08;grid.material.transparent=true;grid.material.opacity=.35;scene.add(grid);
const datumGroup=new THREE.Group();for(let i=0;i<18;i++){const g=new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-36,-....[truncated]