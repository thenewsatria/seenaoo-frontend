<script lang="ts">
    import Icon from "@iconify/svelte"
    export let label: string = "Default Label"
    export let iconPath: string = "file-icons:default"
    export let width: string = "w-8"
    export let height: string = "h-8"
    export let buttonColor: string = "bg-transparent"
    export let borderColor: string = "border-transparent"
    export let textColor: string = "text-black"
    export let isBold: boolean = false
    export let iconMargin: string = "mr-2"
    export let iconColor: string = "text-black"
    export let isRounded: boolean = true
    export let noPadX: boolean = false
    export let noPadY: boolean = false

    export let buttonAdditionalClass: string = ""
    export let iconAdditionalClass: string = ""
    export let labelAdditionalClass: string = ""
</script>

<button class="flex items-center {buttonColor}
    justify-center {noPadX ? "" : "px-10 md:px-12"} {noPadY ? "" : "py-3"}
    {isRounded ? "rounded-lg" : "rounded-none"} border-2 {borderColor}
    {buttonAdditionalClass}">
    <div class="{height} {width} {iconMargin} flex items-center justify-center overflow-hidden {iconAdditionalClass} {iconColor}">
        <Icon icon={iconPath} width="100" height="100"/>
    </div>
    <p class="{isBold ? "font-bold" : "font-normal"} {textColor} {labelAdditionalClass}">{label}</p>
</button>