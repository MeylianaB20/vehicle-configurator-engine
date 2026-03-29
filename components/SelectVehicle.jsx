import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, PerformanceMonitor } from '@react-three/drei'
import Environment from './Environment'
import Vehicle from './Vehicle'
import Screenshot from './Screenshot'

const SelectVehicle = ({ currentVehicle, setVehicle, cameraAutoRotate }) => {
    return (
        <div id='vehicle'>
            <Canvas shadows>
                <PerformanceMonitor onDecline={() => {}} />
                
                <PerspectiveCamera makeDefault fov={60} position={[-4, 1.2, 6.5]} rotation={[0, -0.6, 0]}>
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

export default SelectVehicle
