import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Admisission = () => {

    const [collage, setCollage] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/collages', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setCollage(data);
            })
    }, []);

    return (
        <section>
            <div className='mx-auto space-x-3 space-y-3'>
                {
                    collage.map(coll =>
                        <div className='p-5  border-2 rounded-md border-blue-400 shadow-md md:flex gap-5'>
                            <div className='w-1/4'>
                                <img className='border rounded-lg' src={coll?.image} alt="" />
                            </div>
                            <div>
                                <h1 className='text-3xl font-semibold py-2'>{coll?.collegeName}</h1>
                                <p className='font-semibold text-lg my-3'>{coll?.admissionDates}</p>
                                <p className=" text-2xl text-yellow-300">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        emptySymbol={<FaRegStar />}
                                        fullSymbol={<FaStar />}
                                        initialRating={coll?.ratings} // Changed 'value' to 'initialRating'
                                    />
                                </p>
                                <div className='pt-5'>
                                    <Link to={`${coll?._id}`} className='btn  bg-blue-400'>Admission Now</Link>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </section>
    );
};

export default Admisission;