import * as actions from '../../src/actions';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const store = mockStore();

describe('mirror actions', () => {
    beforeEach(() => {
      store.clearActions();
    });
  
    describe('fetchMirror', () => {
      test('Dispatches the correct action and payload', () => {
        const expectedActions = [
            {
              'payload': 'holaaa?!SSDFSD sdfsdf',
              'type': 'FETCH_MIRROR_TEXT',
            },
          ];
      
        store.dispatch(actions.fetchMirror('holaaa?!SSDFSD sdfsdf'));
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  
    describe('fetchMirrorSuccess', () => {
      test('Dispatches the correct action and payload for fetchMirror success', () => {
        const expectedActions = [
            {
              'payload': {text: "dfgdfgdfg dgdfgd?"},
              'type': 'FETCH_MIRROR_TEXT_SUCCESS',
            },
          ];
        store.dispatch(actions.fetchMirrorSuccess({text: "dfgdfgdfg dgdfgd?"}));
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    describe('fetchMirrorRequest', () => {
        test('Dispatches the correct action and payload for fetchMirror request', () => {
          const expectedActions = [
              {
                'type': 'FETCH_MIRROR_TEXT_REQUEST',
              },
            ];
          store.dispatch(actions.fetchMirrorRequest());
          expect(store.getActions()).toEqual(expectedActions);
        });
      });

      describe('fetchMirrorFailure', () => {
        test('Dispatches the correct action and payload for fetchMirror failure', () => {
          const expectedActions = [
              {
                'type': 'FETCH_MIRROR_TEXT_FAILURE',
              },
            ];
          store.dispatch(actions.fetchMirrorFailure());
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
  });