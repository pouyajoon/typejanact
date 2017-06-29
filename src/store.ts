import { createStore, combineReducers, Store } from 'redux';
import clothsReducer from './reducers/cloths';
import thunkMiddleware from 'redux-thunk';
import { compose } from 'redux';
import { applyMiddleware } from 'redux';

declare let global: any;

export const store = createStore(
    combineReducers({ clothState: clothsReducer }),
    compose(
        applyMiddleware(thunkMiddleware),
        global.__REDUX_DEVTOOLS_EXTENSION__()
    )) as Store<ApplicationState>;

// console.log('CREATE STORE', store);

export interface ApplicationState {
    clothState: ClothState;
}

export interface ClothState {
    clothes: string[];
}
