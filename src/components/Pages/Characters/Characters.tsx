import React from "react";
import { fetchJSON } from "../../../api";
import {CharacterType} from "../../types";
import Pagination from "../../Pagination";
import { Grid } from '@mui/material';
import ItemList from "../ItemList";
import {FC} from "react";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

function Characters() {
    const [characters, setCharacters] = React.useState<CharacterType[]>([]);
    const [page, setPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(82);

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
    <>

    <Grid container spacing={2}  justifyContent="center"  marginTop="10px">

        {characters.map((character,index) => <ItemList key={index} character={character}/>)}
    
    </Grid>     

    <Pagination
     totalPages={totalPages}
     currentPage={page}
     handlePrevPage={handlePrevPage}
     handleNextPage={handleNextPage}
    />
    </>
    )}
    

export default Characters;
