import React from 'react';

import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell} from 'recharts';
//import CustomToolTip from './CustomToolTip';

const CustomBarChart = ({data}) => {


    const getBarColour = (index) => {

        return index % 2 === 0 ? "#3b82f6" : "#60a5fa";
    }

    const CustomToolTip = ({active, payload}) => {

        if(active && payload && payload.length) {

            return (

                <div className = "bg-white p-4 border border-gray-300 rounded shadow">

                    <p className = "text-sm text-gray-500">{payload[0].payload.category}</p>

                    <p className = "text-lg font-semibold text-gray-800">

                        Amount: <span className = "text-sm font-medium">
                            ${payload[0].value}
                        </span>

                    </p>

                </div>

            )

        }

        return null;

    }



    return(

        <div className = "bg-white mt-6">

            <ResponsiveContainer width="100%" height={300}>

                <BarChart data = {data}>

                    <CartesianGrid stroke = "none">
   
                    </CartesianGrid>


                    <XAxis dataKey="month" tick = {{ fontSize: 12, fill: "#555" }}/>

                    <YAxis tick = {{ fontSize: 12, fill: "#555" }}/>

                    <Tooltip content = {CustomToolTip} />


                    <Bar 

                        dataKey="amount"
                        fill="#3b82f6"
                        radius={[5, 5, 0, 0]}
                        activeDot={{ r: 6 }}
                        activeStyle = {{fill: "#2563eb"}}
                    
                    >

                        {data.map((entry, index) => (

                            <Cell key = {index} fill = {getBarColour(index)} />
                            
                        ))}



                    </Bar>





                </BarChart>




            </ResponsiveContainer>


        </div>

  
    )
}

export default CustomBarChart;