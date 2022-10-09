import React from "react";
import Sidebar from "../Sidebar";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { BrowserRouter as Router, Route, Routes, Outlet, Link  } from "react-router-dom";
import Home from "../Pages/Blocks";
import Planets from "../Pages/Planets";
import Auth from "../Pages/Auth";
import Nomatch from "../Pages/NoMatch";
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from "@mui/material/Container";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery'

 
function App() {
   // Get OS-level preference for dark mode
   const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

   // state: boolean ; true == use dark mode
   const [darkMode, setDarkMode] = useState(prefersDarkMode);
 
   const themeString = (b: boolean) => (b ? "dark" : "light");
 
   const theme = React.useMemo(
     () =>
       createTheme({
         palette: {
           mode: themeString(darkMode)
         }
       }),
     [darkMode]
   );
 
 
  return (

    <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />

    <Box sx={{ display: 'flex'}}>
<Sidebar/>
<Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 240px)` } }}
      >
        <Toolbar />
        <Routes>
<Route path="/" element={<Home />} />
<Route path="/planets" element={<Planets />} />
<Route path="/login" element={<Auth />} />
<Route path="*" element={<Nomatch />} />
</Routes>

</Box>
</Box>


  </ThemeProvider>




  );
}

export default App;
