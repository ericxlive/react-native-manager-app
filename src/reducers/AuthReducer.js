import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = { 
    email: '', // by default an empty string.
    password: '', // by default an empty string.
    user: null, // Object.
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        /**
         * Ads to the state every single character the user enters in the email field.
         */
        case EMAIL_CHANGED:
          return { ...state, email: action.payload 
        };
        /**
         * Ads to the state every single character the user enters in the password field.
         */
        case PASSWORD_CHANGED:
          return { ...state, password: action.payload };

        case LOGIN_USER:
          return { ...state, loading: true, error: '' };

        /**
         * Success flow. If the login was successfull, the fields must be all cleared.
         */
        case LOGIN_USER_SUCCESS:
          return { ...state, ...INITIAL_STATE, user: action.payload };
        /**
         * User failed to login into the system.
         */
        case LOGIN_USER_FAIL:
          return { 
            ...state, 
            error: 'Authentication failed.', 
            password: '', 
            loading: false 
          }; 
        default:
          return state;
    }
};

