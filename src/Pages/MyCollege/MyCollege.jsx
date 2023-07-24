import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const MyCollege = () => {
    const { user } = useContext(AuthContext);
    const [details, setDetails] = useState(null);
    const [rating, setRating] = useState(0); // State to manage the rating value

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [user?.email]);

    const submit = (event) => {
        event.preventDefault();
        const form = event.target;
        console.log(form,rating);
        // Add the logic for form submission here if needed
    }

    return (
        <section>
            <div className='w-1/2 md:flex mx-auto py-5'>
                <div className='w-2/3 '>
                    <img className='shadow-2xl  rounded-full ' src={details?.photoURL} alt="" />
                    <h5 className='text-3xl  font-semibold'>{details?.name}</h5>
                </div>
                <div>
                    <h3 className='text-2xl text-center'>Add a Review</h3>
                    <form action="" onSubmit={submit}>
                        <Rating className='text-xl text-yellow-300'
                            style={{ maxWidth: 180 }}
                            emptySymbol={<FaRegStar />}
                            fullSymbol={<FaStar />}
                            initialRating={rating} // Set the initial rating value
                            onChange={(value) => setRating(value)} // Update the rating value on change
                        />
                        <textarea className='rounded-lg border-blue-400' name="" id="" cols="30" rows="5"></textarea>
                        <input type="submit" className='btn bg-blue-400' />
                    </form>
                </div>
            </div>
            <div className="md:flex w-1/2 mx-auto gap-5">
                <div className=''>
                    <img src={details?.image} alt="" />
                </div>
                <div className=''>
                    <h5 className='md:text-3xl font-semibold'>{details?.collegeName}</h5>
                    <p className='font-semibold'>{details?.admissionDates}</p>
                    <p className='font-semibold'>Research: {details?.research}</p>
                    <ul className='font-semibold'>Events: {details?.events.map((sport, index) => (
                        <li key={index}>{sport}</li>
                    ))}</ul>
                    <ul className='font-semibold'>Sports:
                        {details?.sports.map((sport, index) => (
                            <li key={index}>{sport}</li>
                        ))}
                    </ul>
                    <p className=" text-2xl text-yellow-300">
                        <Rating
                            style={{ maxWidth: 180 }}
                            emptySymbol={<FaRegStar />}
                            fullSymbol={<FaStar />}
                            initialRating={details?.ratings}
                        />
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MyCollege;
