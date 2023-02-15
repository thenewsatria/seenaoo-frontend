<script lang="ts">
    import Icon from "@iconify/svelte"
    export let popupId: string = "popup"

    let popup: any

    function togglePopup(){
        popup.classList.remove("active")
    }
</script>

<div class="group lg:flex" bind:this={popup} id={popupId}>
    <div class="w-full h-full fixed hidden lg:block z-30 bg-slate-500 overflow-hidden -translate-y-full 
    group-[.active]:translate-y-0 opacity-50 duration-300 group-[.active]:opacity-100 lg:w-1/2">
        <div class="">
            <div class="absolute z-20 w-1/2">
                <p class="mt-10 ml-8 font-bold text-[1.9rem] xl:ml-12 2xl:ml-16 xl:text-[2.3rem] 2xl:text-[2.5rem]">Belajar secara keras dan cerdas.</p>
            </div>
            <div class="absolute bg-white w-full h-full z-10 opacity-25"></div>
            <div class="absolute h-full w-full">
                <img class="object-cover h-full w-full" src="https://source.unsplash.com/tLG2hcpITZE/1000x1000" alt="">
            </div>
        </div>
    </div>
    <div class="w-full h-full fixed z-30 bg-slate-100 overflow-y-scroll -translate-y-full lg:translate-x-full 
    group-[.active]:translate-y-0 opacity-50 duration-300 group-[.active]:opacity-100 lg:w-1/2">
        <div class="flex justify-end pt-4 px-5">
            <button class="mr-4 h-10 w-10 flex items-center" on:click={togglePopup}>
                <Icon icon="ic:round-close" height="50" width="150" />
            </button>
        </div>
        <slot></slot>
    </div>
</div>