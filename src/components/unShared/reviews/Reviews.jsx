import React from 'react';
import Container from '../../../Container';
import ProfileCard from '../../cards/ProfileCard';

const Reviews = () => {
    return (
        <div className='bg-white py-11'>
            <Container>
                <h3 className="text-4xl mt-11 mb-20 font-semibold text-center">
                    Our Instructors
                </h3>
                <div className="flex justify-center items-center gap-4">
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                </div>
            </Container>
        </div>
    );
};

export default Reviews;