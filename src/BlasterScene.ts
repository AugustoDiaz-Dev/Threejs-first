import * as THREE from 'three'

// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
// import { MTLLoader } from 'three/examples/jsm/loaders/OBJLoader'

export default class BlasterScene extends THREE.Scene {

    // private readonly mtlLoader = new MTLLoader()
    // private readonly objLoader = new OBJLoader()


    initialize() {
        const geometry = new THREE.BoxGeometry()
        const material = new THREE.MeshPhongMaterial({
        color: 0xFFAD00
        })

        const cube = new THREE.Mesh(geometry, material)
        cube.position.z = -5
        cube.position.x = 0
        cube.position.y = -1

        this.add(cube)

        const light = new THREE.DirectionalLight(0xFFFFFF, 1)
        light.position.set(0,4,2)

        this.add(light)
            }
        
        update() {

        }

}