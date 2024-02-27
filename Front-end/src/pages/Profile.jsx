import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import { useMsal } from "@azure/msal-react";
export const Profile = () => {
    const [userData, setUserData] = useState(null);
    const { instance } = useMsal();
    const [isInitialized, setIsInitialized] = useState(false);
    const [userGroups, setUserGroups] = useState([]);
    const getUserInfo = async () => {
        try {

            const response = await instance.acquireTokenSilent({
                scopes: ["User.Read"]
            });

              const graphResponse = await axios.get('https://graph.microsoft.com/v1.0/me', {
                 headers: {
                     Authorization: `Bearer ${response.accessToken}`
                 }
             }); 

            setUserData(graphResponse.data);
           // console.log(userData);
        } catch (error) {
            console.error("Error in getting user info:", error);
        }
    };


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
          setUserGroups(groups);
          console.log(userGroups);
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
            setTimeout(() => {
                getUserInfo();
                getUserGroups();
            });
        }
    }, [isInitialized]);
    return (
        <>

            <NavBar />

            {userData && (
               
                <div style={{justifyContent: 'center', alignItems: 'center', marginTop: '50px'}}>
                    <p><strong>First Name: </strong> {userData.givenName}</p>
                    <p><strong>Last Name: </strong> {userData.surname}</p>
                    <p><strong>Email: </strong> {userData.mail}</p>
                    <p><strong>Id: </strong>{userData.id}</p> 
                </div>
            )}


        </>
    )
}