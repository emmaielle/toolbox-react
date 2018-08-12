import { FETCH_MIRROR_TEXT_FAILURE, FETCH_MIRROR_TEXT_REQUEST, FETCH_MIRROR_TEXT_SUCCESS } from '../actions/types';

export default function (state = null, action){
    switch (action.type) {
        case FETCH_MIRROR_TEXT_REQUEST:
            return {
                ...state, loading: true, error: false
            }
        case FETCH_MIRROR_TEXT_SUCCESS:
            return  {
                ...state, loading: false, error: false, mirror: action.payload
            }
        case FETCH_MIRROR_TEXT_FAILURE:
            return {
                ...state, loading: false, error: true, mirror: undefined
            }
        default:
            return state;
    }
}