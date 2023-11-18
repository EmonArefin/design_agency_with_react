import { FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../footerSection/footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className='footer-text'>
                            <img className='footer-logo' src='https://media.licdn.com/dms/image/D560BAQE2vz8hsERqog/company-logo_200_200/0/1690954049177/microters_logo?e=2147483647&v=beta&t=auC-IeLtYk2BOpTES8GZOXb74GBq3hgwYKh0_7EeyBs' alt="" />
                            <p>Some footer text about the <br /> Agency. Just a little description to <br /> help people understand you better</p>
                            <ul className='social-icons d-flex' style={{ listStyle: 'none' }}>
                                <li ><a href="https://www.facebook.com/emonarefinshovon/" target="_blank"> <FaFacebookF />  </a></li>
                                <li ><a href="https://wa.me/1400264525" target="_blank"> <FaWhatsapp />  </a></li>
                                <li ><a href="https://www.linkedin.com/in/emonarefin/" target="_blank"> <FaLinkedinIn /> </a></li>
                                <li ><a href="https://www.instagram.com/emonarefinshovon/" target="_blank"> <FaInstagram /> </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex me-5">
                        <div className='footer-text'>
                            <h5 className='mb-3'>Quick Links</h5>
                            <ul className='quick-link' style={{ listStyle: 'none' }}>
                                <li> <Link to="/services">Services</Link> </li>
                                <li> <Link to="/portfolio">Portfolio</Link> </li>
                                <li> <Link to="/aboutUs">About Us</Link> </li>
                                <li> <Link to="/contactUs">Contact Us</Link> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex">
                        <div className='footer-text'>
                            <h5>Address</h5>
                            <address>
                                Design Agency Head Office. <br /> Airport Road <br /> United Arab Emirate
                            </address>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p className='copyright'>Copyright Design Agency {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

