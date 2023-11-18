import React from 'react';
import PageTitle from '../component/commonComponent/pageTitleSection/PageTitle';
import ProjectList from '../component/projectPageComponent/ProjectList';

const ProjectPage = () => {
    return (
        <div>
            <PageTitle title="All Project"/>
            <ProjectList/>
        </div>
    );
};

export default ProjectPage;