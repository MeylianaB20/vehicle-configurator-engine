import { useCallback } from 'react'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import vehicleConfigs from '../vehicleConfigs'


const Buttons = ({ currentVehicle, setVehicle, cameraAutoRotate, setCameraAutoRotate, onBack }) => {
    const onChangeObject = (number) => () => {
        
        if(number === 1) {
            setVehicle({ addons: { box: 'container' }});
        } else if(number === 2) {
            setVehicle({ addons: { box: 'open_box' }});
        } else if(number === 3) {
            setVehicle({ addons: { box: 'flat' }});
        } 
    }

    const onAllow360 = () => () => {
        setCameraAutoRotate(!cameraAutoRotate);
    }

    return (
        <div>
            <div className='button-back'>
                <button onClick={onBack}>Back to home</button>
            </div>
            <div className='button-select-object'>
                {/* <div className='arrow-left-object' onClick={onChangeObject('left')}>
                    <FontAwesomeIcon icon={faChevronLeft} size='4x' />
                </div> */}
                <div className='vehicle-name'>
                    <h1>
                        <strong> {currentVehicle.name ? currentVehicle.name : 'No Vehicle Selected'} </strong>
                    </h1>
                </div>
                <div className='select-container'>
                    <button onClick={onChangeObject(1)}>BODY 1</button>
                    <button onClick={onChangeObject(2)}>BODY 2</button>
                    <button onClick={onChangeObject(3)}>BODY 3</button>
                </div>
                {/* <div className='arrow-right-object' onClick={onChangeObject('right')}>
                    <FontAwesomeIcon icon={faChevronRight} size='4x' />
                </div> */}
            </div>

            <div className='button-360'>
                <button onClick={onAllow360()}>Auto Rotate</button>
            </div>

            <div className='paint-select'>
                <div className=''>
                    <label>Car Color</label><br />
                    <input type='color' value={currentVehicle.color || ''} onChange={(e) => setVehicle({ color: e.target.value })} />
                </div>
                <div className=''>
                    <label>Container Color</label><br />
                    <input type='color' value={currentVehicle.container_color || ''} onChange={(e) => setVehicle({ container_color: e.target.value })} />
                </div>
            </div>
        </div>
    )
}

export default Buttons
