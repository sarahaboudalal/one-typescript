import React from 'react'

type HeadingProps = {
    children: string
}
export default function Heading(props: HeadingProps) {
    return (
        <div>
            <h3>{props.children}</h3>
        </div>
    )
}
