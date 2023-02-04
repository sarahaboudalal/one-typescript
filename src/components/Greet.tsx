type GreetProps = {
    name: string
    age?: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    const { age = 23 } = props
    return (
        <div>
            {props.isLoggedIn ? <p>Hello {props.name}!  You're {age} years old :)</p> : <p>Hello There!</p>}
        </div>
    )
}