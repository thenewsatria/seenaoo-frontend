<script lang="ts">
    import Icon from "@iconify/svelte"
    export let link: string = "#"
    export let newTab: boolean = false
    export let iconPath: string = ""
    export let width: string = "16"
    export let height: string = "16"
</script>

<a href={link} target={newTab? "_blank":""} 
    rel={newTab?"noopener noreferrer":""} class="w-10 h-10 flex items-center cursor-pointer">
    <Icon icon={iconPath} width={width} height={height}/>
</a>