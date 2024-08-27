import { useCallback } from 'react'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import vehicleConfigs from '../vehicleConfigs'


const Names = ({ currentVehicle}) => {

    return (
        <div className="vehicle-name">
            <h1>
                <strong> {currentVehicle.name ? currentVehicle.name : 'No Vehicle Selected'} </strong>
            </h1>
        </div>
    )
}

export default Names
