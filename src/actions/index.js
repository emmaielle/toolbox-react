import * as types from './types';

export function fetchMirror(){
    return {
        type: types.FETCH_MIRROR_TEXT_REQUEST
    }
}

export function fetchMirrorRequest(){
    return {
        type: types.FETCH_MIRROR_TEXT_REQUEST
    }
}

export function fetchMirrorSuccess(result){
    return {
        type: types.FETCH_MIRROR_TEXT_SUCCESS,
        payload: result
    }
}

export function fetchMirrorFailure(error){
    return {
        type: types.FETCH_MIRROR_TEXT_FAILURE,
        payload: error
    }
}