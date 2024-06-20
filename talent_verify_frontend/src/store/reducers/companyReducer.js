import { ADD_COMPANY } from '../actions/types';

const initialState = {
    companies: [],
};

const companyReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMPANY:
            return {
                ...state,
                companies: [...state.companies, action.payload],
            };
        default:
            return state;
    }
};

export default companyReducer;
