import { registerWallet } from './register.js';
import { GilderWallet } from './wallet.js';
import type { Gilder } from './window.js';

export function initialize(gilder: Gilder): void {
    registerWallet(new GilderWallet(gilder));
}
