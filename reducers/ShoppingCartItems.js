const initialState = {
    ShoppingCart: [],
    WishList: [],
    CreditCards: [],
    Addresses: []
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
                ...state,
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
        case 'ADD_CREDIT_CARD':
            return {
                ...state,
                CreditCards: [...state.CreditCards, action.payload]
            }
        case 'ADD_ADDRESS':
            return {
                ...state,
                Addresses: [...state.Addresses, action.payload]
            }
    }
    return state;
}

export default ShoppingCartItems;
