import React from 'react'
import { Name } from './Person.types'
type PersonListProps = {
  name: Name[]
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
