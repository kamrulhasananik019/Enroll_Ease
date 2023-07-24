import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Rating from 'react-rating';
import { FaStar, FaRegStar } from 'react-icons/fa';


const ViewDetails = () => {
    const coll = useLoaderData();

    return (
        <section>
            <div className='w-1/3 mx-auto '>
                <img className='border rounded-3xl' src={coll?.image} alt="" />
            </div>
            <div>
                <p className='text-center py-5 font-semibold text-3xl'>{coll?.collegeName}</p>
                <p className="text-center text-2xl text-yellow-300">
                    <Rating
                        style={{ maxWidth: 180 }}
                        emptySymbol={<FaRegStar />}
                        fullSymbol={<FaStar />}
                        initialRating={coll?.ratings} // Changed 'value' to 'initialRating'
                    />
                </p>
                <p className='text-center  font-semibold'>{coll?.admissionDates}</p>

                <p className='text-center  py-5 font-semibold'>Events : {coll?.events}</p>
                <p className='text-center  font-semibold'>Sports : {coll?.sports}</p>
                <div className='p-3 shadow-sm'>
                    <h5 className='text-2xl font-semibold'>Admission process :</h5>
                    <p className='font-semibold'>{coll?.process}</p>
                </div>
            </div>
            <div className='mt-5'>
                <h4 className='text-center py-5 font-semibold text-3xl'>Research History</h4>
                <p className='text-center  font-semibold'>Research : {coll?.research}</p>
                <div>
                    {coll?.works.map(i => <div>
                        <div className='w-1/3 mx-auto my-5'>
                            <img className='border rounded-3xl' src={i?.img} alt="" />
                            <p className='font-semibold py-2 text-xl'>{i?.title}</p>
                        </div>
                        <div className='p-5'>
                            <p className='font-semibold'>{i?.summary}</p>
                        </div>
                    </div>)}
                </div>
            </div>
        </section>
    );
};

export default ViewDetails;
