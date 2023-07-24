import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Forgetpass = () => {
    const { resetPass } = useContext(AuthContext);

    const onSubmit = (event) => {
        event.preventDefault(); 
        const formData = new FormData(event.target);
        const email = formData.get('email');
        resetPass(email);
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 '>
            <div>
                <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=1380&t=st=1690015890~exp=1690016490~hmac=62178a966fc2abb6f7a73cc309c1f615e84f16c89950e1ca6d97eadac86aedc4" alt="" />
            </div>
            <div className='md:mt-20 p-5'>
                <form onSubmit={onSubmit}>
                    <label className="label">
                        <span className="label-text md:text-xl">Enter Your Email</span>
                    </label>
                    <input type="email" name="email" className="input input-bordered w-2/3 md:w-96" />
                    <div className="form-control mt-6 w-40">
                        <input className="btn bg-[#FFBE4E]" type="submit" value="Reset Password" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Forgetpass;
