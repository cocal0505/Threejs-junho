// import './style.css';
import * as THREE from 'three'



const scene = new THREE.Scene()



const canvas = document.querySelector('.webgl')
const axesHelper = new THREE.AxesHelper(2)
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1,5,5,5),
    new THREE.MeshBasicMaterial({color: 0x57A3F9 })
    
)

const size ={
    width:800,
    height:600
}

const camera = new THREE.PerspectiveCamera(45,size.width/ size.height,0.1,100)
// const aspectRatio = size.width / size.height
// const camera = new THREE.OrthographicCamera(-1*aspectRatio,1*aspectRatio,1,-1,0.1,100)
camera.position.set(2,2,4)

scene.add(cube1)
scene.add(camera)
scene.add(axesHelper)
camera.lookAt(cube1.position)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize( size.width, size.height)


const clock = new THREE.Clock()

const animation = ()=>{
    const elapsedTime = clock.getElapsedTime()
    // cube1.position.x = Math.cos(elapsedTime)
    cube1.rotation.y= elapsedTime
    requestAnimationFrame( animation );
    renderer.render(scene,camera)
}
animation()





// const scene = new THREE.Scene();
// 			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// 			const renderer = new THREE.WebGLRenderer();
// 			renderer.setSize( window.innerWidth, window.innerHeight );
// 			document.body.appendChild( renderer.domElement );

// 			const geometry = new THREE.BoxGeometry();
// 			const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// 			const cube = new THREE.Mesh( geometry, material );
// 			scene.add( cube );

// 			camera.position.z = 5;

// 			// const animate = function () {
// 			// 	// requestAnimationFrame( animate );

// 			// 	// cube.rotation.x += 0.01;
// 			// 	// cube.rotation.y += 0.01;

			
// 			// };

// 			// animate();
//             renderer.render( scene, camera );