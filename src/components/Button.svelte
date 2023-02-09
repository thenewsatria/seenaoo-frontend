<script lang="ts">
    export let label: undefined | string = "Default Label"
    export let textColor: string = "text-white"
    export let isBold: boolean = true
    export let pill: boolean = true
    export let bgColor: string = "bg-blue-600"
    export let shadowSize: string = "drop-shadow-none"
    export let noPadX: boolean = false
    export let noPadY: boolean = false
    export let additionalClass: string = ""
</script>

<button class="{textColor} {isBold ? "font-bold" :  ""} {noPadX ? "" : "px-10 md:px-12"} {shadowSize}
    {pill ? "rounded-full" :  ""} {bgColor} md:text-lg lg:text-base {noPadY ? "" : "py-3"}  {additionalClass}">{label}</button>