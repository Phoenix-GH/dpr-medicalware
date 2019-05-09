import { combineReducers } from 'redux';
import { client } from 'app/store/apollo';
import * as queries from 'app/store/queries';
import {
    SIGNUP_PREV_STEP,
    SIGNUP_STEP1_SAVING,
    SIGNUP_STEP1_SAVED,
    SIGNUP_STEP2_SAVING,
    SIGNUP_STEP2_SAVED,
    SIGNUP_STEP3_SAVING,
    SIGNUP_STEP3_SAVED,
    CHECKOUT_START,
    CHECKOUT_SUCCESS,
    CHECKOUT_FAIL,
    SIGNUP_CONFIRMATION_SAVING,
    SIGNUP_CONFIRMATION_SAVED,
    SIGNUP_FETCH_SUCCESS,
    SIGNUP_PROGRESS_UPDATED,
    APPOINTMENTS_SELECT,
    PHONE_VERIFICATION_START,
    PHONE_VERIFICATION_COMPLETE,
    PHONE_VERIFICATION_FAIL,
    PHONE_RESEND_VERIFICATION_COMPLETE,
    CHANGE_PHONE_SUCCESS,
    UPDATE_PERCENTAGE_PROGRESS,
    SIGNUP_SELECT_STEP,
} from 'app/reducers/actionTypes';
import { smsPasswordlessStart, smsPasswordlessVerify } from 'app/reducers/users';

export const VERIFICATION_STATUS = {
    PENDING: 'PENDING',
    VERIFIED: 'VERIFIED',
    EXPIRED: 'EXPIRED',
    SUCCESS: 'SUCCESS',
    INVALID_CODE: 'INVALID_CODE',
    UNKNOWN_ERROR: 'UNKNOWN_ERROR',
    ALREADY_REGISTERED: 'ALREADY_REGISTERED',
}

const progress = (state = { step: 0 }, action: any = {}) => {

    switch (action.type) {

        case SIGNUP_FETCH_SUCCESS:
            return { step: action.signup.progress.step }

        case SIGNUP_PROGRESS_UPDATED:
            return { step: action.progress.step }

        default: return state;
    }
}

const selectedStep = (state = 0, action:any = {}) => {

    switch (action.type) {

        case SIGNUP_FETCH_SUCCESS:
            return action.signup.progress.step

        case SIGNUP_PROGRESS_UPDATED:
            return action.progress.step

        case SIGNUP_SELECT_STEP:
            return action.step

        default: return state;
    }
}

const loading = (state = true, action:any = {}) => {

    switch (action.type) {

        case SIGNUP_FETCH_SUCCESS:

            return false;

        default: return state;
    }
}

const saving = (state = false, action:any = {}) => {
    switch (action.type) {

        case SIGNUP_STEP1_SAVING:
        case SIGNUP_STEP2_SAVING:
        case SIGNUP_STEP3_SAVING:
        case CHECKOUT_START:
        case SIGNUP_CONFIRMATION_SAVING:
            return true;

        case SIGNUP_STEP1_SAVED:
        case SIGNUP_STEP2_SAVED:
        case SIGNUP_STEP3_SAVED:
        case CHECKOUT_SUCCESS:
        case CHECKOUT_FAIL:
        case SIGNUP_CONFIRMATION_SAVED:
            return false;

        default: return state;
    }
}

const steps = (state = { step1: { verification: 'text', communicate: 'text' }, step2: { location: null }, step3: {}, phone: { status: null } }, action:any = {}) => {

    switch (action.type) {

        case SIGNUP_FETCH_SUCCESS:
        case SIGNUP_STEP1_SAVED:
        case SIGNUP_STEP2_SAVED:
        case SIGNUP_STEP3_SAVED:
        case PHONE_VERIFICATION_COMPLETE:
        case CHANGE_PHONE_SUCCESS:
            return {
                step1: { ...state.step1, ...action.signup.step1 },
                step2: { ...state.step2, ...action.signup.step2 },
                step3: { ...state.step3, ...action.signup.step3 },
                phone: { ...state.phone, ...action.signup.phone },
            }

        case PHONE_RESEND_VERIFICATION_COMPLETE:
        case PHONE_VERIFICATION_FAIL:

            return {
                ...state,
                phone: { status: action.status }
            }

        default: return state;
    }
}

const id = (state = null, action:any = {}) => {

    switch (action.type) {

        case SIGNUP_FETCH_SUCCESS:
            return action.signup.id;

        default: return state;
    }
}

const percentage = (state = 0, action:any = {}) => {

    switch (action.type) {

        case SIGNUP_PROGRESS_UPDATED:
            return action.progress.step * 33

        case SIGNUP_FETCH_SUCCESS:
            return action.signup.progress.step * 33

        case UPDATE_PERCENTAGE_PROGRESS:
            return action.percentage

        default: return state
    }
}

export default combineReducers({ progress, selectedStep, saving, steps, loading, id, percentage })

