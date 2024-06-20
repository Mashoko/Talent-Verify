import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCompany } from '../store/actions/companyActions';

const CompanyForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [registrationDate, setRegistrationDate] = useState('');
    // Add more form fields as per Company model

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCompany = {
            name,
            registrationDate,
            // Populate other fields
        };
        dispatch(addCompany(newCompany));
        // Clear form fields after submission
        setName('');
        setRegistrationDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Company Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="date"
                placeholder="Registration Date"
                value={registrationDate}
                onChange={(e) => setRegistrationDate(e.target.value)}
                required
            />
            {/* Add more input fields */}
            <button type="submit">Add Company</button>
        </form>
    );
};

export default CompanyForm;
