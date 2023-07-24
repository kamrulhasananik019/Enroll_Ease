import React from 'react';
import Search from '../Search/Search';

import Gallery from '../Gallery/Gallery';
import ShowReview from '../../ShowReview/ShowReview';

const Home = () => {
    return (
        <div>
            <Search></Search>
            <Gallery></Gallery>
            <h3 className='text-center text-2xl font-semibold py-4'> Reviews and Feedback</h3>
            <ShowReview></ShowReview>
        </div>
    );
};

export default Home;