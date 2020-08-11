import axios from 'axios';

const url = 'https://api.mindtrexacademy.com'

export const login = (data, navigation) => {
    return (dispatch) => {
        dispatch({
            type: 'LOGIN_PENDING'
        })

        return axios.post(`${url}/directory/auth/signin`, data)
            .then((response) => {
                let payload = response.data;
                navigation.navigate('Profile')
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload
                })
            })
            .catch(error => {
                throw (error);
            })
    }
}

