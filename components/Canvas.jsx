import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, PerformanceMonitor } from '@react-three/drei'
import Environment from './Environment'
import Vehicle from './Vehicle'
import Screenshot from './Screenshot'

const ThreeCanvas = ({ currentVehicle, setVehicle, cameraAutoRotate }) => {
    return (
        <div id='vehicle'>
            <Canvas shadows>
                <OrbitControls
                    makeDefault
                    minDistance={5}
                    maxDistance={20}
                    maxPolarAngle={Math.PI / 2}
                    autoRotate={cameraAutoRotate}
                    autoRotateSpeed={-0.3}
                />
                <PerspectiveCamera makeDefault fov={30} position={[-15, 4, 16]}>
                    <pointLight position={[4, 2, 4]} intensity={0.75} />
                </PerspectiveCamera>

                <Suspense fallback={null}>
                    <Vehicle currentVehicle={currentVehicle} setVehicle={setVehicle} />
                </Suspense>

                <Environment />

                <Screenshot />
            </Canvas>
        </div>
    )
}

export default ThreeCanvas
