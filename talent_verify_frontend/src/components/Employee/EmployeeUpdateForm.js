import React from 'react';
import axios from './axiosInstance';

const EmployeeUpdateForm = ({ employeeId }) => {
    const [name, setName] = React.useState('');
    const [position, setPosition] = React.useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`employees/${employeeId}/`, {
                name: name,
                position: position,
            });
            console.log('Employee updated:', response.data);
            // Handle success, redirect or show success message
        } catch (error) {
            console.error('Error updating employee:', error);
            // Handle error, show error message
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} placeholder="Position" />
            <button type="submit">Update</button>
        </form>
    );
};

export default EmployeeUpdateForm;
