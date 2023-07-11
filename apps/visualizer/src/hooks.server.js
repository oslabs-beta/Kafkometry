import PocketBase from 'pocketbase'
import { serializeNonPOJOs } from '$lib/utils'

// hook function - run on every request
export const handle = async ({ event, resolve }) => {
    // new pocketbase instance
    event.locals.pb = new PocketBase('http://localhost:8090')
    // if we have a cookie from browser, grab it
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '')
    // if the user is valid
    if (event.locals.pb.authStore.isValid) {
        // when accessing user inside locals
        event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model)
    } else {
        // if user is not valid
        event.locals.user = undefined;
    }

    const response = await resolve(event);
    // take all the info from current authstore and export into cookie, set into headers
    response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));

    return response;
}