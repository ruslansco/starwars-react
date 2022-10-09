import React from "react";
import { fetchJSON } from "../../../api";
import {UkraineArticleType} from "../../types";
import Pagination from "../../Pagination";
import { Grid } from '@mui/material';
import CharactersList from "./CharactersList";
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

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280
  }
}));

function Characters() {
  const [news, setNews] = React.useState<UkraineArticleType[]>([]);
  
  
    const [page, setPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(99);
    
    const [loading, setLoading] = React.useState(true);
    const handleLoading = () => {
      setLoading(false);
      }

    const handlePrevPage = (prevPage: number) => {
    setPage((prevPage) => prevPage - 1);
    };

    const handleNextPage = (nextPage: number) => {
    setPage((nextPage) => nextPage + 1);
    };

   React.useEffect(() => {
    fetchJSON<UkraineArticleType[]>("news/ukraine?page="+page)
    .then(news => setNews(news))
    setTotalPages(totalPages);
    setTimeout(() => setLoading(false),600);
  }, [page, totalPages]);

      console.log(news);
    return (
<div className="container">
<Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  minHeight="500px"
  maxHeight="500px"
>

<DashboardLayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%'
          }}
        >
        {news.map((articles, id) => <CharactersList key={id} articles={articles} />)}
        </Box>
      </DashboardLayoutRoot>


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




