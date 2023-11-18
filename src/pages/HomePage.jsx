import React from 'react';
import FeaturedProject from '../component/homePageComponent/featuredProject/FeaturedProject';
import HeroList from '../component/homePageComponent/HeroList';
import StatList from '../component/homePageComponent/statList/StatList';
import WorkList from '../component/homePageComponent/WorkList';

const HomePage = () => {
    return (
        <div>
            <HeroList/>
            <WorkList/>
            <StatList/>
            <FeaturedProject/>
        </div>
    );
};

export default HomePage;

