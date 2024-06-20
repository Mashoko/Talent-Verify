import React, { useEffect, useState } from 'react';
import axios from './axiosInstance';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get('employees/');
                setEmployees(response.data);
            } catch (error) {
                console.error('Error fetching employees:', error);
            }
        };
        fetchEmployees();
    }, []);

    return (
        <div>
            <h2>Employee List</h2>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>{employee.name} - {employee.position}</li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;
