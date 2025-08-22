import React, { useState } from 'react';

import AuthLayout from '../../components/layouts/AuthLayout';

import { useNavigate } from 'react-router-dom';

import Input from "../../components/Inputs/Input";

const Login = () => {

    const [email, setEmail] = useState("");

    const[password, setPassword] = useState("");

    const [error, setError] = useState("");

    const navigate = useNavigate();


    //hanling the login form part

    const handleLogin = async (e) => {}


    return(

        <AuthLayout>

            <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">

                <h3 className="text-xl font-semibold text-black">Welcome Back!</h3>

                <h2>Welcome!</h2>

                <p className="text-xs text-slate-700 mt-[5px] mb-6"> Please Login Here</p>



                <form onSubmit={handleLogin}>

                    <Input

                        value = {email}

                        onChange={({target}) => setEmail(target.value)}

                        label="Email Address"

                        placeholder="harishan.thilak@gmail.com"

                        type="text"

                    
                    />


                    <Input

                        value = {password}

                        onChange={({target}) => setPassword(target.value)}

                        label="Password"

                        placeholder="Testing"

                        type="password"

                    />

                    {/*for submit and if you dont have a account*/}

                    


                    
                    
                   


                </form>


            </div>

        </AuthLayout>


    )
}

export default Login;

