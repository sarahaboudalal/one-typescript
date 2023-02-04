import React from 'react'

type PersonListProps = {
  name: {
    first: string
    last: string
  }[]
}

export default function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.name.map((person) => {
        return (
          <h1>{person.first} {person.last}</h1>
        )
      })}

    </div>
  )
}
