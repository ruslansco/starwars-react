import React from "react";
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Route, Routes, Outlet, Link  } from "react-router-dom";
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Characters from "../Characters";

function Home() {

  return (

    

<TabsUnstyled defaultValue={0}>
      <TabsListUnstyled> 
        <TabUnstyled>Characters</TabUnstyled>
        <TabUnstyled>Movies</TabUnstyled>
      </TabsListUnstyled>
  <TabPanelUnstyled value={0}><Characters/></TabPanelUnstyled>
      <TabPanelUnstyled value={1}></TabPanelUnstyled>
    </TabsUnstyled>




  )
    }

export default Home
