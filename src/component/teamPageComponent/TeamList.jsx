import { useEffect, useState } from 'react';
import Loader from '../commonComponent/Loader';
import TeamCard from './TeamCard';

const TeamList = () => {

    const [teamData, setTeamData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("database/teamMemberData.json");
                const data = await response.json();
                setTeamData(data);
            } catch (error) {
                console.error("Error fetching team list data:", error);
            }
        };
        fetchData();
    }, []);

    if(teamData === null){
        return <Loader/>
    }


    return (
        <section className="container pt-5">
            <div className='mb-5' style={{ paddingLeft: '1rem'}}>
                <p className="medium" style={{ fontSize: '20px', color: '#20B15A' }}>OUR TEAM MEMBER</p>
                <h3 className="semi-bold" style={{ fontSize: '30px'}}>Check our awesome team <br /> members</h3>
            </div>
            <div className="row">
                {
                    teamData.map( (team, index) => <TeamCard key={index} team={team} /> )
                }
            </div>
            
        </section>
    );
};

export default TeamList;