import { useEffect, useState } from "react";
import Loader from "../../commonComponent/Loader";
import '../statList/statList.css'
import CountUp from 'react-countup';

const StatList = () => {
    const [counterData, setCounterData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("database/statData.json");
                const data = await response.json();
                setCounterData(data);
            } catch (error) {
                console.error("Error fetching stat data:", error);
            }
        };
        fetchData();
    }, []);

    const StatCard = ({ data }) => (
        <div className="col-md-3">
            <div className="stat-card">
                <img src={data["image"]} alt="Activity" />
                <h3><CountUp start={-875.039} duration={2.75} end={data["number"]} /></h3>
                <p>{data["title"]}</p>
            </div>
        </div>
    );

    return (
        <section className="container-fluid mt-5 pb-5">
            <div className="row" style={{ paddingLeft: '1rem', paddingRight: '1rem'}}>
                {counterData === null ? (
                    <Loader />
                ) : (
                    counterData.map((data, index) => (
                        <StatCard key={index} data={data} />
                    ))
                )}
            </div>
        </section>
    );
};

export default StatList;

