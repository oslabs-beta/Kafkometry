import { redirect } from "@sveltejs/kit"
import { onDestroy } from "svelte";
import { invalidate } from "$app/navigation";

export const GET = async ({locals, url, cookies}) => {
    //console.log(url.searchParams);

    const redirectURL = `${url.origin}/gui`;
    const expectedState = cookies.get('state');
    const expectedVerifier = cookies.get('verifier');

    //console.log('expected state', expectedState);

    const state = await url.searchParams.get('state');
    const code = await url.searchParams.get('code');

    //console.log('returned state', state);
    //console.log('returned code', code);

    const authMethods = await locals.pb?.collection('users').listAuthMethods();

    if (!authMethods?.authProviders) {
        console.log('No Auth Providers');
        throw redirect(303,'/register');
    }

    if (authMethods.authProviders[0].name === 'google') {
        const provider = authMethods.authProviders[0];

        if(!provider) {
            console.log('Provider Not Found');
            throw redirect(303,'/register')
        }

        if (expectedState !== state) {
            console.log('Returned state does not match expected', expectedState, state);
            throw redirect(303,'/register')
        }

        try {
            await locals.pb?.collection('users').authWithOAuth2Code(provider.name, code, expectedVerifier, redirectURL, {name:'My User'});
        } catch (err) {
            console.log('Error signing up with OAuth2', err)
        }

        throw redirect(303, '/')
    }

    if (authMethods.authProviders[1].name === 'google') {
        const provider = authMethods.authProviders[1];

        if(!provider) {
            console.log('Provider Not Found');
            throw redirect(303,'/register')
        }

        if (expectedState !== state) {
            console.log('Returned state does not match expected', expectedState, state);
            throw redirect(303,'/register')
        }

        try {
            await locals.pb?.collection('users').authWithOAuth2Code(provider.name, code, expectedVerifier, redirectURL, {name:'My User'});
        } catch (err) {
            console.log('Error signing up with OAuth2', err)
        }

        throw redirect(303, '/')
    }

    if (authMethods.authProviders[0].name === 'github') {
        const provider = authMethods.authProviders[0];

        if(!provider) {
            console.log('Provider Not Found');
            throw redirect(303,'/register')
        }

        if (expectedState !== state) {
            console.log('Returned state does not match expected', expectedState, state);
            throw redirect(303,'/register')
        }

        try {
            await locals.pb?.collection('users').authWithOAuth2Code(provider.name, code, expectedVerifier, redirectURL, {name:'My User'});
        } catch (err) {
            console.log('Error signing up with OAuth2', err)
        }

        throw redirect(303, '/')
    }

    if (authMethods.authProviders[1].name === 'github') {
        const provider = authMethods.authProviders[1];

        if(!provider) {
            console.log('Provider Not Found');
            throw redirect(303,'/register')
        }

        if (expectedState !== state) {
            console.log('Returned state does not match expected', expectedState, state);
            throw redirect(303,'/register')
        }

        try {
            await locals.pb?.collection('users').authWithOAuth2Code(provider.name, code, expectedVerifier, redirectURL, {name:'My User'});
        } catch (err) {
            console.log('Error signing up with OAuth2', err)
        }

        throw redirect(303, '/')
    }
}

const apiInterval = setInterval(async () => {
    await invalidate("/gui");
  }, 1000000); 

  onDestroy(() => {
    clearInterval(apiInterval);
});