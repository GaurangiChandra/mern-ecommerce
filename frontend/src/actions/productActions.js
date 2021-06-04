import axios from 'axios'

import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
  } from '../constants/productConstants';


//  we use dispatch to dispatch the actions(cases) presents 
export const listproducts = () => async(dispatch) =>
//  redux thunk let us add a function within the function
{
    try {
        dispatch({type : PRODUCT_LIST_REQUEST})

        const{data} = await axios.get('/api/products')

        dispatch({type: PRODUCT_LIST_SUCCESS,
        payload : data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL , 
            payload:error.response
        })
    }
}