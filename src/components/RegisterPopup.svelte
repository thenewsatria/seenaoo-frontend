<script lang="ts">
    import Popup from "./Popup.svelte";

    export let componentId: string = "componentId"

    function activateLoginPopup(){
        document.querySelector('#register-popup')?.classList.remove("active")
        document.querySelector('#login-popup')?.classList.add("active")
    }
</script>

<Popup popupId={componentId}>
   <div class="flex justify-center">
        <button on:click={activateLoginPopup}
        class="bg-teal-500 text-white font-bold px-10 py-3 rounded-xl">
            Open Login Popup
        </button>
   </div>
</Popup>