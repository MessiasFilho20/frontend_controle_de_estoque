import Swal,  { type SweetAlertOptions } from "sweetalert2";

const options : SweetAlertOptions = {}

const $swal = {
    install: (Vue: any, options: SweetAlertOptions) =>{
        Vue.provide('$swal', Swal.mixin(options))
    }
}

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use($swal,options)
})