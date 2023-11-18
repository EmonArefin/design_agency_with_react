import './projectCard.css'

const ProjectCard = ({project}) => {
    return (
        <div className='col-md-6'>
            <div className='project-card'>
                <img src={project["img"]} alt="Project Image" />
                <h4>{project["title"]}</h4>

            </div>
        </div>
    )
};

export default ProjectCard;