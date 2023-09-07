<template>
  <form @submit.prevent="clickearBoton">
        <input type="number" step="1" v-model="item">
        <input type="submit" value="Agregar" >
    </form>

</template>

<script>
export default {
    methods:{
        clickearBoton(){
            if(this.item!=0){
                this.$emit("agregar", this.item);
            }
            this.item = 0;
        }
    },
    data(){
        return{
            item:0,
        }
    }
}
</script>

<style>

</style>