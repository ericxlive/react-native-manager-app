import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED 
} from './types';

// The argument is "text". It returns a plain js object.
export const emailChanged = (text) => 
    // A plain javascript object. An object with one property and its value.
     ({
        type: EMAIL_CHANGED,
        payload: text
    });

export const passwordChanged = (text) => ({
        type: PASSWORD_CHANGED,
        payload: text
    });

