const initialState = {
    ShoppingCart: []
}

const ShoppingCartItems = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART': 
            return {
                ...state,
                ShoppingCart: [...state.ShoppingCart, action.payload]
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                ShoppingCart: [...state.ShoppingCart.slice(0, action.payload), ...state.ShoppingCart.slice(action.payload + 1)]
            }
        case 'CLEAR_CART':
            return {
                ShoppingCart: []
            }   
    }
    return state;
}

export default ShoppingCartItems;
