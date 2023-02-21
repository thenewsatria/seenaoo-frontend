<script lang="ts">
    import Icon from "@iconify/svelte"

    import axios from 'axios'
    import FullPopup from "./FullPopup.svelte";
    import IconButton from "./IconButton.svelte";
    import Button from "./Button.svelte";

    import {count, alerts} from '../stores/alertStores'
    import Alert from "./Alert.svelte";

    export let componentId: string = "componentId"

    interface RegisterInput {
        email: string
        username: string
        password: string
    }

    interface RegisterErrors {
        email: boolean
        username: boolean
        password: boolean
    }

    interface RegisterLabel {
        email: any
        username: any
        password: any
    }

    let loading: boolean = false
    let termCheckboxValue: boolean = false
    let userInputValue: RegisterInput = {
        email: "",
        username: "",
        password: ""
    }

    let inputsLabel: RegisterLabel = {
        email: null,
        username: null,
        password: null,
    }

    let inputsError: RegisterErrors = {
        email: false,
        username: false,
        password: false
    }
    
    function setError(label: string, message:string, isActive:boolean) {
        if (isActive) {
            inputsError[label as keyof RegisterErrors] = true
            inputsLabel[label as keyof RegisterLabel].innerHTML = message
            inputsLabel[label as keyof RegisterLabel].classList.add("text-red-500")
            inputsLabel[label as keyof RegisterLabel].classList.add("normal-case")
        }else{
            inputsError[label as keyof RegisterErrors] = false
            inputsLabel[label as keyof RegisterLabel].innerHTML = label
            inputsLabel[label as keyof RegisterLabel].classList.remove("text-red-500")
            inputsLabel[label as keyof RegisterLabel].classList.remove("normal-case")
        }
    }

    // function displayAlert() {
    //     document.getElementById('generalAlert')?.classList.toggle('active')
    //     count.update(n => n + 1)
    // }


    // function addAlert() {
    //     alerts.update(alertStacks => [...alertStacks, {
    //         component: Alert,
    //         props: {
    //             alertId: window.performance.now(),
    //             componentId: "registerErrorAlert",
    //             alertCategory: "alert-error",
    //             alertMessage: "Error 400 Bosq"
    //         }
    //     }])
    // }

    async function postRegister() {
        try {
            // set loading
            loading = true

            // reset message for new error if occured
            for (const label of ["email", "username", "password"]) {
                setError(label, label, false)
            }
            const response = await axios.post("http://localhost:8000/api/v1/auth/register", userInputValue)

            // loading state is done
            loading = false
        } catch (error: any) {
            loading = false
            
            const errorData = error.response
            
            if (errorData.status == 400) {
                
                alerts.update(alertStacks => [...alertStacks, {
                    component: Alert,
                    props: {
                        alertId: window.performance.now(),
                        componentId: "registerErrorAlert",
                        alertCategory: "alert-error",
                        alertMessage: "Error 400 Bosq"
                    }
                }])
                
                const responseBody = errorData.data

                // if theres validation fail on request
                if (responseBody.status == 'fail') {
                    if (responseBody.data.Email) {
                        setError('email', responseBody.data.Email, true)
                    }
                    if (responseBody.data.Username) {
                        setError('username', responseBody.data.Username, true)
                    }
                    if (responseBody.data.Password) {
                        setError('password', responseBody.data.Password, true)
                    }
                }
            }
        }
    }

    function toggleCheckbox() {
        termCheckboxValue = !termCheckboxValue
    }

    function activateLoginPopup(){
        document.querySelector('#register-popup')?.classList.remove("active")
        document.querySelector('#login-popup')?.classList.add("active")
    }
</script>