export const step1Saving = () => ({ type: SIGNUP_STEP1_SAVING })
export const step1Saved = signup => ({ type: SIGNUP_STEP1_SAVED, signup })
export const step2Saving = () => ({ type: SIGNUP_STEP2_SAVING })
export const step2Saved = signup => ({ type: SIGNUP_STEP2_SAVED, signup })
export const step3Saving = () => ({ type: SIGNUP_STEP3_SAVING })
export const step3Saved = signup => ({ type: SIGNUP_STEP3_SAVED, signup })

export const checkoutStart = () => ({ type: CHECKOUT_START })
export const checkoutSuccess = charge => ({ type: CHECKOUT_SUCCESS, charge })
export const checkoutFail = message => ({ type: CHECKOUT_FAIL, message })
export const confirmationSaving = () => ({ type: SIGNUP_CONFIRMATION_SAVING })
export const confirmationSaved = () => ({ type: SIGNUP_CONFIRMATION_SAVED })
export const selectApointment = index => ({ type: APPOINTMENTS_SELECT, index })

export const fetchSuccess = (signup, locations) => ({ type: SIGNUP_FETCH_SUCCESS, signup, locations })
export const progressUpdated = progress => ({ type: SIGNUP_PROGRESS_UPDATED, progress })

export const phoneVerificationStart = () => ({ type: PHONE_VERIFICATION_START })
export const phoneVerificationComplete = (signup, status, message) => ({ type: PHONE_VERIFICATION_COMPLETE, signup, status, message })
export const phoneVerificationFail = (status) => ({ type: PHONE_VERIFICATION_FAIL, status })

export const resendVerificationComplete = (status) => ({ type: PHONE_RESEND_VERIFICATION_COMPLETE, status })

export const changePhoneSuccess = signup => ({ type: CHANGE_PHONE_SUCCESS, signup })

export const prevStep = () => ({ type: SIGNUP_PREV_STEP })

export const updatePercentageProgress = (percentage) => ({ type: UPDATE_PERCENTAGE_PROGRESS, percentage })

export const selectStep = (step) => ({ type: SIGNUP_SELECT_STEP, step })

export function back() {

    return dispatch => {

        dispatch(prevStep())
    }
}

export function fetch() {

    return async dispatch => {

        const result: any = await client.query({ query: queries.signup, variables: { locationsInput: { latitude: 0, longitude: 0 } } })
        dispatch(fetchSuccess(result.data.signup, result.data.locations))
        localStorage.setItem('pdr-signup', result.data.signup.id)
    }
}

export function saveProgress(progress) {

    return dispatch => {

        return client
            .mutate({ mutation: queries.saveProgress, variables: { input: { ...progress } } })
            .then(result => dispatch(progressUpdated(progress)))
    }
}

export function step1Save(fields) {

    return async dispatch => {

        dispatch(step1Saving())

        const result = await client.mutate({ mutation: queries.saveStep1, variables: { input: { ...fields, __typename: undefined } } })

        dispatch(step1Saved(result.data.saveStep1))
    }
}

export function step2Save(fields) {

    return dispatch => {

        dispatch(step2Saving())

        return client
            .mutate({ mutation: queries.saveStep2, variables: { input: { ...fields } } })
            .then(result => dispatch(step2Saved(result.data.saveStep2)))
    }
}


export function step3Save(fields) {

    return dispatch => {

        dispatch(step3Saving())

        return client
            .mutate({ mutation: queries.saveStep3, variables: { input: { ...fields } } })
            .then(result => dispatch(step3Saved(result.data.saveStep3)))
    }
}

export function checkout(token) {

    return async dispatch => {

        dispatch(checkoutStart())

        return client.mutate({ mutation: queries.checkout, variables: { token: token.id } })
            .then(() => dispatch(checkoutSuccess('1')))
    }
}

export function confirmationSave(fields) {

    return dispatch => {

        dispatch(confirmationSaving())

        return client
            .mutate({ mutation: queries.saveConfirmation, variables: { input: { ...fields } } })
            .then(() => dispatch(confirmationSaved()))
    }
}

export function saveSchedulingRequest(input) {

    return async dispatch => {

        return await client.mutate({ mutation: queries.saveSchedulingRequest, variables: { input } })
    }
}

export function changePhone(phone) {

    return async dispatch => {

        const result = await client.mutate({ mutation: queries.changePhone, variables: { phone } })

        if (result.data.changePhone.phone.status === VERIFICATION_STATUS.PENDING) {

            await smsPasswordlessStart(phone)
        }

        dispatch(changePhoneSuccess(result.data.changePhone))

        return result.data.changePhone
    }
}

export function resendPhoneVerification(phone) {

    return async dispatch => {

        //const passwordless = await smsPasswordlessStart(phone)

        dispatch(resendVerificationComplete(VERIFICATION_STATUS.PENDING))
    }
}

export function phoneVerification(phone, code) {

    return async dispatch => {

        dispatch(phoneVerificationStart())

        try {

            await smsPasswordlessVerify(phone, code)
        }
        catch (e) {

            dispatch(phoneVerificationFail(VERIFICATION_STATUS.INVALID_CODE))
        }
    }
}
