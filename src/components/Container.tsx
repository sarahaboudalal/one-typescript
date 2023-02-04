import React from 'react'

type ContainerProps = {
    style: React.CSSProperties
}

export default function Container({ style }: ContainerProps) {
    return (
        <div style={style}>Style Props Excersice</div>
    )
}
