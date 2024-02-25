import Typography from "@mui/material/Typography";
import { useMsal } from "@azure/msal-react";
import { useState, useEffect } from "react";
export const WelcomeName = () => {
    const {instance} = useMsal();
    const [username, SetUserName] = useState('');

    useEffect(() => {
     const currentAccount = instance.getActiveAccount();//obtenir le compte actuellement connecté 

     if (currentAccount){
       SetUserName(currentAccount.username)
     }
    }, [instance]);
    return (<Typography variant="h6">Welcome, {username}</Typography>);
};