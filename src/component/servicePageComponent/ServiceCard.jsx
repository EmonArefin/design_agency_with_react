import './serviceCard.css';

const ServiceCard = ({service}) => {
    return (
        <div className='col-md-6'>
            <div className='service-card'>
                <h4>{service["title"]}</h4>
                <p>{service["description"]}</p>
                <img src={service["img"]} alt="Service Image" />
            </div>
        </div>
    );
};

export default ServiceCard;

