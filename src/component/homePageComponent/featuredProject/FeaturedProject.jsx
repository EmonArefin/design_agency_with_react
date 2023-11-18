import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loader from '../../commonComponent/Loader';
import '../featuredProject/featuredProject.css';

const FeaturedProject = () => {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('database/featuredProjectData.json');
                const data = await response.json();
                setProjectData(data);
            } catch (error) {
                console.error('Error fetching project data:', error);
            }
        };
        fetchData();
    }, []);

    if (projectData === null) {
        return <Loader />;
    }

    const [leftFeaturedProject, ...restFeaturedProjects] = projectData;

const ProjectCard = ({ data }) => (
    <div className="col-md-3 custom-card">
        <div className="stat-card">
            <img src={data['image']} alt="Activity" />
            <p>{data['date']}</p>
            <h5>{data['title']}</h5>
        </div>
    </div>
);

    const chunkArray = (arr, size) => {
        return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
            arr.slice(index * size, index * size + size)
        );
    };

    const chunkedProjects = chunkArray(restFeaturedProjects, 2);

    return (
        <div className='container-fluid pt-5' style={{ backgroundColor: '#D7F5DC', paddingLeft: '1rem'}}>
            <div className="mb-5" style={{ paddingLeft: '1rem' }}>
                <p className="medium" style={{ fontSize: '20px', color: '#20B15A' }}>
                    Featured Project
                </p>
                <h3 className="semi-bold" style={{ fontSize: '30px' }}>
                    We provide the Perfect Solution <br /> to your business growth
                </h3>
            </div>
            <Row className="mb-5" style={{ paddingLeft: '1rem'}}>
                <Col className="heroCol mt-5" md={6}>
                    <img style={{marginBottom: '10px'}} src={leftFeaturedProject['image']} alt="" />
                    <p>{leftFeaturedProject['date']} </p>
                    <h4>{leftFeaturedProject['title']} </h4>
                </Col>
                <Col md={6}>
                    {chunkedProjects.map((chunk, rowIndex) => (
                        <Row key={rowIndex} className="mb-5">
                            {chunk.map((data, colIndex) => (
                                <ProjectCard
                                    key={colIndex}
                                    data={data}
                                    isLeftCard={colIndex === 0 && rowIndex === 0}
                                />
                            ))}
                        </Row>
                    ))}
                </Col>
            </Row>
        </div>
    );
};

export default FeaturedProject;



