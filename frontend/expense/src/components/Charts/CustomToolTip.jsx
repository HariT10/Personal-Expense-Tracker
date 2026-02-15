import React from 'react';


const CustomToolTip = ({ active, payload}) => {

    if (active && payload && payload.length) {

        return (

            <div className = "bg-white shadow-md">

                <p className = "text-xs font-semibold">{payload[0].name}</p>

                <p className = "text-xs">

                    Amount: <span className = "">${payload[0].value}</span>

                </p>


            </div>


        )

        

    }

}

export default CustomToolTip;