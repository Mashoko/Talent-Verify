import React from 'react';

const CompanyList = ({ companies }) => (
    <div>
        <h2>Companies</h2>
        <ul>
            {companies.map(company => (
                <li key={company.id}>
                    <span>{company.name}</span>
                    {/* Add more details if needed */}
                </li>
            ))}
        </ul>
    </div>
);

export default CompanyList;
