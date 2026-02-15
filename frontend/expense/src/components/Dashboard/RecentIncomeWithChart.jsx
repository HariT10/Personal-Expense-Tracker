import React, { useEffect, useState } from 'react';

import CustomPieChart from '../Charts/CustomPieChart';

const COLORS = ['#4CAF50', '#81C784', '#A5D6A7', '#C8E6C9', '#E8F5E9'];


const RecentIncomeWithChart = ({data, totalIncome}) => {

    const [chartData, setChartData] = useState([]);

    const prepareChartData = () => {
        if (!Array.isArray(data)) {
          setChartData([]);
          return;
        }
      
        const dataArr = data.map(item => ({
          name: item?.source,
          amount: Number(item?.amount) || 0,
        }));
      
        setChartData(dataArr);
    };
      

    useEffect(() => {

        console.log('pie data:', chartData, 'totalIncome:', totalIncome);



        
        prepareChartData();

        return () => {};

    }, [data]);

    

    return(

        <div className = "card">

            <div className = "flex items-center justify-between">

                <h5 className = "text-lg">Last 60 Days Income</h5>


            </div>

            <CustomPieChart 
                data = {chartData}
                label = "Total Income"
                totalAmount = {`$${totalIncome}`}
                showTextAnchor
                colors = {COLORS}
            />

        </div>

    )
}

export default RecentIncomeWithChart;