import autoBind from 'auto-bind';
import { all, put, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';
import * as actions from '../actions';

class Saga {
    constructor(backend){
        this.backend = backend;
        autoBind(this);
    }

    * requestMirror(action){
        console.log("Estoy en saga");
        yield put(actions.fetchMirrorRequest());
    }

    * watchRequestMirror(){
        yield takeLatest(types.FETCH_MIRROR_TEXT, this.requestMirror);
    }

    * rootSaga(){
        yield all([
            this.watchRequestMirror(this.watchRequestMirror)
        ])
    }
}

export default Saga;