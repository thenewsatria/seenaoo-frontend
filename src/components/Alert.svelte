<script lang="ts">
    import {alerts} from '../store'
    import { onMount, onDestroy } from 'svelte';

    export let alertId: number = 0
    export let componentId: string = "generalAlert"
    export let alertCategory: string = "alert-success"
    export let alertMessage: string = "This is alert message"
    
    let alert: HTMLDivElement
    
    let autoCloseAlert: any

    onMount(() => {
        // add active class on mount with timeout so the animaiton plays
        setTimeout(() => {
            alert.classList.add('active')
        }, 10)
        
        // auto close after 10 seconds
        autoCloseAlert = setTimeout(() => {
            // remove active class on timeout
            alert.classList.remove('active')

            // timeout removal of alert from store with timeout to wait animation to play first
            setTimeout(() => {
                alerts.update(alertStack => alertStack.filter((alert) => alert.props?.alertId !== alertId))
            }, 500)
        }, 10000)
    })


    function closeAlert() {
        // removing active class from alert
        alert.classList.remove('active')
        
        // canceling auto close timeout function
        clearTimeout(autoCloseAlert)

        // delete from alert store after half sec to wait animaiton to play first
        setTimeout(() => {
            alerts.update(alertStack => alertStack.filter((alert) => alert.props?.alertId !== alertId))
        }, 500)
    }
    
</script>

<div class="w-full flex justify-center group" id={componentId} bind:this={alert}>
    <div class="alert {alertCategory} shadow-lg fixed z-40 w-[90%] opacity-0 group-[.active]:opacity-100
    -translate-y-full group-[.active]:translate-y-1/4 [transition:transform_100ms_250ms,opacity_250ms]">
        <div>
            {#if alertCategory == "alert-error"}
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {:else if alertCategory == "alert-warning"}
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            {:else}
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {/if}
            <span>{alertMessage}</span>
        </div>
        <div class="flex-none">
            <button class="btn btn-sm bg-blue-600 border-0" on:click={closeAlert}>Close</button>
        </div>
    </div>
</div>