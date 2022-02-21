import { useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import block4 from '@assets/models/block4.glb'
import block8 from '@assets/models/block8.glb'
import block12 from '@assets/models/block12.glb'
import { Suspense, useEffect } from 'react'
import { Mesh, MeshBasicMaterial, MeshStandardMaterial, PointLight } from 'three'

const dict = {
  "PartA": {
    url: block4,
    key: 'Lego_4Block'
  },
  "PartB": {
    url: block8,
    key: 'Lego_8Block'
  },
  "PartC": {
    url: block12,
    key: 'Lego_12Block'
  },
}

export default function Preview({name='PartA'}:{name?:keyof (typeof dict)}){
  return <Canvas
    style={{
      width: '190px',
      height: '80px',
      marginLeft: '1rem',
      flex:'1 1 auto'
    }}
    dpr={[1, 2]}
    camera={{ 
      position: [0, 60, 120], 
      fov: 23,
      near: 0.1,
      far: 100000,
    }}
  >
     <pointLight position={[20, 20, 15]} />
     <pointLight position={[-20, 20, 15]} />
     <Suspense fallback={null}>
       <Model {...{name}}/>
     </Suspense>
  </Canvas>
}

const params = {
  "PartA": {
    color: '#8bc7d1',
    offset: 0
  },
  "PartB": {
    color: '#ec9fff',
    offset: 0.5
  },
  "PartC": {
    color: '#797cc7',
    offset: 1
  },
}

function Model({name='PartA'}:{name?:keyof typeof dict}){
  const { nodes }:{ nodes: {[key:string]: Mesh} } = useGLTF(dict[name].url)
  useEffect(()=>{
    nodes[dict[name].key].rotateY(params[name].offset*3.14/6)
  },[nodes])
  useFrame(({ clock }) => {
    nodes[dict[name].key].rotateY(0.005 )
  })

  return  <primitive object={nodes[dict[name].key]} position-y={10} scale={1.5}>
      <meshStandardMaterial attach="material" color={params[name].color} />
    </primitive> 

}