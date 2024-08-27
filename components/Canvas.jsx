import React, { useState, useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, PerformanceMonitor } from '@react-three/drei'
import { DefaultLoadingManager } from 'three'
import Environment from './Environment'
import Loader from './Loader'
import Vehicle from './Vehicle'
import Screenshot from './Screenshot'

const ThreeCanvas = ({ currentVehicle, setVehicle, cameraAutoRotate }) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [performanceDegraded, setPerformanceDegraded] = useState(false)

    // Set loaded state based on default loading manager.
    useEffect(() => {
        const loadingManager = DefaultLoadingManager
        loadingManager.onStart = () => {
            console.log("Loading started");
            setIsLoaded(false)
        }
        loadingManager.onLoad = () => {
            console.log("Loading completed");
            setIsLoaded(true)
        }

        return () => {
            loadingManager.onStart = null
            loadingManager.onLoad = null
        }
    }, [])

    // Handle WebGL context loss
    useEffect(() => {
        const handleContextLost = (event) => {
            event.preventDefault();
            console.warn("WebGL context lost");
            // Optionally, reset your state or notify the user
            setIsLoaded(false); // Reset loaded state
        };

        const handleContextRestored = () => {
            console.log("WebGL context restored");
            // Reinitialize your scene or resources here
            setIsLoaded(true); // Restore loaded state
        };

        window.addEventListener('webglcontextlost', handleContextLost, false);
        window.addEventListener('webglcontextrestored', handleContextRestored, false);

        return () => {
            window.removeEventListener('webglcontextlost', handleContextLost);
            window.removeEventListener('webglcontextrestored', handleContextRestored);
        };
    }, []);

    return (
        <div id='vehicle'>
            {/* {!isLoaded && <Loader />} */}
            <Canvas shadows>
                <PerformanceMonitor onDecline={() => setPerformanceDegraded(true)} />

                <OrbitControls
                    makeDefault
                    // target={[0, 0.95, 0]}
                    minDistance={5}
                    maxDistance={20}
                    maxPolarAngle={Math.PI / 2}
                    autoRotate={cameraAutoRotate}
                    autoRotateSpeed={-0.3}
                    // dampingFactor={0.025}
                    // enabled={cameraAutoRotate}
                />
                <PerspectiveCamera makeDefault fov={30} position={[-15, 4, 16]}>

                {/* <PerspectiveCamera makeDefault fov={40} position={[-4.5, 1.5, 6.5]} rotation={[0, -0.6, 0]}> */}
                    <pointLight position={[4, 2, 4]} intensity={0.75} />
                </PerspectiveCamera>

                <Suspense fallback={null}>
                    <Vehicle currentVehicle={currentVehicle} setVehicle={setVehicle} />
                </Suspense>

                <Environment performanceDegraded={performanceDegraded} />

                <Screenshot />
            </Canvas>
        </div>
    )
}

export default ThreeCanvas
