<script>
import CardAuto from './CardAuto.vue';
import InfoCar from './InfoCar.vue';
import store from '../data/store.js';


export default {
    components: {
        CardAuto,
        InfoCar,
    },

    data() {
        return {
            store,

        }
    },
    methods: {

    },
    created() {

    },
    mounted() {

    },
    computed: {

    },
}

</script>

<template>

    <CardAuto />

    <InfoCar />


</template>

<style scoped></style>