<script lang="ts">
    export let link: string = "#"
    export let newTab: boolean = false
    export let iconPath: string = ""
    export let iconAlt: string = ""
</script>

<a href={link} target={newTab? "_blank":""} 
    rel={newTab?"noopener noreferrer":""} class="w-10 h-10 flex items-center cursor-pointer">
    <img class="" src={iconPath} alt={iconAlt}>
</a>