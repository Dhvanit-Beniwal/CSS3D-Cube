import './Cube.css'
import React from 'react'
import * as ReactDOMServer from 'react-dom/server';

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import {CSS3DObject, CSS3DRenderer} from 'three/examples/jsm/renderers/CSS3DRenderer'

const htmlContent = [
    <>Front</>,
    <>Right</>,
    <>Left</>,
    <>Back</>,
    <>Top</>,
    <>Bottom</>,
];

const getContainer = ()=>document.querySelector('#viewer');
export default function Cube(){
    React.useEffect(()=>{
        initialize(getContainer());
        animate();
        return ()=>{
            terminate();
        }
    }, [])
    return (
        <>
            <div id="viewer"></div>
        </>
    )
}

let camera, scene, renderer, controls;
let domContainer;
let cameraPosition = 1000;

function initialize(container){
    domContainer = container;
    camera = new THREE.PerspectiveCamera(75,domContainer.offsetWidth / domContainer.offsetHeight,0.1,1000);
    camera.position.z = cameraPosition;

    renderer = new CSS3DRenderer();
    renderer.setSize( domContainer.offsetWidth, domContainer.offsetHeight );
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = 0;

    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

    scene = new THREE.Scene()

    addObjects();

    domContainer.appendChild(renderer.domElement);
    window.addEventListener('resize', onWindowResize, false)
}
function animate(){
    renderer.render(scene, camera);
    controls.update();
    requestAnimationFrame(animate);
}
function terminate(){
    domContainer.removeChild(renderer.domElement);
    window.removeEventListener('resize', onWindowResize, false)
}

function addObjects(){
    let elements = createElements();
    
    elements.map(element=>{
        let object = new CSS3DObject(element.dom);
        object.position.copy( element.pos );
        object.rotation.copy( element.rot );
        scene.add(object)
        return object
    })
}

function createElements(){
    let elements = htmlContent.map(html=>{
        let div = document.createElement('div')
        div.innerHTML = ReactDOMServer.renderToStaticMarkup(html)
        div.className = 'face'
        return {dom: div, pos: undefined, rot: undefined}
    })

    elements[0].pos = new THREE.Vector3( 0, 0, 350 );
    elements[0].rot = new THREE.Euler( 0, 0, 0 )

    elements[1].pos = new THREE.Vector3( 350, 0, 0 );
    elements[1].rot = new THREE.Euler( 0, 90 * THREE.MathUtils.DEG2RAD, 0 )

    elements[2].pos = new THREE.Vector3( -350, 0, 0 );
    elements[2].rot = new THREE.Euler( 0, - 90 * THREE.MathUtils.DEG2RAD, 0 )

    elements[3].pos = new THREE.Vector3( 0, 0, -350 );
    elements[3].rot = new THREE.Euler( 0, 180 * THREE.MathUtils.DEG2RAD, 0 )

    elements[4].pos = new THREE.Vector3( 0, 350, 0 );
    elements[4].rot = new THREE.Euler( - 90 * THREE.MathUtils.DEG2RAD, 0, 0 )

    elements[5].pos = new THREE.Vector3( 0, - 350, 0 );
    elements[5].rot = new THREE.Euler( 90 * THREE.MathUtils.DEG2RAD, 0, 0 )

    return elements
}


function onWindowResize() {
    camera.aspect = domContainer.offsetWidth / domContainer.offsetHeight
    camera.updateProjectionMatrix()
    renderer.setSize(domContainer.offsetWidth, domContainer.offsetHeight)
}