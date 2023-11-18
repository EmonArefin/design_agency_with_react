import '../pageTitleSection/pageTitle.css'
import { MdKeyboardArrowRight } from 'react-icons/md';
import { NavLink } from 'react-router-dom';


const PageTitle = ({title}) => {
    return (
        <section className="page-title-section">
            <div className="container">
                <div className="page-title-content">
                    <h2>{title}</h2>
                    <p> <NavLink to="/">Home </NavLink> <MdKeyboardArrowRight /> <span className='active'>{title}</span> </p>
                    
                </div>
            </div>
        </section>
    );
};

export default PageTitle;


