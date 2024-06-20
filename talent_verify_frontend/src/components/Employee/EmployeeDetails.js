import React from 'react';

const EmployeeDetails = ({ employee }) => (
    <div>
        <h2>{employee.user.full_name}</h2>
        <p>Role: {employee.role}</p>
        {/* Display more details */}
    </div>
);

export default EmployeeDetails;
