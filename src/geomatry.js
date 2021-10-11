import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import './style.css'
/**
 * Curosr
 */

 const size ={
    width:window.innerWidth,
    height:window.innerHeight
}



const cursor = {
    x:0,
    y:0
}
window.addEventListener('mousemove',(event)=>{
 
    // console.log("y",event.clientY)
    cursor.x = event.clientX / size.width -0.5
    cursor.y = -(event.clientY / size.width -0.5)
    // console.log("x",cursor.x)
    // console.log("y",cursor.y)
})


const scene = new THREE.Scene()
const canvas = document.querySelector('.webgl')
const axesHelper = new THREE.AxesHelper(2)
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1,5,5,5),
    new THREE.MeshBasicMaterial({color: 0x57A3F9 })
    
)


const camera = new THREE.PerspectiveCamera(60,size.width/ size.height,0.1,100)
camera.position.z=5

scene.add(cube1)
scene.add(camera)
scene.add(axesHelper)



const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})


//반응형
window.addEventListener('resize',()=>{
    //update size
    size.width = window.innerWidth
    size.height = window.innerHeight


    //update camera
    camera.aspect  = size.width / size.height
    camera.updateProjectionMatrix()

    //update renderer

    renderer.setSize(size.width , size.height)
    //픽셀
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))

})

// 사파리 호환 
window.addEventListener('dblclick',()=>{

    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElemnt
    if(!fullscreenElement){
     
        if(canvas.requestFullscreen){
            canvas.requestFullscreen()
        }else if(canvas.webkitRequestFullscreen){
           canvas.webkitRequestFullscreen() 
        }

    }else{
        if(document.exitFullscreen)
        {
            document.exitFullscreen()
        }
        else if(document.webkitExitFullscreen){
            document.webkitExitFullscreen
        }

    }
})





renderer.setSize( size.width, size.height)

const controls = new OrbitControls(camera,canvas)
// controls.target.y =1
// controls.update()
//update camera
controls.enableDamping = true


const animation = ()=>{
    controls.update()    
    requestAnimationFrame( animation );
    renderer.render(scene,camera)
}
animation()