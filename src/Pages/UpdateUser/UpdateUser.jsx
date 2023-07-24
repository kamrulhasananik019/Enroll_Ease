import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateUser = () => {
    const { user, updateMail, updateUserProfile, loading } = useContext(AuthContext);
    const [details, setDetails] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [user?.email]);

    const submit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const collegeName = form.collegeName.value;
        const address = form.address.value;
        console.log(email, name, collegeName, address);
        const updateU = { email, name, collegeName, address };

        updateMail(email)
            .then(() => {
                updateUserProfile(name)
                    .then(() => {
                        fetch(`http://localhost:5000/updateUser/${user?.email}`, {
                            method: 'PATCH',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(updateU)
                        })
                            .then(res => res.json())
                            .then(data => {
                            
                            })
                    })
            }).catch((error) => {

            });

    }

    return (
        <div>
            <div>
                <h2 className='text-center mt-5 text-3xl'>Profile Details</h2>
                <div className='md:flex justify-center md:gap-10 mt-10'>
                    <div>  <img className='shadow-2xl  rounded-full ' src={details?.photo} alt="" /></div>
                    <div className='shadow-2xl font-semibold  space-y-3   mx-3  rounded-lg p-3 md:p-28'>
                        <form className='grid space-y-5 ' onSubmit={submit} action="">
                            <input type="email" className='rounded-xl' defaultValue={details?.email} id='email' name='email' />
                            <input type="text" className='rounded-xl' defaultValue={details?.name} id='name' name='name' />
                            <input type="text" className='rounded-xl' defaultValue={details?.collegeName} id='collegeName' name='collegeName' />
                            <input type="text" className='rounded-xl' defaultValue={details?.address} id='address' name='address' />
                            <input type="submit" className='btn bg-blue-400' />
                        </form>

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
