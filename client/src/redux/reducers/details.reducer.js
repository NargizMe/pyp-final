export const detailReducer = (state = {}, action) => {

    switch (action.type) {
        case 'GET_ID_SUCCESS': 
        return {
            data: action.payload
        }
        default:
            return state;
    }
}