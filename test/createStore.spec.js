import { expect } from 'chai';

import { createStore, combineReducers } from '../src';
import * as reducers from './helpers/reducers';
import { addTodo, unknownAction } from './helpers/actionCreators';

describe('createStore', () => {
  it('exposes the public API', () => {
    const store = createStore(combineReducers(reducers));
    const methods = Object.keys(store);

    expect(methods.length).to.equal(3);
    expect(methods).to.contain('subscribe');
    expect(methods).to.contain('dispatch');
    expect(methods).to.contain('getState');
  });

  it('applies the reducer to the previous state', () => {
    const store = createStore(reducers.todos);
    expect(store.getState()).to.deep.equal([]);

    store.dispatch(unknownAction());
    expect(store.getState()).to.deep.equal([]);

    store.dispatch(addTodo('Hello'));
    expect(store.getState()).to.deep.equal([
      {
        id: 1,
        text: 'Hello'
      }
    ]);

    store.dispatch(addTodo('World'));
    expect(store.getState()).to.deep.equal([
      {
        id: 1,
        text: 'Hello'
      },
      {
        id: 2,
        text: 'World'
      }
    ]);
  });
});
