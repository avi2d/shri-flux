import { expect } from 'chai';

import { createStore, combineReducers } from '../src';
import * as reducers from './helpers/reducers';

describe('createStore', () => {
  it('exposes the public API', () => {
    const store = createStore(combineReducers(reducers));
    const methods = Object.keys(store);

    expect(methods.length).to.equal(3);
    expect(methods).to.contain('subscribe');
    expect(methods).to.contain('dispatch');
    expect(methods).to.contain('getState');
  });
});
