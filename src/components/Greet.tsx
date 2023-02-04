type GreetProps = {
    name: string
    age?: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    const { age = 23 } = props
    return (
        <div>
            {props.isLoggedIn ? <h1>Hello {props.name}!  You're {age} years old :)</h1> : <h1>Hello There!</h1>}
        </div>
    )
}