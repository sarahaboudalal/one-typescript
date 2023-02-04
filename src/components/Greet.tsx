type GreetProps = {
    name: string
    age: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            {props.isLoggedIn ? <p>Hello {props.name}!  You're {props.age} years old :)</p> : <p>Hello There!</p>}
        </div>
    )
}