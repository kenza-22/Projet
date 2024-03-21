import {useMsal} from '@azure/msal-react';
export const SignInButton = () => {
    const {instance} = useMsal();

    const handleSignIn = () => {
        instance.loginRedirect({
            scopes: ['user.read']
        })
    }
    return (
        <button className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900" onClick={handleSignIn}>Sign in</button>
    )
};