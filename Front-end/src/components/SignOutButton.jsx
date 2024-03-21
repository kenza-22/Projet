import { useMsal } from '@azure/msal-react';
export const SignOutButton = () => {
    const {instance} = useMsal();

    const handleSignOut = () => {
        instance.logoutRedirect();
    }
    return (
        <button  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900" onClick={handleSignOut}>Sign out</button>
    )
};