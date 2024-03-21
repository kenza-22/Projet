import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import Landing from "./Landing";
export const Home = () => {
    return (
        <>  
        <UnauthenticatedTemplate>
        <Landing/>
            </UnauthenticatedTemplate>   
            <AuthenticatedTemplate>
            <h1>hello</h1>
            </AuthenticatedTemplate>  
        </>
    );
}