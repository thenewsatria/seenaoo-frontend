<script lang="ts">
    import Icon from "@iconify/svelte"
    let navbar: any

    function navbarToggle(){
        navbar.classList.toggle("active")
    }
</script>

<header>
    <nav class="group" bind:this={navbar}>
        <div class="bg-slate-100 px-5 py-4 flex drop-shadow-lg justify-between items-center fixed w-full z-10 md:px-10">
            <div class="">
                <img class="h-8 w-auto" src="/webicon-blue.png" alt="Seenaoo Icon">
            </div>
            <button class="mr-4 h-9 w-9 flex items-center" on:click={navbarToggle}>
                <Icon icon="humbleicons:bars" height="50" width="150" />
            </button>
        </div>
        <div class="bg-slate-100 h-full w-full fixed translate-x-full group-[.active]:translate-x-0 transition-all
        duration-300 overflow-y-scroll z-20">
            <div class="flex justify-between items-center px-5 py-4 md:px-10">
                <div class="">
                    <img class="h-8 w-auto" src="/webicon-blue.png" alt="Seenaoo Icon">
                </div>
                <button class="mr-4 h-9 w-9 flex items-center" on:click={navbarToggle}>
                    <Icon icon="mdi:close-circle" color="red" height="50" width="150" />
                </button>
            </div>
            <div class="text-lg mt-10 flex flex-col justify-center mx-10 md:mx-20 md:text-xl">
                <a class="p-4 pr-12" href="#">Make Flashcard</a>
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
                <a class="p-4 pr-12" href="">About</a>
                <div class="flex justify-between mx-3 gap-8 text-center mt-8 md:gap-16 md:mx-10">
                    <a class="rounded-full flex-1 drop-shadow-md bg-blue-600
                    font-bold text-white py-2 md:py-4" href="/login">Login</a>
                    <a class="rounded-full flex-1 drop-shadow-md bg-slate-100
                    border-2 border-blue-600 text-blue-600 2xl: font-bold py-2 md:py-4" href="/register">Register</a>
                </div>
            </div>
        </div>
    </nav>
</header>