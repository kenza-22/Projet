import Grid from "@mui/material/Grid";
import { Routes, Route, Outlet } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import NavBar from "./components/NavBar";
function App() {
    const Layout = () => {
        return(
            <>
               <NavBar/> 
            <Outlet/>
            </>
        );
    }
    return (
            <Grid container justifyContent="center">
                <Routes>
                    <Route element={<Layout/>}>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile/>} /> 
                    </Route>
                </Routes>
            </Grid>
    );
}

export default App;
