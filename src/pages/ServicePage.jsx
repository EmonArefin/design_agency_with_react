import React from 'react';
import PageTitle from '../component/commonComponent/pageTitleSection/PageTitle';
import ServiceList from '../component/servicePageComponent/ServiceList';

const ServicePage = () => {
    return (
        <div>
            <PageTitle title="Our Services"/>
            <ServiceList/>
        </div>
    );
};

export default ServicePage;