//login
export const LOGIN_SUCCES = "LOGIN_SUCCESS"
const loginSucces = (user) => ({type: LOGIN_SUCCES, payload: user})
export const LOGIN_ERROR = "LOGIN_ERROR"
const loginError = () => ({type: LOGIN_ERROR})
export const LOGIN_LOADING = "LOGIN_LOADING"
const loginLOADING = () => ({type: LOGIN_LOADING})

//THUNKS
export const login = ( user) =>dispatch =>{
    dispatch(
        loginLoading()
    )
    return fetch("http://localhost:8000/login")
}