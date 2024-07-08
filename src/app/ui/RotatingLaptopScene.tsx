import * as THREE from 'three'
import { Suspense, useRef, useState } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
// https://github.com/pmndrs/drei
import { useGLTF, Detailed, Environment, Center, Text3D } from '@react-three/drei'
// https://github.com/pmndrs/react-postprocessing
// https://github.com/vanruesc/postprocessing
import { EffectComposer, DepthOfField, ToneMapping } from '@react-three/postprocessing'


interface ThreeDElementProps {
  text: string
  z: number
  index: number
  speed: number
}

function ThreeDElement(props: ThreeDElementProps) {
  const ref: any = useRef()
  const { viewport, camera } = useThree()
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -props.z])
  const [data] = useState({
    // Randomly distributing the objects along the vertical
    y: THREE.MathUtils.randFloatSpread(height * 2),
    // This gives us a random value between -1 and 1, we will multiply it with the viewport width
    x: THREE.MathUtils.randFloatSpread(2),
    // How fast objects spin, randFlost gives us a value between min and max, in this case 8 and 12
    spin: THREE.MathUtils.randFloat(8, 12),
    // Some random rotations, Math.PI represents 360 degrees in radian
    rX: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI
  })

  useFrame((state, dt) => {
    // Make the X position responsive, slowly scroll objects up at the Y, distribute it along the Z
    // dt is the delta, the time between this frame and the previous, we can use it to be independent of the screens refresh rate
    // We cap dt at 0.1 because now it can't accumulate while the user changes the tab, it will simply stop
    if (dt < 0.1) ref.current.position.set(props.index === 0 ? 0 : data.x * width, (data.y += dt * props.speed), -props.z)
    // Rotate the object around
    ref.current.rotation.set((data.rX += dt / data.spin), Math.sin(props.index * 1000 + state.clock.elapsedTime / 10) * Math.PI, (data.rZ += dt / data.spin))
    // If they're too far up, set them back to the bottom
    if (data.y > height * (props.index === 0 ? 4 : 1)) data.y = -(height * (props.index === 0 ? 4 : 1))
  })




  return (
    <mesh position={[-3, 2.5, -2]} rotation={[0, 0, 0]}>
      <Center>
        <Text3D font="/Space_Mono_Regular.json" size={0.5}> {`<${props.text}>`} <meshStandardMaterial color='orange' />
        </Text3D>
      </Center>
    </mesh>
  )
}
const elem = ["div", "li", "section", "button"]
function ThreeDElements({ speed = 1, count = 80, depth = 80, easing = (x: any) => Math.sqrt(1 - Math.pow(x - 1, 2)) }) {
  return (
    <Canvas flat gl={{ antialias: false }} dpr={[1, 1.5]} camera={{ position: [0, 0, 10], fov: 20, near: 0.01, far: depth + 15 }}>
      <color attach="background" args={['#ffbf40']} />
      <spotLight position={[10, 20, 10]} penumbra={1} decay={0} intensity={3} color="orange" />
      {Array.from({ length: count }, (_, i) => {
        return <ThreeDElement text={elem[Math.floor(Math.random()*elem.length)]} key={i} index={i} z={Math.round(easing(i / count) * depth)} speed={speed} />;
        }
      )}
      <Environment preset="sunset" />
      {/* Multisampling (MSAA) is WebGL2 antialeasing, we don't need it (faster)
          The normal-pass is not required either, saves a bit of performance */}
      <EffectComposer multisampling={0}>
        <DepthOfField target={[0, 0, 60]} focalLength={0.4} bokehScale={14} height={700} />
      </EffectComposer>
    </Canvas>
  )
}

export default function ThreeDElementsScene(){  return (
    <>
      <Suspense fallback={null}>
        <ThreeDElements />
      </Suspense>
    </>
)
}

