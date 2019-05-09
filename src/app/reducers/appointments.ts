import { combineReducers } from 'redux'
import { client } from 'app/store/apollo'
import * as queries from 'app/store/queries'
import {
    APPOINTMENTS_LOAD_SUCCESS,
    APPOINTMENTS_LOAD_START,
    APPOINTMENTS_LOCATIONS_LOAD_SUCCESS,
    SIGNUP_FETCH_SUCCESS,
} from 'app/reducers/actionTypes'


const loading = (state:any = true, action:any = {}) => {
    switch (action.type) {

        case APPOINTMENTS_LOAD_START:
            return true;

        case APPOINTMENTS_LOAD_SUCCESS:
            return false;

        default: return state;
    }
}

const availability = (state:any = [], action:any = {}) => {
    switch (action.type) {

        case APPOINTMENTS_LOAD_SUCCESS:
            return action.appointments;

        default: return state;
    }
}

const locationsLoading = (state:any = true, action:any = {}) => {

    switch (action.type) {

        case APPOINTMENTS_LOCATIONS_LOAD_SUCCESS:
            return false;

        default: return state;
    }
}

const locations = (state:any = [], action:any = {}) => {
    switch (action.type) {

        case APPOINTMENTS_LOCATIONS_LOAD_SUCCESS:
            return action.locations;

        case SIGNUP_FETCH_SUCCESS:
            return action.locations;

        default: return state;
    }
}

export default combineReducers({ loading, availability, locations, locationsLoading })

export const loadSuccess = appointments => ({ type: APPOINTMENTS_LOAD_SUCCESS, appointments })
export const locationsLoadSuccess = locations => ({ type: APPOINTMENTS_LOCATIONS_LOAD_SUCCESS, locations })
export const loadAppointmentsStart = () => ({ type: APPOINTMENTS_LOAD_START })
export function loadLocations(position) {

    return async dispatch => {
        const result:any = await client.query({ query: queries.locations, variables: { input: { ...position } } })
        dispatch(locationsLoadSuccess(result.data.locations));
    }
}

export function loadAppointments(locationId, days) {

    return async dispatch => {

        dispatch(loadAppointmentsStart())
        const result:any = await client.query({ query: queries.availability, variables: { locationId, days } })
        dispatch(loadSuccess(result.data.availability));
    }
}
