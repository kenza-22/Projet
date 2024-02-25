import Typography from "@mui/material/Typography";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
export const Home = () => {
    return (
        <>
         <UnauthenticatedTemplate>
         <Typography variant="h6">Please sign-in to see your profile information.</Typography>
            </UnauthenticatedTemplate>   
            <AuthenticatedTemplate>
            <Typography variant="h6">You are signed-in. Select profile to see your informations.</Typography>
            </AuthenticatedTemplate>      
        </>
    );
}