<FullPopup popupId={componentId} imageCaption={"Stop main tebak-tebakan saat mengerjakan tugas sekolah. Daftar hari ini"}>
    <div class="mx-6 md:mx-20 xl:mx-24 2xl:mx-44">
        <div class="flex">
            <p class="font-bold text-2xl mr-6 text-teal-500">Daftar</p>
            <p on:click={activateLoginPopup}
            class="font-bold text-2xl  text-slate-500">Masuk</p>
        </div>
        <div class="flex flex-col gap-4 mt-10">
            <!-- <button class="px-5 py-3 bg-red-300" on:click={addAlert}>
                Mantulsss
            </button> -->
            <IconButton label={"Lanjutkan dengan nomor telepon"} 
            iconPath={"ic:baseline-phone-android"} borderColor={"border-slate-500"} noPadX textColor={"text-slate-500"} isBold
            iconColor={"text-slate-500"}
            height={"h-7 md:h-8"}
            width={"w-7 md:w-8"}
            iconMargin={"mr-2 md:mr-4 lg:mr-2"}
            buttonAdditionalClass={"w-full py-2"}/>
            <IconButton label={"Lanjutkan dengan Google"} 
            iconPath={"ion:logo-google"} borderColor={"border-slate-500"} noPadX textColor={"text-slate-500"} isBold
            iconColor={"text-slate-500"}
            height={"h-7 md:h-8"}
            width={"w-7 md:w-8"}
            iconMargin={"mr-2 md:mr-4 lg:mr-2"}
            buttonAdditionalClass={"w-full py-2"}/>
            <IconButton label={"Lanjutkan dengan Facebook"} 
            iconPath={"ant-design:facebook-filled"} borderColor={"border-slate-500"} noPadX textColor={"text-slate-500"} isBold
            iconColor={"text-slate-500"}
            height={"h-7 md:h-8"}
            width={"w-7 md:w-8"}
            iconMargin={"mr-2 md:mr-4 lg:mr-2"}
            buttonAdditionalClass={"w-full py-2"}/>
        </div>
        <div class="my-8 md:my-10 lg:my-8 xl:my-10 2xl:my-12">
            <div class="flex items-center justify-between">
                <div class="h-[1px] flex-1 bg-slate-500"></div>
                <div class="max-w-[80%] text-center mx-4">
                    <p class="uppercase text-slate-500 font-bold text-xs md:text-sm">Atau email</p>
                </div>
                <div class="h-[1px] flex-1 bg-slate-500"></div>
            </div>
        </div>
        <div>
            <div class="flex flex-col mb-5">
                <input type="email" id="email" placeholder="satria123@seenaoo.com" bind:value={userInputValue.email} 
                on:input={() => setError("email", "email", false)}
                class="bg-transparent border-b-2 text-sm md:text-base py-1
                border-b-slate-900 {inputsError.email ? "border-b-red-500":""} focus:outline-0 focus:border-b-4 focus:border-b-amber-400 transition-all duration-200">
                <label bind:this={inputsLabel.email}
                class="text-xs font-bold uppercase text-slate-500 mt-2 md:text-sm" for="email">Email</label>
            </div>
            <div class="flex flex-col mb-5">
                <input type="username" id="username" placeholder="satria123" bind:value={userInputValue.username}
                on:input={() => setError("username", "username", false)}
                class="bg-transparent border-b-2 text-sm md:text-base py-1
                border-b-slate-900 {inputsError.username ? "border-b-red-500":""} focus:outline-0 focus:border-b-4 focus:border-b-amber-400 transition-all duration-200">
                <label bind:this={inputsLabel.username}
                class="text-xs font-bold uppercase text-slate-500 mt-2 md:text-sm" for="username">username</label>
            </div>
            <div class="flex flex-col mb-5">
                <input type="password" id="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                bind:value={userInputValue.password} on:input={() => setError("password", "password", false)}
                class="bg-transparent border-b-2 text-sm py-1 {inputsError.password ? "border-b-red-500":""}
                border-b-slate-900 focus:outline-0 focus:border-b-4 focus:border-b-amber-400 transition-all duration-200">
                <label bind:this={inputsLabel.password}
                class="text-xs font-bold uppercase text-slate-500 mt-2 md:text-sm" for="password">Password</label>
            </div>
            <div class="flex justify-between gap-2 2xl:gap-0">
                <div class="w-1/12 flex justify-center">
                    <div class="w-6 h-6 border-2 border-slate-500 flex items-center justify-center" on:click={toggleCheckbox}>
                        <div class="w-4 h-4 bg-teal-500 {termCheckboxValue ? "block" : "hidden"}"></div>
                    </div>
                </div>
                <input type="checkbox" id="agreeTerms" class="hidden" bind:checked={termCheckboxValue}>
                <p class="text-sm w-11/12">Saya menerima <a href="" class="text-teal-500">Syarat layanan</a> dan <a class="text-teal-500" href="">Kebijakan privasi</a> Seenaoo.</p>
            </div>
        </div>
        <div class="mt-8">
            {#if termCheckboxValue}
                {#if loading}
                <div class="px-10 md:px-12 bg-slate-300 md:text-lg lg:text-base py-3 w-full py-4 flex items-center justify-center">
                    <div class="w-7 h-7 flex items-center justify-center overflow-hidden animate-spin text-white">
                        <Icon icon="mingcute:loading-fill" width="100" height="100"/>
                    </div>
                </div>
                {:else} 
                    <Button label={"Daftar"} pill={false} bgColor={"bg-teal-500"} additionalClass={'w-full py-4'} onClickHandler={postRegister}/>
                {/if}
            {:else}
                <Button label={"Daftar"} pill={false} bgColor={"bg-slate-300"} additionalClass={'w-full py-4'}/>
            {/if}
        </div>
        <div class="border-2 border-slate-400 text-center py-3 text-sm md:text-base lg:text-sm mt-6 mb-10">
            <p>Sudah memiliki akun? <span on:click={activateLoginPopup}
                class="text-teal-500 font-bold">Masuk</span></p>
        </div>
    </div>
</FullPopup>