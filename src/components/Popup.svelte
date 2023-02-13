<script lang="ts">
    import Icon from "@iconify/svelte"
    export let popupId: string = "popup"

    let popup: any

    function togglePopup(){
        popup.classList.remove("active")
    }
</script>

<div class="group" bind:this={popup} id={popupId}>
    <div class="w-full h-full fixed z-30 bg-slate-100 overflow-y-scroll -translate-y-full 
    group-[.active]:translate-y-0 opacity-0 duration-300 group-[.active]:opacity-100">
        <div class="flex justify-end pt-4 px-5">
            <button class="mr-4 h-10 w-10 flex items-center" on:click={togglePopup}>
                <Icon icon="ic:round-close" height="50" width="150" />
            </button>
        </div>
        <slot></slot>
    </div>
</div>