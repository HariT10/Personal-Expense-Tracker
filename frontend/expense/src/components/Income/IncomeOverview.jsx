import React, { useEffect, useState } from 'react';

import CustomBarChart from '../Charts/CustomBarChart';

import { prepareIncomeBarChartData } from '../../utils/helper';

import { LuPlus } from "react-icons/lu";

const IncomeOverview = ({ transactions, onAddIncome }) => {

    const [chartData, setChartData] = useState([]);


    useEffect(() => {

        const result = prepareIncomeBarChartData(transactions);

        setChartData(result);

        return () => {};


    }, [transactions]);


    return(

        <div className = "card">

            <div className = "flex items-center justify-between">

                <div className = "">

                    <h5 className = "text-lg">Income Overview</h5>

                    <p className = "text-xs text-gray-500">

                        A quick overview of your income trends over the past months.
                    </p>


                </div>

                <button className = "add-button" onClick = {onAddIncome}>

                    <LuPlus className = "" />

                    Add Income

                </button>
 
            </div>

            <div className = "mt-10">

                <CustomBarChart data = {chartData}/>


            </div>


        </div>

    )
}

export default IncomeOverview;