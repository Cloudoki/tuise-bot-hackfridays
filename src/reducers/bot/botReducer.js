import { SET_LANGUAGE, SET_RESULT, SET_LOADING } from '../../constants/actionTypes'
import initialState from './botInitialState'

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.

export default function bot (state = initialState, action) {
  switch (action.type) {

    case SET_LANGUAGE:
      return {
        ...state,
        language: action.language
      }

    case SET_RESULT:
      return {
        ...state,
        result: action.result
      }

    case SET_LOADING:
      return {
        ...state,
        isLoading: action.loading
      }

    default:
      return state
  }
}
