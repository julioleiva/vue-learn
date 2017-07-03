<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <button @click="navigateToHome" class="btn btn-primary">Ir al inicio</button>
        <hr>
        <router-view></router-view>
    </div>

</template>

<script>
    export default{
//        data(){
//            return{
//                id: this.$route.params.id
//            }
//        },
        methods:{
            navigateToHome(){
                //Podemos acceder al objeto $router desde cualquier instancia Vue,
                //dentro de cualquier componente, al haber habilitado el uso de Vue-router
                //en la instancia principal(main.js)
                this.$router.push('/');
            }
        },
//        watch:{
//            //Con los watchers podemos reaccionar a los cambios en los parámetros, ya que
////            Una cosa a tener en cuenta cuando se usan rutas con parámetros es que cuando el
////            usuario navega de /user/foo a /user/bar, la misma instancia del componente será reutilizada.
////            Dado que ambas rutas renderizan el mismo componente, esto es más eficiente que destruir la
////            instancia anterior y crear una nueva. Sin embargo,
////            esto significa que los hooks del ciclo de vida del componentes no serán emitidos.
//            '$route'(to, from){
//                this.id = to.params.id;
//            }
//        }
    }
</script>

<style scopep>
    h1{
        margin-top: 55px;
    }
</style>