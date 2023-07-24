import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogIn from '../SocialLogIn/SocialLogIn';


const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        Swal.fire({
                            position: 'top',
                            icon: 'success',
                            title: 'User created successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        const saveUser = { name: data.name, email: data.email, password: data.password, photo: data.photoURL }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    navigate('/');
                                }
                            })
                    })
                navigate('/');
            })

    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-5 lg:p-20'>
                <div>
                    <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=1380&t=st=1690015890~exp=1690016490~hmac=62178a966fc2abb6f7a73cc309c1f615e84f16c89950e1ca6d97eadac86aedc4" alt="" />
                </div>

                <div className='border border-teal-700'>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                {...register("name", { required: true })}
                                placeholder="Name"
                                className="input input-bordered"
                            />
                            {errors.name && <span className='text-red-600'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                {...register("photoURL", { required: true })}
                                placeholder="Photo URL"
                                className="input input-bordered"
                            />
                            {errors.photoURL && <span className='text-red-600'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                placeholder="Email"
                                className="input input-bordered"
                            />
                            {errors.email && <span className='text-red-600'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })}
                                placeholder="Password"
                                onChange={handlePasswordChange}
                                className="input input-bordered"
                            />
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input
                                type='password'
                                {...register("confirmPassword", {
                                    required: true,
                                    validate: (value) =>
                                        value === password || "Passwords do not match"
                                })}
                                placeholder="Confirm password"
                                className="input input-bordered"
                            />
                            {errors.confirmPassword?.type === 'required' && <span className="text-red-500">This field is required</span>}
                            {errors.confirmPassword?.type && (
                                <span className="text-red-500">{errors.confirmPassword.message}</span>
                            )}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-[#FFBE4E]" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <SocialLogIn></SocialLogIn>
                    <p className='ps-10 text-xl font-semibold text-gray-600'><small>Already have an account? <Link to="/login" className='text-blue-400 underline'>Login</Link></small></p>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
