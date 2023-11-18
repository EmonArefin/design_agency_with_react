import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './teamCard.css'

const TeamCard = ({team}) => {
    return (
        <div className='col-md-4'>
            <div className='team-member-card'>
                <img src={team["image"]} alt="" />
                <h3>{team["name"]}</h3>
                <ul className='member-social-links' style={{ listStyle: 'none' }}>
                    <li><a href={team["facebook"]}> <FaFacebookF />   </a></li>
                    <li><a href={team["twitter"]}> <FaTwitter />  </a></li>
                    <li><a href={team["instagram"]}> <FaInstagram /> </a></li>
                </ul>
            </div>
            
        </div>
    );
};

export default TeamCard;