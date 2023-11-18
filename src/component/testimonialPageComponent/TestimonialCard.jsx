import './testimonialCard.css'

const TestimonialCard = ({testimonial}) => {
    return (
        <div className="col-md-4">
            <div className="testimonail-card">
                <img src={testimonial["img"]} alt={name} />
                <p>{testimonial["description"]}</p>
                <h4>{testimonial["name"]}</h4>
                <h6>{testimonial["position"]}</h6>
            </div>
            
        </div>
    );
};

export default TestimonialCard;