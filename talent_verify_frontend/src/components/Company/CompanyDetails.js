import React from 'react';

const CompanyDetails = ({ company }) => (
    <div>
        <h2>{company.name}</h2>
        <p>Registration Date: {company.registrationDate}</p>
        {/* Display more details */}
    </div>
);

export default CompanyDetails;
