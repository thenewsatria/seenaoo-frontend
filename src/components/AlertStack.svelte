<script lang='ts'>
    import {alerts} from '../stores/alertStores'

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
        console.log("isi dari alert stack")
        console.log(alertStack)
    })
</script>

<div>
    {#each alertStack as alert (alert.props.alertId)}
        <svelte:component this={alert.component} {...alert.props}/>
    {/each}
</div>