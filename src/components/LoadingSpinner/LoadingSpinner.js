import React from 'react'
import { Spinner } from 'react-bootstrap'
import './loadingspinner.css'

const LoadingSpinner = () => {
    return (
            <div className='spinnerContainer'> 
                <Spinner animation="border" variant="danger"/>
            </div>
    )
}

export default LoadingSpinner
