import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from '@mui/material/IconButton';
import { WelcomeName } from "./WelcomeName";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import { useIsAuthenticated} from "@azure/msal-react";
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
const NavBar = () => {
    const IsAuthenticated = useIsAuthenticated();
    const navigate = useNavigate();
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
          >
            <MenuIcon />
          </IconButton>
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
