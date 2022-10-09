import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { UkraineArticleType } from '../../types'
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

interface ArticlesProps {
  articles: UkraineArticleType
}


function CharactersList({ articles }: ArticlesProps)  {
  const [loading, setLoading] = React.useState(true);
  const handleLoading = () => {
    setLoading(false);
    }
    const today = new Date();
    const date = today.toISOString().slice(0, 10)
    const time = (today.getHours() + ":" + today.getMinutes())
    const handleImgError = (e:any):string => {
      return e.target.src = "../../assets/error_img.jpg"
    }
    React.useEffect(()=>{
      setTimeout(() => setLoading(false),600);
      },[])
  
    return (

      <>

      <Link style={{ textDecoration: 'none' }}
          to={((articles.country!="World") ? `/news/${(articles.country).toLowerCase()}/${articles.id}` : `/news/world/${articles.title}`)}>
    
          <Box sx={{ margin:"10px", border: '1px solid #000',  borderRadius: "10px", overflow:"hidden", "&:hover": {
            border: "1px solid #40c4a4",

            transition: 'all .2s ease-in-out', 
                transform: 'scale(0.95)' 
          }}}>
             <Card>
      {loading === false ? (
            <div>
            <CardMedia
              referrerPolicy="no-referrer"
              src={articles.image}
              component="img"
              height="160"
              onError={(e:any):any => {
                /** 
                 * Any code. For instance, changing the `src` prop with a fallback url.
                 * In our code, I've added `e.target.className = fallback_className` for instance.
                 */
                e.target.src = "https://www.interactive.org/images/games/No_Image_Available.jpg";
              }}
              style={{ borderBottom: '1px solid #000'}}
            />
        </div>
      ):(
        <>    
        <Card >
    <CardMedia 
     style={{margin:"25px"}}>
    <CircularProgress sx={{color:"#52edc7"}}/>
    </CardMedia>
            <CardContent style={{minHeight: 150,maxHeight: 150}}>
      <Typography style={{minHeight: 95,maxHeight: 95,minWidth: 300,maxWidth: 345,fontFamily:"Roboto", letterSpacing: "0.2px",fontSize:"15px", fontWeight:500, textTransform: "uppercase"}}>
            {((articles.title).length < 127) ? ((articles.title).trimEnd()) : ((articles.title).substring(0,124))+"..."}
           </Typography>
    
           <Divider style={{background:"#52edc7",marginBottom:"10px"}} variant="middle"/>
      <List disablePadding style={{ width: '100%', textAlign:'center'}}>
          <ListItem dense>
          <NewspaperIcon  style={{ marginRight:'10px', color:'#52edc7'}} />
              <Typography style={{ fontFamily:"Roboto Slab",  marginLeft:'0.2em',  fontSize:"16px", fontWeight: 500}}>
              {(articles.source)}
          </Typography>     
          </ListItem>
    
    <ListItem dense>
    <LanguageIcon  style={{marginRight:'10px', color:'#52edc7'}} />
    <Typography style={{ fontFamily:"Roboto Slab", marginLeft:'0.2em',  fontSize:"16px", fontWeight: 500}}>
    {(articles.country)}
    </Typography>
    </ListItem>
    <ListItem dense>
          <PublishedWithChangesIcon  style={{marginRight:'10px'}} />
          <Typography style={{ fontFamily:"Roboto Slab", color:'#f5f6f7', marginLeft:'0.2em',  fontSize:"15px", fontWeight: 500}}>
            {articles.time&&articles.date != null ? (articles.time+", "+articles.date) : (time+", "+date)}
          </Typography>
    </ListItem>
        </List>
          </CardContent>
            </Card>
            </>
      )}
    
      <CardContent style={{minHeight: 150,maxHeight: 150}}>
      <Typography style={{minHeight: 95,maxHeight: 95,minWidth: 300,maxWidth: 345,color:'#f5f6f7', fontFamily:"Roboto", letterSpacing: "0.2px",fontSize:"15px", fontWeight:500, textTransform: "uppercase"}}>
            {((articles.title).length < 127) ? ((articles.title).trimEnd()) : ((articles.title).substring(0,124))+"..."}
           </Typography>
    
           <Divider style={{background:"#52edc7",marginBottom:"10px"}} variant="middle"/>
      <List disablePadding style={{ width: '100%', textAlign:'center'}}>
          <ListItem dense>
          <NewspaperIcon  style={{ marginRight:'10px', color:'#52edc7'}} />
              <Typography style={{ fontFamily:"Roboto Slab", color:'#f5f6f7', marginLeft:'0.2em',  fontSize:"16px", fontWeight: 500}}>
              {(articles.source)}
          </Typography>     
          </ListItem>
    
    <ListItem dense>
    <LanguageIcon  style={{marginRight:'10px', color:'#52edc7'}} />
    <Typography style={{ fontFamily:"Roboto Slab", color:'#f5f6f7', marginLeft:'0.2em',  fontSize:"16px", fontWeight: 500}}>
    {(articles.country)}
    </Typography>
    </ListItem>
    <ListItem dense>
          <PublishedWithChangesIcon  style={{marginRight:'10px', color:'#52edc7'}} />
          <Typography style={{ fontFamily:"Roboto Slab", color:'#f5f6f7', marginLeft:'0.2em',  fontSize:"15px", fontWeight: 500}}>
            {articles.time&&articles.date != null ? (articles.time+", "+articles.date) : (time+", "+date)}
          </Typography>
    </ListItem>
        </List>
          </CardContent>
       
          </Card>
      
          </Box>
          </Link>
    
            </>
    
    



    )}
    

export default CharactersList;


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