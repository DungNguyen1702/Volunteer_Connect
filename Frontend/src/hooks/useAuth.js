import { useContext } from 'react'
import AccountContext from '../contexts/AccountContext'

const useAuth = () => {
    return useContext(AccountContext)
}

export default useAuth
