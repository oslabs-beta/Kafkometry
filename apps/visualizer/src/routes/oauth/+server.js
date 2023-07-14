// import { redirect } from "@sveltejs/kit"

// export const GET = async ({locals, url, cookies}) => {
//     console.log(url.searchParams);

//     const redirectURL = `${url.origin}/oauth`;
//     const expectedState = cookies.get('state');
//     const expectedVerifier = cookies.get('verifier');

//     console.log('expected state', expectedState);

//     const state = await url.searchParams.get('state');
//     const code = await url.searchParams.get('code');

//     console.log('returned state', state);
//     console.log('returned code', code);

//     const authMethods = await locals.pb?.collection('users').listAuthMethods();

//     if (!authMethods?.authProviders) {
//         console.log('No Auth Providers');
//         throw redirect(303,'/register');
//     }

//     const provider = authMethods.authProviders[0];

//     if(!provider) {
//         console.log('Provider Not Found');
//         throw redirect(303,'/register')
//     }

//     if (expectedState !== state) {
//         console.log('Returned state does not match expected', expectedState, state);
//         throw redirect(303,'/register')
//     }

//     try {
//         await locals.pb?.collection('users').authWithOAuth2Code(provider.name, code, expectedVerifier, redirectURL, {name:'My User'});
//     } catch (err) {
//         console.log('Error signing up with OAuth2', err)
//     }

//     throw redirect(303, '/')
// }