import { writable } from 'svelte/store';


export const keyPair = writable<{ publicKey: string; secretKey: string }>({
  publicKey: '',
  secretKey: '',
});

export const showAccount= writable(false)
export const signIn = writable(false)
export const payment = writable(false)