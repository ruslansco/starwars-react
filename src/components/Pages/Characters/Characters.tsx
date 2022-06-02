import React from "react";
import { fetchJSON } from "../../../api";
import {CharacterType} from "../../types";
import Pagination from "../../Pagination";
import { Grid } from '@mui/material';
import ItemList from "../ItemList";
import {FC} from "react";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';



function Characters() {
    const [characters, setCharacters] = React.useState<CharacterType[]>([]);
    const [page, setPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(10);

    const handlePrevPage = (prevPage: number) => {
    setPage((prevPage) => prevPage - 1);
    };

    const handleNextPage = (nextPage: number) => {
    setPage((nextPage) => nextPage + 1);
    };

    React.useEffect(() => {
        fetchJSON<{results: CharacterType[]}>("people?page="+page)
        .then(charactersResponse => setCharacters(charactersResponse.results))
        setTotalPages(totalPages);
      }, [page, totalPages]);

    return (
<div className="container">
<Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  minHeight="500px"
  maxHeight="500px"
>
          <table>
        <thead>
    
          <tr>
<th>Name</th>
<th>Birth-Year</th>
<th>Gender</th>
<th>Height</th>
<th>Mass</th>
<th>Homeworld</th>
<th>Species</th>

          </tr>
    
        </thead>
        {characters.map((character,index) => <ItemList key={character.name} character={character}/>)}
       
      </table>

    </Box>     
    <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  marginTop="20px"
>
<Pagination
    totalPages={totalPages}
    currentPage={page}
    handlePrevPage={handlePrevPage}
    handleNextPage={handleNextPage}
   />
</Box>

 

  
   </div>
    )}
    

export default Characters;
