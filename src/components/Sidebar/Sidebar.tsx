import React from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const drawerWidth = 240;

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));


const themeLight = createTheme({
  palette: {
    background: {
      default: "#fff"
    },
    text: {
      primary: "#000"
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#fff",
          color: "#000",
          border: "1px solid #000"
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          color: "#000",
          border: "1px solid #000"
        }
      }
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
         color: "#000",
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
         color: "#000",
        }
      }
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff"
        }
      }
    }
  }
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#192734"
    },
    text: {
      primary: "#fff"
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor:"#fff",
          backgroundImage:"#fff",
          color: "#fff",
          border: "1px solid #000"
        }
      }
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          backgroundColor:"#fff",
          color: "#fff",
        }
      }
          },
        MuiTable: {
          styleOverrides: {
            root: {
              backgroundColor:"#fff",
              color: "#fff",
            }
          }
        },
        MuiTableHead: {
          styleOverrides: {
            root: {
              backgroundColor:"#fff",
              color: "#fff",
                }
            }
        },
    MuiTableRow: {
      styleOverrides: {
        root: {
          backgroundColor:"#fff",
          color: "#fff",
            }
        }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          '&:last-child': {
            backgroundColor: '#fff',
          },
            },
            body: {
              color: "#000",
            }
        }
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          backgroundColor:"#fff",
          color: "#fff",
            }
        }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor:"#151E29",
          color: "#fff",
          border: "1px solid #000"
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          backgroundColor:"#151E29",
          color: "#fff",
          border: "1px solid #000"
        }
      }
    },
    MuiButtonBase: {
      styleOverrides: {
        root:{
          color:"#fff",
        }
      }
    },
   

    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#151E29",
          border: "1px solid #000"
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor:"#151E29",
          color: "#f5f6f7",
          border: "1px solid #000"
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
         color: "#f5f6f7"
        }
      }
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          backgroundColor: "#000"
        }
      }
    }
  }
});

function Sidebar() {
  const [light, setLight] = React.useState(false);
  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
    <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>

        <Box display='flex' flexGrow={1}>
        <h3>
            React StarWars
            </h3>
        </Box>
 
          <FormGroup>
      <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
        label=""
        onChange={() => setLight(prev => !prev)}
      />
    </FormGroup>
    <Box
sx={{
  typography: 'body1',
  '& > :not(style) + :not(style)': {
    ml: 2,
  },
}}
>
  <Link color="inherit" href="https://github.com/ruslansco/starwars-react" target="blank"><GitHubIcon  sx={{marginTop:'10px'}} /></Link>

<Link color="inherit" href="https://ruslans.net" target="blank"><PersonOutlineIcon  sx={{marginTop:'10px'}} /></Link>


</Box>
        </Toolbar>
        
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />

        <Box sx={{ overflow: 'auto' }}>
        <List>
            {['Characters', 'Planets'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
            
          </List>
          <Divider />

        </Box>

      </Drawer>
      </ThemeProvider> 
  );
}

export default Sidebar;

/**
 * 
 * import React from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { ThemeProvider, createTheme } from "@mui/material/styles";

const drawerWidth = 240;

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));


const themeLight = createTheme({
  palette: {
    background: {
      default: "#fff"
    },
    text: {
      primary: "#000"
    }
  },
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginTop: 4,
          marginBottom: 4
        }
      }
    },
    MuiTypography: {
styleOverrides: {
  root: {
    color: "#000",
   }
 }
},
MuiPaper: {
  styleOverrides: {
    root: {
      color: "#000"
    }
  }
  }, 
MuiCardContent: {
styleOverrides: {
  root: {
    color: "#000"
  }
}
}, 
MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#fff",
          color: "#000",
          border: "1px solid #000"
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#fff",
          color: "#000",
          border: "1px solid #000",
          text:"#000",
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "#000",
        }
      }
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          backgroundColor: "#000",
          color: "#000",
        }
      }
    }
  }
  
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#192734"
    },
    text: {
      primary: "#fff"
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#fff",
        }
      }
          },
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginTop: 4,
          marginBottom: 4
        }
      }
    },

    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#151E29",
          border: "1px solid #000"
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor:"#151E29",
          color: "#f5f6f7",
          border: "1px solid #000"
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
         color: "#f5f6f7"
        }
      }
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          backgroundColor: "#000"
        }
      }
    }
  }
});

function Sidebar() {
  const [light, setLight] = React.useState(false);
  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
    <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
        <Box display='flex' flexGrow={1}>
        <Typography variant="h6" noWrap component="div">
            React StarWars
          </Typography>
        </Box>
      
          <FormGroup>
      <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
        label=""
        onChange={() => setLight(prev => !prev)}
      />
    </FormGroup>

        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
        <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />

        </Box>
      </Drawer>
      </ThemeProvider> 
  );
}

export default Sidebar;

 * 
 */