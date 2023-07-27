import { error, redirect } from '@sveltejs/kit'
import { generateUsername } from '../../lib/utils.js'

// this page will be for data/functionality of our register/login page
export const actions = {
    register: async ({ locals, request }) => {
        const body = Object.fromEntries(await request.formData())

        let username = generateUsername(body.name.split(' ').join('')).toLowerCase();

        try {
            await locals.pb.collection('users').create({ username, ...body });
            await locals.pb.collection('users').requestVerification(body.email);
        } 
        catch (err) {
            console.log('Error: ', err)
            throw error(500, 'Something went wrong')
        }
        throw redirect(303, '/login')
    },

    OAuth2: async({ cookies, url, locals }) => {
        const authMethods = await locals.pb?.collection('users').listAuthMethods();
        if(!authMethods){
            return {
                authProviders: '',
            }
        }

        const redirectURL = `${url.origin}/gui`
        const googleAuthProvider = authMethods.authProviders[0];
        const authProviderRedirect = `${googleAuthProvider.authUrl}${redirectURL}`;

        const state = googleAuthProvider.state;
        const verifier = googleAuthProvider.codeVerifier;
        cookies.set('state', state);
        cookies.set('verifier', verifier);

        throw redirect(302, authProviderRedirect)
    }
}