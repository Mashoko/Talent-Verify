import React from 'react';
import EmployeeList from '../components/Employee/EmployeeList';
import EmployeeForm from '../components/Employee/EmployeeForm';

const EmployeePage = () => (
    <div>
        <h2>Employees</h2>
        <EmployeeList />
        <EmployeeForm />
    </div>
);

export default EmployeePage;
