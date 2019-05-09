import { combineReducers } from 'redux'
import { client } from 'app/store/apollo'
import * as queries from 'app/store/queries'
import { WebAuth } from 'auth0-js'
import { parseNumber } from 'libphonenumber-js'
import {
    USER_FETCH_SUCCESS,
    USER_FETCH_FAIL,
} from 'app/reducers/actionTypes'

const user = (state = null, action:any = {}) => {
    switch (action.type) {

        case USER_FETCH_SUCCESS:
            return action.user;

        case USER_FETCH_FAIL:
            return null;

        default: return state;
    }
}

export default combineReducers({ user })

export const fetchSuccess = (user) => ({ type: USER_FETCH_SUCCESS, user })
export const fetchFail = () => ({ type: USER_FETCH_FAIL })

const webAuth = new WebAuth({
    domain: 'personadoctors.auth0.com',
    redirectUri: `${window.location.origin}/SignUp`,
    clientID: 'L7K1r1jC7d92TLI7nk1Ddmg6B2pq8Y3g',
    responseType: 'token',
})

export function smsPasswordlessStart(phone) {

    return new Promise((resolve, reject) => {

        try {

            const parsed = parseNumber(phone, 'US')

            webAuth.passwordlessStart({
                connection: 'sms',
                send: 'code',
                phoneNumber: `+${parsed.countryCallingCode}${parsed.phone}`
            }, function (err, res) {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            })
        } catch (e) {
            reject(e)
        }
    })
}

export function smsPasswordlessVerify(phone, code) {

    return new Promise((resolve, reject) => {

        webAuth.passwordlessLogin({
            connection: 'sms',
            phoneNumber: phone,
            verificationCode: code,
            signupId: localStorage.getItem('pdr-signup'),
            isPhoneVerification: true,
        }, function (err, res) {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

export function emailEnrollment(email, password) {

    return new Promise((resolve, reject) => {

        webAuth.signup({
            connection: 'Username-Password-Authentication',
            email,
            password,
        }, (err, data) => {

            if (err === null) {

                webAuth.login({
                    email,
                    password,
                    realm: 'Username-Password-Authentication',
                }, (err, data) => {

                    resolve(data)
                })

            } else {

                reject(err)
            }
        })
    })
}

export function googleEnrollMent() {

    webAuth.authorize({ connection: 'google-oauth2', signupId: localStorage.getItem('pdr-signup') })
}

export function facebookEnrollMent() {

    webAuth.authorize({ connection: 'facebook', signupId: localStorage.getItem('pdr-signup') })
}

function parseHash() {

    return new Promise((resolve) => {

        webAuth.parseHash(function (err, data) {

            if (err === null && data !== null) {

                localStorage.setItem('pdr-token', data.accessToken)

                resolve(data)
            }
            else {

                resolve()
            }
        })
    })
}

export function fetch() {

    return async dispatch => {

        try {
            await parseHash()
            const result = await client.query({ query: queries.user }) as any;
            dispatch(fetchSuccess(result.data.user))
        }
        catch (e) {

            console.log(e)

            dispatch(fetchFail())
        }
    }
}
