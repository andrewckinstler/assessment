import { combineReducers } from 'redux';
import { user } from './user';
import { errorMsg } from './errorMsg';
import { addMessage } from './addMessage';
import { clearMessages } from './clearMessages';

const rootReducer = combineReducers({
  user,
  errorMsg,
  addMessage,
  clearMessages
});

export default rootReducer;