// import axiosClient from 'api/axiosClient'
import { createContext, useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosClient from '../api/axiosClient'
import accountInfoAPI from '../api/accountAPI'
const AccountContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [account, setAccount] = useState(JSON.parse(localStorage.getItem('account')))

    const providerValue = useMemo(
        () => ({ token, setToken, account, setAccount}),
        [token, setToken, account, setAccount],
    )

    const navigate = useNavigate()

    useEffect(() => {
        if ( token !== 'null') {
            // Set authenticate token to axios
            axiosClient.application.defaults.headers.common[
                'Authorization'
            ] = `Bearer ${token}`

            accountInfoAPI.getInfoByToken()
                .then ((response)=> {
                    setAccount(response.data)
                    localStorage.setItem(
                        'account',
                        JSON.stringify( response.data),
                    )
                })
                .catch((error) => {
                                console.log(error)
                })

        } else {
            // User logout
            delete axiosClient.application.defaults.headers.common['Authorization'];

            setAccount('null');
            localStorage.removeItem('token')
            localStorage.removeItem('account')
        }
    }, [token, navigate])

    return (
        <AccountContext.Provider value={providerValue}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountContext