import { createStore, combineReducers } from 'redux';
import companyReducer from './reducers/companyReducer';
import employeeReducer from './reducers/employeeReducer';

const rootReducer = combineReducers({
    company: companyReducer,
    employee: employeeReducer,
});

const store = createStore(rootReducer);

export default store;
