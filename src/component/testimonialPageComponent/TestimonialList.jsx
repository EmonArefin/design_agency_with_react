import { useEffect, useState } from "react";
import Loader from "../commonComponent/Loader";
import TestimonialCard from "./TestimonialCard";


const TestimonialList = () => {
    const [testimonialData, setTestimonialData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("database/testimonialData.json");
                const data = await response.json();
                setTestimonialData(data);
            } catch (error) {
                console.error("Error fetching testimonial list data:", error);
            }
        };
        fetchData();
    }, []);

    if(testimonialData === null){
        return <Loader/>
    }

    return (
        <section className='container pt-5 back'>
            <div className='mb-5' style={{ paddingLeft: '1rem'}}>
                <p className="medium" style={{ fontSize: '20px', color: '#20B15A' }}>TESTIMONIAL LIST</p>
                <h3 className="semi-bold" style={{ fontSize: '30px'}}>Better Agency/SEO Solution At <br /> Your Fingertips</h3>
            </div>
            <div className="row gy-4">
                {
                    testimonialData.map((testimonial, index) => <TestimonialCard key={index} testimonial={testimonial} />  )
                }
            </div>
        </section>
    );
};

export default TestimonialList;