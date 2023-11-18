import { useEffect, useState } from "react";
import Loader from "../commonComponent/Loader";
import ProjectCard from './ProjectCard';


const ProjectList = () => {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("database/projectData.json");
                const data = await response.json();
                setProjectData(data);
            } catch (error) {
                console.error("Error fetching project list data:", error);
            }
        };
        fetchData();
    }, []);

    if(projectData === null){
        return <Loader/>
    }

    return (
        <section className='container pt-5'>
            <div className='mb-5' style={{ paddingLeft: '1rem'}}>
                <p className="medium" style={{ fontSize: '20px', color: '#20B15A' }}>ALL PROJECT</p>
                <h3 className="semi-bold" style={{ fontSize: '30px'}}>Better Agency/SEO Solution At <br /> Your Fingertips</h3>
            </div>
            <div className="row gy-4">
                {
                    projectData.map( (project, index) =><ProjectCard key={index}  project={project} />  )
                }
            </div> 
        </section>
    );
};

export default ProjectList;