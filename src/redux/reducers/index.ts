import {reducer as UserDataReducer} from '../../features/DebitCard/reducer'
import {combineReducers} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    UserDataReducer
});

export default rootReducer;
