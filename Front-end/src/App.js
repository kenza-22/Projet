import Grid from "@mui/material/Grid";
import { Routes, Route, Outlet } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import NavBar from "./components/NavBar";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useMsal } from "@azure/msal-react";
export const UserContext = createContext();
function App() {
    const [userGroups, setUserGroups] = useState(null);
    const [isInitialized, setIsInitialized] = useState(false);
    const { instance } = useMsal();
    const getUserGroups = async () => {
        try {
            const response = await instance.acquireTokenSilent({
                scopes: ["Group.Read.All"]
            });
            const graphResponse = await axios.get('https://graph.microsoft.com/v1.0/me/memberOf', {
                headers: {
                    Authorization: `Bearer ${response.accessToken}`
                }
            });
            const groups = graphResponse.data.value.map(group => group.displayName);
            const group = groups.join(""); //convertion en une chaine de caractères
            setUserGroups(group);
        } catch (error) {
            console.error('Error fetching user groups:', error);
        }
    };
    useEffect(() => {
        if (instance) {
            setIsInitialized(true);
        }
    }, [instance]);

    useEffect(() => {
        if (isInitialized) {
            getUserGroups();
        }
    }, [isInitialized]);
    const Layout = () => {
        return (
            <>
                <UserContext.Provider value={ userGroups }>
                    <NavBar />
                    <Outlet />
                </UserContext.Provider>
            </>
        );
    }
    return (
        <Grid container justifyContent="center">
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>
            </Routes>
        </Grid>
    );
}

export default App;
