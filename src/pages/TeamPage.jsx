import React from 'react';
import PageTitle from '../component/commonComponent/pageTitleSection/PageTitle';
import TeamList from '../component/teamPageComponent/TeamList';

const TeamPage = () => {
    return (
        <div>
            <PageTitle title="Team"/>
            <TeamList/>
        </div>
    );
};

export default TeamPage;