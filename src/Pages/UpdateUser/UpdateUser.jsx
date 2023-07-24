import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const UpdateUser = () => {
    const { user, updateMail, loading } = useContext(AuthContext);
    const [newEmail, setNewEmail] = useState(''); // Rename the state variable to newEmail
    const [details, setDetails] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [user?.email, null]);

    // const submit = (event) => {
    //     event.preventDefault();
    //     const formData = new FormData(event.target);
    //     const email = formData.get('email');
    //     updateMail(email)
    //         .then(() => {
    //         }).catch((error) => {

    //         });
    //     setNewEmail('');
    // }

    return (
        <div>
            <div >
                <h2 className='text-center mt-5 text-3xl'>Profile Details</h2>
                <div className='md:flex justify-center md:gap-10 mt-10'>
                    <div>  <img className='shadow-2xl  rounded-full ' src={details?.photo} alt="" /></div>
                    <div className='shadow-2xl font-semibold  space-y-3   mx-3  rounded-lg p-3 md:p-28'>
                        <label htmlFor="Name"></label>
                        <p>Name: {details?.name}</p>
                        <p>Email: {details?.email}</p>
                        <p className='flex'> address : {details?.university ? <p> fm </p> : <p> Not Add </p>
                        }</p>
                        <p className='flex'> university : {details?.university ? <p> fm </p> : <p> Not Add </p>
                        }</p>
                        {/* <Link className='btn bg-amber-300' to="/updateuser">Edit</Link> */}
                    </div>
                </div>
            </div>
            <div>

            </div>
            {/* <form action="" onSubmit={submit}>
                <input type="email" name='email' value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
                <input className="btn bg-[#FFBE4E]" type="submit" value="Reset email" />
            </form> */}
        </div>
    );
};

export default UpdateUser;
