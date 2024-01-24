
import { combineReducers } from 'redux';
const inintState = []
const reducer = (state = inintState, action) => {
    switch (action.type) {
        case 'FETCH_DATA_SUCCESS':
            return action.payload;

        default:
            return state

    }
}
const initialState_cart = [];
const cartReducer = (state = initialState_cart, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const state_id_state = [...state.filter(value => value.id === action.payload.id)]
            if (state_id_state.length > 0) {
                state_id_state[0].Quantity += parseFloat(action.payload.Quantity);
                return state;
            } else {
                return [...state, action.payload];
            }
        case 'Delete_PRODUCT':
            return [...state.filter(value => value.id != action.payload)]

        case 'Update_QatyInc':
            return state.map(item => {
                if (item.id === action.payload) {
                    return { ...item, Quantity: item.Quantity + 1 };
                }
                return item;
            });
        case 'Update_QatyDec':
            return state.map(item => {
                if (item.id === action.payload && item.Quantity > 1) {
                    return { ...item, Quantity: item.Quantity - 1 };
                }
                return item;
            });
        default:
            return state;
    }
};
const rootReducer = combineReducers({
    product: reducer,
    cart: cartReducer,
});
export default rootReducer