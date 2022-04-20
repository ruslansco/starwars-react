import { PersonType } from '../../../types';

interface PersonProps {
  person: PersonType
}
/*
  Function Person takes a single prop and returns html table. Attributes from JSON are generated dynamically in html table. 
  It iterates over the dataset, grabs each row and displays in html table.
*/
function Person({ person }: any) {

const columns = person[0] && Object.keys(person[0]);

  return (
    <>
    <table>
    <thead>

      <tr>
    {/* 
      Pulls the key out of first row and uses them as headings for the table by maping 
        over columns variable which contains keys from the first row. Each iteration it 
        returns a single heading which is wrapped in <th> element.
    */}
      {person[0] && columns.map((heading:any) => <th>{heading}</th>)}
      </tr>

    </thead>
    <tbody>
    
      {person.map((row:any) => (
        <tr>
          {columns.map((column:any) => (
            <td>{row[column]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
  </>
    );
}

export default Person
