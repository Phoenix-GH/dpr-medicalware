import { combineReducers } from 'redux'
import axios from 'axios';

import {
    GEOLOCATION_GET_POSITION_START,
    GEOLOCATION_GET_POSITION_SUCCESS,
    GEOLOCATION_GET_POSITION_FAIL,
    GEOLOCATION_GET_GEOCODE_START,
    GEOLOCATION_GET_GEOCODE_COMPLETE,
    GEOLOCATION_GET_GEOCODE_FAIL,
} from 'app/reducers/actionTypes'

const loading = (state = true, action: any = {}) => {
    switch (action.type) {

        case GEOLOCATION_GET_POSITION_START:
            return true;

        case GEOLOCATION_GET_POSITION_SUCCESS:
            return false;

        default: return state;
    }
}

const position = (state = null, action: any = {}) => {
    switch (action.type) {

        case GEOLOCATION_GET_POSITION_SUCCESS:
        case GEOLOCATION_GET_GEOCODE_COMPLETE:

            return { latitude: action.position.latitude, longitude: action.position.longitude }

        case GEOLOCATION_GET_GEOCODE_FAIL:

            return null

        default: return state;
    }
}

export default combineReducers({ loading, position })

export const getPositionStart = () => ({ type: GEOLOCATION_GET_POSITION_START })
export const getPositionSuccess = position => ({ type: GEOLOCATION_GET_POSITION_SUCCESS, position })
export const getPositionFail = error => ({ type: GEOLOCATION_GET_POSITION_FAIL, error })

export const getGeocodeStart = () => ({ type: GEOLOCATION_GET_GEOCODE_START })
export const getGeocodeComplete = position => ({ type: GEOLOCATION_GET_GEOCODE_COMPLETE, position })
export const getGeocodeFail = () => ({ type: GEOLOCATION_GET_GEOCODE_FAIL })

export function getPosition() {

    return dispatch => {

        dispatch(getPositionStart())

        return new Promise((resolve, reject) => {

            navigator.geolocation.getCurrentPosition(
                (position) => resolve(dispatch(getPositionSuccess({ latitude: position.coords.latitude, longitude: position.coords.longitude }))),
                (error) => reject(dispatch(getPositionFail(error))))
        })

    }
}

export function getGeocode(zip) {

    return async dispatch => {

        dispatch(getGeocodeStart())

        const params = {
            components: `postal_code:${zip}`,
            key: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
            cacheBuster: Date.now(),
        }

        const { data: { results } } = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, { params })

        if (results.length > 0) {

            const { lat: latitude, lng: longitude } = results[0].geometry.location

            return dispatch(getGeocodeComplete({ latitude, longitude }))
        }
        else {

            return dispatch(getGeocodeFail())
        }
    }
}
