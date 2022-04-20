import React from 'react'
import { fetchJson } from '../../../api'
import { PersonType } from '../../../types'
import Person from '../Person'

function People() {
  /* 
  People function is responsible for filtering textbox and displaying results from Person function.
  */

  //First value is getter and second is setter. Uses type of PersonType and defaults to an empty array.
  const [people, setPeople] = React.useState<PersonType[]>([])
  //Search columns by characters names - defaults to an array.
  const [searchColumns] = React.useState(['name']);
  //Query filter - defaults to an empty string.
  const [query, setQuery] = React.useState('');

  //Fires one time when the component initially loads, because second argument is an empty array.
  React.useEffect(() => {
  //Makes a call to fetchJson function in src/api/index.ts
    fetchJson<{ results: PersonType[] }>('people')
    //.then takes JSON data returned from fetchJson and passes to setPeople.
      .then(peopleResponse => setPeople(peopleResponse.results))
  }, [])

  function Search(rows:any) {
  /* 
  Search function takes rows from dataset and filters over the rows matching a column value and returns all rows that matches the query.
  */
    return rows.filter((row:any) =>
      searchColumns.some(
        (column) =>
          row[column]
            .toString()
            .toLowerCase()
            .indexOf(query.toLowerCase()) > -1,
      )
    );
  }
  return (
    <>
        <div className="search-row">
             {/* 
              This input element is a controlled element which means that we provide a value for the element. onChange handler is used to change the value of the element. 
              onChange handler takes arrow function with single parameter which is called change, which represents the syntetic event that happens- 
                everytime we type a character into the search-input box. Each time that value changes, it binds the value into setQuery setter from the useState function. 
              */}
          <input
            type='text'
            value={query}
            onChange={(change) => setQuery(change.target.value)}
          />
        </div>
        <div  className="grid-container">
            {/* 
              Calls Person function and wraps the prop of Person with Search function.
              Meaning the data that is stored in our state will be filtered through the Search 
                function before it passed to the Person function. Therefore, the Person function 
                will only render the values that matches the Search query.
              */}
          <Person person={Search(people)} />
        </div>
  
      </>
  )
}

export default People
