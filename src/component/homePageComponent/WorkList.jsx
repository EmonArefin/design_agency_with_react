import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Loader from "../commonComponent/Loader";

const WorkList = () => {
    const [workData, setWorkData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("database/workListData.json");
                const data = await response.json();
                setWorkData(data);
            } catch (error) {
                console.error("Error fetching work data:", error);
            }
        };
        fetchData();
    }, []);

    if (workData === null) {
        return <Loader/>;
    }

    return (
        <div className='container-fluid mt-5' style={{ paddingBottom: '2rem'}}>
            <div className='mb-5' style={{ paddingLeft: '1rem'}}>
                <p className="medium" style={{ fontSize: '20px', color: '#20B15A' }}>WORK LIST</p>
                <h3 className="semi-bold" style={{ fontSize: '30px'}}>We provide the Perfect Solution <br /> to your business growth</h3>
            </div>
            <CardGroup>
                {workData.map((work, index) => (
                    <Card key={index} className="mx-4" style={{ border: 'none' }}>
                        <Card.Body>
                            <Card.Img src={work.img} style={{ height: '50px', width: '50px'}} alt={work.title} />
                            <Card.Title>{work.title}</Card.Title>
                            <Card.Text>{work.paragraph}</Card.Text>
                            <Button variant="outline-secondary">Learn More</Button>
                        </Card.Body>
                    </Card>
                ))}
            </CardGroup>
        </div>
    );
};

export default WorkList;

