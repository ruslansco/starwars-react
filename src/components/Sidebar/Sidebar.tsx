import React from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import GitHubIcon from '@mui/icons-material/GitHub';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import DraftsIcon from '@mui/icons-material/Drafts';
import BuildIcon from '@mui/icons-material/Build';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";


const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

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
    MuiButtonBase: {
      styleOverrides: {
        root:{
          color:"#000",
        }
      }
    },
        MuiInputBase:{
            styleOverrides: {
            root: {
              color: "#000"
            },

          }
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              color: "#000"
            }
          }
        },
        MuiFormControl:{
          styleOverrides: {
            root: {
              color: "#000"
            }
          }
        },
        MuiTextField:{
          styleOverrides: {
            root: {
              color: "#000"
            }
          }
        },
        MuiFormLabel:{
          styleOverrides: {
            root: {
              color: "#000"
            }
          }
        },
        MuiInputLabel:{

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
              backgroundColor:"#fff",
              border: "1px solid #000"
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

            }
          }
        },
        MuiAlert: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
      },
        MuiAutocomplete: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiAvatar: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiAvatarGroup: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiBackdrop: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiBadge: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiBottomNavigation: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiBottomNavigationAction: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiBreadcrumbs: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiButtonGroup: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiCard: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiCardActionArea: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiCardActions: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiCardContent: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiCardHeader: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiCardMedia: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiCheckbox: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiChip: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiCircularProgress: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiCollapse: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiContainer: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiCssBaseline: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiDialog: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiDialogActions: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiDialogContent: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiDialogContentText: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiDialogTitle: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiDivider: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiAccordion: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiAccordionActions: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiAccordionDetails: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiAccordionSummary: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiFab: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiFilledInput: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiFormControlLabel: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiFormGroup: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiFormHelperText: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiImageList: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiImageListItem: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiImageListItemBar: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiIcon: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiIconButton: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiInput: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiInputAdornment: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiLinearProgress: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiLink: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiList: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiListItem: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiListItemButton: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiListItemAvatar: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiListItemSecondaryAction: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiListItemText: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiListSubheader: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiMenu: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiMenuItem: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiMobileStepper: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiModal: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiNativeSelect: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiPagination: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiPaginationItem: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiPaper: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
      
        MuiPopover: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiRadio: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiRating: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiScopedCssBaseline: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiSkeleton: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiSlider: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiSnackbar: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiSnackbarContent: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiSpeedDial: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiSpeedDialIcon: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiStep: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiStepButton: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiStepConnector: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiStepContent: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiStepIcon: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiStepLabel: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiStepper: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiSvgIcon: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiSwitch: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiTab: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiTable: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiTableBody: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiTableCell: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiTableContainer: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiTableFooter: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiTableHead: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiTablePagination: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiTableRow: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiTableSortLabel: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiToggleButton: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiToggleButtonGroup: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiToolbar: {
          styleOverrides: {
            root: {
             color: "#000",
            }
        }
        },
        MuiTouchRipple: {
          styleOverrides: {
            root: {
             color: "#000",
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
    MuiButtonBase: {
      styleOverrides: {
        root:{
          color:"#fff",
        }
      }
    }, 
    MuiOutlinedInput:{
      styleOverrides: {
        root: {
          color: "#fff"
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

  }
});

function Sidebar(props: Props) {
  const [light, setLight] = React.useState(false);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />

      <Box sx={{ overflow: 'auto' }}>
      <List component="nav">
      <Link
      to={`/`}
      style={{ textDecoration: 'none'}}>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="News" />
        </ListItem>
        </Link>
        <Divider />
        <Link
      to={`/planets`}
      style={{ textDecoration: 'none'}}>
        <ListItem button>
          <ListItemIcon>
            <DesktopMacIcon />
          </ListItemIcon>
          <ListItemText primary="Planets" />
        </ListItem>
        </Link>
        <Divider />
        <Link
      to={`/login`}
      style={{ textDecoration: 'none'}}>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItem>
        </Link>
      </List>
          <Divider />
     
          <ListItem>
          <ListItemIcon>
          <FormGroup>
          <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
        label=""
        onChange={() => setLight(prev => !prev)}
      />
         </FormGroup>
          </ListItemIcon>
        </ListItem>

 
        </Box>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
    <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        <Box display='flex' flexGrow={1}>
        <h3>
            Liberal.KG
            </h3>
        </Box>


        </Toolbar>
        
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
          open
        >
                   {drawer}
        </Drawer>
      </Box>
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