import React from 'react';
import CompanyList from '../components/Company/CompanyList';
import CompanyForm from '../components/Company/CompanyForm';

const CompanyPage = () => (
    <div>
        <h2>Companies</h2>
        <CompanyList />
        <CompanyForm />
    </div>
);

export default CompanyPage;
