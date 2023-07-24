import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { FaStar, FaRegStar } from 'react-icons/fa';

const CollegeCard = ({ coll }) => {
    return (
        <section className='border-2 rounded-md border-blue-400 shadow-md'>
            <div className="md:flex gap-5">
                <div className='md:w-1/3'>
                    <img src={coll?.image} alt="" />
                </div>
                <div className='my-3 p-3 space-y-3'>
                    <h5 className='md:text-3xl font-semibold'>{coll?.collegeName}</h5>
                    <p className='font-semibold'>{coll?.admissionDates}</p>
                    <p className='font-semibold'>Research : {coll?.research}</p>
                    <ul className='font-semibold'>Events: {coll?.events.map((sport, index) => (
                        <li key={index}>{sport}</li>
                    ))}</ul>
                    <ul className='font-semibold'>sports:
                        {coll?.sports.map((sport, index) => (
                            <li key={index}>{sport}</li>
                        ))}
                    </ul>
                    <p className=" text-2xl text-yellow-300">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        emptySymbol={<FaRegStar />}
                                        fullSymbol={<FaStar />}
                                        initialRating={coll?.ratings} 
                                    />
                                </p>

                    <Link to={`collages/${coll?._id}`} className='btn bg-blue-400 '>View Details </Link>
                </div>
            </div>
        </section>
    );
};

export default CollegeCard;
