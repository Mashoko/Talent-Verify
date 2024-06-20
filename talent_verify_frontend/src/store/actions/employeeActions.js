import { ADD_EMPLOYEE } from './types';

export const addEmployee = (newEmployee) => ({
    type: ADD_EMPLOYEE,
    payload: newEmployee,
});
