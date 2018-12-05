/**
 * Actions are payloads of information which send data to the store, the only source of information for the store.
 * Essentially, they are JavaScript objects. What makes a particular action unique is the type key defined in it.
 */
export const DEAL_CARD = 'DEAL_CARD';

// const actions = {
//     type: DEAL_CARD,
//     card: 'card'
// }

/**
 * Action creators are functions that create actions.
 *
 */
export const dealCard = card => {
    return { type: DEAL_CARD, card }
};

