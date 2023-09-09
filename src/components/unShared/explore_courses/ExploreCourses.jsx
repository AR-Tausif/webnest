import React from 'react';
import Container from '../../../Container';
import ExploreCard from './cards/ExploreCard';

const ExploreCourses = () => {
    return (
        <div className='py-10'>
            <Container>
                <h3 className='text-3xl font-semibold pb-8'>Explore Web Nest</h3>
                <div className="my-5 grid grid-cols-2 lg:grid-cols-3 justify-center gap-5">
                    <ExploreCard />
                    <ExploreCard />
                    <ExploreCard />
                    <ExploreCard />
                    <ExploreCard />
                    <ExploreCard />
                    <ExploreCard />
                    <ExploreCard />
                </div>
            </Container>
        </div>
    );
};

export default ExploreCourses;