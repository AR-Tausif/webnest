import React from 'react';
import Header from '../../components/unShared/header/Header';
import Companies from '../../components/unShared/companies/Companies';
import Courses from '../../components/unShared/courses/Courses';
import ExploreCourses from '../../components/unShared/explore_courses/ExploreCourses';
import Featured from '../../components/unShared/featured/Featured';
import SuggestIdea from '../../components/unShared/suggest/SuggestIdea';
import Reviews from '../../components/unShared/reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header />
            <Companies />
            <Courses />
            <ExploreCourses />
            <Featured />
            <SuggestIdea />
            <Reviews />
        </div>
    );
};

export default Home;