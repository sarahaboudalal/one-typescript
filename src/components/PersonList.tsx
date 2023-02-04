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
          <h2>{person.first} {person.last}</h2>
        )
      })}

    </div>
  )
}
