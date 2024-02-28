import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { useMsal } from "@azure/msal-react";
export const UserContext = createContext ();
export const Profile = () => {
    const [userData, setUserData] = useState(null);
    const { instance } = useMsal();
    const [isInitialized, setIsInitialized] = useState(false);
    const [userGroups, setUserGroups] = useState(null);
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
          const group = groups.join(" "); //convertion en une chaine de caractères
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
            setTimeout(() => {
                getUserInfo();
                getUserGroups();
            });
        }
    }, [isInitialized]);
    return (
        <UserContext.Provider value= {userGroups}>
            {userData && (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '150px',
        marginRight: '460px',
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderLeft: '6px solid #007bff', 
        maxWidth: '400px', 
    }}>
        <h2 style={{
            marginBottom: '20px',
            color: '#007bff', 
            borderBottom: '2px solid #007bff', 
            paddingBottom: '10px', 
        }}>User Information</h2>
        <div style={{ marginBottom: '10px' }}>
            <strong>First Name:</strong> {userData.givenName}
        </div>
        <div style={{ marginBottom: '10px' }}>
            <strong>Last Name:</strong> {userData.surname}
        </div>
        <div style={{ marginBottom: '10px' }}>
            <strong>Email:</strong> {userData.mail}
        </div>
        <div>
            <strong>Id:</strong> {userData.id}
        </div>
    </div>
)}

</UserContext.Provider>
    )
}