import Typography from "@mui/material/Typography";
import NavBar from "./NavBar";

export const PageLayout = (props) => {
    return (
        <>
            <NavBar />
            <br />
            <Typography variant="h5">
                <center>Welcome to Home page !</center>
            </Typography>
            <br />
            {props.children}
        </>
    );
};