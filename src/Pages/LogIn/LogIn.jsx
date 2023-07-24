import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineEyeInvisible, AiFillEye } from 'react-icons/ai';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogIn from '../SocialLogIn/SocialLogIn';

const LogIn = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }



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
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} placeholder="password" className="input input-bordered" />


                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                            <label className="label">
                                <div className=''>
                                    <Link to="/forgetpass" className="label-text-alt link link-hover">Forgot password?</Link>

                                </div>

                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-[#FFBE4E]" type="submit" value="Login" />
                        </div>
                    </form>
                    <SocialLogIn></SocialLogIn>
                    <p className='ps-10 text-xl font-semibold text-gray-600'><small>New Here? <Link to="/signup" className='text-blue-400 underline'>Create an account</Link> </small></p>
                </div>
            </div>
        </section>
    );
};

export default LogIn;