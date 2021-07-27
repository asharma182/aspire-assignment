import DebitCardDataFlow from './handlers/debitCardReducers';
import {all, fork} from 'redux-saga/effects';

export default function* rootSaga() {
  console.log('in saga');
  yield all([fork(DebitCardDataFlow)
])
}
