import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from '@mui/material/IconButton';
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { WelcomeName } from "./WelcomeName";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import { useIsAuthenticated} from "@azure/msal-react";
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const NavBar = () => {
    const IsAuthenticated = useIsAuthenticated();
    const navigate = useNavigate();
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };
    return (
        <div style={{ flexGrow: 1 }}>
            <AppBar>
                <Toolbar>
                <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
             onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={openDrawer}
         onClose={handleDrawerClose} >
                          <List>
                            {IsAuthenticated && (
                                <>
                                    <ListItem button onClick={() => {}}>
                                        <ListItemText primary="Dashboards" />
                                    </ListItem>
                                    <ListItem button onClick={() => {}}>
                                        <ListItemText primary="KPI" />
                                    </ListItem>
                                </>
                            )}
                        </List>
                    </Drawer>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                    {IsAuthenticated ? <WelcomeName /> : null}
                    {IsAuthenticated ? <IconButton size="large"  aria-label="account of current user"  aria-controls="menu-appbar" aria-haspopup="true" color="inherit" onClick={() => navigate('/profile')}>
                        <AccountCircle />
                        </IconButton> : null}
                    {IsAuthenticated ? <SignOutButton /> : <SignInButton />}
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;
