import { combineReducers } from 'redux'

import {
    WINDOW_RESIZE,
} from 'app/reducers/actionTypes'

const isMobile = (state = false, action: any = {}) => {
    switch (action.type) {

        case WINDOW_RESIZE:
            return action.isMobile;

        default: return state;
    }
}

export default combineReducers({ isMobile })

export const windowResize = isMobile => ({ type: WINDOW_RESIZE, isMobile })

export const install = dispatch => {

    window.addEventListener("resize", () => {

        dispatch(windowResize(window.innerWidth <= 992))
    });

    dispatch(windowResize(window.innerWidth <= 992))
}

