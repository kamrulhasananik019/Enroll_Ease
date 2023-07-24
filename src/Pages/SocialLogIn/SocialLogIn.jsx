import { useContext } from "react";
import {  FcGoogle } from "react-icons/fc";
import {  FaGithub } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import React from 'react';
import { AuthContext } from "../../Providers/AuthProvider";

const SocialLogIn = () => {

    const { googleSignIn, gitSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, photo: loggedInUser.photoURL }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }


    const handleGitHubSignIn = () => {
        gitSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, photo: loggedInUser.photoURL }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }

    return (
        <div>
            <div className="divider"></div>
            <div className="w-full space-x-5 text-center my-4">
                <button onClick={handleGoogleSignIn} className="btn border-none text-4xl btn-circle btn-outline">
                    <FcGoogle></FcGoogle>
                </button>
                <button onClick={handleGitHubSignIn} className="btn border-none text-4xl btn-circle btn-outline">
                    <FaGithub></FaGithub>
                </button>
            </div>
        </div>
    );
};

export default SocialLogIn;