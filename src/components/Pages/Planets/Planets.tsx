import React from "react";
import { fetchJSON } from "../../../api";

import Pagination from "../../Pagination";
import { Grid } from '@mui/material';
import PlanetsList from "./PlanetsList";
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



function Planets() {

    const [page, setPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(10);

    const handlePrevPage = (prevPage: number) => {
    setPage((prevPage) => prevPage - 1);
    };

    const handleNextPage = (nextPage: number) => {
    setPage((nextPage) => nextPage + 1);
    };


    return (
<div className="container">

   </div>
    )}
    

export default Planets;
