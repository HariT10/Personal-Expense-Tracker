import React, { useContext, useState } from 'react';

import AuthLayout from '../../components/layouts/AuthLayout';

import { useNavigate } from 'react-router-dom';

import Input from "../../components/Inputs/Input";

import { Link } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPath';

import { validateEmail } from '../../utils/helper';

import { UserContext } from "../../context/userContext";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const { updateUser } = useContext(UserContext);
    const navigate = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      if (!validateEmail(email)) {
        setError("Please enter a valid email address");
        return;
      }
  
      if (!password) {
        setError("Please enter your password");
        return;
      }
  
      setError("");
  
      try {
        const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
          email,
          password,
        });
  
        const { token, user } = response.data;
  
        if (token) {
          localStorage.setItem("token", token);
          updateUser(user);
          navigate("/dashboard");
        }
      } catch (error) {
        if (error.response && error.response.data.message) {
          setError(error.response.data.message);
        } else {
          setError("An error occurred. Please try again.");
        }
      }
    };
  
    return (
      <AuthLayout>
        <div className="flex items-center justify-center min-h-full w-full">
          <div className="w-full max-w-md px-8 py-10 bg-white rounded-2xl shadow-xl border border-slate-100">
  
            {/* Header */}
            <div className="mb-8">
              
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Welcome back</h3>
              <p className="text-sm text-slate-500 mt-1">Sign in to your account to continue</p>
            </div>
  
            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                label="Email Address"
                placeholder="you@example.com"
                type="text"
              />
  
              <Input
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                label="Password"
                placeholder="••••••••"
                type="password"
              />
  
              {error && (
                <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 text-xs px-3 py-2.5 rounded-lg">
                  <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {error}
                </div>
              )}
  
              <button
                type="submit"
                className="w-full bg-violet-600 hover:bg-violet-700 active:bg-violet-800 text-white font-semibold text-sm py-2.5 px-4 rounded-xl transition-colors duration-150 mt-2"
              >
                Sign in
              </button>
  
              <p className="text-center text-sm text-slate-500 pt-1">
                Don't have an account?{" "}
                <Link className="font-semibold text-violet-600 hover:text-violet-700 underline underline-offset-2" to="/signup">
                  Sign up
                </Link>
              </p>
            </form>
  
          </div>
        </div>
      </AuthLayout>
    );
  };
  
  export default Login;
  