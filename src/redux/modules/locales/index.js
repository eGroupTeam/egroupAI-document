import { set, fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import { SET_LOCALE, SET_MESSAGES } from './types';

const reducer = handleActions(
  {
    [SET_LOCALE]: (state, action) => set(state, 'value', action.payload),
    [SET_MESSAGES]: (state, action) => set(state, 'messages', action.payload)
  },
  fromJS({})
);

export default reducer;
