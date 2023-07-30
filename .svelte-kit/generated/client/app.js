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
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16')
];

export const server_loads = [];

export const dictionary = {
		"/(frontend)": [12,[4]],
		"/(frontend)/[[lang]]/about": [13,[4]],
		"/(frontend)/file/[id]/[...path=path]/edit": [15,[4,5,6]],
		"/(frontend)/file/[id]/[...path=path]": [14,[4,5,6,7]],
		"/(frontend)/product/[id=int]": [16,[4]],
		"/(admin)/settings": [9,[2,3]],
		"/(admin)/settings/general": [10,[2,3]],
		"/(admin)/settings/profile": [11,[2,3]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';