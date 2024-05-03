// import axiosClient from 'api/axiosClient'
import { createContext, useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosClient from '../api/axiosClient'
import accountInfoAPI from '../api/accountInfoAPI'
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
        if (token !== 'null') {
            // Set authenticate token to axios
            axiosClient.application.defaults.headers.common[
                'Authorization'
            ] = `Bearer ${token}`

            accountInfoAPI.getInfoByToken()
                .then ((response)=> {
                    setAccount(response.data.profile)
                    localStorage.setItem(
                        'account',
                        JSON.stringify( response.data.profile),
                    )
                })
                .catch((error) => {
                                console.log(error)
                            })

        } else {
            // User logout
            setAccount('null')
            localStorage.setItem('token', null)
            localStorage.setItem('account', null)
        }
    }, [token, navigate])

    return (
        <AccountContext.Provider value={providerValue}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountContext