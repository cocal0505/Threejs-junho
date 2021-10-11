import './style.css';
import * as THREE from 'three'
import gsap from "gsap"













//-------------------------------------------------------//





//Sizes 카메라 사이즈
const sizes ={
    width:800,
    height:600
}





//-------------------------------------------------------//






//render
const canvas = document.querySelector('.webgl')  // 캔버스 불러옴

const renderer =  new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)





//-------------------------------------------------------//




//장면 
const scene = new THREE.Scene()





//-------------------------------------------------------//





//Axes.helper 좌표
const axesHelper = new THREE.AxesHelper(2)  // 숫자는 axes 의 한 유닛을 뜻함
scene.add(axesHelper)




//-------------------------------------------------------//





//camera 
const camera = new THREE.PerspectiveCamera(60)

scene.add(camera)
// console.log("object to camera distace" , 
// mesh.position.distanceTo(camera.position))


camera.position.set(0,0,6)
// camera.lookAt(mesh.position)// 카메라를 물체  중심에 고정 





//-------------------------------------------------------//




// // animation 
// const tick = () =>
// {  

//     // 자바스크립트 time 내장함수 사용 
//     // const currnettime = Date.now()
//     // const deltaTime = currnettime - time 
//     // time = currnettime 
 
//     // const elapsedTime = clock.getElapsedTime()
    


//    //update objects
//     // camera.position.y = Math.cos(elapsedTime)
//     // camera.position.x = Math.sin(elapsedTime)
//     // camera.lookAt(group.position) 
//     //render 
    
//     window.requestAnimationFrame(tick)
// }
// tick()
renderer.render(scene,camera)



//-------------------------------------------------------//


// gourp & object  물체 그룹핑
const group = new THREE.Group()
// group.position.y =1
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0xff0000})
)
group.add(cube1)
// mesh.position.normalize() // 카메라를 원점으로 조절
//scale
// mesh.scale.x = 2
// mesh.scale.y = 2
// mesh.scale.z = 2
// mesh.scale.set(2,0.5,0.5)


//rotate
// mesh.rotation.reorder('YXZ')
// mesh.rotation.y = Math.PI *0.25
// mesh.rotation.x = Math.PI *0.25


// const cube2 = new THREE.Mesh(
//     new THREE.BoxGeometry(1,1,1),
//     new THREE.MeshBasicMaterial({color: 0x00ff00})
    
// )
// cube2.position.x = 3
// group.add(cube2)

// const cube3 = new THREE.Mesh(
//     new THREE.BoxGeometry(1,1,1),
//     new THREE.MeshBasicMaterial({color: 0x00ff00})
    
// )
// cube3.position.x = -3
// group.add(cube3)



//-------------------------------------------------------//




//clock // 0 부터 무한대 
const clock = new THREE.Clock()




//Time
// let time = Date.now()





//gsap
// gsap.to(cube1.position,{duration:1, delay:1, x:2})