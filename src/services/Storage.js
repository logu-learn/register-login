import Cookies from 'js-cookie'

export const storeUserData = (data) =>{
    Cookies.set('idToken', data, { expires: 7 })
}

export const getUserData = () =>{
    return Cookies.get('idToken')
} 