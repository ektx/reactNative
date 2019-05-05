import { combineReducers } from 'redux';
import home from './home' 

 
// Combine all the reducers
const rootReducer = combineReducers({
    home
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})
 
export default rootReducer;