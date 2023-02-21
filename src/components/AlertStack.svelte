<script lang='ts'>
  import { onDestroy } from 'svelte';
    import {alerts} from '../store'

    interface AlertItem {
        component: any
        props: {
            alertId: number
            componentId?: string,
            alertCategory?: string,
            alertMessage?: string
        }
    }

    let alertStack: AlertItem[] = []

    alerts.subscribe(alertsArray => {
        alertStack = alertsArray
    })

    let unsubscribe = alerts.subscribe(alertsArray => {
        alertStack = alertsArray
    })

    onDestroy(unsubscribe)
</script>

<div>
    {#each alertStack as alert (alert.props.alertId)}
        <svelte:component this={alert.component} {...alert.props}/>
    {/each}
</div>