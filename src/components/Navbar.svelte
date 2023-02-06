<script lang="ts">
    import Icon from "@iconify/svelte"
    
    let navbarStatus: boolean = false
    let navbar: any

    function navbarToggle(){
        navbarStatus = !navbarStatus
        navbar.classList.toggle("active")
    }
</script>

<header>
    <nav class="group" bind:this={navbar}>
        <div class="bg-slate-100 px-5 py-4 flex justify-between items-center fixed w-full">
            <div class="">
                <img class="h-8 w-auto" src="/webicon-blue.png" alt="Seenaoo Icon">
            </div>
            <button class="mr-4 h-9 w-9 flex items-center" on:click={navbarToggle}>
                <Icon icon="humbleicons:bars" height="150" width="150" />
            </button>
        </div>
        <div class="bg-slate-100 h-full w-full fixed translate-x-full group-[.active]:translate-x-0 transition-all
        duration-300 overflow-y-scroll">
            <div class="flex justify-between items-center px-5 py-4">
                <div class="">
                    <img class="h-8 w-auto" src="/webicon-blue.png" alt="Seenaoo Icon">
                </div>
                <button class="mr-4 h-9 w-9 flex items-center" on:click={navbarToggle}>
                    <Icon icon="mdi:close-circle" color="red" height="150" width="150" />
                </button>
            </div>
            <div class="text-lg mt-10 flex flex-col justify-center mx-10">
                <a class="p-4 pr-12" href="/create">Make Flashcard</a>
                <a class="p-4 pr-12" href="#">Why It Works</a>
                <div class="collapse collapse-arrow">
                    <input type="checkbox" /> 
                    <div class="collapse-title font-medium">
                        Businesses
                    </div>
                    <div class="collapse-content flex flex-col"> 
                        <a class="p-4 pr-12" href="#">Employee Training</a>
                        <a class="p-4 pr-12" href="#">Content Partnership</a>
                        <a class="p-4 pr-12" href="#">Tutors & Resellers</a>
                    </div>
                </div>
                <div class="collapse collapse-arrow">
                    <input type="checkbox" /> 
                    <div class="collapse-title font-medium">
                        Educators
                    </div>
                    <div class="collapse-content flex flex-col"> 
                        <a class="p-4 pr-12" href="#">Teachers & Professors</a>
                        <a class="p-4 pr-12" href="#">Content Partnership</a>
                        <a class="p-4 pr-12" href="#">Tutors & Resellers</a>
                    </div>
                </div>
                <a class="p-4 pr-12" href="/create">About</a>
                <div class="flex justify-between mx-5 gap-10 text-center mt-8">
                    <a class="rounded-full flex-1 drop-shadow-md bg-blue-500
                    font-bold text-white py-2" href="/login">Login</a>
                    <a class="rounded-full flex-1 drop-shadow-md bg-slate-100
                    border-2 border-blue-500 text-blue-500 font-bold py-2" href="/register">Register</a>
                </div>
            </div>
        </div>
    </nav>
</header>