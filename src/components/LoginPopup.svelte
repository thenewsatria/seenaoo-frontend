<script lang="ts">
    import Icon from "@iconify/svelte";
    import axios, { AxiosError } from "axios";

    import IconButton from "./IconButton.svelte";
    import Button from "./Button.svelte";
    import FullPopup from "./FullPopup.svelte";
    import Alert from "./Alert.svelte";

    export let componentId: string = "componentId"

    import {alerts} from '../store'

    interface LoginInput {
        credential: string
        password: string
    }

    let loading: boolean = false

    let userInputValue: LoginInput = {
        credential: "",
        password: ""
    }

    async function onLogin(){
        try {
            loading = true
            const response = await axios.post("http://localhost:8000/api/v1/auth/login", userInputValue)

            // Check if success
            if (response.status == 200) {
                alerts.update(alertStacks => [...alertStacks, {
                    component: Alert,
                    props: {
                        alertId: window.performance.now(),
                        componentId: "registerSuccessAlert",
                        alertMessage: `Success: Successfully login. redirecting ...`
                    }
                }])

                const responseData = response.data

                // save accesstoken and refresh token
                localStorage.setItem('seenaoo-accessToken', responseData.data.accessToken)
                localStorage.setItem('seenaoo-refreshToken', responseData.data.refreshToken)
                
                // redirecting to dashboard
                window.location.assign('/dashboard')
            }

            loading = false
        } catch (error) {
            loading = false
            
            console.log(error)

            if (error instanceof AxiosError) {
                const errorData = error.response
            
                switch (errorData?.status) {
                    case 400:
                    case 403:
                    case 404:
                        console.log("Masuk 400")
                        console.log(errorData)
                        alerts.update(alertStacks => [...alertStacks, {
                            component: Alert,
                            props: {
                                alertId: window.performance.now(),
                                componentId: "registerWarningAlert",
                                alertCategory: "alert-warning",
                                alertMessage: `Warning: ${errorData.data.message}`
                            }
                        }])
                        break;
                    case 500:
                        alerts.update(alertStacks => [...alertStacks, {
                            component: Alert,
                            props: {
                                alertId: window.performance.now(),
                                componentId: "registerWarningAlert",
                                alertCategory: "alert-error",
                                alertMessage: `Error: ${errorData.data.message}`
                            }
                        }])
                        break;
                    default:
                        break;
                }
            }
        }
    }


    function activateRegisterPopup(){
        document.querySelector('#register-popup')?.classList.add("active")
        document.querySelector('#login-popup')?.classList.remove("active")
    }
</script>

<FullPopup popupId={componentId}>
    <div class="mx-6 md:mx-20 xl:mx-24 2xl:mx-44">
        <div class="flex">
            <p on:click={activateRegisterPopup}
            class="font-bold text-2xl mr-6 text-slate-500">Daftar</p>
            <p class="font-bold text-2xl text-teal-500">Masuk</p>
        </div>
        <div class="flex flex-col gap-4 mt-10">
            <IconButton label={"Masuk dengan Google"} 
            iconPath={"ion:logo-google"} borderColor={"border-slate-500"} noPadX textColor={"text-slate-500"} isBold
            iconColor={"text-slate-500"}
            height={"h-7 md:h-8"}
            width={"w-7 md:w-8"}
            iconMargin={"mr-2 md:mr-4 lg:mr-2"}
            buttonAdditionalClass={"w-full py-2"}/>
            <IconButton label={"Masuk dengan Facebook"} 
            iconPath={"ant-design:facebook-filled"} borderColor={"border-slate-500"} noPadX textColor={"text-slate-500"} isBold
            iconColor={"text-slate-500"}
            height={"h-7 md:h-8"}
            width={"w-7 md:w-8"}
            iconMargin={"mr-2 md:mr-4 lg:mr-2"}
            buttonAdditionalClass={"w-full py-2"}/>
            <IconButton label={"Masuk dengan Apple"} 
            iconPath={"mdi:apple"} borderColor={"border-slate-500"} noPadX textColor={"text-slate-500"} isBold
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
                <input type="text" id="credential" bind:value={userInputValue.credential}
                placeholder="Ketik alamat email atau nama pengguna anda"
                class="bg-transparent border-b-2 text-sm md:text-base py-1
                border-b-slate-900 focus:outline-0 focus:border-b-4 focus:border-b-amber-400 transition-all duration-200">
                <label class="text-xs font-bold uppercase text-slate-500 mt-2 md:text-sm" for="credential">Email</label>
            </div>
            <div class="flex flex-col mb-2">
                <input type="password" id="password" bind:value={userInputValue.password}
                placeholder="Ketik alamat email atau nama pengguna anda"
                class="bg-transparent border-b-2 text-sm py-1
                border-b-slate-900 focus:outline-0 focus:border-b-4 focus:border-b-amber-400 transition-all duration-200">
                <label class="text-xs font-bold uppercase text-slate-500 mt-2 md:text-sm" for="password">Password</label>
            </div>
            <div class="flex justify-end mb-5">
                <a class="font-bold text-sm text-teal-500 md:text-base">Lupa kata sandi?</a>
            </div>
        </div>
        <div class="text-center mt-5">
            <p class="text-sm md:text-base lg:text-sm">Dengan mengetuk Masuk, Anda menerima 
                <a class="text-teal-500" href="">Syarat layanan</a> 
                dan <a class="text-teal-500" href="#">Kebijakan privasi</a> Seenaoo</p>
        </div>
        <div class="mt-8">
            {#if loading}
                <div class="px-10 md:px-12 bg-slate-300 md:text-lg lg:text-base py-3 w-full py-4 flex items-center justify-center">
                    <div class="w-7 h-7 flex items-center justify-center overflow-hidden animate-spin text-white">
                        <Icon icon="mingcute:loading-fill" width="100" height="100"/>
                    </div>
                </div>
            {:else}
                <Button label={"Masuk"} pill={false} bgColor={"bg-teal-500"} additionalClass={'w-full py-4'} onClickHandler={onLogin}/>
            {/if}
        </div>
        <div class="text-center mt-2">
            <p class="text-xs md:text-base lg:text-sm">Jangan lupa untuk keluar dari Akun Anda yang diakses dari perangkat yang dipakai bersama</p>
        </div>
        <div class="border-2 border-slate-400 text-center py-3 text-sm md:text-base lg:text-sm mt-6 mb-10">
            <p>Baru di Seenaoo? <span on:click={activateRegisterPopup}
                class="text-teal-500 font-bold">Buat akun</span></p>
        </div>
    </div>
</FullPopup>