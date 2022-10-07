export const favoritesReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TO_FAVORITES':
            return [...state, action.payload]

        case 'REMOVE_AD':
            return [...state.filter(ad => ad._id !== action.payload)]

        default:
            return state;
    }
}