<script lang="ts">
    import Icon from "@iconify/svelte"
    import Button from "./Button.svelte";

    let navbar: any

    function navbarToggle(){
        navbar.classList.toggle("active")
    }

    function activateLoginPopup(){
        document.querySelector('#login-popup')?.classList.add("active")
        document.querySelector('#register-popup')?.classList.remove("active")
    }
    function activateRegisterPopup(){
        document.querySelector('#register-popup')?.classList.add("active")
        document.querySelector('#login-popup')?.classList.remove("active")
    }
</script>

<header>
    <nav class="group lg:hidden" bind:this={navbar}>
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
                <button class="mr-4 h-10 w-10 flex items-center" on:click={navbarToggle}>
                    <Icon icon="ic:round-close" height="50" width="150" />
                </button>
            </div>
            <div class="text-lg mt-10 flex flex-col justify-center mx-10 md:mx-20 md:text-xl">
                <a class="p-4 pr-12" href="#">Make Flashcard</a>
                <a class="p-4 pr-12" href="#">Why It Works</a>
                <div class="collapse collapse-arrow">
                    <input type="checkbox" /> 
                    <div class="collapse-title">
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
                    <div class="collapse-title">
                        Educators
                    </div>
                    <div class="collapse-content flex flex-col"> 
                        <a class="p-4 pr-12" href="#">Teachers & Professors</a>
                        <a class="p-4 pr-12" href="#">Content Partnership</a>
                        <a class="p-4 pr-12" href="#">Tutors & Resellers</a>
                    </div>
                </div>
                <a class="p-4 pr-12" href="">About</a>
                <div class="flex justify-between mx-3 gap-8 text-center my-8 md:gap-16 md:mx-20">
                    <Button label={"Masuk"} noPadX additionalClass={"flex-1"} onClickHandler={activateLoginPopup}/>
                    <Button label={"Daftar"} onClickHandler={activateRegisterPopup}
                    borderColor={"border-blue-600"} noPadX bgColor={"bg-transparent"} 
                    textColor={"text-blue-600"} additionalClass={"flex-1"}/>
                </div>
            </div>
        </div>
    </nav>


    <nav class="hidden lg:block">
        <div class="bg-slate-100 px-10 py-5 flex drop-shadow-lg justify-between items-center fixed w-full z-10 xl:px-20 2xl:px-32">
            <div class="w-2/12">
                <img class="h-7 w-auto" src="/webicon-blue.png" alt="Seenaoo Icon">
            </div>
            <div class="w-9/12 flex justify-between items-center lg:text-sm 2xl:text-base xl:w-7/12 2xl:w-7/12">
                <a href="#">Make Flashcard</a>
                <a href="#">Why It Works</a>
                <div class="dropdown dropdown-bottom dropdown-end">
                    <label tabIndex={0} class="">Businesses</label>
                    <ul tabIndex={0} class="dropdown-content menu p-2 
                    shadow-lg border-2 bg-slate-100 translate-y-8 rounded-box w-52">
                        <li>
                            <a href="#">Employee Training</a>
                        </li>
                        <li>
                            <a href="#">Content Partnership</a>
                        </li>
                        <li>
                            <a href="#">Tutors & Resellers</a>
                        </li>
                    </ul>
                </div>
                <div class="dropdown dropdown-bottom dropdown-end">
                    <label tabIndex={0} class="">Educators</label>
                    <ul tabIndex={0} class="dropdown-content menu p-2 translate-y-8 shadow-lg bg-slate-100 rounded-box w-52">
                        <li>
                            <a href="#">Teachers & Professors</a>
                        </li>
                        <li>
                            <a href="#">Content Partnership</a>
                        </li>
                        <li>
                            <a href="#">Tutors & Resellers</a>
                        </li>
                    </ul>
                </div>
                <a href="">About</a>
                <Button label={"Masuk"} additionalClass={"lg:py-1 lg:px-4"} onClickHandler={activateLoginPopup}/>
                <Button label={"Daftar"} onClickHandler={activateRegisterPopup}
                    borderColor={"border-blue-600"} bgColor={"bg-transparent"} 
                    textColor={"text-blue-600"} additionalClass={"lg:py-1 lg:px-4"}/>
            </div>
        </div>
    </nav>
</header>