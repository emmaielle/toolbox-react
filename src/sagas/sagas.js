import autoBind from 'auto-bind';
import { all, put, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/types';
import * as actions from '../actions';

class Saga {
    constructor(backend){
        this.backend = backend;
        autoBind(this);
    }

    * requestMirror(action){
        yield put(actions.fetchMirrorRequest());
        const result = yield this.backend.getMirror(action.payload);
        const resultBody = yield result.json();
        debugger;
        if (resultBody){
            yield put(actions.fetchMirrorSuccess(resultBody));
        } 
        else
            yield put(actions.fetchMirrorFailure());
    }

    * watchRequestMirror(){
        yield takeEvery(types.FETCH_MIRROR_TEXT, this.requestMirror);
    }

    * rootSaga(){
        yield all([
            this.watchRequestMirror(this.watchRequestMirror)
        ])
    }
}

export default Saga;