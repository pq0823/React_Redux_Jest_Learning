import { DEAL_CARD } from "../actions/action";
import { assign, concat } from 'lodash'

const defaultSate = {
    player: '',
};

/**
 * Reducers describe how the application state changes with respect to actions dispatched to the redux store.
 * @param state current state
 * @param action
 * @returns {*} updated state
 */
export default (state = defaultSate, action) => {
    switch (action.type) {
        case DEAL_CARD:
            // You cannot mutate the current state, but return a new object with updated values
            return assign({}, state, { 'hand': !state.hand ? [action.card] : concat(state.hand, action.card) });
        default:
            return state
    }
}
