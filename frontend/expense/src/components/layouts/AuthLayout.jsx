import React from 'react';

import CARD_2 from "../../assets/images/card2.png";

import { LuTrendingUpDown } from "react-icons/lu";


const AuthLayout = ({ children }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 -translate-y-10">

            <div className="w-full max-w-md px-3">
                
                <div className="mb-8 text-center">

                    <h1 className="text-5xl font-extrabold text-slate-00 tracking-tight ">Expense Tracker</h1>
                    
                    <p className="text-slate-500 mt-2 text-sm ">Take control of your finances</p>

                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 ">
                    {children}
                </div>

            </div>
        </div>
    )
}

export default AuthLayout;