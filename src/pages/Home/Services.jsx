import React from 'react';
import ServiceInfo from './ServiceInfo';
import cavity from "../../assets/images/cavity.png"
import floride from "../../assets/images/fluoride.png"
import whitening from "../../assets/images/whitening.png"

const Services = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-auto lg:mx-auto mx-10 lg:mx-10 my-32'>
            <ServiceInfo image={floride} serviceTitle='Floride Treatment'></ServiceInfo>
            <ServiceInfo image={cavity} serviceTitle='Cavity filling'></ServiceInfo>
            <ServiceInfo image={whitening} serviceTitle='Teath whiteing'></ServiceInfo>
        </div>
    );
};

export default Services;