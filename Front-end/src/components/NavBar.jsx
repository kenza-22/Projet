import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from '@mui/material/IconButton';
import { WelcomeName } from "./WelcomeName";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import { useIsAuthenticated} from "@azure/msal-react";
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from "react";
const NavBar = () => {
    const IsAuthenticated = useIsAuthenticated();
    const [data, setData] = useState(null);

  // Utilisation de useEffect pour effectuer l'appel API une fois que le composant est monté
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Effectuer l'appel API en utilisant fetch()
        const response = await fetch('https://graph.microsoft.com/v1.0/me');
        
        // Vérifier si la réponse est OK (statut 200)
        if (response.ok) {
          // Convertir la réponse en JSON
          const jsonData = await response.json();
          // Mettre à jour l'état avec les données de l'API
          setData(jsonData);
          console.log("Données de l'API :", jsonData);
        } else {
          // En cas d'erreur de la réponse, afficher un message d'erreur
          console.error('Erreur lors de la récupération des données:', response.statusText);
        }
      } catch (error) {
        // En cas d'erreur lors de la récupération des données, afficher l'erreur
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    // Appel de la fonction fetchData pour récupérer les données
    fetchData();
  }, []);
    return (
        <div style={{ flexGrow: 1 }}>
            <AppBar position="static">
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
                    {IsAuthenticated ? <IconButton size="large"  aria-label="account of current user"  aria-controls="menu-appbar" aria-haspopup="true" color="inherit" >
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
