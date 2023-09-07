<template>
    <p>System</p>
    <ul>
        <li v-for="item in lista" :key="item">{{ item }}</li>
    </ul>
    <Detail @agregar="agregarNumero" />
</template>

<script>
import Detail from "./Detail.vue"
export default {
    methods:{
        agregarNumero(numero){
            this.lista.push(numero)
        }
    },
    components:{
        Detail,
    },
    data(){
        return{
            lista:[],
        }
    }

}
</script>

<style>

</style>