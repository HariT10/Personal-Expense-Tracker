import React from 'react';

import CustomPieChart from '../Charts/CustomPieChart';



const COLOURS = ["#3b82f6", "#22c55e", "#ef4444"];

const FinanceOverview = ({totalBalance, totalIncome, totalExpense}) => {

    const balanceData = [

        {name: "Total Balance", amount: totalBalance},
        {name: "Total Income", amount: totalIncome},
        {name: "Total Expense", amount: totalExpense},


    ]

    return (

        <div className = "card">

            <div className = "">

                <h5 className = "">Overview</h5>

            </div>

            <CustomPieChart
                data = {balanceData}
                label = "Total Balance"
                totalAmount = {`$${totalBalance}`}
                colors = {COLOURS}
                showTextAnchor

            />

        </div>


    )


    


}

export default FinanceOverview;