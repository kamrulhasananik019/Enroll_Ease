import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { FaStar, FaRegStar } from 'react-icons/fa';

const ShowReview = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/showAllReviews')
            .then(res => res.json())
            .then(data => setReview(data));
    }, []);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                review.map((n, index) => (
                    <div className='p-5' key={index}>

                        <div className="w-full  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex justify-end px-4 pt-4">

                            </div>
                            <div className="flex flex-col items-center pb-10">
                                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={n?.photo} alt="" />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{n?.name}</h5>
                                <span className="text-sm text-gray-500 dark:text-gray-400">{n?.collegeName}</span>
                                <p>Comment : {n.review}</p>
                                <div className="flex mt-4 space-x-3 md:mt-6">
                                    <Rating className='text-yellow-300 text-2xl'
                                        style={{ maxWidth: 180 }}
                                        emptySymbol={<FaRegStar />}
                                        fullSymbol={<FaStar />}
                                        initialRating={n?.rating} // Changed 'value' to 'initialRating'
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                ))
            }
        </div>
    );
};

export default ShowReview;
