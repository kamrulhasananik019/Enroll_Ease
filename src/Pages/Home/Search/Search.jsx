import React, { useEffect, useState } from 'react';
import CollageCard from '../CollageCard/CollageCard';

const Search = () => {
    const [collage, setCollage] = useState([]);
    const [search, setSearch] = useState('');

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
            });
    }, []);


    const numberOfCardsToShow = 3;

    return (
        <section>
            <div className='text-center my-5'>
                <input
                    onChange={(e) => setSearch(e.target.value.toLowerCase())} // Convert search input to lowercase
                    placeholder='Search'
                    className='border border-blue-400 rounded-full md:w-96 shadow-lg'
                    type="text"
                />
            </div>
            <div className='mx-auto space-x-3 space-y-3 p-5'>
                {collage
                    .filter(item => {
                        return search === '' ? item : item.collegeName.toLowerCase().includes(search); // Convert college names to lowercase for comparison
                    })
                    .slice(0, numberOfCardsToShow)
                    .map(coll => (
                        <CollageCard coll={coll} key={coll._id} />
                    ))}
            </div>
        </section>
    );
};

export default Search;
