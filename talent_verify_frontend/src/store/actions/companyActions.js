import { ADD_COMPANY } from './types';

export const addCompany = (newCompany) => ({
    type: ADD_COMPANY,
    payload: newCompany,
});
