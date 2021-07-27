import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    loading:false,
    totalBalance: 0,
    availableBalance: 0,
    username: '',
    cardDetails: {
        cardType:'',
        cardNumber1: '',
        cardNumber2: '',
        cardNumber3: '',
        cardNumber4: '',
        validity: '',
        cvv:0
    },
    isWeeklySpendingMinitSet:false,
    weeklySpendingLimit:0
}

const UserData = createSlice({
    name: 'userdata',
    initialState,
    reducers: {
        getUserData(state) {
            state.loading = true;
        },
        getUserDataSuccess(state, action) {
            return {...state, ...action.payload };
        },
        getUserFailure(state, action) {
            state.loading = false;
        },
        setWeeklySpendingLimit(state, action){
            console.log('action.payload',action.payload)
            return {...state, weeklySpendingLimit: action.payload}
        },
        setAvailableSpendingLimit(state, action){
            console.log('action.payload',action.payload)
            return {...state, availableBalance: action.payload} 
        }
    }
})

export const { name, actions, reducer } = UserData;
