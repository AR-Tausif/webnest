import React from 'react';
import CourseCard from '../../cards/CourseCard';
import Container from '../../../Container';

const Courses = () => {
    return (
        <div className="bg-gray-50 py-11 px-11">
            <Container>
                <h3 className="text-3xl font-semibold">Launch a new career in as little as 6 months</h3>
                <p className='mt-1 mb-1'>{"View all roles --> "}</p>

                <div className="my-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center gap-6">
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                </div>
            </Container>
        </div>
    );
};

export default Courses;