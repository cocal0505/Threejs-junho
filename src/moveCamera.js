import * as THREE from 'three'

/**
 * Curosr
 */

 const size ={
    width:800,
    height:600
}
const cursor = {
    x:0,
    y:0
}
window.addEventListener('mousemove',(event)=>{
 
    // console.log("y",event.clientY)
    cursor.x = event.clientX / size.width -0.5
    cursor.y = -(event.clientY / size.width -0.5)
    console.log("x",cursor.x)
    console.log("y",cursor.y)
})


const scene = new THREE.Scene()
const canvas = document.querySelector('.webgl')
const axesHelper = new THREE.AxesHelper(2)
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1,5,5,5),
    new THREE.MeshBasicMaterial({color: 0x57A3F9 })
    
)


const camera = new THREE.PerspectiveCamera(60,size.width/ size.height,0.1,100)

scene.add(cube1)
scene.add(camera)
scene.add(axesHelper)



const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize( size.width, size.height)


// const clock = new THREE.Clock()


//update camera
const animation = ()=>{
    // const elapsedTime = clock.getElapsedTime()
   // cube1.rotation.y= elapsedTime
    // cube1.position.x = cursor.x
    // cube1.position.y = cursor.y
    camera.position.x = Math.sin(cursor.x*Math.PI*2) *3
    camera.position.z = Math.cos(cursor.x*Math.PI*2) *3
    camera.position.y = cursor.y*5
    camera.lookAt(cube1.position)
 
    requestAnimationFrame( animation );
    renderer.render(scene,camera)
}
animation()