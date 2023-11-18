import { useEffect, useState } from 'react';
import Loader from '../commonComponent/Loader';
import ServiceCard from './ServiceCard';


const ServiceList = () => {
    const [serviceData, setServiceData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("database/serviceData.json");
                const data = await response.json();
                setServiceData(data);
            } catch (error) {
                console.error("Error fetching service list data:", error);
            }
        };
        fetchData();
    }, []);

    if(serviceData === null){
        return <Loader/>
    }

    return (
        <section className='container pt-5'>
            <div className='mb-5' style={{ paddingLeft: '1rem'}}>
                <p className="medium" style={{ fontSize: '20px', color: '#20B15A' }}>OUR ALL SERVICES</p>
                <h3 className="semi-bold" style={{ fontSize: '30px'}}>We Provide BestWeb design <br /> services</h3>
            </div>
            <div className="row gy-4">
                {
                    serviceData.map((service, index) => <ServiceCard key={index} service={service} />  )
                }
            </div>
        </section>
    );
};

export default ServiceList;