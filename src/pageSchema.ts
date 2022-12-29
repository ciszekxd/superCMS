import { writable } from 'svelte/store';

export const pageData = writable({schema:[
    [{name: "first", id: 1},{name: "second", id: 2},{name: "third", id: 3}, {name: "forth", id: 4}],
    [{name: "first", id: 1}, {name: "header", id: 2}],
    [{name: "xd", id: 3}, {name: "kokos", id: 4}, {name: ":-)", id: 5}],
    [{name: "yoooo", id: 6}]
]});

export type elementContent = {
    name: string,
    id: number
}

export const lastEnteredCol = writable(0);
export const lastEnteredRow = writable(0);