import { createStore } from 'redux';
import carogameReducers from '../../src/reducers/carogame.reducer';

const carogameStore = createStore(carogameReducers);

export default carogameStore;