import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes.js';

export default ( entries = [], action ) => {
    switch (action.type) {
        /*
        case DELETE:
            return entries.filter((entry) => entry._id !== action.payload );
        case UPDATE:
            return entries.map((entry) => entry._id === action.payload._id ? action.payload : entry);
        case FETCH_ALL:
            return action.payload;
        */
        case CREATE:
            return [...entries, action.payload];
        default:
            return entries;
    }
}