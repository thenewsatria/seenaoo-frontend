<script lang="ts">
    export let label: string = "Default Label"
    export let textColor: string = "text-white"
    export let isBold: boolean = true
    export let pill: boolean = true
    export let bgColor: string = "bg-blue-600"
    export let linkURL: string = "#"
    export let shadowSize: string = "drop-shadow-none"
    export let borderColor: string = "border-transparent"
    export let noPadY: boolean = false
    export let noPadX: boolean = false
    export let additionalClass: string = ""
</script>

<a class="{pill ? "rounded-full" :  ""} {shadowSize} {bgColor}
    {isBold ? "font-bold" :  ""} {textColor}  border-2
    {borderColor} {noPadX ? "" : "px-10 md:px-12"} {noPadY ? "" : "py-3"} {additionalClass}" href={linkURL}>{label}</a>