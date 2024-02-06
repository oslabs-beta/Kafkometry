export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12')
];

export const server_loads = [0,2];

export const dictionary = {
		"/": [~3],
		"/cluster_profile": [~4],
		"/gui": [5],
		"/login": [~6],
		"/my/settings": [~7,[2]],
		"/my/settings/account": [8,[2]],
		"/my/settings/profile": [~9,[2]],
		"/my/settings/security": [10,[2]],
		"/register": [~11],
		"/user_profile": [~12]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';