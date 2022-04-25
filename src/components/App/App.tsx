import React from "react";
import Sidebar from "../Sidebar";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { BrowserRouter as Router, Route, Routes, Outlet, Link  } from "react-router-dom";
import Characters from "../Pages/Characters";
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (

<Box sx={{ display: 'flex' }}>
<Sidebar/>
<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      <CssBaseline />
        <Routes>
<Route path="/" element={<Characters />} />
</Routes>

</Box>
</Box>


  );
}

export default App;
