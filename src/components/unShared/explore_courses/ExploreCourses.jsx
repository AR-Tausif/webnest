import React from 'react';
import Container from '../../../Container';
import ExploreCard from './cards/ExploreCard';

const ExploreCourses = () => {
    return (
        <div className='py-10'>
            <Container>
                <div className="pb-8">
                    <h3 className='text-3xl font-semibold'>Explore Web Nest</h3>
                    <p className='mt-3 mb-1 text-lg font-medium'>{"View all roles --> "}</p>
                </div>
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