import { Writable, writable } from 'svelte/store';

interface Alert {
    component: any
    props: {
        alertId: number
        componentId?: string,
        alertCategory?: string,
        alertMessage?: string
    }
}

export const count: Writable<number> = writable(0);

export const alerts: Writable<Alert[]> = writable([])