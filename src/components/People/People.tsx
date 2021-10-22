import React from 'react'

import { fetchJson } from '../../api'
import { PersonType } from '../../types'
import Person from '../Person'

function People() {
  const [people, setPeople] = React.useState<PersonType[]>([])

  React.useEffect(() => {
    fetchJson<{ results: PersonType[] }>('people')
      .then(peopleResponse => setPeople(peopleResponse.results))
  }, [])

  return (
    <div>
      {people.map(person => <Person person={person} />)}
    </div>
  )
}

export default People
