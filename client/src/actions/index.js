import axios from 'axios'

import { FETCH_USER } from './types'

// export const fetchUser = () => { //THUNK DISPATCHT EINE ACTION, NACHDEM DAS ASYNC REQUEST GESOLVED IST!! ACTION WIRD ERST NACH ERFOLGREICHEM REQUEST AN REDUCER GESENDET
//     return function (dispatch) {
//         axios.get('/api/current_user') //SAME ROUTE THAT BACKEND USES TO SEND RESPONSE OF USER
//             .then(res => dispatch({ type: FETCH_USER, payload: res }))
//     }
// }

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER, payload: res.data })
}