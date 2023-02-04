import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UserContext'

export default function User() {
    const userContext = useContext(UserContext)
    const handleLogin = () => {

        userContext.setUser({
            name: 'Sarah',
            email: 'smth@smth.com'
        })

    }
    const handleLogout = () => {

        userContext.setUser(null)

    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <h1>User name is {userContext?.user?.name}</h1>
            <h1>User email is {userContext?.user?.email}</h1>
        </div>
    )
}
