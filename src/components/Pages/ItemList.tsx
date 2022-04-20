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

interface CharacterProps {
    character: CharacterType
  }


function ItemList({ character }: CharacterProps)  {

    return (
    <>
        <Box sx={{ margin:"10px", border: '1px solid #000',  borderRadius: "10px", overflow:"hidden", "&:hover": {
        border: "1px solid #40c4a4",
        color: "#52edc7",
        transition: 'all .2s ease-in-out', 
            transform: 'scale(0.95)' 
      }}}>
           <Card style={{minWidth: 320,maxWidth: 320, minHeight: 400, maxHeight: 400}}>
           <CardContent style={{minHeight: 150,maxHeight: 150}}>
  <Typography style={{minHeight: 35,maxHeight: 35,minWidth: 300,maxWidth: 345}}>
  {character.name}
       </Typography>

       <Divider style={{background:"#52edc7",marginBottom:"10px"}} variant="middle"/>
  <List disablePadding style={{ width: '100%', textAlign:'center'}}>
      <ListItem dense>
      <NewspaperIcon  style={{ marginRight:'10px', color:'#52edc7'}} />
          <Typography style={{ marginLeft:'0.2em',  fontSize:"16px", fontWeight: 500}}>
          DOB: {character.birth_year}
      </Typography>     
      </ListItem>

<ListItem dense>
<LanguageIcon  style={{marginRight:'10px', color:'#52edc7'}} />
<Typography style={{ marginLeft:'0.2em',  fontSize:"16px", fontWeight: 500}}>
Mass: {character.mass} kg
</Typography>
</ListItem>
<ListItem dense>
      <PublishedWithChangesIcon  style={{marginRight:'10px', color:'#52edc7'}} />
      <Typography style={{ marginLeft:'0.2em',  fontSize:"15px", fontWeight: 500}}>
      Height: {character.height} cm
      </Typography>
</ListItem>
    </List>
      </CardContent>
   </Card>
   </Box>
    </>
    )}
    

export default ItemList;
