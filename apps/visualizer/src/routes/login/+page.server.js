import { error, redirect } from '@sveltejs/kit'
// import { generateUsername } from '../../lib/utils.js'

// this page will be for data/functionality of login page
export const actions = {

    login: async ({ request, locals }) => {
   
        const body = Object.fromEntries(await request.formData())

        try{
            await locals.pb.collection('users').authWithPassword(body.email, body.password)
            if (!locals.pb?.authStore?.model?.verified) {
                locals.pb.authStore.clear()
                return {
                    notVerified: true
                }
            } 

            
        } catch (err) {
            console.log('Error: ', err);
            throw error(500, 'Something went wrong logging in');
        }
        throw redirect(303, '/gui')
    },

    OAuth2: async({ cookies, url, locals }) => {
        const authMethods = await locals.pb?.collection('users').listAuthMethods();
        console.log(authMethods);
        if(!authMethods){
            return {
                authProviders: '',
            }
        }

        if (authMethods.authProviders[0].name === 'google') {
            const redirectURL = `${url.origin}/gui`
            const googleAuthProvider = authMethods.authProviders[0];
            const authProviderRedirect = `${googleAuthProvider.authUrl}${redirectURL}`;

            const state = googleAuthProvider.state;
            const verifier = googleAuthProvider.codeVerifier;
            cookies.set('state', state);
            cookies.set('verifier', verifier);

            throw redirect(302, authProviderRedirect)
        }

        if (authMethods.authProviders[1].name === 'google') {
            const redirectURL = `${url.origin}/gui`
            const googleAuthProvider = authMethods.authProviders[1];
            const authProviderRedirect = `${googleAuthProvider.authUrl}${redirectURL}`;

            const state = googleAuthProvider.state;
            const verifier = googleAuthProvider.codeVerifier;
            cookies.set('state', state);
            cookies.set('verifier', verifier);

            throw redirect(302, authProviderRedirect)
        }
    },

    GithubLogin: async ({ cookies, url, locals }) => {
        const authMethods = await locals.pb?.collection('users').listAuthMethods();
        console.log(authMethods.authProviders[1]);
        if(!authMethods){
            return {
                authProviders: '',
            }
        }

        if (authMethods.authProviders[0].name === 'github') {
            const redirectURL = `${url.origin}/gui`
            const githubAuthProvider = authMethods.authProviders[0];
            const authProviderRedirect = `${githubAuthProvider.authUrl}${redirectURL}`;

            const state = githubAuthProvider.state;
            const verifier = githubAuthProvider.codeVerifier;
            cookies.set('state', state);
            cookies.set('verifier', verifier);

            throw redirect(302, authProviderRedirect)
        }

        if (authMethods.authProviders[1].name === 'github') {
            const redirectURL = `${url.origin}/gui`
            const githubAuthProvider = authMethods.authProviders[1];
            const authProviderRedirect = `${githubAuthProvider.authUrl}${redirectURL}`;

            const state = githubAuthProvider.state;
            const verifier = githubAuthProvider.codeVerifier;
            cookies.set('state', state);
            cookies.set('verifier', verifier);

            throw redirect(302, authProviderRedirect)
        }
    }
}