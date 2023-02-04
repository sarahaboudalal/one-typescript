import React, { useState } from 'react'
type AuthUser = {
    name: string
    email: string
}

export default function User() {
    const [user, setUser] = useState<null | AuthUser>(null)
    const handleLogIn = () => {
        setUser({
            name: 'Sarah',
            email: 'sarah@smth.com'
        })
    }
    const handleLogOut = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogIn}>Login</button>
            <button onClick={handleLogOut}>Logout</button>
            <p>User name is {user?.name}</p>
            <p>User email is {user?.email}</p>
        </div>
    )
}
