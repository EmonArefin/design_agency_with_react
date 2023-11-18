import './subscribeSection.css'

const SubscribeSection = () => {
    return (
        <section className="subscribe-container">
            <div className="subscribe-content">
                <h5>SUBSCRIBE</h5>
                <h3>Subscribe To Get The Latest <br /> News About Us</h3>
                <p>Please Drop Your Email Below To Get Daily Update About What We Do</p>
            </div>
            <div className='subscribe-form'>
                <input type="email" placeholder='Enter Your Email Address' />
                <button className="form-submit-button align-self-center">Subscribe</button>
            </div>
            
        </section>
    );
};

export default SubscribeSection;