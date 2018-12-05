import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/RootReducer';
import { dealCard } from './actions/action';

/**
 * A store is an object that holds the application's state tree. A Redux app needs only one store.
 * See: https://redux.js.org/glossary#store
 * Essentially, Redux store does the following
 * 1] Holds application state
 * 2] Allows access to state via getState(). The getState method returns the current state tree of your app.
 * 3] Allows state to be updated via dispatch(action) . The dispatch method “dispatches” an action, consequently triggering a state change.
 * 4] Registers listeners via subscribe(listener) . The subscribe(listener) adds a change listener.
 * 5] Handles unregistering of listeners via the function returned by subscribe(listener).
 * @returns {Store<any & any, Action> & any}
 */
export default function configureStore() {
    const store = createStore(
        rootReducer,
        // Middleware is the suggested way to extend Redux with custom functionality that rap the store's dispatch method.
        // The key feature of middleware is that it is composable. Multiple middleware can be combined together,
        // where each middleware requires no knowledge of what comes before or after it in the chain.
        // It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.
        // People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more.
        // The most common use case for middleware is to support asynchronous actions.
        applyMiddleware(thunk)
        // A thunk is a function that wraps an expression to delay its evaluation.
        // redux-thunk lets the action creators invert control by dispatching functions. They would receive dispatch as an argument and may call it asynchronously.
        // Such functions are called thunks. Another example of middleware is redux-promise.
        // It lets you dispatch a Promise async action, and dispatches a normal action when the Promise resolves.
    );

    store.dispatch(dealCard('x'));
    return store;
}
