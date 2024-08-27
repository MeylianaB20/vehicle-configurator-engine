import React from 'react';
import { useEffect } from 'react'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import vehicleConfigs from '../vehicleConfigs'


const Arrow = ({ currentVehicle, setVehicle, setCarSelected}) => {

    const onChangeCar = (direction) => () => {
        const vehicleArray = Object.keys(vehicleConfigs.vehicles)

        const currentIndex = vehicleArray.indexOf(currentVehicle.id)

        let nextIndex
        if (direction === 'left') {
            nextIndex = currentIndex === 0 ? vehicleArray.length - 1 : currentIndex - 1
        } else {
            nextIndex = currentIndex === vehicleArray.length - 1 ? 0 : currentIndex + 1
        }
        const nextVehicle = vehicleArray[nextIndex]
        const nextVehicleName = vehicleConfigs.vehicles[nextVehicle].name

        setVehicle({id: nextVehicle, name: nextVehicleName})
    }

    const onSelectCar = () => () => {
        setCarSelected(true);
    }

    return (
        <div>
            <div className='arrow-left' onClick={onChangeCar('left')}>
                <FontAwesomeIcon icon={faChevronLeft} size='4x' />
            </div>
            <div className='arrow-right' onClick={onChangeCar('right')}>
                <FontAwesomeIcon icon={faChevronRight} size='4x' />
            </div>
            <div className='vehicle-name'>
                <h1>
                    <strong> {currentVehicle.name ? currentVehicle.name : 'No Vehicle Selected'} </strong>
                </h1>
            </div>
            <div className='button-select'>
                <button onClick={onSelectCar()}>Pilih Mobil</button>
            </div>
        </div>
    )
}

export default Arrow