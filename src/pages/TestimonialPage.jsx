import React from 'react';
import PageTitle from '../component/commonComponent/pageTitleSection/PageTitle';
import TestimonialList from '../component/testimonialPageComponent/TestimonialList';

const TestimonialPage = () => {
    return (
        <div>
            <PageTitle title="Testimonial List"/>
            <TestimonialList/>
        </div>
    );
};

export default TestimonialPage;