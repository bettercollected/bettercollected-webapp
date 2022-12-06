import { Reducer, combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { createLogger } from 'redux-logger';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from 'redux-persist';

import environments from '@app/configs/environments';
import { RESET_STATE_ACTION_TYPE } from '@app/store/actions/resetState';
import counterSlice from '@app/store/counter/counterSlice';
import formresponsetabReducer from '@app/store/counter/formresponsetabSlice';
import mysubmissionReducer from '@app/store/counter/mysubmission';
import { monitorReducerEnhancer } from '@app/store/enhancers';
import { otpApi } from '@app/store/otp/api';

import { formApi } from './form/api';

const loggerMiddleware = createLogger();

// Add more middlewares here
const middlewares = [loggerMiddleware, otpApi.middleware, formApi.middleware];

if (environments.IS_IN_PRODUCTION_MODE) middlewares.splice(0, 2);

const reducers = {
    [counterSlice.reducerPath]: counterSlice.reducer,
    [otpApi.reducerPath]: otpApi.reducer,
    [formApi.reducerPath]: formApi.reducer,
    mySubmission: mysubmissionReducer,
    formResponseTab: formresponsetabReducer
    // [marketplaceApi.reducerPath]: marketplaceApi.reducer,
};

const combinedReducer = combineReducers<typeof reducers>(reducers);

export const rootReducer: Reducer<RootState> = (state, action) => {
    if (action.type === RESET_STATE_ACTION_TYPE) {
        state = {} as RootState;
    }

    return combinedReducer(state, action);
};

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
            // serializableCheck: {
            //     ignoredActions: [
            //         FLUSH,
            //         REHYDRATE,
            //         PAUSE,
            //         PERSIST,
            //         PURGE,
            //         REGISTER,
            //     ]
            // }
        }).concat(middlewares),
    preloadedState: {},
    devTools: !environments.IS_IN_PRODUCTION_MODE,
    enhancers: environments.IS_IN_PRODUCTION_MODE ? [] : [monitorReducerEnhancer]
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;

setupListeners(store.dispatch);
