import { SET_LANGUAGE, SET_RESULT, SET_LOADING } from '../../constants/actionTypes';


export function setLanguage(language) {
  return {
    type: SET_LANGUAGE,
    language
  };
}

export function setResult(result){
  return {
    type: SET_RESULT,
    result
  };
}

export function setLoading(loading){
  return {
    type: SET_LOADING,
    loading
  };
}
