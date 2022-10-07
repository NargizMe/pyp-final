const initialState = {
    loading: false,
    data: undefined,
    error: undefined,
}


export const adsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_ADS_START':
            return {
                ...state,
                loading: true
            }
        case 'GET_ADS_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case 'GET_ADS_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload
            }


        default:
            return state;
    }
}