import {take, call, put, takeLatest} from 'redux-saga/effects';
import API from '../requests/index';
import {actions} from '../../../features/DebitCard/reducer'

function* getUserDataDetails(action: any) {
  console.log("=====================", API)
  try {
    const userdata = yield call(API.DebitCardService,action);
    console.log("userdata",userdata)
    yield put(actions.getUserDataSuccess({...userdata}));
  } catch (error) {
    yield put({type: 'LOGIN_ERROR', error});
  }
}

export default function* DebitCardDataFlow() {
  console.log('actions:::::',actions.getUserData.type )
  yield takeLatest(actions.getUserData.type, getUserDataDetails);
}
