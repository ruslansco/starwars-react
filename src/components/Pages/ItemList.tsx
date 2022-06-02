import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CharacterType } from '../types'
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import { List } from '@mui/material';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import LanguageIcon from '@mui/icons-material/Language';
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { TableCell } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

interface CharacterProps {
    character: CharacterType
  }

function ItemList({ character }: CharacterProps)  {

    return (

        <tbody>

        <tr>
            <td>{character.name}</td>
            <td>{character.birth_year}</td>
            <td>{character.gender}</td>
            <td>{character.height}</td>
            <td>{character.mass}</td>
            <td>{character.homeworld}</td>
            <td>{character.species}</td>
        </tr>

    </tbody>





    )}
    

export default ItemList;


/**

 <TableBody>

<TableRow
  key={character.name}
  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
>
  <TableCell component="th" scope="row" variant="body">
    {character.name}
  </TableCell>
  <TableCell align="right">{character.birth_year}</TableCell>
  <TableCell align="right">{character.gender}</TableCell>
  <TableCell align="right">{character.mass}</TableCell>
  <TableCell align="right">{character.height}</TableCell>
  <TableCell align="right">{character.hair_color}</TableCell>
   <TableCell align="right">{character.eye_color}</TableCell>
</TableRow>

</TableBody>
  */