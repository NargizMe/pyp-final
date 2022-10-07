import axios from "axios"

let baseUrl = `https://northwind.vercel.app/api/products`;

export const getAllAds = () => {
    return async (dispatch) => {
        dispatch({
            type: 'GET_ADS_START',
        })
        axios.get(`${baseUrl}`)
            .then(result =>
                dispatch({
                    type: 'GET_ADS_SUCCESS',
                    payload: result.data
                }))
            .catch(error => {
                dispatch({
                    type: 'GET_ADS_FAIL',
                    payload: error
                })
            })
    }
}

export const addToFavoritesAction = (ad) => {
    return {
        type: 'ADD_TO_FAVORITES',
        payload: ad
    }
}

export const removeAdAction = (id) => {
    return {
        type: 'REMOVE_AD',
        payload: id
    }
}