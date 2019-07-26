export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

export const initialState = {
  englishLang: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return Object.assign({}, state, { englishLang: action.payload.englishLang })
    default:
      return state;
  }
}

export const changeLanguage = (enableEnglish = false) => {
  return {
    type: CHANGE_LANGUAGE,
    payload: {
      englishLang: enableEnglish,
    }
  };
}
