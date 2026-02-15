import React from 'react';

import { LuArrowRight } from 'react-icons/lu';
import TransactionInfoCard from '../Cards/TransactionInfoCard';
import moment from 'moment';

const ExpenseTransactions = ({transactions, onSeeMore}) => {


    return(

        <div className = "card">

            <div className = "flex items-center justify-between">

                <h5 className = "text-lg">Expenses</h5>


                <button className = "card-button" onClick = {onSeeMore}>

                    See All Transactions <LuArrowRight className = "text-base"></LuArrowRight>

                </button>


            </div>

            <div className = "mt-5">

                {transactions?.slice(0,5)?.map((expense) => (

                    <TransactionInfoCard

                        key={expense.id}
                        title = {expense.category}
                        icon = {expense.icon}
                        date = {moment(expense.date).format("DD MMM YYYY")}
                        amount = {expense.amount}
                        type = "expense"
                        hideDeleteButton
                    
                    />




                    
                    
                ))}



            </div>



        </div>

    )
}


export default ExpenseTransactions; 