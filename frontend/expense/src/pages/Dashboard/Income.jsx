import React, { useEffect, useState } from 'react';

import DashboardLayout from '../../components/layouts/DashboardLayout';

import IncomeOverview from '../../components/Income/IncomeOverview';

import { API_PATHS } from '../../utils/apiPath';
import axiosInstance from '../../utils/axiosInstance';

import Modal from '../../components/layouts/Modal';

import AddIncomeForm from '../../components/Income/AddIncomeForm';

import IncomeList  from  '../../components/Income/IncomeList';

import DeleteAlert from '../../components/layouts/DeleteAlert';
import {useUserAuth} from '../../hooks/useUserAuth';




const Income = () => {

    useUserAuth();


    const [incomeData, setIncomeData] = useState([]);
    const [loading, setLoading] = useState(false);

    const [openDeleteAlert, setOpenDeleteAlert] = useState({

        show: false,
        data: null,
    })

    const [openAddIncomeModal, setOpenAddIncomeModal] = useState(false)

    //Get all Income Details
    const fetchIncomeDetails = async () => {

        if (loading){

            return;

        }

        setLoading(true);

        try{

            const response = await axiosInstance.get(`${API_PATHS.INCOME.GET_ALL_INCOME}`);

            if(response.data){

                setIncomeData(response.data);

            }


        } catch (error) {

            console.log("Error fetching income details:", error);

        } finally{

            setLoading(false);
        }

        

    }

    //Handle Add Income
    const handleAddIncome = async (income) => {

        const {source, amount, date, icon} = income;

        //validation checks
        if (!source.trim()){

            Toast.error("Source is required")

            return;

        }

        if(!amount || isNaN(amount) || Number(amount) <= 0){
            toast.error("Amount should be valid number greater than 0")

        }

        if(!date) {

            toast.error("Date is Required!")
        }

        try{

            await axiosInstance.post(API_PATHS.INCOME.ADD_INCOME, {

                source,
                amount,
                date,
                icon,
            });

            setOpenAddIncomeModal(false);
            toast.success("Income has been Added!");

            fetchIncomeDetails();

        } catch(error){

            console.error("Error", error.response?.data?.message || error.message)


        }

        
    };

    //Delete Income

    const deleteIncome = async (id) => {

        try {

          await axiosInstance.delete(API_PATHS.INCOME.DELETE_INCOME(id));
      
         
          setIncomeData((prev) => prev.filter((item) => item._id !== id));
      
          setOpenDeleteAlert({ show: false, data: null });
      
          toast.success("Income has been Deleted!");

        } catch (error) {

          console.error(
            "Error in Deleting: ",
            error.response?.data?.message || error.message
          );

        }

    };

    /**
     * const deleteIncome = async (id) => {

        try {

            await axiosInstance.delete(API_PATHS.INCOME.DELETE_INCOME(id));

            setOpenDeleteAlert({show: false, data: null});

            toast.success("Income has been Deleted!")

            fetchIncomeDetails();


        } catch (error){

            console.error("Error in Deleting: ", error.response?.data?.message || error.message)



        }


    }
     */
    

    //Handle Download Income Details
    const handleDownloadIncomeDetails = async () => {


    }

    useEffect(() => {

        fetchIncomeDetails();


    }, []);

    return(

        <DashboardLayout activeMenu="Dashboard">

            <div className = "my-5 mx-auto">

                <div className = "grid grid-cols-1 gap-6">

                    <div className = "">

                        <IncomeOverview

                            transactions = {incomeData}
                            onAddIncome = {() => setOpenAddIncomeModal(true)}

                        />


                    </div>

                    <IncomeList 

                        transactions = {incomeData}
                        onDelete = {(id) => {
                            setOpenDeleteAlert({show: true, data: id});
                        }}
                    

                        onDownload = {handleDownloadIncomeDetails}
                    
                    
                    />


                </div>

                <Modal isOpen = {openAddIncomeModal} onClose = {() => setOpenAddIncomeModal(false)} title = "Add Income">

                    <div>

                        Add Income Form
                    
                    </div>

                    <AddIncomeForm onAddIncome = {handleAddIncome} />

                

                </Modal>

                <Modal isOpen = {openDeleteAlert.show} onClose={() => setOpenDeleteAlert({ show: false, data: null})} title="Delete Income">

                    <DeleteAlert 

                        content = "Are you sure you want to delete?"
                        onDelete = {() => deleteIncome(openDeleteAlert.data)}
                    
                    />
                        

                </Modal>
                
            </div> 

        </DashboardLayout>



    )
}

export default Income;