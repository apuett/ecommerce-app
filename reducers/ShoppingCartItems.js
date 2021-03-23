const initialState = {
    ShoppingCart: [],
    WishList: []
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
        case 'ADD_TO_WISHLIST':
            return {
                ...state,
                WishList: [...state.WishList, action.payload]
            }
        case 'REMOVE_FROM_WISHLIST':
            return {
                ...state,
                WishList: [...state.WishList.slice(0, action.payload), ...state.WishList.slice(action.payload + 1)]
            }
    }
    return state;
}

export default ShoppingCartItems;
