import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import { useMsal } from "@azure/msal-react";
export const Profile = () => {
    const [userData, setUserData] = useState(null);
    const { instance } = useMsal();
    const[isInitialized,setIsInitialized]=useState(false)
    const getUserInfo = async () => {
        try {

            const response = await instance.acquireTokenSilent({
                scopes: ["User.Read"]
            });

            /*  const graphResponse = await axios.get('https://graph.microsoft.com/v1.0/me', {
                 headers: {
                     Authorization: `Bearer ${response.accessToken}`
                 }
             }); */

            //setUserData(graphResponse.data);
        } catch (error) {
            console.error("Error in getting user info:", error);
        }
    };

    useEffect(() => {
        if (instance) {
            setIsInitialized(true);
        }
    }, [instance]);

    useEffect(() => {
        if (isInitialized) {
            getUserInfo();
        }
    }, [isInitialized]);
    return (
        <>

            <h1 style={{ marginTop: '60px' }}>You are in profile page</h1>
            <NavBar />

            {userData && (
                <div>
                    <h2>User Information</h2>
                    <p>Name: {userData.displayName}</p>
                    <p>Email: {userData.Email}</p>
                    <p>Id: {userData.id}</p>
                </div>
            )}



        </>
    )
}